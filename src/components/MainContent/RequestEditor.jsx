import Button from "./Button";
import DropDownMenu from "./DropDownMenu";
import Input from "./Input";

const RequestEditor = () => {
  return (
    <div className="flex flex-col  md:flex-row gap-2 mt-4 items-center">
      <div className="flex-none">
        <DropDownMenu />
      </div>
      <div className="flex-1 md:flex-10">
        <Input />
      </div>
      <div className="flex-none">
        <Button />
      </div>
    </div>
  );
};

export default RequestEditor;
