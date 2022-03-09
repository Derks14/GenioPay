import { BrowserRouter } from "react-router-dom";
import Core from "./app/core/core";

const App = () => {
  return (
      <div className="box-border p-0 m-0 min-w-[1440px] h-[1024px] leading-7 text-[#2B4146] bg-[#FCFDFE]">
        <BrowserRouter>
          <Core/>
        </BrowserRouter>
      </div>
  )
}

export default App;
