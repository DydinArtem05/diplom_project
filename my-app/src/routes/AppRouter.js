// routes/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer';
import ProductPageContainer from '../containers/ProductPageContainer';
import Header from '../components/Header/Header';
import Login from '../components/Auth/Login';
import RegisterContainer from '../components/Auth/RegisterContainer';
import Footer from '../components/Footer/Footer';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomeContainer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterContainer />} />
        {/* <Route path="/catalog" exact component={Catalog} />
        <Route path="/contact" exact component={Contact} /> */}
        <Route path="/products" element={<ProductPageContainer />} />
        {/* <Route path="/cart" component={CartContainer} />
        <Route path="/checkout" component={CheckoutContainer} />
        {/* <PrivateRoute path="/profile" component={() => <div>Profile Page</div>} /> */}
        {/* <Route component={NotFound} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
