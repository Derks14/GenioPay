import Activity from "./activity";

const Dashboard = () => {
  return (
    <div className="px-4 md:px-8 my-6 py-6 bg-white rounded-2xl">
      {/*dashboard data*/}
      <div className="">
        <div className="">
          <p className="font-semibold text-[21px]">Wallet</p>
        </div>

        <div className="my-8">
          <div className="flex items-center overflow-auto">
            <div className="md:mr-8 mr-2 bg-[#FFF6E6] shadow-sm border border-slate-100 w-[332px] rounded-2xl p-6">
              <div className="flex justify-between">
                <div>
                  <p>Personal Account</p>
                  <p className="text-sm">USD</p>
                </div>
                <div>
                  <img
                    width="48px"
                    height="48px"
                    src="https://i.ibb.co/hD4WtCM/Mask-Group.png"
                  />
                </div>
              </div>
              <div className="mt-8">
                <p className="font-bold text-[28px]">$10,250.00</p>
              </div>
            </div>
            <div>
              <button
                className="rounded-full w-6 h-6 md:w-14 md:h-14 border border-[#017189] hover:bg-[#edf7f7] hover:text-white
               flex items-center justify-center"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 16H24"
                    stroke="#017189"
                    strokeWidth="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 24V8"
                    stroke="#017189"
                    strokeWidth="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="my-8">
          <p className="font-semibold text-[21px]">Quick Links</p>
          <p className="text-slate-400">
            {" "}
            Your frequently used actions for easy access
          </p>
        </div>

        <div className="my-8">
          <div className="flex overflow-auto  items-center">
            <div className="min-w-[120px] mr-3 md:mr-6 py-8 border hover:border-[#017189] rounded-lg hover:bg-[#edf7f7] border-[#F1F5F9] ">
              <div className="px-auto text-center flex items-center justify-center	">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                    fill="#F97316"
                  />
                  <path
                    d="M22.6667 15.3133V16.6867C22.6667 17.0533 22.3733 17.3533 22 17.3667H20.6933C19.9733 17.3667 19.3133 16.84 19.2533 16.12C19.2133 15.7 19.3733 15.3067 19.6533 15.0333C19.9 14.78 20.24 14.6333 20.6133 14.6333H22C22.3733 14.6467 22.6667 14.9467 22.6667 15.3133Z"
                    fill="white"
                  />
                  <path
                    d="M21.6467 18.3667H20.6933C19.4267 18.3667 18.36 17.4133 18.2533 16.2C18.1933 15.5067 18.4467 14.8133 18.9533 14.32C19.38 13.88 19.9733 13.6333 20.6133 13.6333H21.6467C21.84 13.6333 22 13.4733 21.98 13.28C21.8333 11.66 20.76 10.5533 19.1667 10.3667C19.0067 10.34 18.84 10.3333 18.6667 10.3333H12.6667C12.48 10.3333 12.3 10.3467 12.1267 10.3733C10.4267 10.5867 9.33334 11.8533 9.33334 13.6667V18.3333C9.33334 20.1733 10.8267 21.6667 12.6667 21.6667H18.6667C20.5333 21.6667 21.82 20.5 21.98 18.72C22 18.5267 21.84 18.3667 21.6467 18.3667ZM16.6667 14.5H12.6667C12.3933 14.5 12.1667 14.2733 12.1667 14C12.1667 13.7267 12.3933 13.5 12.6667 13.5H16.6667C16.94 13.5 17.1667 13.7267 17.1667 14C17.1667 14.2733 16.94 14.5 16.6667 14.5Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-center px-4 pt-3 ">
                <p className="text-center	text-sm">
                  Add new
                  <br /> Wallet
                </p>
              </div>
            </div>

            <div className="min-w-[120px] mr-3 md:mr-6 py-8 border hover:border-[#017189] rounded-lg hover:bg-[#edf7f7] border-[#F1F5F9] ">
              <div className="px-auto text-center flex items-center justify-center	">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                    fill="#005061"
                  />
                  <path
                    d="M22.6666 13.0333C22.6666 13.4733 22.3066 13.8333 21.8666 13.8333H10.1333C9.69331 13.8333 9.33331 13.4733 9.33331 13.0333V13.0267C9.33331 11.5 10.5666 10.2667 12.0933 10.2667H19.9C21.4266 10.2667 22.6666 11.5067 22.6666 13.0333Z"
                    fill="white"
                  />
                  <path
                    d="M9.33331 15.6333V18.9733C9.33331 20.5 10.5666 21.7333 12.0933 21.7333H19.9C21.4266 21.7333 22.6666 20.4933 22.6666 18.9667V15.6333C22.6666 15.1933 22.3066 14.8333 21.8666 14.8333H10.1333C9.69331 14.8333 9.33331 15.1933 9.33331 15.6333ZM13.3333 19.5H12C11.7266 19.5 11.5 19.2733 11.5 19C11.5 18.7267 11.7266 18.5 12 18.5H13.3333C13.6066 18.5 13.8333 18.7267 13.8333 19C13.8333 19.2733 13.6066 19.5 13.3333 19.5ZM17.6666 19.5H15C14.7266 19.5 14.5 19.2733 14.5 19C14.5 18.7267 14.7266 18.5 15 18.5H17.6666C17.94 18.5 18.1666 18.7267 18.1666 19C18.1666 19.2733 17.94 19.5 17.6666 19.5Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-center px-5 pt-3 ">
                <p className="text-center	text-sm">
                  Add new <br /> Card
                </p>
              </div>
            </div>

            <div className="min-w-[120px] mr-3 md:mr-6 py-8 border hover:border-[#017189] rounded-lg hover:bg-[#edf7f7] border-[#F1F5F9] ">
              <div className="px-auto text-center flex items-center justify-center	">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                    fill="#F59E0B"
                  />
                  <path
                    d="M15.5 13.3867V15.2933L14.8267 15.06C14.4867 14.94 14.28 14.8267 14.28 14.2467C14.28 13.7733 14.6334 13.3867 15.0667 13.3867H15.5Z"
                    fill="white"
                  />
                  <path
                    d="M17.72 17.7533C17.72 18.2267 17.3667 18.6133 16.9333 18.6133H16.5V16.7067L17.1733 16.94C17.5133 17.06 17.72 17.1733 17.72 17.7533Z"
                    fill="#55676B"
                  />
                  <path
                    d="M18.7933 9.33333H13.2066C10.78 9.33333 9.33331 10.78 9.33331 13.2067V18.7933C9.33331 21.22 10.78 22.6667 13.2066 22.6667H18.7933C21.22 22.6667 22.6666 21.22 22.6666 18.7933V13.2067C22.6666 10.78 21.22 9.33333 18.7933 9.33333ZM17.5066 16C18.0266 16.18 18.72 16.56 18.72 17.7533C18.72 18.78 17.92 19.6133 16.9333 19.6133H16.5V20C16.5 20.2733 16.2733 20.5 16 20.5C15.7266 20.5 15.5 20.2733 15.5 20V19.6133H15.26C14.1666 19.6133 13.28 18.6867 13.28 17.5533C13.28 17.28 13.5 17.0533 13.78 17.0533C14.0533 17.0533 14.28 17.28 14.28 17.5533C14.28 18.14 14.72 18.6133 15.26 18.6133H15.5V16.3533L14.4933 16C13.9733 15.82 13.28 15.44 13.28 14.2467C13.28 13.22 14.08 12.3867 15.0666 12.3867H15.5V12C15.5 11.7267 15.7266 11.5 16 11.5C16.2733 11.5 16.5 11.7267 16.5 12V12.3867H16.74C17.8333 12.3867 18.72 13.3133 18.72 14.4467C18.72 14.72 18.5 14.9467 18.22 14.9467C17.9466 14.9467 17.72 14.72 17.72 14.4467C17.72 13.86 17.28 13.3867 16.74 13.3867H16.5V15.6467L17.5066 16Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-center px-5 pt-3 ">
                <p className="text-center	text-sm">
                  Balance <br /> Exchange
                </p>
              </div>
            </div>
            <div className="min-w-[120px] mr-3 md:mr-6 py-8 border hover:border-[#017189] rounded-lg hover:bg-[#edf7f7] border-[#F1F5F9] ">
              <div className="px-auto text-center flex items-center justify-center	">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                    fill="#5EEAD4"
                  />
                  <path
                    d="M16 9.33333C12.32 9.33333 9.33331 12.32 9.33331 16C9.33331 19.68 12.32 22.6667 16 22.6667C19.68 22.6667 22.6666 19.68 22.6666 16C22.6666 12.32 19.68 9.33333 16 9.33333ZM15.2866 19.4333C15.2866 19.5 15.2733 19.56 15.2466 19.6267C15.1933 19.7467 15.1 19.8467 14.9733 19.9C14.9133 19.9267 14.8466 19.94 14.78 19.94C14.7133 19.94 14.6533 19.9267 14.5866 19.9C14.5266 19.8733 14.4733 19.84 14.4266 19.7933L12.4 17.7667C12.2066 17.5733 12.2066 17.2533 12.4 17.06C12.5933 16.8667 12.9133 16.8667 13.1066 17.06L14.28 18.2333V12.5667C14.28 12.2933 14.5066 12.0667 14.78 12.0667C15.0533 12.0667 15.28 12.2933 15.28 12.5667V19.4333H15.2866ZM19.5933 14.9467C19.4933 15.0467 19.3666 15.0933 19.24 15.0933C19.1133 15.0933 18.9866 15.0467 18.8866 14.9467L17.7133 13.7733V19.44C17.7133 19.7133 17.4866 19.94 17.2133 19.94C16.94 19.94 16.7133 19.7133 16.7133 19.44V12.5667C16.7133 12.5 16.7266 12.44 16.7533 12.3733C16.8066 12.2533 16.9 12.1533 17.0266 12.1C17.1466 12.0467 17.2866 12.0467 17.4066 12.1C17.4666 12.1267 17.52 12.16 17.5666 12.2067L19.5933 14.2333C19.7866 14.4333 19.7866 14.7467 19.5933 14.9467Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-center px-5 pt-3 ">
                <p className="text-center	text-sm">
                  Transfer to <br /> Account
                </p>
              </div>
            </div>
            <div className="min-w-[120px] mr-3 md:mr-6 py-8 border hover:border-[#017189] rounded-lg hover:bg-[#edf7f7] border-[#F1F5F9] ">
              <div className="px-auto text-center flex items-center justify-center	">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                    fill="#9333EA"
                  />
                  <path
                    d="M22.6666 15.1667C22.94 15.1667 23.1666 14.94 23.1666 14.6667V14C23.1666 11.06 22.2733 10.1667 19.3333 10.1667H15.1666V11.6667C15.1666 11.94 14.94 12.1667 14.6666 12.1667C14.3933 12.1667 14.1666 11.94 14.1666 11.6667V10.1667H12.6666C9.72665 10.1667 8.83331 11.06 8.83331 14V14.3333C8.83331 14.6067 9.05998 14.8333 9.33331 14.8333C9.97331 14.8333 10.5 15.36 10.5 16C10.5 16.64 9.97331 17.1667 9.33331 17.1667C9.05998 17.1667 8.83331 17.3933 8.83331 17.6667V18C8.83331 20.94 9.72665 21.8333 12.6666 21.8333H14.1666V20.3333C14.1666 20.06 14.3933 19.8333 14.6666 19.8333C14.94 19.8333 15.1666 20.06 15.1666 20.3333V21.8333H19.3333C22.2733 21.8333 23.1666 20.94 23.1666 18C23.1666 17.7267 22.94 17.5 22.6666 17.5C22.0266 17.5 21.5 16.9733 21.5 16.3333C21.5 15.6933 22.0266 15.1667 22.6666 15.1667ZM15.1666 17.4467C15.1666 17.72 14.94 17.9467 14.6666 17.9467C14.3933 17.9467 14.1666 17.72 14.1666 17.4467V14.5533C14.1666 14.28 14.3933 14.0533 14.6666 14.0533C14.94 14.0533 15.1666 14.28 15.1666 14.5533V17.4467Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-center px-5 pt-3 ">
                <p className="text-center	text-sm">
                  Generate <br />
                  Voucher
                </p>
              </div>
            </div>

            <div className="min-w-[120px] mr-3 md:mr-6 py-8 border hover:border-[#017189] rounded-lg hover:bg-[#edf7f7] hover:shadow-md border-[#F1F5F9] ">
              <div className="px-auto text-center flex items-center justify-center	">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                    fill="#FFCB00"
                  />
                  <path
                    d="M19.3334 10.3333H12.6667C10.6667 10.3333 9.33337 11.3333 9.33337 13.6667V18.3333C9.33337 20.6667 10.6667 21.6667 12.6667 21.6667H19.3334C21.3334 21.6667 22.6667 20.6667 22.6667 18.3333V13.6667C22.6667 11.3333 21.3334 10.3333 19.3334 10.3333ZM12.1667 17.6667C12.1667 17.94 11.94 18.1667 11.6667 18.1667C11.3934 18.1667 11.1667 17.94 11.1667 17.6667V14.3333C11.1667 14.06 11.3934 13.8333 11.6667 13.8333C11.94 13.8333 12.1667 14.06 12.1667 14.3333V17.6667ZM16 18C14.8934 18 14 17.1067 14 16C14 14.8933 14.8934 14 16 14C17.1067 14 18 14.8933 18 16C18 17.1067 17.1067 18 16 18ZM20.8334 17.6667C20.8334 17.94 20.6067 18.1667 20.3334 18.1667C20.06 18.1667 19.8334 17.94 19.8334 17.6667V14.3333C19.8334 14.06 20.06 13.8333 20.3334 13.8333C20.6067 13.8333 20.8334 14.06 20.8334 14.3333V17.6667Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-center px-5 pt-3 ">
                <p className="text-center	text-sm">
                  Mobile <br /> Money
                </p>
              </div>
            </div>
            <div className="min-w-[120px] mr-3 md:mr-6 py-8 border hover:border-[#017189] rounded-lg hover:bg-[#edf7f7] hover:shadow-md border-[#F1F5F9] ">
              <div className="px-auto text-center flex items-center justify-center	">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                    fill="#F43F5E"
                  />
                  <path
                    d="M20.7134 17.4933C20.5201 17.6867 20.2134 17.6867 20.0267 17.4933C19.8334 17.3 19.8334 16.9933 20.0267 16.8067C21.3601 15.4733 21.3601 13.3067 20.0267 11.98C18.6934 10.6533 16.5267 10.6467 15.2001 11.98C13.8734 13.3133 13.8667 15.48 15.2001 16.8067C15.3934 17 15.3934 17.3067 15.2001 17.4933C15.0067 17.6867 14.7001 17.6867 14.5134 17.4933C12.8001 15.78 12.8001 12.9933 14.5134 11.2867C16.2267 9.58 19.0134 9.57333 20.7201 11.2867C22.4267 13 22.4267 15.78 20.7134 17.4933Z"
                    fill="white"
                  />
                  <path
                    d="M11.2867 14.5067C11.48 14.3133 11.7867 14.3133 11.9734 14.5067C12.1667 14.7 12.1667 15.0067 11.9734 15.1933C10.64 16.5267 10.64 18.6933 11.9734 20.02C13.3067 21.3467 15.4734 21.3533 16.8 20.02C18.1267 18.6867 18.1334 16.52 16.8 15.1933C16.6067 15 16.6067 14.6933 16.8 14.5067C16.9934 14.3133 17.3 14.3133 17.4867 14.5067C19.2 16.22 19.2 19.0067 17.4867 20.7133C15.7734 22.42 12.9867 22.4267 11.28 20.7133C9.57336 19 9.57336 16.22 11.2867 14.5067Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-center px-5 pt-3 ">
                <p className="text-center	text-sm">
                  Payment <br /> Link
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*chart*/}
      <Activity />
    </div>
  );
};

export default Dashboard;
