import { MdHttp } from "react-icons/md";
import RequestEditor from "./RequestEditor";

const MainContent = () => {
  return (
    <div className="flex p-6">
      <div>
        <div className="flex flex-row items-center gap-2 text-white">
            <MdHttp className=" text-4xl border-2 border-gray-900 px-1 rounded-lg"/>
            <p>Untitled Request</p>
        </div>
        <div>
          <RequestEditor/>
        </div>
      </div>
    </div>
  )
}

export default MainContent
