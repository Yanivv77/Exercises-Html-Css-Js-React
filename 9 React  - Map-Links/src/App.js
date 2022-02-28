import "./styles.css";

export default function App() {
  const dynamicElement = [
    { type: "a", val: "https://wise.com/" },
    { type: "a", val: "https://www.zion-net.co.il/en/" },
    { type: "input", val: "Shlomo" },
    { type: "input", val: "Avi" },
    { type: "button", val: "click here" },
    { type: "button", val: "click here" }
  ];

  const link = [
    "https://wise.com/",
    "https://www.zion-net.co.il/en/",
    "https://login.microsoftonline.com/",
    "https://www.youtube.com/"
  ];

  return (
    <div className="App">
      <h1>Anchors</h1>
      {link.map(function (item) {
        let s = 12;
        let str = "123";
        let sj = (
          <p>
            <div></div>
            <div></div>
          </p>
        );

        const template = (
          <p>
            {" "}
            <img src={item} />
            <a href={item}>{item}</a>
            <br />
          </p>
        );
        return template;
      })}
      <h1>Inputs</h1>
      {link.map(function (item) {
        console.log(item);

        let temp = <input value={item}></input>;

        return temp;
      })}
    </div>
  );
}
