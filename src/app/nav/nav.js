import { useState } from "react";
import Search from "../components/search";

const Nav = () => {
  const [name, setName] = useState('Huss Smith')
  return (
    <nav className="px-8">
      <div className="flex items-center py-4">
        <div className="mr-auto">
          <p className="text-3xl font-bold">Welcome, {name}</p>
        </div>

        <Search/>
        <div className="mx-6">
          <div className="flex items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.7063 13.1424V14.1077C11.7063 14.4398 11.5314 14.7553 11.2362 14.9075C10.8948 15.0835 10.4875 15.0172 10.2202 14.7501L9.58849 14.1182L8.99438 14.7123L10.4699 16.1877C10.6342 16.3522 10.7248 16.5708 10.7248 16.8033V23.2351C10.7248 23.6574 11.0672 23.9998 11.4895 23.9998H12.7633C13.1856 23.9998 13.528 23.6574 13.528 23.2351V17.7704C13.528 17.5379 13.6185 17.3193 13.7829 17.1548L15.0058 15.932L14.4117 15.3379L14.0326 15.717C13.7654 15.9839 13.3587 16.0501 13.0173 15.8748C12.7217 15.7232 12.5465 15.4078 12.5465 15.0757V13.1424H11.7063Z" fill="#4D7C0F"/>
              <path d="M23.3883 9.87604C23.3883 7.06877 21.2108 4.76065 18.4561 4.55232C17.4947 1.84323 14.9222 0 11.9999 0C9.07755 0 6.50511 1.84323 5.54373 4.5524C2.78899 4.76073 0.61145 7.06885 0.61145 9.87612C0.61145 11.3084 1.17921 12.6621 2.1847 13.661C2.14422 13.9097 2.12385 14.1613 2.12385 14.4131C2.12385 16.9997 4.22818 19.104 6.81468 19.104H9.60183V16.908L8.02188 15.3281C7.85751 15.1638 7.76684 14.9451 7.76684 14.7125C7.76684 14.4798 7.85743 14.2612 8.02204 14.0968L8.97274 13.146C9.31222 12.8067 9.86446 12.8067 10.2039 13.146L10.5833 13.5255V12.8903C10.5833 12.4103 10.9739 12.0197 11.4539 12.0197H12.7986C13.2786 12.0197 13.6691 12.4102 13.6691 12.8903V14.4925L13.7959 14.3657C13.9603 14.2013 14.179 14.1107 14.4115 14.1107C14.644 14.1106 14.8627 14.2012 15.0271 14.3657L15.9779 15.3164C15.9779 15.3164 15.9779 15.3164 15.978 15.3164C16.3174 15.6559 16.3174 16.2082 15.978 16.5476L14.6506 17.875V19.104H17.1852C19.7717 19.104 21.876 16.9997 21.876 14.4131C21.876 14.1613 21.8557 13.9097 21.8152 13.661C22.8206 12.662 23.3883 11.3084 23.3883 9.87604Z" fill="#15803D"/>
            </svg>
            <p className="mx-4">0 planted</p>

          </div>
        </div>

        <div className="mx-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.02 2.90997C8.70997 2.90997 6.01997 5.59997 6.01997 8.90997V11.8C6.01997 12.41 5.75997 13.34 5.44997 13.86L4.29997 15.77C3.58997 16.95 4.07997 18.26 5.37997 18.7C9.68997 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.90997C18.02 5.60997 15.32 2.90997 12.02 2.90997Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
            <path d="M13.87 3.2C13.56 3.11 13.24 3.04 12.91 3C11.95 2.88 11.03 2.95 10.17 3.2C10.46 2.46 11.18 1.94 12.02 1.94C12.86 1.94 13.58 2.46 13.87 3.2Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.90002 21.18C9.36002 20.64 9.02002 19.88 9.02002 19.06" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10"/>
          </svg>

        </div>

        <div className="ml-8 mr-2">
          <div className="flex items-center">
            <div className="mx-2">
              <img className="rounded-full w-[26px] h-[26px]" src="https://c.ndtvimg.com/2022-02/rkgbh19_cristiano-ronaldo-afp_625x300_25_February_22.jpg?im=FaceCrop,algorithm=dnn,width=806,height=605"  />
            </div>
            <div className="mx-2">
                  <p className="text-xs text-green-500 p-0 m-0">Verified</p>
                  <p>Verified</p>
            </div>
            <div className="mx-2">
              <button className="">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd" />
                </svg>

              </button>
            </div>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Nav;
