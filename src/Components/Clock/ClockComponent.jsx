import Clock from "clock-react";
const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

const ClockComponent = () => {
  // const style = {
  //   color: "black",
  //   fontFamily: "italic",
  // };

  const current = new Date();

  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <div className="clock-container">
      <p>
        Current time: <Clock className="clock" />
      </p>
      <p className="clock-date">Current date: {date}</p>
      <p>Your timezone: {timeZone}</p>
    </div>
  );
};

export default ClockComponent;
