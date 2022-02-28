import MyImg from "./myImg.js";

function print(element) {
  return <div>{element.name}</div>;
}

export default function Item() {
  let j = {
    name: "bobi",
    age: "23"
  };

  //Number, text, email,date,color

  let arr = [
    { name: "bobi", age: "23" },
    { name: "mark", age: "32" },
    { name: "avi", age: "12" },
    { name: "sami", age: "26" }
  ];

  const template = (
    <div>
      <div>
        item *** {arr[0].name} {arr[0].age}
      </div>
      <hr />
      <div>
        start
        {arr.map(print)}
        {arr.map(function (element) {
          return (
            <div>
              {element.name}
              <MyImg></MyImg>
            </div>
          );
        })}
        end item *** {arr[0].name} {arr[0].age}
      </div>
      <hr />
      item *** {j.name} {j.age}
    </div>
  );

  return template;
}
