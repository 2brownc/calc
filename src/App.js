import { useReducer, useState, useEffect } from 'react';
import { Box, Container, Paper } from '@mui/material';

import logo from "./logo.svg";
import "./App.css";
import Display from './components/Display';
import Keyboard from './components/Keyboard';
import { reducer, init } from './store/reducer.js';
import InvalidInputWarning from './components/ErrorMessage';

const setGrouping = (
  operand,
  isDecimalNumber
) => {
  if (operand === "" || operand === null || operand === "-") {
    return operand;
  }
 const locale = Intl.NumberFormat().resolvedOptions().locale;
  let number = operand;
  let symbol = "";
  if (typeof operand === "string" && operand.indexOf(" ") !== -1) {
    [number, symbol] = operand.split(" ");
  }
 if(isDecimalNumber) {
    let [integerPart, decimalPart] = number.split(".");

   if (decimalPart === undefined) {
     decimalPart = "";
   }
   
    const intPartWithGrouping = new Intl.NumberFormat(locale).format(integerPart);
    return `${intPartWithGrouping}.${decimalPart} ${symbol}`.trim();
  } else {
    return `${new Intl.NumberFormat(locale).format(number)} ${symbol}`.trim();
  }
}

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    ["", "", null, false, false, null],
    init
  );

  const [line1, setLine1] = useState(state.operandA);
  const [line2, setLine2] = useState(state.operandB);

  useEffect(() => {
    setLine1(setGrouping(state.operandA, state.isDecimalNumber));
  });

  useEffect(() => {
    setLine2(setGrouping(state.operandB, state.isDecimalNumber));
  });

  return (
    <>
    <Container maxWidth="xs">
      <Box
        sx={{
          maxWidth: '300px'
        }}
      >
        <Paper>
          <div className="display">
            <Display
              lines={[line1, line2]}
            />
          </div>
        </Paper>
        <Paper>

          <div className="App">
            <Keyboard spacing="1" dispatch={dispatch} />
          </div>
        </Paper>
      </Box>
    </Container>
    <Container>
      <InvalidInputWarning errorMessage={state.error} />
    </Container>
    </>
  );
}

export default App;
