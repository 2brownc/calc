import actions from "../store/ActionTypes";
import operators from "../store/Operators";

const KeypadInputHandler = ([dispatch, type, payload]) => {
  switch (type) {
    case actions.AC:
    case actions.DELETE:
    case actions.EVALUATE:
      dispatch({
        type: type,
      });
      break;
    case actions.ADD_DECIMAL:
      dispatch({
        type: type,
        payload: ".",
      });
      break;
    case operators.PLUS:
    case operators.MINUS:
    case operators.OBELUS:
    case operators.TIMES:
      dispatch({
        type: actions.SET_OPERAND,
        payload: {
          symbol: payload,
          operation: type,
        },
      });
      break;
    case actions.ADD_DIGIT:
      dispatch({
        type: type,
        payload: payload,
      });
      break;
    default:
      throw Error(`Unexpected case in handleOnClick: ${type}, ${payload}`);
  }
};

export default KeypadInputHandler;
