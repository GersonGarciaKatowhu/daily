
import './CircularProgressBar.css';
// eslint-disable-next-line react/prop-types
const CircularProgressBar = ({percentage, time, radius = 60, strokeWidth = 10 }) => {
  const normalizedRadius = radius - strokeWidth * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  const timeFormatted = `${time.minutes}:${time.seconds}${time.seconds < 10 ? "0" : ""}`

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="lightgrey"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="green"
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset }}
        strokeLinecap="round"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        transform={`rotate(-90 ${radius} ${radius})`}
      />
      <text
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        fontSize="1.5em"
      >
        {timeFormatted}
      </text>
    </svg>
  );
};

export default CircularProgressBar;
