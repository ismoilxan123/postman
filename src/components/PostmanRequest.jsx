import { useDispatch, useSelector } from "react-redux";
import { changeRequest } from "../store/postmanSlice";

const PostmanRequest = () => {
  const dispatch = useDispatch();
  const request = useSelector((state) =>
    state.requests.find((re) => re.id === state.currentRequest)
  );
  return (
    <div>
      <input
        onChange={(e) =>
          dispatch(
            changeRequest({
              name: e.target.value,
            })
          )
        }
        id={"postman-request"}
        value={request?.name}
        className="font-semibold"
        type="text"
      />
    </div>
  );
};

export default PostmanRequest;
