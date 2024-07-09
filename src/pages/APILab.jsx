import { Header } from "../components/MainContent/Header";
import MainContent from "../components/MainContent/MainContent";
import { Sidebars } from "../components/Sidebars";

const APILab = () => {
  return (
    <div className=" min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebars />
        <div className="flex-1 bg-gray-950 ">
          <MainContent/>
        </div>
      </div>
    </div>
  );
}

export default APILab;
