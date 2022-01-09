import React, { FC, useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "../store/reducers/rootReducer";
import { AddToCart } from "../store/actions/cartActions";

const ItemDetails: FC = () => {
  const items = useSelector((state: StoreState) => state.itemReducer.items);
  const { id } = useParams();
  const item = items.find((element) => element.id === id);
  const [picture] = useState(item?.img[0].img);
  const dispatch = useDispatch();

  const displayMorePictures = item?.img.map((picture) => {
    return (
      <div key={picture.img} className="more-pictures">
        <img
          /* onClick={handlePictureClick} */
          className="more-pictures-pic"
          src={picture.img}
          alt={picture.img}
        />
      </div>
    );
  });

  return (
    <>
      <h2 className="back-to-results">Back to results</h2>
      <div id="selected-item-screen">
        <div className="selected-item-img-div">
          <img className="selected-item-img" src={picture} alt="" />
          <div className="more-pictures-div">{displayMorePictures}</div>
        </div>
        <div className="selected-item-details">
          <div className="selected-item-price">
            <p>${item?.price}</p>
          </div>
          <p className="selected-item-title">{item?.title}</p>
          <p className="selected-item-description">{item?.description}</p>
          <div className="buttons-div">
            <button
              className="add-to-cart-btn-item"
              onClick={() => dispatch(AddToCart)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
