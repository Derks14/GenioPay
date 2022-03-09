import Sidebar from "../sidebar/sidebar";
import Nav from "../nav/nav";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../fuselage/dashboard/dashboard";
import Wallet from "../fuselage/wallet/wallet";
import MobileNav from "../nav/mobileNav";

const Core = () => {
  return (
    <div className="h-full">
      <div className="lg:grid h-full lg:grid-cols-5 overflow-hidden">
        <div className="col-span-1 hidden lg:block ">
          <Sidebar/>
        </div>
        <div className="col-span-4 bg-[#E5E5E5] md:overflow-auto">

          {/*mobile navbar*/}
          <div className="sticky md:hidden w-full z-50 shadow-lg top-0">
            <MobileNav/>
          </div>

          <div id="mobileSideBar" className="md:hidden transition-all duration-700 ease-in-out fixed w-10/12 z-10 -translate-x-full top-0   overflow-hidden">
            <Sidebar/>
          </div>

          {/*pc navbar*/}
          <div className="hidden md:block sticky top-0 bg-[#FCFDFE]">
            <Nav/>
          </div>

          <div className="h-full md:px-8 px-3">
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
