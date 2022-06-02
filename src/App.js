import { useReducer, useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';

import "./App.css";
import Display from './components/Display';
import Keypad from './components/Keypad';
import { reducer, init } from './store/reducer.js';
import InvalidInputWarning from './components/ErrorMessage';
import KeyboardInputHandler from './components/KeyboardHandler';

const setGrouping = (
  operand,
  isDecimalNumber
) => {
  if (operand === "" ||
    operand === null ||
    operand === "-" ||
    operand === "Division by Zero Error!"
  ) {
    return operand;
  }
 const locale = Intl.NumberFormat().resolvedOptions().locale;
  let number = operand;
  let symbol = "";
  if (typeof operand === "string" && operand.indexOf(" ") !== -1) {
    [number, symbol] = operand.split(" ");
  }
 if(number.indexOf(".") !== -1) {
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
    <div className="app" tabIndex="1" onKeyPress={e => KeyboardInputHandler([dispatch, e])}>
    <Container
      maxWidth={false}
      sx={{maxWidth:"330px"}}
    >
   <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
          <div className="display">
            <Display
              lines={[line1, line2]}
            />
          </div>
      </Grid>
      <Grid item xs={12}>
            <Keypad spacing="1" dispatch={dispatch} />
      </Grid>

      <Grid item xs={8}>
          <InvalidInputWarning errorMessage={state.error} />
      </Grid>
    </Grid>
    </Container>
    </div>
  );
}

export default App;
