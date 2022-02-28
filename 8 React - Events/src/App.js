import "./styles.css";
import Details from "./Details";
import PlusNumbers from "./PlusInputs";
export default function App() {
  return (
    <div className="App">
      <PlusNumbers></PlusNumbers>
      <button
        onClick={function () {
          console.log("Here Button");
        }}
      >
        +
      </button>

      <Details></Details>

      <input
        placeholder="Add name"
        onChange={function () {
          console.log("Here Input Change");
        }}
      ></input>
    </div>
  );
}
