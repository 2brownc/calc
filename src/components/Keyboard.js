import react from 'react';
import Grid from '@mui/material/Grid';

import Btn from './Button';
import actions from '../store/ActionTypes.js';
import operators from '../store/Operators';

const Keyboard = ({
  spacing = 0,
  dispatch
}) => {
  const handleOnClick = ([type, payload]) => {
    switch (type) {
      case actions.AC:
      case actions.DELETE:
      case actions.EVALUATE:
        dispatch({
          "type": type
        });
        break;
      case actions.ADD_DECIMAL:
        dispatch({
          "type": type,
          "payload": "."
        });
        break;
      case operators.PLUS:
      case operators.MINUS:
      case operators.OBELUS:
      case operators.TIMES:
        dispatch({
          "type": actions.SET_OPERAND, 
          "payload": {
            "symbol": payload,
            "operation": type
          }
        });
        break;
      case actions.ADD_DIGIT:
        dispatch({
            "type": type,
            "payload": payload
        });
        break;
      default:
        throw Error(`Unexpected case in handleOnClick: ${type}, ${payload}`);
    }
  }
  return (
    <Grid container spacing={spacing}>
      <Grid item xs={6}>
        <Btn
          color="info"
          onClick={handleOnClick}
          args={[actions.AC]}
        >
          AC
        </Btn>
      </Grid>
      <Grid item xs={3}>
        <Btn
          onClick={handleOnClick}
          args={[actions.DELETE]}
        >
          DEL
        </Btn>
      </Grid>
      <Grid item xs={3}>
        <Btn
          onClick={handleOnClick}
          args={[operators.OBELUS, "÷"]}
        >
          ÷
        </Btn>
      </Grid>

      <Grid item xs={3}>
        <Btn
          onClick={handleOnClick}
          args={[actions.ADD_DIGIT, "1"]}
        >
          1
        </Btn>
      </Grid>
      <Grid item xs={3}>
        <Btn
          onClick={handleOnClick}
          args={[actions.ADD_DIGIT, "2"]}
        >
          2
        </Btn>
      </Grid>
      <Grid item xs={3}>
        <Btn
          onClick={handleOnClick}
          args={[actions.ADD_DIGIT, "3"]}
        >
          3
        </Btn>
      </Grid>
      <Grid item xs={3}>
        <Btn
          onClick={handleOnClick}
          args={[operators.TIMES, "×"]}
        >
          ×
        </Btn>
      </Grid>

      <Grid item xs={3}>
        <Btn
          onClick={handleOnClick}
          args={[actions.ADD_DIGIT, "4"]}
        >
          4
        </Btn>
      </Grid>
      <Grid item xs={3}>
        <Btn
          onClick={handleOnClick}
          args={[actions.ADD_DIGIT, "5"]}
        >
          5
        </Btn>
      </Grid>
      <Grid item xs={3}>
        <Btn
          onClick={handleOnClick}
          args={[actions.ADD_DIGIT, "6"]}
        >
          6
        </Btn>
      </Grid>
      <Grid item xs={3}>
        <Btn
          onClick={handleOnClick}
          args={[operators.PLUS, "+"]}
        >
          +
        </Btn>
      </Grid>

      <Grid item xs={3}>
        <Btn
          payload="7"
          onClick={handleOnClick}
          args={[actions.ADD_DIGIT, "7"]}
        >
          7
        </Btn>
      </Grid>
      <Grid item xs={3}>
        <Btn
          onClick={handleOnClick}
          args={[actions.ADD_DIGIT, "8"]}
        >
          8
        </Btn>
      </Grid>
      <Grid item xs={3}>
        <Btn
          onClick={handleOnClick}
          args={[actions.ADD_DIGIT, "9"]}
        >
          9
        </Btn>
      </Grid>
      <Grid item xs={3}>
        <Btn
          onClick={handleOnClick}
          args={[operators.MINUS, "-"]}
        >
          -
        </Btn>
      </Grid>

      <Grid item xs={3}>
        <Btn
          onClick={handleOnClick}
          args={[actions.ADD_DECIMAL, "."]}
        >
          .
        </Btn>
      </Grid>
      <Grid item xs={3}>
        <Btn
          onClick={handleOnClick}
          args={[actions.ADD_DIGIT, "0"]}
        >
          0
        </Btn>
      </Grid>
      <Grid item xs={6}>
        <Btn
          onClick={handleOnClick}
          args={[actions.EVALUATE]}
        >
          =
        </Btn>
      </Grid>
    </Grid >
  );
};

export default Keyboard;
