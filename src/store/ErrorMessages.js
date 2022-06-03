const ErrorMessage = {
  EXCEED_MAX_SAFE_INTEGER:
    "The input number is too large. It shouldn't be larger than 2^53 - 1 or 9007199254740991",
  EXCEED_MIN_SAFE_INTEGER:
    "The input number is too small. It shouldn't be smaller than -(2^53 - 1) or -9007199254740991",
  NUM_TOO_LONG: "The input number is too long.",
};

export default ErrorMessage;
