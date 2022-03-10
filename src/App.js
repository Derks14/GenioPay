import { BrowserRouter } from "react-router-dom";
import Core from "./app/core/core";

const App = () => {
  return (
    <div className="box-border p-0 m-0 lg:min-w-[1440px] lg:h-[1024px] leading-7 text-[#2B4146] bg-[#FCFDFE] scroll-smooth">
      <BrowserRouter>
        <Core />
      </BrowserRouter>
    </div>
  );
};

export default App;
