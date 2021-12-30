import React from "react";
import { useState } from "react";

const ItemCount = ({ stock = 5, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);
  const [agregar, setAgregar] = useState(onAdd);

  const addContador = () => {
    setContador(contador + 1);
  };

  const minusContador = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const limiteContador = () => {
    if (contador === stock) {
      setContador(contador - 1);
      alert("Sin Stock");
    } else if (contador === 0) {
      setContador(contador + 1);
    }
  };
  return (
    <div className="lg:mt-11 mt-10">
      <div className="flex flex-row justify-between">
        <p className=" font-medium text-base leading-4 text-gray-600">
          Seleccionar Cantidad
        </p>
        <div className="flex" onClick={limiteContador}>
          <span
            onClick={minusContador}
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1"
          >
            -
          </span>
          <input
            id="counter"
            aria-label="input"
            className="border border-gray-300 h-full text-center w-14 pb-1"
            type="text"
            value={contador}
            onChange={(e) => e.target.value}
          />
          <span
            onClick={addContador}
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 "
          >
            +
          </span>
        </div>
      </div>
      <hr className=" bg-gray-200 w-full my-2" />
      <button className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6">
        Agregar al carrito
      </button>
    </div>
  );
};
export default ItemCount;
