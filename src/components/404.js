import { Link } from "react-router-dom";
import { Result, Button } from "antd";

const NotFound = () => {
  return (
    <Result
      status="404"
      title="The page you visited does not exist."
      subTitle="Please go back to the homepage or try searching for the page you were looking for."
      extra={
        <Link to="/">
          <Button type="primary">Go Back Home</Button>
        </Link>
      }
    />
  );
};
export default NotFound;
