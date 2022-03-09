const MobileNav = () => {
  const toggleNav = () => {
    const sidebar = document.getElementById('mobileSideBar');
    sidebar.classList.toggle('-translate-x-full');
    document.body.classList.toggle('overflow-hidden');

  };

  const toggleUserDropdown = () => {
    const dropdown = document.getElementById('userDropDown');
    dropdown.classList.toggle('hidden')
  }
  return (
    <nav className="w-full bg-[#017189] ">
      <div className="py-4 px-4">
        <div className="flex items-center justify-between">
          <div>
            <button onClick={() => toggleNav()} className="text-white p-1.5 hover:bg-[#2B899D] bg-[#2B899D] focus:bg-[#2B899D] rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </button>
          </div>
          <div>
            <a><img height="42px" width="188px" src="https://i.ibb.co/5LYptZ7/logo.png" /></a>
          </div>
          <div>

            <div className="relative inline-block">
              <button onClick={()=> toggleUserDropdown()} className="text-white p-1.5 hover:bg-[#2B899D] bg-[#2B899D] focus:bg-[#2B899D] rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              <div
                id="userDropDown"
                className="absolute   origin-top-right  mt-6 ring-1 ring-black ring-opacity-5 focus:outline-none right-0 z-10 shadow-md w-72 bg-white rounded-lg"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="my-4 px-4">
                  <div className="w-full">
                    <div className="flex w-full items-center ">
                      <div className="w-[52px] h-[52px] rounded-full relative mr-4">
                        <span className="absolute bottom-0 right-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd"
        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clip-rule="evenodd" />
</svg>
                      </span>
                        <img className="rounded-full w-[48px] h-[48px]" src="https://c.ndtvimg.com/2022-02/rkgbh19_cristiano-ronaldo-afp_625x300_25_February_22.jpg?im=FaceCrop,algorithm=dnn,width=806,height=605"  />

                      </div>
                      <div>
                        <p className="mr-auto font-semibold text-lg">Huss Smith</p>
                        <div className="flex text-sm items-center">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.7063 13.1424V14.1077C11.7063 14.4398 11.5314 14.7553 11.2362 14.9075C10.8948 15.0835 10.4875 15.0172 10.2202 14.7501L9.58849 14.1182L8.99438 14.7123L10.4699 16.1877C10.6342 16.3522 10.7248 16.5708 10.7248 16.8033V23.2351C10.7248 23.6574 11.0672 23.9998 11.4895 23.9998H12.7633C13.1856 23.9998 13.528 23.6574 13.528 23.2351V17.7704C13.528 17.5379 13.6185 17.3193 13.7829 17.1548L15.0058 15.932L14.4117 15.3379L14.0326 15.717C13.7654 15.9839 13.3587 16.0501 13.0173 15.8748C12.7217 15.7232 12.5465 15.4078 12.5465 15.0757V13.1424H11.7063Z" fill="#4D7C0F"/>
                            <path d="M23.3883 9.87604C23.3883 7.06877 21.2108 4.76065 18.4561 4.55232C17.4947 1.84323 14.9222 0 11.9999 0C9.07755 0 6.50511 1.84323 5.54373 4.5524C2.78899 4.76073 0.61145 7.06885 0.61145 9.87612C0.61145 11.3084 1.17921 12.6621 2.1847 13.661C2.14422 13.9097 2.12385 14.1613 2.12385 14.4131C2.12385 16.9997 4.22818 19.104 6.81468 19.104H9.60183V16.908L8.02188 15.3281C7.85751 15.1638 7.76684 14.9451 7.76684 14.7125C7.76684 14.4798 7.85743 14.2612 8.02204 14.0968L8.97274 13.146C9.31222 12.8067 9.86446 12.8067 10.2039 13.146L10.5833 13.5255V12.8903C10.5833 12.4103 10.9739 12.0197 11.4539 12.0197H12.7986C13.2786 12.0197 13.6691 12.4102 13.6691 12.8903V14.4925L13.7959 14.3657C13.9603 14.2013 14.179 14.1107 14.4115 14.1107C14.644 14.1106 14.8627 14.2012 15.0271 14.3657L15.9779 15.3164C15.9779 15.3164 15.9779 15.3164 15.978 15.3164C16.3174 15.6559 16.3174 16.2082 15.978 16.5476L14.6506 17.875V19.104H17.1852C19.7717 19.104 21.876 16.9997 21.876 14.4131C21.876 14.1613 21.8557 13.9097 21.8152 13.661C22.8206 12.662 23.3883 11.3084 23.3883 9.87604Z" fill="#15803D"/>
                          </svg>
                          <p className="mx-2">0 planted</p>

                        </div>                      </div>
{/*                      <span className="">*/}
{/*                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24"*/}
{/*                             stroke="currentColor" strokeWidth="2">*/}
{/*  <path strokeLinecap="round" strokeLinejoin="round"*/}
{/*        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />*/}
{/*</svg>*/}
{/*                      </span>*/}
                    </div>

                    <hr className="my-4"/>
                    <div className="">
                      <div className="rounded-lg text-white bg-[#2B899D]   py-2 px-4">
                        <div className="divide-y divide-[#EAFBFF]">
                          <div className="flex items-center p-2">
                            <div className="mr-3">
                              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.540955" width="32" height="32" rx="8" fill="white"/>
                                <rect width="16" height="16" transform="translate(8 8.54095)" fill="white"/>
                                <path d="M21.3333 12.2076C21.8856 12.2076 22.3333 11.7599 22.3333 11.2076C22.3333 10.6553 21.8856 10.2076 21.3333 10.2076V12.2076ZM11.6667 12.2076L21.3333 12.2076V10.2076L11.6667 10.2076V12.2076ZM11.6667 15.541L17 15.541V13.541L11.6667 13.541V15.541ZM11 12.8743C11 12.5061 11.2985 12.2076 11.6667 12.2076V10.2076C10.1939 10.2076 9 11.4015 9 12.8743H11ZM9 12.8743C9 14.347 10.1939 15.541 11.6667 15.541V13.541C11.2985 13.541 11 13.2425 11 12.8743H9Z" fill="#14B8A6"/>
                                <path d="M11 16.541V12.8743H9V16.541H11Z" fill="#14B8A6"/>
                                <path d="M10 14.041H9.5V14.541L9.5 20.541L9.5 20.5739C9.49997 21.0171 9.49995 21.399 9.54107 21.7049C9.58514 22.0326 9.68451 22.3468 9.93934 22.6016L10.2929 22.2481L9.93934 22.6016C10.1942 22.8564 10.5083 22.9558 10.8361 22.9999C11.1419 23.041 11.5238 23.041 11.9671 23.041L12 23.041H20C20.011 23.041 20.022 23.041 20.0329 23.041C20.4762 23.041 20.8581 23.041 21.1639 22.9999C21.4917 22.9558 21.8058 22.8564 22.0607 22.6016C22.3155 22.3468 22.4149 22.0326 22.4589 21.7049C22.5 21.399 22.5 21.0171 22.5 20.5739C22.5 20.5629 22.5 20.552 22.5 20.541V20.041H22H20C19.1716 20.041 18.5 19.3694 18.5 18.541C18.5 17.7125 19.1716 17.041 20 17.041H22H22.5V16.541L22.5 16.508C22.5 16.0648 22.5 15.6829 22.4589 15.3771C22.4149 15.0493 22.3155 14.7351 22.0607 14.4803C21.8058 14.2255 21.4917 14.1261 21.1639 14.082C20.8581 14.0409 20.4762 14.0409 20.0329 14.041L20 14.041L10 14.041Z" fill="#14B8A6" stroke="#14B8A6"/>
                              </svg>

                            </div>
                            <div className="mr-auto">
                              <p className="text-sm">
                                Wallet Balance
                              </p>
                              <p className="font-bold">$15,001.00</p>
                            </div>
                            <div>
                              <button className="focus:bg-[#afc4c8] rounded-full p-1">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M14.1667 6.64097C12.6267 4.22097 10.3733 2.82764 8 2.82764C6.81333 2.82764 5.66 3.1743 4.60666 3.82097C3.55333 4.4743 2.60666 5.42764 1.83333 6.64097C1.16666 7.68764 1.16666 9.38764 1.83333 10.4343C3.37333 12.861 5.62666 14.2476 8 14.2476C9.18666 14.2476 10.34 13.901 11.3933 13.2543C12.4467 12.601 13.3933 11.6476 14.1667 10.4343C14.8333 9.3943 14.8333 7.68764 14.1667 6.64097ZM8 11.2343C6.50666 11.2343 5.30666 10.0276 5.30666 8.54097C5.30666 7.0543 6.50666 5.84764 8 5.84764C9.49333 5.84764 10.6933 7.0543 10.6933 8.54097C10.6933 10.0276 9.49333 11.2343 8 11.2343Z"
                                    fill="white" />
                                  <path
                                    d="M8.00001 6.63428C6.95334 6.63428 6.10001 7.48761 6.10001 8.54094C6.10001 9.58761 6.95334 10.4409 8.00001 10.4409C9.04667 10.4409 9.90667 9.58761 9.90667 8.54094C9.90667 7.49428 9.04667 6.63428 8.00001 6.63428Z"
                                    fill="white" />
                                </svg>
                              </button>

                            </div>
                          </div>
                          <div className="flex items-center p-2">
                            <div className="mr-3">
                              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.540955" width="32" height="32" rx="8" fill="white"/>
                                <path d="M11.8267 19.2076C11.9 18.881 11.7667 18.4143 11.5333 18.181L9.91333 16.561C9.40667 16.0543 9.20667 15.5143 9.35333 15.0476C9.50667 14.581 9.98 14.261 10.6867 14.141L12.7667 13.7943C13.0667 13.741 13.4333 13.4743 13.5733 13.201L14.72 10.901C15.0533 10.241 15.5067 9.8743 16 9.8743C16.4933 9.8743 16.9467 10.241 17.28 10.901L18.4267 13.201C18.5133 13.3743 18.6933 13.541 18.8867 13.6543L11.7067 20.8343C11.6133 20.9276 11.4533 20.841 11.48 20.7076L11.8267 19.2076Z" fill="#F59E0B"/>
                                <path d="M20.4667 18.181C20.2267 18.421 20.0933 18.881 20.1733 19.2076L20.6333 21.2143C20.8267 22.0476 20.7067 22.6743 20.2933 22.9743C20.1267 23.0943 19.9267 23.1543 19.6933 23.1543C19.3533 23.1543 18.9533 23.0276 18.5133 22.7676L16.56 21.6076C16.2533 21.4276 15.7467 21.4276 15.44 21.6076L13.4867 22.7676C12.7467 23.201 12.1133 23.2743 11.7067 22.9743C11.5533 22.861 11.44 22.7076 11.3667 22.5076L19.4733 14.401C19.78 14.0943 20.2133 13.9543 20.6333 14.0276L21.3067 14.141C22.0133 14.261 22.4867 14.581 22.64 15.0476C22.7867 15.5143 22.5867 16.0543 22.08 16.561L20.4667 18.181Z" fill="#F59E0B"/>
                              </svg>


                            </div>
                            <div className="mr-auto">
                              <p className="text-sm">
                                Awarded Points
                              </p>
                              <p className="font-bold">35</p>
                            </div>
                            <div>

                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-2 py-3 px-2">
                            <div className="col-span-1">
                              <button className=" rounded bg-red-200 py-2 w-full">
                                Pay-In
                              </button>
                            </div>
                            <div className="col-span-1">
                              <button className="bg-white py-2 text-[#2B899D] rounded w-full">
                                Pay-Out
                              </button>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                    <div className="my-4">
                      <button className="text-center hover:bg-red-50 text-red-500 w-full py-1.5 rounded-lg border-red-500 border">
                        Logout
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </nav>
  )
}
export default MobileNav;
