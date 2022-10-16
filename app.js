const container = document.querySelector(".container");
let hexSpan = document.querySelector(".hex");
const hexCode = document.querySelector(".hex-code");
const genBtn = document.querySelector(".hex-generate");

const generateRandomHexColor = () => {
  const hexChars = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let hex = "#";

  while (hex.length < 7) {
    hex += hexChars[Math.floor(Math.random() * hexChars.length)];
  }

  container.style.backgroundColor = hex;
  hexSpan.innerText = hex;
  hexCode.innerText = hex;
  hexCode.style.color = hex;
};

genBtn.addEventListener("click", generateRandomHexColor);
