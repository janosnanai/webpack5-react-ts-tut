import "./styles.css";
import IMAGE from "./Rick-And-Morty-PNG-Images.png";
import LOGO from "./vercel.svg";

function App() {
  return (
    <>
      <h1>Hello, this is a ts react webpack v5 starter!</h1>
      <img src={IMAGE} alt="ram img" width={300} height={200} />
      <img src={LOGO} alt="ram img" width={300} />
    </>
  );
}

export default App;
