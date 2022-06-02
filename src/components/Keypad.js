import Grid from '@mui/material/Grid';

import Btn from './Button';
import actions from '../store/ActionTypes.js';
import operators from '../store/Operators';
import KeypadInputHandler from './KeypadHandler';

const Keypad = ({
  spacing,
  dispatch
}) => {
  return (
    <Grid container spacing={spacing}>
      <Grid item xs={6}>
        <Btn
          color="info"
          onClick={KeypadInputHandler}
          args={[dispatch, actions.AC]}
        >
          AC
        </Btn>
      </Grid>
      <Grid item xs={3}>
        <Btn
          onClick={KeypadInputHandler}
          args={[dispatch, actions.DELETE]}
        >
          DEL
        </Btn>
      </Grid>
      <Grid item xs={3}>
        <Btn
          onClick={KeypadInputHandler}
          args={[dispatch, operators.OBELUS, "÷"]}
        >
          ÷
        </Btn>
      </Grid>

      <Grid item xs={3}>
        <Btn
          onClick={KeypadInputHandler}
          args={[dispatch, actions.ADD_DIGIT, "1"]}
        >
          1
        </Btn>
      </Grid>
      <Grid item xs={3}>
        <Btn
          onClick={KeypadInputHandler}
          args={[dispatch, actions.ADD_DIGIT, "2"]}
        >
          2
        </Btn>
      </Grid>
      <Grid item xs={3}>
        <Btn
          onClick={KeypadInputHandler}
          args={[dispatch, actions.ADD_DIGIT, "3"]}
        >
          3
        </Btn>
      </Grid>
      <Grid item xs={3}>
        <Btn
          onClick={KeypadInputHandler}
          args={[dispatch, operators.TIMES, "×"]}
        >
        ×
        </Btn>
      </Grid>

      <Grid item xs={3}>
        <Btn
       onClick={KeypadInputHandler}
          args={[dispatch, actions.ADD_DIGIT, "4"]}
        >
          4
        </Btn>
      </Grid>
      <Grid item xs={3}>
        <Btn
          onClick={KeypadInputHandler}
          args={[dispatch, actions.ADD_DIGIT, "5"]}
        >
          5
        </Btn>
      </Grid>
      <Grid item xs={3}>
        <Btn
          onClick={KeypadInputHandler}
          args={[dispatch, actions.ADD_DIGIT, "6"]}
        >
          6
        </Btn>
      </Grid>
      <Grid item xs={3}>
        <Btn
          onClick={KeypadInputHandler}
          args={[dispatch, operators.PLUS, "+"]}
        >
          +
        </Btn>
      </Grid>

      <Grid item xs={3}>
        <Btn
          payload="7"
          onClick={KeypadInputHandler}
          args={[dispatch, actions.ADD_DIGIT, "7"]}
        >
          7
        </Btn>
      </Grid>
      <Grid item xs={3}>
        <Btn
          onClick={KeypadInputHandler}
          args={[dispatch, actions.ADD_DIGIT, "8"]}
        >
          8
        </Btn>
      </Grid>
      <Grid item xs={3}>
        <Btn
          onClick={KeypadInputHandler}
          args={[dispatch, actions.ADD_DIGIT, "9"]}
        >
          9
        </Btn>
      </Grid>
      <Grid item xs={3}>
        <Btn
          onClick={KeypadInputHandler}
          args={[dispatch, operators.MINUS, "-"]}
        >
          -
        </Btn>
      </Grid>

      <Grid item xs={3}>
        <Btn
          onClick={KeypadInputHandler}
          args={[dispatch, actions.ADD_DECIMAL, "."]}
        >
          .
        </Btn>
      </Grid>
      <Grid item xs={3}>
        <Btn
          onClick={KeypadInputHandler}
          args={[dispatch, actions.ADD_DIGIT, "0"]}
        >
          0
        </Btn>
      </Grid>
      <Grid item xs={6}>
        <Btn
          onClick={KeypadInputHandler}
          args={[dispatch, actions.EVALUATE]}
        >
          =
        </Btn>
      </Grid>
    </Grid >
  );
};

export default Keypad;
