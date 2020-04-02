import React, {Component} from 'react';
import './App.css';
import db from './db.js'

import Banner from './components/Banner.js'
import Product from "./components/Product.js"
import Cart from "./components/Cart.js"

class App extends Component {
  //specify you want to construct using props
  constructor(props){
    //super ensures Componenet is properly constructed before things are defined on this instance of App
    //good idea to pass in  props - but wont error because as soon as super runs, will auto add it. Add just to be safe.
    super(props)
    // DEFINING STATE
    //this refers to a rendered instance of App
    this.state = {
      //store data from db on state
      ...db, 
      lineItems: [],
      cartOpen: false,

    }
  }

  toggleCart = () => {
    const cartNewState = !this.state.cartOpen
    this.setState({
      cartOpen: cartNewState
    }, () => {console.log('updated!')})
  }

  addToCart = (product) => {
    this.setState({
      lineItems: [...this.state.lineItems, product]
    })
  }


  render(){
    return(
      <div className="App">
        {/* this is used below because its a method on THIS app instance */}
        <span onClick={this.toggleCart}>Cart (0)</span>
        {/* if what is on left side of && is truthy, render whats on the right */}
        {this.state.cartOpen &&
          <Cart />
        }
        <Banner banner={db.banner}/>
        {/* use arrow function that utlizes an implicit return - remove curly braces and "return" */}
        {db.products.map((product, index) => 
          //map through each item, 
          //create a new array of product components with a product passed in as props.
          <Product product={product} addToCart={this.addToCart}/>
        )}
  
      </div>
    );
  }
}

export default App;
