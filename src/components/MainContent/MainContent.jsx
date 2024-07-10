import { useState } from 'react';
import { MdHttp } from "react-icons/md";
import RequestEditor from "./RequestEditor";
import Tab from "./Tab";
import ResponseDisplay from "./ResponseDisplay";
// import { Banners } from './Banner';

const MainContent = () => {
  const [response, setResponse] = useState(null);

  return (
    <div className="p-6 overflow-auto max-w-full">
      {/* <Banners /> */}
      <div className="flex flex-row items-center gap-2 text-white">
        <MdHttp className="text-4xl border-2 border-gray-900 px-1 rounded-lg" />
        <p>Untitled Request</p>
      </div>
      <div>
        <RequestEditor setResponse={setResponse} />
        <Tab />
        {response && (
          <>
            <h3 className='text-white'>Response</h3>
            <ResponseDisplay response={response} />
          </>
        )}
      </div>
    </div>
  );
};

export default MainContent;
