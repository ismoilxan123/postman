import { useDispatch } from "react-redux";
import { changeRequest } from "../store/postmanSlice";

const statusText = {
  404: "Not Found",
  200: "OK",
};
export default () => {
  const dispatch = useDispatch();
  const sendRequest = async (url) => {
    try {
      const startTime = new Date();
      const res = await fetch(url);
      const endTime = new Date();
      const timeDiff = endTime - startTime + "ms";
      const status = `${res.status} ${statusText[res.status]} `;
      const data = await res.json();
      const dataString = JSON.stringify(data);
      const size = new TextEncoder().encode(dataString).length;
      console.log(res, timeDiff, status, res.status, size / 1024);
      dispatch(
        changeRequest({
          response: {
            data: dataString,
            size,
            timeDiff,
            status,
          },
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
  return {
    sendRequest,
  };
};
