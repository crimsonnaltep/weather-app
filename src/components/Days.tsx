import React from "react";
import { Typography } from "@mui/material";
function Days(props) {
  let n = props.date.getDate();
  let ord = "th";
  if (n % 10 == 1 && n % 100 != 11) {
    ord = "st";
  } else if (n % 10 == 2 && n % 100 != 12) {
    ord = "nd";
  } else if (n % 10 == 3 && n % 100 != 13) {
    ord = "rd";
  }
  return (
    <div>
      <Typography variant="h4">{`${props.date.toLocaleString("en-US", {
        weekday: "long",
      })}`}</Typography>
      <Typography variant="p" display="flex" align="center">
        {`${props.date.toLocaleString("en-US", {
          month: "long",
        })} ${props.date.getDate()}` + ord}
      </Typography>
      <Typography variant="p" align="center">
        {props.temp}
      </Typography>
    </div>
  );
}
export default Days;
