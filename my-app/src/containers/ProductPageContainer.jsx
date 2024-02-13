import React, {Component} from "react";
import ProductPage from "../components/Product/ProductPage";
import { connect } from "react-redux";

class ProductPageContainer extends Component {
    render() {
        return (
            <>
            <ProductPage products={this.props.products} />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.products,
  });

export default connect(mapStateToProps)(ProductPageContainer);