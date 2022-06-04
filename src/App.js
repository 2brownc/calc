import { useReducer, useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";

import "./App.css";
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import { reducer, init } from "./store/reducer.js";
import InvalidInputWarning from "./components/ErrorMessage";
import KeyboardInputHandler from "./components/KeyboardHandler";
import Header from "./components/Header";


const setGrouping = (operand, isDecimalNumber) => {
  if (
    operand === "" ||
    operand === null ||
    operand === "-" ||
    operand === "Undefined"
  ) {
    return operand;
  }
  const locale = Intl.NumberFormat().resolvedOptions().locale;
  let number = operand;
  let symbol = "";
  if (typeof operand === "string" && operand.indexOf(" ") !== -1) {
    [number, symbol] = operand.split(" ");
  }
  if (number.toString().indexOf(".") !== -1) {
    let [integerPart, decimalPart] = number.split(".");

    if (decimalPart === undefined) {
      decimalPart = "";
    }

    const intPartWithGrouping = new Intl.NumberFormat(locale).format(
      integerPart
    );
    return `${intPartWithGrouping}.${decimalPart} ${symbol}`.trim();
  } else {
    return `${new Intl.NumberFormat(locale).format(number)} ${symbol}`.trim();
  }
};

const APP_NAME = "Calculator";
const APP_GIT_LINK = "https://github.com/2brownc/calc";

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
    <div
      className="app"
      tabIndex="1"
      onKeyPress={(e) => KeyboardInputHandler([dispatch, e])}
    >
        <Header heading={APP_NAME} gitLink={APP_GIT_LINK} />
        <div className="appMain">
          <Container maxWidth={false} sx={{ maxWidth: "330px" }}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <div className="display">
                  <Display lines={[line1, line2]} />
                </div>
              </Grid>
              <Grid item xs={12}>
                <Keypad spacing="1" dispatch={dispatch} />
              </Grid>
              <Grid item xs={10}>
                <div class="warningBox">
                  <InvalidInputWarning errorMessage={state.error} />
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
    </div>
  );
}

export default App;
