import  { useState, useEffect } from 'react';
import Input from './Input'; // Make sure to adjust the import path as necessary

export function QueryParamsTable() {
  const [rows, setRows] = useState([]);
  const [keyInput, setKeyInput] = useState('');
  const [valueInput, setValueInput] = useState('');
  const [selectAll, setSelectAll] = useState(false);
  const [baseUrl, setBaseUrl] = useState('');

  const handleAddRow = () => {
    if (keyInput && valueInput) {
      setRows([...rows, { key: keyInput, value: valueInput, checked: false }]);
      setKeyInput('');
      setValueInput('');
    }
  };

  const handleDeleteRow = (index) => {
    const newRows = rows.filter((_, i) => i !== index);
    setRows(newRows);
  };

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    const newRows = rows.map(row => ({ ...row, checked: newSelectAll }));
    setRows(newRows);
  };

  const handleCheckboxChange = (index) => {
    const newRows = rows.map((row, i) => i === index ? { ...row, checked: !row.checked } : row);
    setRows(newRows);
    setSelectAll(newRows.every(row => row.checked));
  };

  const buildApiUrl = () => {
    const params = new URLSearchParams();

    rows.forEach(row => {
      if (row.key && row.value) {
        params.append(row.key, row.value);
      }
    });

    return `${baseUrl.split('?')[0]}?${params.toString()}`;
  };

  useEffect(() => {
    setBaseUrl(buildApiUrl());
  }, [rows]);

  return (
    <div className="p-4 bg-gray-900 min-h-screen text-white">
      <div className="mb-4">
        <Input value={baseUrl} onChange={setBaseUrl} placeholder="Enter Base URL" />
      </div>
      <div className="mb-4">
        <input
          type="text"
          value={keyInput}
          onChange={(e) => setKeyInput(e.target.value)}
          placeholder="Key"
          className="mr-2 p-2 border rounded bg-gray-800 border-gray-700 text-white"
        />
        <input
          type="text"
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
          placeholder="Value"
          className="mr-2 p-2 border rounded bg-gray-800 border-gray-700 text-white"
        />
        <button
          onClick={handleAddRow}
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>
      {rows.length > 0 && (
        <>
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-800">
                <tr>
                  <th className="p-4 text-left">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                      checked={selectAll}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Key</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Value</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    <span className="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-900 divide-y divide-gray-700">
                {rows.map((row, index) => (
                  <tr key={index} className="bg-gray-800">
                    <td className="p-4 text-left">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                        checked={row.checked}
                        onChange={() => handleCheckboxChange(index)}
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-white">{row.key}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-300">{row.value}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleDeleteRow(index)}
                        className="text-cyan-500 hover:text-cyan-300"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
