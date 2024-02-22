import { Provider } from "react-redux";
import Postman from "./layout/Postman";
import Request from "./layout/Request";
import { store } from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="h-full grid grid-cols-[1fr_3fr] ">
        <Request />
        <Postman />
      </div>
    </Provider>
  );
};

export default App;
