import "../styles/App.css";
import TopNavbar from "./TopNavbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Acpage from "../pages/PagesOfCategories/Acpage";
import AudioPage from "../pages/PagesOfCategories/AudioPage";
import HealthPage from "../pages/PagesOfCategories/HealthPage";
import KitchenappliancePage from "../pages/PagesOfCategories/KitchenappliancePage";
import LaptopPage from "../pages/PagesOfCategories/LaptopPage";
import MobilePage from "../pages/PagesOfCategories/MobilePage";
import RefrigeratorPage from "../pages/PagesOfCategories/RefrigeratorPage";
import TabletPage from "../pages/PagesOfCategories/TabletPage";
import TelevisonPage from "../pages/PagesOfCategories/TelevisonPage";
import TravelPage from "../pages/PagesOfCategories/TravelPage";
import WashingmachinePage from "../pages/PagesOfCategories/WashingmachinePage";
import ProductDetailPage2 from "../components/productDetailpage2"
import MyCart from "../pages/PagesOfCategories/MyCart";
import CheckoutPage from "../pages/CheckoutPage";
import PaymentPage from "../pages/PaymentPage";
import BuynowCheckoutPage from "../pages/BuynowCheckoutPage";
import SearchPage from "../pages/SearchPage";
import Footer from "../components/Footer";
import BuynowPaymentPage from "../pages/BuynowPaymentPage";
import { useData } from "../Providers/AllcategoryData";
import Subnavbar from "./Subnavbar";
import EasyReturn from "../pages/PagesAtTop/EasyReturn";
import Servicepage from "../pages/PagesAtTop/Servicepage";
import CustomerService from "../pages/PagesAtTop/CustomerService";
import WishlistPage from "../pages/WishlistPage";
import ShippingPage from "../pages/ShippingPage";
import OrderSuccesspage from "../pages/OrderSuccesspage";
import OrderSuccessPageb from "../pages/OrderSuccessPageb";

function App() {
  const { getToken } = useData();
  function ProtectedRoute({ Children }) {
    if (getToken) {
      return Children;
    }
    else {
      <Navigate to="/login" />
    }
  }
  return (<div className="h-full w-full">




    <BrowserRouter>
      <TopNavbar />
      <Subnavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/acpage" element={<Acpage />} />
        <Route path="/audiopage" element={<AudioPage />} />
        <Route path="/healthpage" element={<HealthPage />} />
        <Route path="/kitchenpage" element={<KitchenappliancePage />} />
        <Route path="/laptoppage" element={<LaptopPage />} />
        <Route path="/mobilepage" element={<MobilePage />} />
        <Route path="/refregeratorpage" element={<RefrigeratorPage />} />
        <Route path="/tabletpage" element={<TabletPage />} />
        <Route path="/televisonpage" element={<TelevisonPage />} />
        <Route path="/travelpage" element={<TravelPage />} />
        <Route path="/washingmachinepage" element={<WashingmachinePage />} />
        <Route path="/productDetail" element={<ProductDetailPage2 />} />
        <Route path="/mycart" element={<MyCart />} />
        <Route path="/checkoutpage" element={<CheckoutPage />} />
        <Route path="/paymentpage" element={<PaymentPage />} />
        <Route path="checkoutpageb" element={<BuynowCheckoutPage />} />
        <Route path="/searchpage" element={<SearchPage />} />
        <Route path='/buynowpayment' element={<BuynowPaymentPage />} />
        <Route path="/returnpolicy" element={<EasyReturn />} />
        <Route path="/service" element={<Servicepage />} />
        <Route path="/customercare" element={<CustomerService />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/shipping" element={<ShippingPage />} />
        <Route path="/ordersuccess" element={<OrderSuccesspage />} />
        <Route path="/ordersuccessB" element={<OrderSuccessPageb />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
  )
}
export default App;
