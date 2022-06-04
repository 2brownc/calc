import react from "react";
import Button from "@mui/material/Button";

const Btn = ({
  children,
  variant = "contained",
  color,
  fullWidth = true,
  onClick,
  args,
}) => {
  return (
    <Button
      disableElevation
      variant={variant}
      fullWidth={fullWidth}
      style={{
        backgroundColor: color,
        borderRadius: "0px",
        fontSize: "larger"
      }}
      onClick={() => onClick(args)}
    >
      {children}
    </Button >
  );
};

export default Btn;
