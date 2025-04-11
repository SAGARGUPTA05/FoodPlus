import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import ResetPassword from "./auth/ResetPassword";
import ForgetPassword from "./auth/ForgetPassword";
import VerifyEmail from "./auth/VerifyEmail";

import MainLayOut from "./layout/MainLayOut";
import HeroSection from "./components/ui/HeroSection";
import FilterPage from "./components/ui/FilterPage";
import RestaurantDetails from "./components/ui/RestaurantDetails";
import Profile from "./components/ui/Profile";
import SearchPage from "./components/ui/SearchPage";
import Cart from "./components/ui/Cart";
import Restaurant from "./admin/Restaurant";
import AddMenu from "./admin/AddMenu";
import Orders from "./admin/Orders";
import Success from "./components/ui/Success";

import { useUserStore } from "./store/useUserStore";
import { useEffect } from "react";
import Loading from "./components/ui/Loading";
import { useThemeStore } from "./store/useThemeStore";

const ProtectedRoutes = ({ children }) => {
  const { isAuthenticated, user } = useUserStore();
  
  // Allow access to homepage even if not logged in
 // const isHomePage = window.location.pathname === "/";

  if (!isAuthenticated ) {
    return <Navigate to={"/login"} replace />;
  }
  if (!user?.isverified ) {
    return <Navigate to="/verify-email" replace />;
  }
  return children;
};

const AuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useUserStore();
  if (isAuthenticated && user?.isverified) {
    return <Navigate to="/" replace />;
  }
  return children;
};

const AdminRoute = ({ children }) => {
  const { isAuthenticated, user } = useUserStore();
  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace />;
  }
  if (!user?.admin) {
    return <Navigate to="/" replace />;
  }
  return children;
};


function App() {

  const {checkAuthentication,isCheckingAuth}=useUserStore()
  const initializeTheme = useThemeStore((state) => state.initializeTheme);
  

 

  useEffect(()=>{
    checkAuthentication();
    initializeTheme();
  },[checkAuthentication])

  if(isCheckingAuth){
    return <Loading/>
  }
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <MainLayOut />
            </ProtectedRoutes>
          }
        >
          <Route index element={<HeroSection />} />
          <Route path="/filter" element={<FilterPage />} />
          <Route path="/restaurant-details/:id" element={<RestaurantDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search/:text" element={<SearchPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order/status" element={<Success />} />
          <Route path="/admin/restaurant" element={<AdminRoute><Restaurant /></AdminRoute>} />
          <Route path="/admin/menu" element={<AdminRoute><AddMenu /></AdminRoute>} />
          <Route path="/admin/orders" element={<AdminRoute><Orders /></AdminRoute>} />
        </Route>
        <Route
          path="/login"
          element={
            <AuthenticatedUser>
              <Login />
            </AuthenticatedUser>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthenticatedUser>
              <Signup />
            </AuthenticatedUser>
          }
        />
        <Route
          path="/forget-password"
          element={
            <AuthenticatedUser>
              <ForgetPassword />
            </AuthenticatedUser>
          }
        />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
      </Routes>
    </div>
  );
}

export default App;
