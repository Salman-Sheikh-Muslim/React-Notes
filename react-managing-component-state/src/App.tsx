import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import StateExp from "./components/state-explanation";
import PureComponents from "./components/Pure-Components";
import ImpureComponents from "./components/Impure-Components";
import UpdatingUseStateObjects from "./components/Updating-useState-Objects";
import UpdatingUseStateNestedObjects from "./components/Updating-useState-Nested-Objects";
import UpdatingUseStateArrays from "./components/Updating-useState-Arrays";
import UpdatingUseStateArrayOfObjects from "./components/Updating-useState-Array-Of-Objects";
import MutableUpdatingUseStateArrayOfObjects from "./components/Mutable-Updating-useState-Array-Of-Objects";
import NavBarSharingState from "./components/NavBar-SharingState";
import CartSharingState from "./components/Cart-SharingState";
import UpdatingStateObjects from "./exercises/Updating-StateObject";
import ExanpandableTextMoreLess from "./exercises/Exanpandable-Text-MoreLess";
import AnotherExpandableText from "./exercises/AnotherExanpandable-Text-MoreLess";

function App() {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]); //This state is being shared between 2 child components
  //  Now that we have defines the state here we can pass it to children as props.
  // const handleOnClear = () => {
  //   setCartItems((items) => (items = []));
  //   console.log("hi");
  // };
  const [show, setShow] = useState(true);

  const handleOnClick = () => {
    setShow((preValue) => !preValue);
    console.log("hi");
  };
  return (
    <div>
      <AnotherExpandableText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
        asperiores ratione aut, similique quibusdam cumque tempore numquam et
        eos impedit porro repudiandae mollitia doloremque iure laudantium odit
        excepturi atque temporibus blanditiis corporis, fuga, dolores nisi
        fugit? Debitis pariatur enim inventore sunt! Accusamus tempore, esse
        aperiam ex aspernatur dolores quas quibusdam explicabo iure est culpa
        fugiat eos dolor quaerat velit magni? Ad sunt iste veritatis magni
        laboriosam odit vitae quisquam vero consectetur beatae ipsum tempora,
        dolorem similique neque.
      </AnotherExpandableText>
      <ExanpandableTextMoreLess
        flexButton={show}
        onClick={handleOnClick}
        maxChars={50}
      >
        ExanpandableTextMoreLess Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Cumque libero suscipit error vero quae cupiditate sint
        asperiores fuga. Nisi soluta commodi maiores ut! Quos totam neque
        reprehenderit, sunt odio saepe maiores natus accusantium perspiciatis
        voluptas, provident non a dolor fuga ipsam eum facilis ipsum omnis
        molestiae, rem veritatis. Eaque, obcaecati. Totam ratione in fuga sequi
        omnis a labore veniam minima illum iste sunt nulla, laudantium quibusdam
        neque similique dolor qui. Porro omnis alias eveniet fugit suscipit
        nihil reiciendis? Nam ipsam, corrupti soluta excepturi ratione
        consequuntur obcaecati facilis pariatur fuga repellendus minima sit
        totam. Voluptatem atque adipisci repudiandae architecto at explicabo
        sequi ipsam, tempora obcaecati quia mollitia? Inventore non in quo
        aliquam aliquid eum aspernatur suscipit quas, saepe at odit officia
        quidem aut. Praesentium fugiat libero recusandae, optio commodi porro
        voluptatum aperiam animi temporibus, veritatis, alias molestiae nemo
        dolor sapiente asperiores dolore deleniti pariatur non ea error autem
        dignissimos. Accusamus molestiae iste officia veniam. Aperiam corrupti,
        omnis at illum dolorem facere eveniet, voluptates nam nobis assumenda
        quasi iste rem repudiandae pariatur. Voluptatibus a architecto autem
        necessitatibus dignissimos magni natus et qui, aspernatur doloremque
        obcaecati tenetur nesciunt, at fugiat fugit, minima laboriosam! Quaerat
        illo error molestiae dignissimos modi explicabo mollitia fugit sunt.
      </ExanpandableTextMoreLess>
      <UpdatingStateObjects></UpdatingStateObjects>
      <NavBarSharingState
        cartItemsCount={cartItems.length}
      ></NavBarSharingState>
      <CartSharingState
        cartItems={cartItems}
        onClear={() => setCartItems([])}
      ></CartSharingState>
      <MutableUpdatingUseStateArrayOfObjects></MutableUpdatingUseStateArrayOfObjects>
      <UpdatingUseStateArrayOfObjects></UpdatingUseStateArrayOfObjects>
      <UpdatingUseStateArrays></UpdatingUseStateArrays>
      <UpdatingUseStateNestedObjects></UpdatingUseStateNestedObjects>
      <UpdatingUseStateObjects></UpdatingUseStateObjects>
      <PureComponents></PureComponents>
      <PureComponents></PureComponents>
      <PureComponents></PureComponents>
      {/* Each ImpureComponents is rendered twice due to StrictMode as well as other
      components.
      
      Reach renders each ImpureComponents twice and takes the result of the
      second render
      
            <ImpureComponents /> Message 1 // The first render is primarily ussed for 
                                              detecting and reporting potential issues 
                                              with our code while the second 
                                              render is actually used for updating the 
                                              user interface.
                                 Message 2 // React takes the result of the second 
                                              render. 

      */}
      <ImpureComponents></ImpureComponents>
      <ImpureComponents></ImpureComponents>
      <ImpureComponents></ImpureComponents>
      <StateExp></StateExp>
    </div>
  );
}

export default App;
