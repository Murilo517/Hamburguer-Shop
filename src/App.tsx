import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RoutesMain } from "./routes";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {


  return (
    <>
      <GlobalStyle/>
      <ToastContainer/>
      <RoutesMain/>
    </>
  );
}

export default App;
