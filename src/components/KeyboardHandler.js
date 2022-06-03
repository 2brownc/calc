import actions from "../store/ActionTypes";
import operators from "../store/Operators";

const KeyboardInputHandler = ([dispatch, { key }]) => {
  switch (key) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
      dispatch({
        type: actions.ADD_DIGIT,
        payload: key,
      });
      break;
    case "a":
    case "A":
      dispatch({
        type: actions.AC,
      });
      break;
    case "d":
    case "D":
      dispatch({
        type: actions.DELETE,
      });
      break;
    case "Enter":
      dispatch({
        type: actions.EVALUATE,
      });
      break;
    case ".":
      dispatch({
        type: actions.ADD_DECIMAL,
        payload: ".",
      });
      break;
    case "+":
      dispatch({
        type: actions.SET_OPERAND,
        payload: {
          symbol: "+",
          operation: operators.PLUS,
        },
      });
      break;
    case "-":
      dispatch({
        type: actions.SET_OPERAND,
        payload: {
          symbol: "-",
          operation: operators.MINUS,
        },
      });
      break;
    case "*":
      dispatch({
        type: actions.SET_OPERAND,
        payload: {
          symbol: "×",
          operation: operators.TIMES,
        },
      });
      break;
    case "/":
      dispatch({
        type: actions.SET_OPERAND,
        payload: {
          symbol: "÷",
          operation: operators.OBELUS,
        },
      });
      break;
  }
};

export default KeyboardInputHandler;
