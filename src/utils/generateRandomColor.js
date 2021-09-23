export default function generateRandomColor() {
  let randomColor = "#";
  for (let i = 0; i < 3; i++) {
    let number = Math.floor(Math.random() * 255);
    randomColor += number.toString(16).padStart(2, "0");
  }

  return randomColor;
}
