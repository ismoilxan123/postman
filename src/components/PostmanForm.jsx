import { useDispatch, useSelector } from "react-redux";
import { changeRequest } from "../store/postmanSlice";

const PostmanForm = () => {
  const dispatch = useDispatch();
  const request = useSelector((state) =>
    state.requests.find((re) => re.id === state.currentRequest)
  );
  const handleSelect = (e) => {
    dispatch(
      changeRequest({
        method: e.target.value,
      })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (request.url) {
      const res = await fetch(request.url, {
        method: request?.method || "GET",
      });
      const data = await res.json();
      console.log(res, data);
    }
  };
  const handleGive = (e) => {
    dispatch(
      changeRequest({
        url: e.target.value,
      })
    );
  };
  return (
    <form className="mt-4 flex items-center gap-2" onSubmit={handleSubmit}>
      <div className="border rounded-md flex-1 flex gap-2 overflow-hidden">
        <select onChange={handleSelect} value={request?.method}>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
        <input
          onChange={handleGive}
          value={request?.url}
          className="border-l pl-2 p-2 flex-1"
          type="text"
          placeholder="Enter an url or pass text"
        />
      </div>
      <button className="py-2 px-5 bg-blue-600 text-white rounded-md">
        Sand
      </button>
    </form>
  );
};

export default PostmanForm;
