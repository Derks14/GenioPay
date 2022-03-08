import { BrowserRouter } from "react-router-dom";
import Core from "./app/core/core";

const App = () => {
  return (
      <div className="box-border p-0 m-0 w-full">
        <BrowserRouter>
          <Core/>
        </BrowserRouter>
      </div>
  )
}

export default App;
