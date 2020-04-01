import React from 'react';

const Product = (props) => {
    const { imgUrl, title, price} = props.product;
    return(
        <div>
            <img src={imgUrl} alt={title}/>
            <h2>{title}</h2>
            <p>{price}</p>
        </div>
    )
}

export default Product