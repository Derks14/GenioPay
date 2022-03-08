import Sidebar from "../sidebar/sidebar";
import Nav from "../nav/nav";

const Core = () => {
  return (
    <div className="h-full">
      <div className="grid h-full bg-white grid-cols-5 overflow-hidden">
        <div className="col-span-1 ">
          <Sidebar/>
        </div>
        <div className="col-span-4">
          <div className="sticky top-0">
            <Nav/>
          </div>
          <div className=" overflow-auto">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Core;
