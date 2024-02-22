import PostmanForm from "../components/PostmanForm";
import PostmanRequest from "../components/PostmanRequest";
import PostmanResponse from "../components/PostmanResponse";
import PostmanTabs from "../components/PostmanTabs";

const Postman = () => {
  return (
    <div className="m-3">
      <PostmanRequest />
      <PostmanForm />
      <PostmanTabs />
      <PostmanResponse />
    </div>
  );
};

export default Postman;
