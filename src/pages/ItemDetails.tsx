import React, { FC, useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "../store/reducers/rootReducer";
import { AddToCart } from "../store/actions/cartActions";

const ItemDetails: FC = () => {
  const items = useSelector((state: StoreState) => state.itemReducer.items);
  const { id } = useParams();
  const item = items.find((element) => element.id === id);
  const [picture, setPicture] = useState(item?.img[0]);
  const dispatch = useDispatch();

  const handleAddToCart = (item: any) => {
    dispatch(AddToCart(item));
  };

  const handlePictureClick = (e: any) => {
    setPicture(e.target.currentSrc);
  };

  const displayMorePictures = item?.img.map((picture) => {
    return (
      <img
        key={picture}
        onClick={handlePictureClick}
        className="more-pictures-pic"
        src={picture}
        alt={picture}
      />
    );
  });

  return (
    <>
      <h2 className="back-to-results">Back to results</h2>
      <div id="selected-item">
        <div className="pictures">
          <img src={picture} alt="" />
          <div>{displayMorePictures}</div>
        </div>
        <div className="details">
          <div className="price">
            <p>${item?.price}</p>
          </div>
          <p className="title">{item?.title}</p>
          <p className="description">{item?.description}</p>
          <button className="add-to-cart" onClick={() => handleAddToCart(item)}>
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
