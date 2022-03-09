import WalletCard from "./walletCard";
import WalletDetail from "./walletDetail";

const Wallet = () => {
  return (
    <div className="px-2 md:px-8 my-6 py-6 rounded-2xl">
      <div className="">
        <div className="">

          <div className="">
            <div className="md:flex items-center justify-between">
              <div><p className="font-semibold text-[21px]">Your Wallet ( s )</p></div>
              <div>
                <button className="bg-[#017189] font-bold flex items-center rounded-lg my-4 md:my-0 text-white p-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12H18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 18V6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Create New Wallet
                </button>
              </div>
            </div>
          </div>

          <div className="my-8">
            <div className="lg:grid lg:grid-cols-5 gap-4">

              <div className="col-span-2 ">
                <WalletCard/>
              </div>


              <div className="col-span-3">
                <WalletDetail/>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Wallet;
