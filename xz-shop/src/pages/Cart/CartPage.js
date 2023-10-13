import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { addToCart, decreaseCart, removeFromCart } from "../../services/slices/cartSlice";
import emptyCartImg from "../../assets/images/empty-cart.png"
import { Link } from "react-router-dom";
import "../../assets/styles/index.scss"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const CartPage = () => {
    const cartProduct = useSelector((state) => state.cart.cartProducts);

    console.log('cart', cartProduct);
    const dispatch = useDispatch();
    const removeProduct = (product) => {
        dispatch(removeFromCart(product));
    };

    const addQuantity = (product) => {
        dispatch(addToCart(product))
    }
    const removeQuantity = (product) => {
        dispatch(decreaseCart(product))
    }

    const productCard = cartProduct.map((product) => (
        <div className="col-md-3" style={{ marginBottom: "20px" }}>
            <div className="cart-product-wrapper">
                <div className="cart-col">
                    <img src={product.image} alt={product.slug} style={{ width: "150px", height: "180px" }} /></div>
                <div className="cart-col">{product.slug}</div>
                <div className="cart-col design-type"><span className="product-tags">{product.clothingType}</span> <span className="product-tags">{product.design}</span></div>
                <div className="cart-col">
                    <div className="quantity-control">
                        <div className="quantity">{product.cartQuantity}</div>
                        <div className="quantity-control-btn">
                            <button disabled={product.cartQuantity === 1} onClick={() => removeQuantity(product)}><RemoveIcon /></button>
                            <button onClick={() => addQuantity(product)}><AddIcon /></button>
                        </div>
                    </div>
                </div>
                <div className="cart-col" style={{ fontSize: '1.12rem' }}>&#8377; {(product.price) * product.cartQuantity}</div>
                <div className="cart-col">
                    <button className="remove-product-btn" onClick={() => removeProduct(product)}><DeleteForeverIcon /></button>
                </div>
            </div>
        </div>
    ));
    return (
        <div>
            {
                productCard.length == 0 &&
                <div style={{ display: 'grid', placeItems: 'center' }}>
                    <div className="empty-cart-display">
                        <img src={emptyCartImg} alt="empty cart" width={'400px'} />
                        <h4 className="mb-4">Your cart is empty</h4>
                        <button className="empty-cart-btn"><Link to='/products' >Continue Shopping</Link></button>
                    </div>
                </div>
            }
            {productCard}

        </div>
    );
};

export default CartPage;
