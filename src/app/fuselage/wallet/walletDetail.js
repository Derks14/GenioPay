const WalletDetail = () => {
  return (
    <div className="bg-white rounded-2xl py-4 px-12 ">
      <div>


        <div>
          <div className="rounded-2xl border border-gray-100 p-8 shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-green-500 text-xs flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Active</p>
                <p className="text-[#001B21]">EUR Wallet</p>
                <p className="font-bold text-[#0A6375]">EUR</p>
              </div>

              <div>
                <p className="text-4xl text-[#001B21] font-extrabold">
                  €2,000,000.50
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 w-full gap-8   my-4">
            {/*balance*/}
            <div className="col-span-1">
              <div className="my-2 flex items-center">
                <p className="mr-auto text-sm">Ledger Balance</p>
                <p>€2,000,000.50</p>
              </div>
              <div className="my-2 flex items-center">
                <p className="mr-auto text-sm">Blocked Balance</p>
                <p>€0.00</p>
              </div>

            </div>

            {/*Total*/}
            <div className="col-span-1">

              <div className="my-2 flex items-center">
                <p className="mr-auto text-sm">Blocked Balance</p>
                <p>€0.00</p>
              </div>
              <div className="my-2 flex items-center">
                <p className="mr-auto text-sm">Ledger Balance</p>
                <p>€0.00</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-3 gap-5  my-8">
            <div className="col-span-1">
              <button className="border flex hover:shadow-lg items-center hover:bg-[#017189] hover:text-white justify-center w-full py-3 text-[#017189] border-[#017189] rounded-2xl">
                <svg width="16" height="16" className="mr-2" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.93337 4.21333L10.5934 2.32666C13.1334 1.48 14.5134 2.86666 13.6734 5.40666L11.7867 11.0667C10.52 14.8733 8.44004 14.8733 7.17337 11.0667L6.61337 9.38666L4.93337 8.82666C1.1267 7.56 1.1267 5.48666 4.93337 4.21333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round"/>
                  <path d="M6.73999 9.1L9.12666 6.70667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                Payment
              </button>
            </div>
            <div className="col-span-1">
              <button className="border w-full hover:shadow-lg py-3 hover:bg-[#017189] text-[#017189] flex items-center justify-center hover:text-white border-[#017189] rounded-2xl">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mr-2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.33325 11.6667L12.6666 2.33333" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.33325 4.81999V11.6667H10.1799" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.33325 14.6667H13.6666" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                Pay In
              </button>
            </div>
            <div className="col-span-1">
              <button className="border w-full hover:shadow-lg hover:bg-[#017189] text-[#017189] focus:bg-[#017189] text-[#017189] flex items-center justify-center hover:text-white  focus:text-white py-3 border-[#017189] rounded-2xl">
                <svg width="16" height="16" viewBox="0 0 16 16" className="mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.52 6.96667L14 4.48665L11.52 2.00667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 4.48665H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.47998 9.03333L2 11.5133L4.47998 13.9933" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 11.5133H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                Exchange
              </button>
            </div>

          </div>
        </div>

        <div>
          <div className="my-8">
            <button className="text-[#017189] font-bold px-4 rounded-xl py-1.5 hover:bg-[#edf7f7] focus:bg-[#edf7f7] flex items-center ">More Options
            <span className="mx-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9201 8.95L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95" stroke="#017189" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

            </span>
            </button>
          </div>
        </div>

        <div>
          <div className="">
            <ul>
              <li>
                <a className="flex items-center my-4">
                  <div className="flex items-center mr-4 justify-center text-[#017189] bg-[#F9FAFB] p-1.5 rounded-xl w-10 h-10">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.99989 11.8333L3.88522 13.9966L4.67122 9.41463L1.33789 6.16997L5.93789 5.5033L7.99522 1.33463L10.0526 5.5033L14.6526 6.16997L11.3192 9.41463L12.1052 13.9966L7.99989 11.8333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                  </div>
                  <div>
                    <p className="">Remove as Default Wallet</p>
                  </div>
                </a>
              </li>
              <li>
                <a className="flex items-center my-4">
                  <div className="flex items-center mr-4 justify-center text-[#017189] bg-[#F9FAFB] p-1.5 rounded-xl w-10 h-10">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 6.66667H14M4.66667 10H4.67333M7.33333 10H8.66667M4 3.33333H12C13.1046 3.33333 14 4.22876 14 5.33333V10.6667C14 11.7712 13.1046 12.6667 12 12.6667H4C2.89543 12.6667 2 11.7712 2 10.6667V5.33333C2 4.22876 2.89543 3.33333 4 3.33333Z" stroke="#017189" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>


                  </div>
                  <div>
                    <p className="">View Linked Cards</p>
                  </div>
                </a>
              </li>
              <li>
                <a className="flex items-center my-4">
                  <div className="flex items-center mr-4 justify-center text-[#017189] bg-[#F9FAFB] p-1.5 rounded-xl w-10 h-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="">Statements</p>
                  </div>
                </a>
              </li>
              <li>
                <a className="flex items-center my-4">
                  <div className="flex items-center mr-4 justify-center text-[#017189] bg-[#F9FAFB] p-1.5 rounded-xl w-10 h-10">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.66675 9.33333L14.0001 2" stroke="#017189" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M13.9998 2L9.66647 14C9.63722 14.0638 9.59026 14.1179 9.53117 14.1558C9.47208 14.1938 9.40335 14.2139 9.33314 14.2139C9.26293 14.2139 9.19419 14.1938 9.1351 14.1558C9.07601 14.1179 9.02905 14.0638 8.9998 14L6.66647 9.33333L1.9998 7C1.93598 6.97075 1.88189 6.92379 1.84397 6.8647C1.80605 6.80561 1.78589 6.73688 1.78589 6.66667C1.78589 6.59646 1.80605 6.52772 1.84397 6.46863C1.88189 6.40954 1.93598 6.36258 1.9998 6.33333L13.9998 2Z" stroke="#017189" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                  </div>
                  <div>
                    <p className="">Inflow Details</p>
                  </div>
                </a>
              </li>
              <li>
                <a className="flex items-center my-4">
                  <div className="flex items-center mr-4 justify-center text-[#017189] bg-[#F9FAFB] p-1.5 rounded-xl w-10 h-10">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5.33333V8M8 10.6667H8.00667M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>


                  </div>
                  <div>
                    <p className="">Wallet Information</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="w-2/3 my-4">
            <div className="grid grid-cols-3">
              <div
                className="text-center hover:border-b-4 focus:border-b-4 my-2 pb-1.5 hover:border-[#017189] focus:border-[#017189]">
                <a>Activity</a>
              </div>
              <div
                className="text-center hover:border-b-4 focus:border-b-4 my-2 pb-1.5 hover:border-[#017189] focus:border-[#017189]">
                <a>Transactions</a>
              </div>
              <div
                className="text-center hover:border-b-4 focus:border-b-4 my-2 pb-1.5 hover:border-[#017189] focus:border-[#017189]">
                <a>Invoices</a>
              </div>


            </div>
          </div>
          <div className="flex items-center  justify-between">
            <p className="text-sm">22 July, 2022</p>
            <p className="font-bold text-[#017189]">View All</p>
          </div>
          <div className="flex items-center my-6">
            <div className="flex items-center mr-4 justify-center text-[#017189] bg-[#F9FAFB] p-1.5 rounded-xl w-10 h-10">
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.3045 1.13794L9.2098 0.64699L9.70076 0.552293L9.79545 1.04324L9.3045 1.13794ZM1.64748 13.347C1.49273 13.5757 1.18188 13.6357 0.953169 13.4809C0.724459 13.3262 0.664501 13.0153 0.819247 12.7866L1.64748 13.347ZM1.20981 2.19008L9.2098 0.64699L9.3992 1.62889L1.3992 3.17198L1.20981 2.19008ZM9.79545 1.04324L11.3385 9.04324L10.3566 9.23264L8.81355 1.23264L9.79545 1.04324ZM9.71862 1.41813L1.64748 13.347L0.819247 12.7866L8.89039 0.857747L9.71862 1.41813Z" fill="#16A34A"/>
              </svg>

            </div>
            <div className="mr-auto">
              <p className="text-[#001B21]">Pay-In Voucher</p>
              <p className="text-sm">EUR Wallet</p>
            </div>
            <div>
              <p className="text-green-600 font-bold">
                €750.67
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
};

export default WalletDetail;
