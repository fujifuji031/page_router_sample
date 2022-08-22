import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Peage2です</h1>
      <Link to="/page2/1000">URL Parameter</Link>
    </div>
  );
};
