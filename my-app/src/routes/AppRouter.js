// routes/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import HomeContainer from '../containers/HomeContainer';
// import Catalog from '../components/Catalog';
// import Contact from '../components/Contact';
// import NotFound from '../components/NotFound';
import ProductPageContainer from '../containers/ProductPageContainer';
// import CartContainer from '../containers/CartContainer';
// import CheckoutContainer from '../containers/CheckoutContainer';
 import Header from '../components/Header/Header';
// import AuthContainer from '../containers/AuthContainer';
import Footer from '../components/Footer/Footer';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomeContainer />} />
        {/* <Route path="/catalog" exact component={Catalog} />
        <Route path="/contact" exact component={Contact} /> */}
        <Route path="/products" element={<ProductPageContainer />} />
        {/* <Route path="/cart" component={CartContainer} />
        <Route path="/checkout" component={CheckoutContainer} />
        <Route path="/login" component={AuthContainer} /> */}
        {/* <PrivateRoute path="/profile" component={() => <div>Profile Page</div>} /> */}
        {/* <Route component={NotFound} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
