require("dotenv").config(); // Ensure dotenv is loaded at the very beginning

const Restaurant = require("../models/restaurantmodel");
const Order = require("../models/ordermodel");
const Menu = require("../models/menumodel"); // ✅ Import Menu model
const Stripe = require("stripe");
const dotenv = require("dotenv");
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_Secret_key);

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.userId })
      .populate("user")
      .populate("restaurant");
    return res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    console.error("Restaurant Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const createCheckOutSession = async (req, res) => {
  try {
    const createCheckOutSessionReq = req.body;

    const menuIds = createCheckOutSessionReq.cartItems.map((item) => item.menuId);
    const menuItems = await Menu.find({ _id: { $in: menuIds } }).populate("restaurant");


    if (menuItems.length !== menuIds.length) {
      return res.status(400).json({
        success: false,
        message: "Some menu items were not found",
      });
    }

    // Optional: Extract all involved restaurants from menu items
    const restaurantIds = [...new Set(
      menuItems
        .filter(item => item?.restaurant?._id)
        .map(item => item.restaurant._id.toString())
    )];
    

    const order = new Order({
      // You can either:
      restaurant: restaurantIds[0], // ✅ if sticking to one (backward compatibility)
      
      user: req.userId,
      deliveryDetails: createCheckOutSessionReq.deliveryDetails,
      cartItems: createCheckOutSessionReq.cartItems,
      totalAmount: createCheckOutSessionReq.totalAmount,
      status: "pending",
    });

    const lineItems = createLineItems(createCheckOutSessionReq, menuItems);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      shipping_address_collection: {
        allowed_countries: ["GB", "US", "CA"],
      },
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.FRONT_END}/order/status`,
      cancel_url: `${process.env.FRONT_END}/cart`,
      metadata: {
        orderId: order._id.toString(),
        images: JSON.stringify(menuItems.map((item) => item.image)),
      },
    });

    if (!session) {
      return res.status(400).json({
        success: false,
        message: "Error while creating session",
      });
    }

    await order.save();

    return res.status(200).json({
      session,
    });
  } catch (error) {
    console.error("Restaurant Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const stripeWebhook = async (req, res) => {
  const sig = req.headers["stripe-signature"];
  const endpointSecret = process.env.WEBHOOK_ENDPOINT_SECRET;

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.error("Webhook Error:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    try {
      const order = await Order.findById(session.metadata?.orderId);
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }

      order.totalAmount = session.amount_total || order.totalAmount;
      order.status = "confirmed";

      await order.save();
    } catch (error) {
      console.error("Error updating order:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  res.status(200).send();
};

const createLineItems = (createCheckOutSessionReq, menuItems) => {
  return createCheckOutSessionReq.cartItems.map((cartItem) => {
    const menuItem = menuItems.find(
      (item) => item._id.toString() === cartItem.menuId.toString()
    );

    if (!menuItem) throw new Error("Menu item id not found");

    return {
      price_data: {
        currency: "inr",
        product_data: {
          name: menuItem.name,
          images: [menuItem.image],
        },
        unit_amount: menuItem.price * 100,
      },
      quantity: cartItem.quantity,
    };
  });
};

module.exports = {
  createCheckOutSession,
  getOrders,
  stripeWebhook,
};
