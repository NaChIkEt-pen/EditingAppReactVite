import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [fontSize, setFontSize] = useState("18px");
  const [fontFamily, setFontFamily] = useState("Arial");
  const [color, setColor] = useState("red");
  const [updateStyleFlag, setUpdateStyleFlag] = useState(false);
  const listFontFamily = ["Arial", "Times New Roman", "Montserrat", "Courier "];
  const listFontSize = ["12px", "15px", "18px", "25px"];
  const listFontColor = ["red", "green", "blue", "black"];
  const [textareaData, setTextareaData] = useState([
    {
      content: "",
      style: { fontSize: fontSize, fontFamily: fontFamily, color: color },
    },
  ]);

  useEffect(() => {
    if (updateStyleFlag) {
      const updatedData = textareaData.map((data) => ({
        ...data,
        style: { fontSize, fontFamily, color },
      }));
      setTextareaData(updatedData);
      setUpdateStyleFlag(false);
    }
  }, [updateStyleFlag, fontSize, fontFamily, color, textareaData]);

  const addTextarea = (event) => {
    event.preventDefault();
    setTextareaData((prevData) => [
      ...prevData,
      { content: "", style: { fontSize, fontFamily, color } },
    ]);
  };

  const changeStyle = () => {
    // setFontFamily("Times New Roman");
    // setFontSize("25px");
    // setColor("black");
    setUpdateStyleFlag(true);
  };

  const handleTextareaChange = (index, content) => {
    const updatedData = [...textareaData];
    updatedData[index].content = content;
    setTextareaData(updatedData);
  };

  return (
    <>
      <div className="MainDiv">
        <div className="Canvas">
          {textareaData.map((data, index) => (
            <div key={index}>
              <textarea
                placeholder={`Text Area`}
                value={data.content}
                style={data.style}
                onChange={(e) => handleTextareaChange(index, e.target.value)}
              />
            </div>
          ))}
        </div>
        <div className="Controls">
          <select
            className="FontSelect"
            onChange={(e) => {
              console.log(e.target.value);
              setFontFamily(e.target.value);
              setUpdateStyleFlag(true);
            }}
          >
            {listFontFamily.map((element) => {
              return (
                <option value={element} key={element}>
                  {element}
                </option>
              );
            })}
          </select>
          <select
            className="FontSizeSelect"
            onChange={(e) => {
              console.log(e.target.value);
              setFontSize(e.target.value);
              setUpdateStyleFlag(true);
            }}
          >
            {listFontSize.map((element) => {
              return (
                <option value={element} key={element}>
                  {element}
                </option>
              );
            })}
          </select>
          <select
            className="FontColorSelect"
            onChange={(e) => {
              console.log(e.target.value);
              setColor(e.target.value);
              setUpdateStyleFlag(true);
            }}
          >
            {listFontColor.map((element) => {
              return (
                <option value={element} key={element}>
                  {element}
                </option>
              );
            })}
          </select>
          <button onClick={addTextarea} className="BtnAddTextArea">
            Add Text Area
          </button>
          {/* <button onClick={changeStyle} className="BtnChangeStyle">
            Change Style
          </button> */}
        </div>
      </div>
    </>
  );
}

export default App;
