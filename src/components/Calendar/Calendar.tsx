import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./styles.css";

const Calendar = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <ReactCalendar className="custom-calendar" />
    </div>
  );
};

export default Calendar;
