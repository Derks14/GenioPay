import Sidebar from "../sidebar/sidebar";
import Nav from "../nav/nav";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../fuselage/dashboard/dashboard";
import Wallet from "../fuselage/wallet/wallet";

const Core = () => {
  return (
    <div className="h-full">
      <div className="md:grid h-full md:grid-cols-5 overflow-hidden">
        <div className="col-span-1 hidden md:block ">
          <Sidebar/>
        </div>
        <div className="col-span-4 bg-[#E5E5E5] overflow-auto">
          <div className="sticky top-0 bg-[#FCFDFE]">
            <Nav/>
          </div>
          <div className="h-full px-8">
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/wallet" element={<Wallet/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Core;
