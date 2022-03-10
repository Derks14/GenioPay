import { NavLink, useLocation } from "react-router-dom";
import Search from "../components/search";

const Sidebar = () => {

  const { pathname } = useLocation();

  const toggleNav = () => {
    const sidebar = document.getElementById('mobileSideBar');
    sidebar.classList.toggle('-translate-x-full');
    document.body.classList.toggle('overflow-hidden');

  };
  // useEffect(() => {}, [pathname]);
  return (
    <aside className="bg-[#017189] h-screen md:h-full">
      <div className="mx-6 pt-4 md:pt-0">
        {/*logo*/}
        <div className="hidden md:block">
          <div className="flex items-center justify-center py-8">
            <a><img height="42px" width="188px" src="https://i.ibb.co/5LYptZ7/logo.png" /></a>
          </div>
        </div>


        {/*pay*/}
        <div className="hidden md:block">
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

        {/*Search bar*/}
        <div className="md:hidden w-full">
          <div className="flex items-center justify-between">
            <Search />
            <div>
              <button onClick={() => toggleNav()} className="text-white p-1.5 hover:bg-[#2B899D] bg-[#2B899D] focus:bg-[#2B899D] rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

          </div>
        </div>



        {/*  navlinks*/}
        <div>
          <ul className="mt-8">
            <li>
              {pathname.includes("/dashboard")  && <NavLink to="/dashboard"
                       className="flex items-center text-[#017189] w-full bg-white px-6 py-4 rounded-lg font-bold my-2">
                <span className="mr-4">
                  <svg width="24" height="25" className=" text-[#017189]" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 8.56096V4.02095C22 2.61095 21.36 2.04095 19.77 2.04095H15.73C14.14 2.04095 13.5 2.61095 13.5 4.02095V8.55095C13.5 9.97095 14.14 10.531 15.73 10.531H19.77C21.36 10.541 22 9.97096 22 8.56096Z" fill="#017189"/>
<path d="M22 19.811V15.771C22 14.181 21.36 13.541 19.77 13.541H15.73C14.14 13.541 13.5 14.181 13.5 15.771V19.811C13.5 21.401 14.14 22.041 15.73 22.041H19.77C21.36 22.041 22 21.401 22 19.811Z" fill="#017189"/>
<path d="M10.5 8.56096V4.02095C10.5 2.61095 9.86 2.04095 8.27 2.04095H4.23C2.64 2.04095 2 2.61095 2 4.02095V8.55095C2 9.97095 2.64 10.531 4.23 10.531H8.27C9.86 10.541 10.5 9.97096 10.5 8.56096Z" fill="#017189"/>
<path d="M10.5 19.811V15.771C10.5 14.181 9.86 13.541 8.27 13.541H4.23C2.64 13.541 2 14.181 2 15.771V19.811C2 21.401 2.64 22.041 4.23 22.041H8.27C9.86 22.041 10.5 21.401 10.5 19.811Z" fill="#017189"/>
</svg>


                </span>
                Dashboard
              </NavLink>}

              { !pathname.includes("/dashboard") && <NavLink to="/dashboard" className="flex items-center hover:text-[#017189] hover:w-full hover:bg-white hover:rounded-lg font-bold text-sm my-2 text-white py-4 px-6">
                <span className="mr-4">
                  <svg width="16" height="17" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 8.56096V4.02095C22 2.61095 21.36 2.04095 19.77 2.04095H15.73C14.14 2.04095 13.5 2.61095 13.5 4.02095V8.55095C13.5 9.97095 14.14 10.531 15.73 10.531H19.77C21.36 10.541 22 9.97096 22 8.56096Z" fill="white"/>
      <path d="M22 19.811V15.771C22 14.181 21.36 13.541 19.77 13.541H15.73C14.14 13.541 13.5 14.181 13.5 15.771V19.811C13.5 21.401 14.14 22.041 15.73 22.041H19.77C21.36 22.041 22 21.401 22 19.811Z" fill="white"/>
      <path d="M10.5 8.56096V4.02095C10.5 2.61095 9.86 2.04095 8.27 2.04095H4.23C2.64 2.04095 2 2.61095 2 4.02095V8.55095C2 9.97095 2.64 10.531 4.23 10.531H8.27C9.86 10.541 10.5 9.97096 10.5 8.56096Z" fill="white"/>
      <path d="M10.5 19.811V15.771C10.5 14.181 9.86 13.541 8.27 13.541H4.23C2.64 13.541 2 14.181 2 15.771V19.811C2 21.401 2.64 22.041 4.23 22.041H8.27C9.86 22.041 10.5 21.401 10.5 19.811Z" fill="white"/>
      </svg>

                </span>
                Dashboard
              </NavLink>}

            </li>
            <li>
              {pathname.includes("/wallet") && <NavLink to="/wallet"
                       className="flex items-center text-[#017189] w-full bg-white px-6 shadow-sm py-4 my-2 rounded-lg font-bold hover:text-[#017189] hover:w-full hover:bg-white hover:rounded-lg">
                <span className="mr-4">
<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.011V13.071C22 13.621 21.56 14.071 21 14.091H19.04C17.96 14.091 16.97 13.301 16.88 12.221C16.82 11.591 17.06 11.001 17.48 10.591C17.85 10.211 18.36 9.99095 18.92 9.99095H21C21.56 10.011 22 10.461 22 11.011Z" fill="#017189"/>
<path d="M20.47 15.591H19.04C17.14 15.591 15.54 14.161 15.38 12.341C15.29 11.301 15.67 10.261 16.43 9.52095C17.07 8.86095 17.96 8.49095 18.92 8.49095H20.47C20.76 8.49095 21 8.25095 20.97 7.96095C20.75 5.53095 19.14 3.87095 16.75 3.59095C16.51 3.55095 16.26 3.54095 16 3.54095H7C6.72 3.54095 6.45 3.56095 6.19 3.60095C3.64 3.92095 2 5.82095 2 8.54095V15.541C2 18.301 4.24 20.541 7 20.541H16C18.8 20.541 20.73 18.791 20.97 16.121C21 15.831 20.76 15.591 20.47 15.591ZM13 9.79095H7C6.59 9.79095 6.25 9.45095 6.25 9.04095C6.25 8.63095 6.59 8.29095 7 8.29095H13C13.41 8.29095 13.75 8.63095 13.75 9.04095C13.75 9.45095 13.41 9.79095 13 9.79095Z" fill="#017189"/>
</svg>

                </span>
                Wallet
              </NavLink>}

              { !pathname.includes("/wallet") && <NavLink to="/wallet" className="flex items-center font-bold my-2 text-sm text-white py-4 px-6">
                <span className="mr-4">
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.66667 6.54095H4.66667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.6667 7.85427V9.22765C14.6667 9.59431 14.3734 9.89428 14 9.90762H12.6933C11.9733 9.90762 11.3134 9.38095 11.2534 8.66095C11.2134 8.24095 11.3733 7.84762 11.6533 7.57428C11.9 7.32095 12.24 7.1743 12.6133 7.1743H14C14.3734 7.18763 14.6667 7.48761 14.6667 7.85427Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.6533 7.57427C11.3733 7.84761 11.2133 8.24094 11.2533 8.66094C11.3133 9.38094 11.9733 9.90761 12.6933 9.90761H14V10.8743C14 12.8743 12.6667 14.2076 10.6667 14.2076H4.66667C2.66667 14.2076 1.33333 12.8743 1.33333 10.8743V6.20762C1.33333 4.39428 2.42667 3.12761 4.12667 2.91428C4.3 2.88761 4.48 2.87428 4.66667 2.87428H10.6667C10.84 2.87428 11.0067 2.88094 11.1667 2.90761C12.8867 3.10761 14 4.38095 14 6.20762V7.17429H12.6133C12.24 7.17429 11.9 7.32094 11.6533 7.57427Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </span>
                Wallet
              </NavLink>}

            </li>
            <li>
              {pathname.includes("/cards") && <NavLink to="/cards"
                       className="flex items-center text-[#017189] w-full bg-white px-6 py-4 rounded-lg my-2 font-bold hover:text-[#017189] hover:w-full hover:bg-white hover:rounded-lg">
                <span className="mr-4">
                  <svg  viewBox="0 0 16 17" fill="none" width="24" height="25" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.33333 6.21092H14.6667" stroke="#017189" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 11.5443H5.33333" stroke="#017189" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7 11.5443H9.66667" stroke="#017189" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4.29333 2.87759H11.7C14.0733 2.87759 14.6667 3.46426 14.6667 5.80426V11.2776C14.6667 13.6176 14.0733 14.2043 11.7067 14.2043H4.29333C1.92667 14.2109 1.33333 13.6243 1.33333 11.2843V5.80426C1.33333 3.46426 1.92667 2.87759 4.29333 2.87759Z" stroke="#017189" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                </span>
                Cards
              </NavLink>}

              { !pathname.includes("/cards") && <NavLink to="/cards" className="flex items-center font-bold text-sm text-white my-2 py-4 px-6 hover:text-[#017189] hover:w-full hover:bg-white hover:rounded-lg">
                <span className="mr-4">
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.33333 6.21092H14.6667" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 11.5443H5.33333" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 11.5443H9.66667" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.29333 2.87759H11.7C14.0733 2.87759 14.6667 3.46426 14.6667 5.80426V11.2776C14.6667 13.6176 14.0733 14.2043 11.7067 14.2043H4.29333C1.92667 14.2109 1.33333 13.6243 1.33333 11.2843V5.80426C1.33333 3.46426 1.92667 2.87759 4.29333 2.87759Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </span>
                Cards
              </NavLink>}

            </li>
            <li>
              {pathname.includes("/fx-center") && <NavLink to="/fx-center"
                       className="flex items-center text-[#017189] w-full bg-white px-6 py-4 rounded-lg my-2 font-bold ">
                <span className="mr-4">

                  <svg width="24" height="25" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.78125 10.0942C5.78125 10.9542 6.44125 11.6475 7.26125 11.6475H8.93458C9.64792 11.6475 10.2279 11.0408 10.2279 10.2942C10.2279 9.48085 9.87458 9.19418 9.34792 9.00751L6.66125 8.07418C6.13458 7.88751 5.78125 7.60085 5.78125 6.78751C5.78125 6.04085 6.36125 5.43418 7.07458 5.43418H8.74792C9.56792 5.43418 10.2279 6.12751 10.2279 6.98751" stroke="#017189" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 4.54095V12.541" stroke="#017189" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 15.2076H6C2.66667 15.2076 1.33333 13.8743 1.33333 10.541V6.54096C1.33333 3.20762 2.66667 1.87429 6 1.87429H10C13.3333 1.87429 14.6667 3.20762 14.6667 6.54096V10.541C14.6667 13.8743 13.3333 15.2076 10 15.2076Z" stroke="#017189" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


                </span>
                FX Centre
              </NavLink>}

              { !pathname.includes("/fx-center") && <NavLink to="/fx-center" className="flex items-center font-bold text-sm text-white my-2 py-4 px-6 hover:text-[#017189] hover:w-full hover:bg-white hover:rounded-lg">
                <span className="mr-4">
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.78125 10.0942C5.78125 10.9542 6.44125 11.6475 7.26125 11.6475H8.93458C9.64792 11.6475 10.2279 11.0408 10.2279 10.2942C10.2279 9.48085 9.87458 9.19418 9.34792 9.00751L6.66125 8.07418C6.13458 7.88751 5.78125 7.60085 5.78125 6.78751C5.78125 6.04085 6.36125 5.43418 7.07458 5.43418H8.74792C9.56792 5.43418 10.2279 6.12751 10.2279 6.98751" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 4.54095V12.541" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 15.2076H6C2.66667 15.2076 1.33333 13.8743 1.33333 10.541V6.54096C1.33333 3.20762 2.66667 1.87429 6 1.87429H10C13.3333 1.87429 14.6667 3.20762 14.6667 6.54096V10.541C14.6667 13.8743 13.3333 15.2076 10 15.2076Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </span>
                FX Centre
              </NavLink>}

            </li>
            <li>
              {pathname.includes("/beneficiaries") && <NavLink to="/beneficiaries"
                       className="flex items-center text-[#017189] w-full bg-white px-6 py-4 rounded-lg my-2 font-bold ">
                <span className="mr-4">
<svg width="24" height="25" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.10667 7.78762C6.04 7.78095 5.96 7.78095 5.88667 7.78762C4.3 7.73429 3.04 6.43429 3.04 4.83429C3.04 3.20095 4.36 1.87429 6 1.87429C7.63333 1.87429 8.96 3.20095 8.96 4.83429C8.95333 6.43429 7.69333 7.73429 6.10667 7.78762Z" stroke="#017189" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.94 3.20762C12.2333 3.20762 13.2733 4.25429 13.2733 5.54096C13.2733 6.80096 12.2733 7.82762 11.0267 7.87429C10.9733 7.86762 10.9133 7.86762 10.8533 7.87429" stroke="#017189" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.77333 10.2476C1.16 11.3276 1.16 13.0876 2.77333 14.161C4.60666 15.3876 7.61333 15.3876 9.44666 14.161C11.06 13.081 11.06 11.321 9.44666 10.2476C7.62 9.02762 4.61333 9.02762 2.77333 10.2476Z" stroke="#017189" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.2267 13.8743C12.7067 13.7743 13.16 13.581 13.5333 13.2943C14.5733 12.5143 14.5733 11.2276 13.5333 10.4476C13.1667 10.1676 12.72 9.98095 12.2467 9.87429" stroke="#017189" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                </span>
                Beneficiaries
              </NavLink>}

              { !pathname.includes("/beneficiaries") && <NavLink to="/beneficiaries" className="flex items-center font-bold text-sm text-white my-2 py-4 px-6">
                <span className="mr-4">
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.10667 7.78762C6.04 7.78095 5.96 7.78095 5.88667 7.78762C4.3 7.73429 3.04 6.43429 3.04 4.83429C3.04 3.20095 4.36 1.87429 6 1.87429C7.63333 1.87429 8.96 3.20095 8.96 4.83429C8.95333 6.43429 7.69333 7.73429 6.10667 7.78762Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.94 3.20762C12.2333 3.20762 13.2733 4.25429 13.2733 5.54096C13.2733 6.80096 12.2733 7.82762 11.0267 7.87429C10.9733 7.86762 10.9133 7.86762 10.8533 7.87429" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.77333 10.2476C1.16 11.3276 1.16 13.0876 2.77333 14.161C4.60666 15.3876 7.61333 15.3876 9.44666 14.161C11.06 13.081 11.06 11.321 9.44666 10.2476C7.62 9.02762 4.61333 9.02762 2.77333 10.2476Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.2267 13.8743C12.7067 13.7743 13.16 13.581 13.5333 13.2943C14.5733 12.5143 14.5733 11.2276 13.5333 10.4476C13.1667 10.1676 12.72 9.98095 12.2467 9.87429" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                </span>
                Beneficiaries
              </NavLink>}

            </li>
            <li>
              {pathname.includes("/perks") && <NavLink to="/perks"
                       className="flex items-center text-[#017189] w-full bg-white px-6 py-4 rounded-lg my-2 font-bold ">
                <span className="mr-4">

                  <svg width="24" height="25" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.77993 10.741L5.79993 13.761C7.03993 15.001 9.05326 15.001 10.2999 13.761L13.2266 10.8343C14.4666 9.59432 14.4666 7.58099 13.2266 6.33432L10.1999 3.32099C9.5666 2.68765 8.69326 2.34765 7.79993 2.39432L4.4666 2.55432C3.13326 2.61432 2.07326 3.67432 2.0066 5.00099L1.8466 8.33432C1.8066 9.23432 2.1466 10.1077 2.77993 10.741Z" stroke="#017189" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.33326 8.54099C7.25374 8.54099 7.99993 7.79479 7.99993 6.87432C7.99993 5.95385 7.25374 5.20765 6.33326 5.20765C5.41279 5.20765 4.6666 5.95385 4.6666 6.87432C4.6666 7.79479 5.41279 8.54099 6.33326 8.54099Z" stroke="#017189" strokeWidth="1.5" strokeLinecap="round"/>
</svg>


                </span>
                Perks
              </NavLink>}

              { !pathname.includes("/perks") && <NavLink to="/perks" className="flex items-center font-bold text-sm text-white my-2 py-4 px-6">
                <span className="mr-4">
<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.77993 10.741L5.79993 13.761C7.03993 15.001 9.05326 15.001 10.2999 13.761L13.2266 10.8343C14.4666 9.59432 14.4666 7.58099 13.2266 6.33432L10.1999 3.32099C9.5666 2.68765 8.69326 2.34765 7.79993 2.39432L4.4666 2.55432C3.13326 2.61432 2.07326 3.67432 2.0066 5.00099L1.8466 8.33432C1.8066 9.23432 2.1466 10.1077 2.77993 10.741Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.33326 8.54099C7.25374 8.54099 7.99993 7.79479 7.99993 6.87432C7.99993 5.95385 7.25374 5.20765 6.33326 5.20765C5.41279 5.20765 4.6666 5.95385 4.6666 6.87432C4.6666 7.79479 5.41279 8.54099 6.33326 8.54099Z" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
</svg>


                </span>
                Perks
              </NavLink>}

            </li>
          </ul>
        </div>


      {/*  invite friends*/}
        <div className=" mt-2 md:mt-4">
          <div className="bg-[#FFF5E9] rounded-lg py-6 px-8">
            <div className="flex justify-between">
              <div className="mr-4">
                <img width="50" height="50" src="https://i.ibb.co/ygXWTT5/5143061-1.png"/>
              </div>
              <div>
                <p className="font-bold">Refer Friends</p>
                <p className="text-sm">
                  Use the below link to invite friends
                </p>
              </div>
            </div>
            <div className="flex  items-center justify-center w-full mt-4">
              <button className="w-full hover:bg-[#2B899D] text-white text-base rounded-lg font-bold bg-[#017189]  py-4">
                Invite Friends
              </button>
            </div>
          </div>
        </div>


      </div>
    </aside>
  )
}

export default Sidebar;
