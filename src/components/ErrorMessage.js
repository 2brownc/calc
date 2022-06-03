import { Alert } from "@mui/material";

import ErrorMessage from "../store/ErrorMessages";

const InvalidInputWarning = ({ errorMessage }) => {
  if (errorMessage === null) {
    return null;
  } else {
    const errMsg = ErrorMessage[errorMessage];

    return <Alert severity="warning">{errMsg}</Alert>;
  }
};

export default InvalidInputWarning;
