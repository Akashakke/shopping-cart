import Counter from "./Counter";
import Card from "./Card";
import CartItem from "./Cartitem";
import { useState } from "react";
import './App.css';

function App() {
  
const [products,setProduct] = useState([{
  id: 1,
  title: "Realme X3",
  price: 30000,
  img: "https://static.digit.in/default/cda1b9d09f5705fe2246d7cdc0efcc55df46a75f.jpeg?tr=n-product_detail_leader_thumb",
},
{
  id: 2,
  title: "Samsung S10",
  price: 72000,
  img: "https://m.media-amazon.com/images/I/61YVqHdFRxL._AC_SL1322_.jpg",
},
{
  id: 3,
  title: "Redmi k20 pro",
  price: 25000,
  img: "https://i01.appmifile.com/webfile/globalimg/13/B4362A7A-6D3F-6E7A-748B-C1F55229E432.jpg",
},
{
  id: 4,
  title: "Oppo reno 8 pro",
  price: 45000,
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNq1-dO9tlQ_QzdgqB4ssWFu_mYcbHk8btdEwMnbiVdHW3B3AR5Dj3mPLbz905jeNYbeA&usqp=CAU",
},
{
  id: 5,
  title: "Oneplus 10 pro",
  price: 60000,
  img: "data:image/jpeg;base64,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",
},
{
  id: 6,
  title: "Vivo Y35",
  price: 20000,
  img: "https://m.media-amazon.com/images/I/61GA2mAD4KL._SL1200_.jpg",
},
{
  id: 7,
  title: "Nothing phone 1",
  price: 33000,
  img: "https://diamu.com.bd/wp-content/uploads/2022/06/Nothing-Phone-1-White.jpg",
},
{
  id: 8,
  title: "Iphone 13",
  price: 55000,
  img: "data:image/jpeg;base64,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",
},])
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  let addToCart = (item) => {
    setCart([...cart, item]);
    setTotal(total+item.price);
  };

  let removeFromCart = (item) => {
    let index = cart.findIndex((obj) => obj.id === item.id);
    cart.splice(index, 1);
    setCart([...cart]);
    setTotal(total - item.price)
  };

  return (
    <div className="shopping">
      <div className="col-lg-4" id="Cart">
        <div className="row">
          {cart.length === 0 ? (
            <div className="cart-icon"><h7>Cart</h7><img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/shopping-cart-1637225-1386828.png" alt="Girl in a jacket" width='60px' height='50px' /></div>
          ) : (
            <div className="row">
              <h1 className="cart_button">Cart</h1>
              <ol class="list-group list-group-numbered">
              
                {cart.map((cartItem) => {
                  return (
                    <CartItem
                      cartItem={cartItem}
                      removeFromCart={removeFromCart}
                    ></CartItem>
                    
                  );
                  
                })}<h1 className="cart_items">Total-{total}</h1>
                
              </ol>
              
            </div>
          )}
        </div>
        </div>
      <div><h7 className="title"><img src="https://icons-for-free.com/iconfiles/png/512/cell+iphone+mobile+phone+smartphone+icon-1320168140636017886.png" alt="Girl in a jacket" width='50px' height='40px' />
Smart Mobiles</h7> <h7>Home</h7>      <h7>About</h7>      <h7>   Products</h7>
      
      
      
      <div>
      <img src="https://s3b.cashify.in/gpro/uploads/2019/09/16135517/buyback_offer_banner.png" alt="Girl in a jacket" width="1350px" height="500px"/>
      </div>
      
        </div>
      
      
        <div className="col-lg-12" id="body">
          <div className="row">
          
            {products.map((item) => {
              return <Card item={item} cartItems={cart} handleAddToCart={addToCart}></Card>;
            })}
            
          </div>
        
        
      </div>
      
    </div>
  );
}

export default App;
