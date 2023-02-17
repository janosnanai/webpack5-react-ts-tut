import ClickCounter from "./click-counter";

import IMAGE from "./Rick-And-Morty-PNG-Images.png";
import LOGO from "./vercel.svg";

import "./styles.css";

const MODE = process.env.NODE_ENV;
const NAME = process.env.name;

function App() {
  return (
    <>
      <h1>
        Hello, this is a ts react webpack v5 starter! {MODE} - {NAME}
      </h1>
      <img src={IMAGE} alt="ram img" width={300} height={200} />
      <img src={LOGO} alt="ram img" width={300} />
      <ClickCounter />
    </>
  );
}

export default App;
