import { set } from "immer/dist/internal";
import React from "react";
import { useState } from "react";

const UpdatingStateObjects = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const [pizza, setPizza] = useState({
    name: "Spicy Pepporoni",
    toppings: ["Mushrooms"],
  });

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleUpdateQuantity = () => {
    const newItems = cart.items.map((item) =>
      item.id === 1 ? { ...item, quantity: 2 } : item
    );

    const newQuantity = setCart({ ...cart, items: [...newItems] });

    // setCart({
    //   ...cart,
    //   items: cart.items.map((item) =>
    //     item.id === 1 ? { ...item, quantity: 2 } : item
    //   ),
    // });
  };

  const handleUpdateToppings = () => {
    const newToppings = setPizza({
      ...pizza,
      toppings: [...pizza.toppings, "Olives"],
    });
  };

  const handleUpdate = () => {
    const newName = setGame({
      ...game,
      player: { ...game.player, name: "Salman" },
    });
  };

  return (
    <div>
      {game.player.name}
      <button onClick={handleUpdate}>Update</button>
      {pizza.toppings}
      <button onClick={handleUpdateToppings}>Update Toppings</button>
      {JSON.stringify(cart)}
      <button onClick={handleUpdateQuantity}>Update Toppings</button>
    </div>
  );
};

export default UpdatingStateObjects;
