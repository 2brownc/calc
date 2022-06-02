import operators from './Operators';
import actions from './ActionTypes';

function init([operandA,
  operandB,
  operator,
  isDecimalNumber,
  isResetOnInput
]) {
  return ({
    operandA: operandA,
    operandB: operandB,
    operator: operator,
    isDecimalNumber: isDecimalNumber,
    isResetOnInput: isResetOnInput
  });
}

function evaluate(state) {
  const { operandA, operandB, operator } = state;

  if (operandA === '' || operandB === '' || operator === null) {
    return null;
  } else {
    const opA = parseFloat(operandA);
    const opB = parseFloat(operandB);

    switch (operator) {
      case operators.PLUS:
        return opA + opB;

      case operators.MINUS:
        return opA - opB;

      case operators.OBELUS:
        return opA / opB;

      case operators.TIMES:
        return opA * opB;

      default:
        throw Error(`unexpected operator in function evaluate: ${operator}`);

    }
  }

}

function reducer(state, action) {
  // reset state before considering
  // input if previous result is
  // NaN or INFINITY
  if (state.isResetOnInput) {
    state = init([
      "",
      "",
      null,
      false,
      false
    ]);
  }
  switch (action.type) {
    case actions.ADD_DIGIT:
      let addDigitVal = null;
      // if payload is 0 and operandB is also 0
      if (parseInt(action.payload) === 0 &&
        parseInt(state.operandB) === 0 &&
        !state.isDecimalNumber) {
          addDigitVal = 0;
      // if payload is 0 and the non-zero operandB
      // has no decimal in it
      } else if (parseInt(state.operandB) === 0 &&
          !state.isDecimalNumber){
        addDigitVal = action.payload;
      } else {
        addDigitVal = `${state.operandB}${action.payload}`;
      }
      return ({
        ...state,
        operandB : addDigitVal 
      });
    case actions.ADD_DECIMAL:
      let addDecimal = false;
      let addZero = false;
      if (state.operandB === "" && state.isDecimalNumber){
        addDecimal = false;
      } else if (state.operandB === "" && !state.isDecimalNumber) {
        addDecimal = true;
        addZero = true;
      } else if (state.operandB !== "" && !state.isDecimalNumber) {
        addDecimal = true;
      }

      if (addDecimal && addZero) {
        return ({
          ...state,
          operandB : `0${action.payload}`,
          isDecimalNumber: true
        });
      } else if (addDecimal) {
        return({
          ...state,
          operandB : `${state.operandB}${action.payload}`,
          isDecimalNumber: true
        });
      } else {
        return state;
      }
    case actions.DELETE:
      return ({
        ...state,
        operandB : state.operandB.slice(0, -1),
        isDecimalNumber : state.operandB.slice(0, -1).indexOf('.') !== -1
      });
    case actions.SET_OPERAND:
      if (state.operandB === "" &&
        action.payload.operation !== operators.MINUS
      ) {
        return state;
      } else if (state.operandB === "" &&
        action.payload.operation === operators.MINUS
      ) {
        return ({
          ...state,
          operandB: action.payload.symbol
        })
      } else if (state.operandB === "-"){
        return state;
      } else {
      return ({
        ...state,
        // if operandA is "0."
        // then just store it as "0"
        operandA : parseFloat(state.operandB) === 0 ? "0" : `${state.operandB} ${action.payload.symbol}`,
        operandB : "",
        operator : action.payload.operation,
        isDecimalNumber: false
      });
      }
    case actions.CE:
      return ({
        ...state,
        operandB : ""
      });
    case actions.AC:
      return init(["", "", null, false, false]);
    case actions.EVALUATE:
      const result = evaluate(state);

      if (Number.isNaN(result)) {
        return init([
          "",
          "Division by Zero Error!",
          null,
          false,
          true
        ]);
      } else if (!Number.isFinite(result)) {
        return init([
          "",
          result,
          null,
          false,
          true
        ]);
      }


      if (result === null) {
        return state;
      } else {
        console.log("result", result);
       const isDecimalInResult = result.toString(10).indexOf('.') !== -1
       return init(["", result.toString(10), null, isDecimalInResult, false]);
      }
  }
}

export { reducer, init };
