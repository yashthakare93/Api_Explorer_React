import { Sidebar } from "flowbite-react";
import { HiOutlineOfficeBuilding, HiOutlineCollection, HiOutlineCode, HiOutlineCloud, HiOutlineClock } from "react-icons/hi";

export function Sidebars() {
  return (
    <Sidebar aria-label="Default sidebar example" className="bg-gray-900 text-white border-r-2 border-black px-6">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiOutlineOfficeBuilding} className="text-white hover:bg-gray-800">
            Workspace
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiOutlineCollection} className="text-white hover:bg-gray-800">
            Collections
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiOutlineCode} className="text-white hover:bg-gray-800">
            APIs
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiOutlineCloud} className="text-white hover:bg-gray-800">
            Environment
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiOutlineClock} className="text-white hover:bg-gray-800">
            History
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
