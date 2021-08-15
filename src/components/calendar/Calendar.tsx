import React from "react";

interface CalendarProps {}

export const Calendar: React.FC<CalendarProps> = ({}) => {
  return (
    <div>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=document@clhs.tyc.edu.tw&ctz=Asia/Taipei"
        style={{ border: 0 }}
        width="100%"
        height="600"
        scrolling="no"
      ></iframe>
    </div>
  );
};
