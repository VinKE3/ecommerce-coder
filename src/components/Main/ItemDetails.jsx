const detail = [
  {
    id: 1,
    title: "PlayStation 5",
    price: "$140000",
    image: "../450_1000.jpeg",
    detail:
      "Vivi la mejor experiencia en videojuegos con la potente PS5 y sumergite en la siguiente generacion de consolas",
  },
  {
    id: 2,
    title: "PlayStation 4",
    price: "$140000",
    image: "../450_1000.jpeg",
    detail:
      "Vivi la mejor experiencia en videojuegos con la potente PS5 y sumergite en la siguiente generacion de consolas",
  },
  {
    id: 3,
    title: "Xbox S/S",
    price: "$140000",
    image: "../450_1000.jpeg",
    detail:
      "Vivi la mejor experiencia en videojuegos con la potente PS5 y sumergite en la siguiente generacion de consolas",
  },
  {
    id: 4,
    title: "Xbox S/X",
    price: "$140000",
    image: "../450_1000.jpeg",
    detail:
      "Vivi la mejor experiencia en videojuegos con la potente PS5 y sumergite en la siguiente generacion de consolas",
  },
];

const ItemDetail = () => {
  return detail.map((elemento, indice) => {
    return (
      <>
        <div key={indice}>
          <h2>{elemento.title}</h2>
          <p>{elemento.price}</p>
          <img src={elemento.image} />
          <p>{elemento.detail}</p>
        </div>
      </>
    );
  });
};

export default ItemDetail;
