import { BarLoader } from "react-spinners";

const Loading = () => {
  return <div className="grid place-items-center">
    <BarLoader color="#008cff" height={5} width={100} />
  </div>;
};

export default Loading;