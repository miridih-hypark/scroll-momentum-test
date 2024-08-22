import { useState } from "react";
import "./App.css";
import styled from "styled-components";

const alphabets = "ABCDEFGHIJKLMNOPQR".split("");

function App() {
  const [alpahet, setAlphabet] = useState<string | null>(null);

  const handleClick = (alpahbet: string) => {
    setAlphabet(alpahbet);
  };
  return (
    <>
      <h1>Scroll below to test</h1>
      <div className="card">
        <h2>Selected Alphabet: {alpahet}</h2>
      </div>
      <div style={{ marginBottom: "20px" }}>Momentum Scroll:</div>
      <CustomHorizontalScrollView className={"momentum"}>
        <ButtonsWrapper>
          {alphabets.map((alphabet) => (
            <CustomButtons key={alphabet} onClick={() => handleClick(alphabet)}>
              {alphabet}
            </CustomButtons>
          ))}
        </ButtonsWrapper>
      </CustomHorizontalScrollView>
      <div style={{ margin: "20px" }}>Ordinary Scroll:</div>
      <CustomHorizontalScrollView>
        <ButtonsWrapper>
          {alphabets.map((alphabet) => (
            <CustomButtons key={alphabet} onClick={() => handleClick(alphabet)}>
              {alphabet}
            </CustomButtons>
          ))}
        </ButtonsWrapper>
      </CustomHorizontalScrollView>
    </>
  );
}

export default App;

const CustomHorizontalScrollView = styled("div")({
  overflow: "auto",
  display: "flex",
  backgroundColor: "aqua",
  maxWidth: "360px",
  overflowBehavior: "smooth",
  borderRadius: "10px",
  overscrollBehavior: "none",

  // hide scrollbar
  "&::-webkit-scrollbar": {
    display: "none",
  },

  // Enable smooth scrolling and momentum scroll when the class is applied
  "&.momentum": {
    overscrollBehavior: "contain",
  },
});

const CustomButtons = styled("button")({
  padding: "10px",
  margin: "10px",
  width: "40px",
  backgroundColor: "lightblue",
  borderRadius: "5px",
  cursor: "pointer",
});

const ButtonsWrapper = styled.div`
  display: flex;
  padding: 20px;
  width: fit-content;
  gap: 12px;
`;
