let currNumber = "";
let operator = "";
let preNumber = "";
let postNumber = "";

function isInt(n) {
  return Number(n) === n && n % 1 === 0;
}

const setNumberView = (id, number) => {
  const numberContainer = document.getElementById(id);
  numberContainer.innerHTML = number;
};

const calculate = () => {
  if (preNumber !== "" && operator !== "" && currNumber !== "") {
    let result = postNumber;
    clearNumber();
    currNumber = result;
    setNumberView("curr-number", currNumber);
  }
};

const calculatePostNumber = () => {
  if (currNumber === "") {
    setNumberView("post-number", "");
    return;
  }

  const preNumberParsed = parseFloat(preNumber);
  const currNumberParsed = parseFloat(currNumber);
  let tempNumber;

  switch (operator) {
    case "+":
      tempNumber = preNumberParsed + currNumberParsed;
      break;
    case "-":
      // TODO: ADD SUBSTRACTION

      break;
    case "*":
      // TODO: ADD MULTIPLICATION

      break;
    case "/":
      // TODO: ADD DIVISION & ZERO DIVISION VALIDATION

      break;
    default:
      alert("operator not found!");
      return;
      break;
  }

  postNumber = isInt(tempNumber)
    ? parseInt(tempNumber).toString()
    : tempNumber.toFixed(2).toString();
  setNumberView("post-number", postNumber);
};

const clearNumber = () => {
  currNumber = "";
  postNumber = "";
  operator = "";
  preNumber = "";
  setNumberView("post-number", postNumber);
  setNumberView("pre-number", preNumber);
  setNumberView("curr-number", currNumber);
};

const deleteNumber = () => {
  console.log(currNumber, "delete");
  if (currNumber !== "") {
    currNumber = currNumber.slice(0, -1);
    if (currNumber === "-") currNumber = "";
  }
  setNumberView("curr-number", currNumber);

  if (preNumber !== "" && operator !== "") calculatePostNumber();
};

const convertNumber = () => {
  if (currNumber !== "") {
    if (currNumber[0] === "-") {
      currNumber = currNumber.slice(1);
    } else {
      currNumber = "-" + currNumber;
    }
  }
  setNumberView("curr-number", currNumber);

  if (preNumber !== "" && operator !== "") calculatePostNumber();
};

const inputNumber = (num) => {
  if (
    (currNumber === "" && !["00", "0", "."].includes(num)) ||
    (currNumber !== "" && (num != "." || !currNumber.includes(".")))
  )
    currNumber += num;

  setNumberView("curr-number", currNumber);

  if (operator) {
    calculatePostNumber();
  }
};

const clickOperator = (opr) => {
  if (preNumber === "") {
    preNumber = currNumber;
    currNumber = "";
    setNumberView("curr-number", "");
  }

  if (operator !== "" && currNumber !== "") {
    calculate();
  }

  operator = opr;
  setNumberView("pre-number", preNumber + " " + operator);
};
