import React from 'react';


const Banner =  (props) => {
    //destructuring - set the keys you want to destructure in the curley braces
    //set them to equal the props object they are located in ie. props.banner
    // now these keys equal props.banner.title and props.banner.subTitle
    const {title, subTitle} = props.banner;
return(
    <header>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
    </header>
)
}

export default Banner;