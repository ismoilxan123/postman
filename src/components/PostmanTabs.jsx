import { useState } from "react";
import Tab from "./Tab";
import ParamsTable from "./ParamsTable";

const PostmanTabs = () => {
  const [active, setActive] = useState(0);
  function handleTab(index) {
    setActive(index);
  }
  return (
    <div className="mt-4">
      <ul className="flex gap-4">
        <Tab id={0} title="Params" onClick={handleTab} active={active === 0} />
        <Tab id={1} title="Headers" onClick={handleTab} active={active === 1} />
        <Tab id={2} title="Body" onClick={handleTab} active={active === 2} />
      </ul>
      {active === 0 && <ParamsTable />}
    </div>
  );
};

export default PostmanTabs;
