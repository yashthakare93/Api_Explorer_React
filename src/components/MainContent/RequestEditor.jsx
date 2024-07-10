import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from "./Button";
import DropDownMenu from "./DropDownMenu";
import Input from "./Input";
import axios from 'axios';

const RequestEditor = ({ setResponse }) => {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");

  const handleSendRequest = async () => {
    try {
      console.log('Sending', method.toUpperCase(), 'request to:', url);
      const res = await axios({
        method: method.toLowerCase(),
        url: url,
      });
      setResponse(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResponse(null);
    }
  };

  return (
    <div className="flex flex-row gap-2 mt-4 items-center">
      <div className="flex-none">
        <DropDownMenu onSelect={setMethod} />
      </div>
      <div className="flex-1 md:flex-10">
        <Input value={url} onChange={setUrl} />
      </div>
      <div className="flex-none">
        <Button onClick={handleSendRequest} />
      </div>
    </div>
  );
};

RequestEditor.propTypes = {
  setResponse: PropTypes.func.isRequired,
};

export default RequestEditor;
