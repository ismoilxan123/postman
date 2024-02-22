const Tab = ({ title, onClick, active, id }) => {
  return (
    <li
      onClick={() => onClick(id)}
      className={`text-gray-500  ${
        active ? "text-black border-red-400" : "border-transparent"
      }  pb-2  hover:text-black transition-all border-b  cursor-pointer`}
    >
      {title}
    </li>
  );
};

export default Tab;
