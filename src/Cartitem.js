function CartItem({cartItem,removeFromCart}){
    return (<div>
      <li class="list-group-item d-flex justify-content-between align-items-start">
    
  <div class="ms-2 me-auto">
    
    <div class="fw-bold">{cartItem.title}</div>
    ₹{cartItem.price}
  </div>
  <button onClick={()=> removeFromCart(cartItem)} class="badge bg-primary rounded-pill">Remove</button>
</li></div>
    
    );
}

export default CartItem;