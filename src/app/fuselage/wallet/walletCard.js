import Search from "../../components/search";
import { NavLink, Route, Routes } from "react-router-dom";
import ActiveWallet from "./activeWallet";

const WalletCard = () => {
  return (
    <div className="bg-white rounded-2xl py-2 px-6 md:px-4 my-8 lg:my-0">
      <div className="flex items-center justify-between">
        <div>
          <Search />
        </div>
        <div>
          <label htmlFor="wallets">
            <select className="text-[#017189] font-bold">
              <option>All</option>
              <option></option>
            </select>
          </label>
        </div>
      </div>

      <div className="my-5">
        <div className="grid grid-cols-3">
          <div className="text-center hover:border-b-4 focus:border-b-4 my-2 pb-1 hover:border-[#017189] focus:border-[#017189]">
            <NavLink to="/active">Active (3)</NavLink>
          </div>
          <div className="text-center hover:border-b-4 focus:border-b-4 my-2 pb-1 hover:border-[#017189] focus:border-[#017189]">
            <a>Inactive (2)</a>
          </div>
          <div className="text-center hover:border-b-4 focus:border-b-4 my-2 pb-1 hover:border-[#017189] focus:border-[#017189]">
            <a>Closed (0)</a>
          </div>
        </div>
      </div>

      <div>
        <ActiveWallet />
      </div>
    </div>
  );
};

export default WalletCard;
