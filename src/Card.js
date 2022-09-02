import ReactStars from "react-rating-stars-component";



function Card({ item, handleAddToCart, cartItems }) {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  
  return (
    <div className="col-lg-3">
      <div class="card" >
        <img src={item.img} class="card-img-top" alt="..."  />
        <div class="card-body">
          <h5 class="card-title">{item.title} </h5>
          <p class="card-text">₹{item.price}</p>
          <ReactStars
    count={5}
   
    value={5}
    size={24}
    activeColor="#ffd700"
  />,
          <button
            disabled={cartItems.some((obj) => obj.id === item.id)}
            onClick={() => {
              handleAddToCart(item);
            }}
            class="btn btn-warning"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
