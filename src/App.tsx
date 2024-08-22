import { useState } from "react";
import "./App.css";
import styled from "styled-components";

const alphabets = "ABCDEFGHIJKLMNOPQR".split("");

function App() {
  const [alpahet, setAlphabet] = useState<string | null>(null);
  const [alpahet2, setAlphabet2] = useState<string | null>(null);

  const handleClick = (alpahbet: string) => {
    setAlphabet(alpahbet);
  };

  const handleClick2 = (alpahbet: string) => {
    setAlphabet2(alpahbet);
  };
  return (
    <>
      <div className="card" style={{ marginBottom: "20px" }}>
        <h3>Momentum Scroll (관성):</h3>
      </div>
      <div>
        Selected Alphabet: <h2>{alpahet}</h2>
      </div>
      <CustomHorizontalScrollView className={"momentum"}>
        <ButtonsWrapper>
          {alphabets.map((alphabet) => (
            <CustomButtons key={alphabet} onClick={() => handleClick(alphabet)}>
              {alphabet}
            </CustomButtons>
          ))}
        </ButtonsWrapper>
      </CustomHorizontalScrollView>
      <div className="card">
        <h3>Ordinary Scroll (일반):</h3>
      </div>
      <div>
        Selected Alphabet: <h2>{alpahet2}</h2>
      </div>
      <CustomHorizontalScrollView>
        <ButtonsWrapper>
          {alphabets.map((alphabet) => (
            <CustomButtons
              key={alphabet}
              onClick={() => handleClick2(alphabet)}
            >
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
