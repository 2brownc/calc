import Line from './Line';

const Display = ({
  bgcolor,
  padding,
  lines
}) => {
  return (
  <div>
    {lines.map(line => {
      return(
        <Line>
          {line}
        </Line>
      );
    })}
  </div>
  );
};

export default Display;
