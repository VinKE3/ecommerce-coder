import React from "react";
import ItemDetails from "./ItemDetails";
import ItemCount from "./ItemCount";

const ItemDetailContainer = () => {
  return (
    <div>
      <ItemDetails />
      <ItemCount />
      <ItemImg/>
    </div>
  );
};

export default ItemDetailContainer;
