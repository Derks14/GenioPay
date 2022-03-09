import ApexCharts from 'apexcharts'
import { useEffect } from "react";

const Activity = () => {
  useEffect(() => {
    setChart();
  });

  const setChart = () => {
    const options = {
      chart: {
        type: 'area',
        height: 350,
        toolbar: {
          show: false
        }
      },
      series: [{
        name: 'sales',
        data: [ 4, 3, 3.5, 3, 2.5, 3.5, 3]
      }],
      colors: ['#017189'],
      grid: {
        xaxis: {
          lines: {
            show: true,
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        },       },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100]
        }
      },
      xaxis: {
        lines: {
          show: false
        },
        categories: ['Jan','Feb','Mar', 'Apr', 'May', 'Jun', 'Jul']
      }
    }

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  };
  return (
    <div>
      <div className="">

        <div>
          <div className="md:flex items-center justify-between">
            <div>
              <label className="flex items-center " htmlFor="activity">
                <p className="font-bold text-[21px] mr-4">Activity</p>
                <select className="text-[#017189] focus:outline-none px-4 py-1.5" placeholder="Month">
                  <option>Month</option>
                  <option>Week</option>
                  <option>Day</option>
                </select>
              </label>
            </div>
            <button className="text-[#017189] font-bold px-4 rounded-xl py-1.5 hover:bg-[#edf7f7] focus:bg-[#edf7f7]">View Transaction History</button>
          </div>
        </div>

        <div className="">
          <div className="flex w-full my-4 md:justify-end">
            <div className="mr-8">
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="rounded-2xl p-2 bg-[#F9FAFB]">
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.58667 12.6V11.22" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M8 12.6V9.84" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M11.4133 12.6V8.45333" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M11.4133 4.4L11.1067 4.76C9.40667 6.74667 7.12667 8.15334 4.58667 8.78667"
                            stroke="#55676B" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M9.46002 4.4H11.4134V6.34667" stroke="#55676B" strokeWidth="1.5" strokeLinecap="round"
                            strokeLinejoin="round" />
                      <path
                        d="M5.99998 15.1667H9.99998C13.3333 15.1667 14.6666 13.8333 14.6666 10.5V6.5C14.6666 3.16667 13.3333 1.83334 9.99998 1.83334H5.99998C2.66665 1.83334 1.33331 3.16667 1.33331 6.5V10.5C1.33331 13.8333 2.66665 15.1667 5.99998 15.1667Z"
                        stroke="#55676B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-[#2B4146] whitespace-nowrap">Total Transactions</p>
                  <p className="font-bold">$88,600.00</p>
                </div>
              </div>
            </div>
            <div className="mr-8">
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="rounded-2xl p-2 bg-[#F9FAFB]">
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.33337 12.1667L12.6667 2.83334" stroke="#16A34A" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3.33337 5.32V12.1667H10.18" stroke="#16A34A" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2.33337 15.1667H13.6667" stroke="#16A34A" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                  </div>
                </div>
                <div>
                  <p className="text-sm text-[#2B4146]">Pay-In</p>
                  <p className="font-bold">$4,600.00</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="rounded-2xl p-2 bg-[#F9FAFB]">
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.33337 15.1667H13.6667" stroke="#DC2626" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3.33337 2.83334L12.6667 12.1667" stroke="#DC2626" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3.33337 9.68V2.83334H10.18" stroke="#DC2626" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-[#2B4146]">Pay-Out</p>
                  <p className="font-bold">$45,600.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden ">
          <div id="chart" className="  ">

          </div>
        </div>

      </div>
    </div>
  )
}

export default Activity;
