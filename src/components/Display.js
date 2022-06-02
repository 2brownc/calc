import Line from './Line';

const Display = ({
  lines
}) => {
  let count = 0;
  return (
  <div>
    {lines.map(line => {
      return(
        <Line key={count++}>
          {line}
        </Line>
      );
    })}
  </div>
  );
};

export default Display;
