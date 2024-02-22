const ParamsTable = () => {
  return (
    <div className="mt-4">
      <h3 className="text-gray-500 mb-3">Query Params</h3>
      <table className="w-full border border-slate-400 border-collapse">
        <thead>
          <tr>
            <th className="border border-slate-300"></th>
            <th className="border border-slate-300">Key</th>
            <th className="border border-slate-300">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-300"></td>
            <td className="border border-slate-300 p-2">Title</td>
            <td className="border border-slate-300 p-2">Iphone</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ParamsTable;
