import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);
  /*
Specifying the type of this constant in angle brackets <string[]> beacuse
we are passing a empty array to typescript compiler and if we do not mention
the type specifically in <> brackets compilation will occur if we try to insert 
anyhting in this array beacuse typescript will not be aware of what type of data
you want to insert in this array.
*/
  useEffect(() => {
    //This is a call back function because React is going to call this function back.
    console.log("Fetching products in " + category);
    setProducts(["Clothing", "HouseHold"]);
  }, [category]);
  /*
  The second argument is optional its called array of dependencies you can
  properties or State variables in it. If even a single prop or variable
  value changes or get trigged the useEffect Hook is executed.

  If we pass an empty array the useEffect is only executed once.

  If we do not pass the second argument than the useEffect is executed after each render.
  If we use a useSate setFunction in useEffect hook without passing a second argument
  a infinite loop is created because when the effect hook is triggered the setFunction
  is exectued which in turns renders the component and due to the render the useEffect
  Hook is executed and so on........
  */
  return <div>ProductList</div>;
};

export default ProductList;
