import React from 'react';

const Product = (props) => {
    const { imgUrl, title, price} = props.product;
    const {addToCart} = props;
    return(
        <div>
            <img src={imgUrl} alt={title}/>
            <h2>{title}</h2>
            <p>{price}</p>
            {/* below use an anonymous callback function to return addtoCart so its not called immediately */}
            <button onClick={() => addToCart(props.product)}>Add to Cart</button>
        </div>
    )
}

export default Product