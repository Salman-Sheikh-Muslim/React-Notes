import React from "react";

interface Props {
  //cartItems: string[]
  cartItemsCount: number;
}
function NavBarSharingState({ cartItemsCount }: Props) {
  return <div>NavBar: {cartItemsCount}</div>;
}

export default NavBarSharingState;
