






import React, { useContext } from 'react';
import './ProjectDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import { useNavigate } from 'react-router-dom';

const ProjectDisplay = (props) => {
    const {product} = props;  
  const {addToCart} = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="product" />
          <img src={product.image} alt="product" />
          <img src={product.image} alt="product" />
          <img src={product.image} alt="product" />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt="main product" />
        </div>
      </div>  
       <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_dull_icon} alt="star dull" />
          <p>(111)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-discription">
          Stay comfortable and stylish with our classic cotton t-shirt. Made from soft, breathable fabric, it’s perfect for everyday wear and easy to pair with any outfit.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
  onClick={() => {
    addToCart(product.id);
    navigate('/cart'); 
  }}
>
  ADD TO CART
</button>

        <p className='productdisplay-right-category'><span>Category : </span>Women , T-shirt , Crop Top</p>
        <p className='productdisplay-right-category'><span>Tags : </span>Modern , Latest</p>
      </div>
    </div>
  );
};
      


   

export default ProjectDisplay;
