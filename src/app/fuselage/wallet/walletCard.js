import Search from "../../components/search";
import { NavLink } from "react-router-dom";

const WalletCard = () => {
  return (
    <div className="bg-white rounded-2xl py-2 px-4 ">
      <div className="flex items-center justify-between">
        <div>
          <Search/>
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
            <a>Active (3)</a>
          </div>
          <div className="text-center hover:border-b-4 focus:border-b-4 my-2 pb-1 hover:border-[#017189] focus:border-[#017189]">
            <a>Inactive  (2)</a>
          </div>
          <div className="text-center hover:border-b-4 focus:border-b-4 my-2 pb-1 hover:border-[#017189] focus:border-[#017189]">
            <a>Closed (0)</a>
          </div>


        </div>
      </div>

      <div>
        <div>
          <ul>
            <li className="my-4">
              <div className="flex items-center py-2">
                <div className="mr-4">
                  <img width="52" height="52" className="rounded-full" src="https://i.ibb.co/XYXDcWn/flags.png"/>
                </div>
                <div className="mr-auto">
                  <p className="text-[#001B21]">EUR Wallet</p>
                  <p className="text-sm">EUR</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">€2,000,000.50</p>
                  <p className="text-sm">Default</p>
                </div>
              </div>
            </li>
            <li className="my-4">
              <div className="flex items-center py-2">
                <div className="mr-4">
                  <img width="52" height="52" className="rounded-full" src="https://i.ibb.co/hD4WtCM/Mask-Group.png"/>
                </div>
                <div className="mr-auto">
                  <p className="text-[#001B21]">Personal Account</p>
                  <p className="text-sm">USD</p>

                </div>
                <div className="text-right">
                  <p className="font-bold">$10,000.00</p>
                </div>
              </div>
            </li>

            <li className="my-4">
              <div className="flex items-center py-2">
                <div className="mr-4">
                  <img width="52" height="52" className="rounded-full" src="https://i.ibb.co/hD4WtCM/Mask-Group.png"/>
                </div>
                <div className="mr-auto">
                  <p className="text-[#001B21]">School Savings</p>
                  <p className="text-sm">GBP</p>

                </div>
                <div className="text-right">
                  <p className="font-bold">£500.00</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
};

export default WalletCard;
