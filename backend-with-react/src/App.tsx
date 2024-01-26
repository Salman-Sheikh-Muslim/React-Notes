import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import UseEffectHook from "./Components/useEffect-Hook";
import ProductList from "./Components/ProductList";
import CleaningUpEffectHook from "./Components/CleaningUp-Effect-Hook";
import UsingAxiosToGetDummyData from "./Components/Using-Axios-To-Get-Dummy-Data";
import HandlingErrorsWhenRequestingForData from "./Components/Handling-Errors-WhenRequestingForData";
import CleanUpFunctionForFetchRequest from "./Components/Clean-Up-Function-For-Fetch-request";
import LoadingIndicatorCleanUpFunctionForFetchRequest from "./Components/Loading-Indicator-Clean-Up-Function-For-Fetch-request";
import DeletingDataRequestedFromServer from "./Components/Deleting-Data-Requested-From-Server";
import CreatingDataAddingNewDataToServer from "./Components/Creating-Data-Adding-New-Data-To-Server";
import UpdatingDataAddingUpdatedDataToServer from "./Components/Updating-Data-Adding-Updated-Data-To-Server";
import ImrovingReadabilityOfAPI from "./Components/Imroving-Readability-Of-API-Before";
import ImrovingReadabilityOfAPIAfter from "./Components/Imroving-Readability-Of-API -After";
import ImrovingReadabilityOfAPIGeneric from "./GenericHTTPService/Imroving-Readability-Of-API";

function App() {
  const [category, setCategory] = useState("");

  return (
    <div>
      <ImrovingReadabilityOfAPIGeneric />
      <ImrovingReadabilityOfAPIAfter />
      <ImrovingReadabilityOfAPI />
      {/* <UpdatingDataAddingUpdatedDataToServer></UpdatingDataAddingUpdatedDataToServer> */}
      {/* <CreatingDataAddingNewDataToServer />
      <DeletingDataRequestedFromServer></DeletingDataRequestedFromServer>
      <LoadingIndicatorCleanUpFunctionForFetchRequest /> */}
      {/* <CleanUpFunctionForFetchRequest /> */}
      {/* <HandlingErrorsWhenRequestingForData></HandlingErrorsWhenRequestingForData> */}
      {/* <UsingAxiosToGetDummyData></UsingAxiosToGetDummyData>
      <CleaningUpEffectHook></CleaningUpEffectHook> */}
      {/* <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category}></ProductList> */}
      {/* <UseEffectHook></UseEffectHook> */}
    </div>
  );
}

export default App;
