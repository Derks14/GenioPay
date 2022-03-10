const InactiveWallet = () => {
  return (
    <div>
      <ul>
        <li className="my-4">
          <div className="flex items-center py-3 hover:bg-[#EEF7F9]  focus:bg-[#EEF7F9] rounded-md px-4">
            <div className="mr-4">
              <img
                width="52"
                height="52"
                className="rounded-full"
                src="https://i.ibb.co/hD4WtCM/Mask-Group.png"
              />
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
          <div className="flex items-center py-2 hover:bg-[#EEF7F9]  focus:bg-[#EEF7F9] rounded-md px-4">
            <div className="mr-4">
              <img
                width="52"
                height="52"
                className="rounded-full"
                src="https://i.ibb.co/KK4Rb5y/flags-1.png"
              />
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
  );
};
