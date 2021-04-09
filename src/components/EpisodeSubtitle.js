import React from 'react';

const moment = require("moment-timezone")

export default function EpisodeSubtitle({ eventDate, timeZone, ...props}) {
  var tzCode, localTz
  if (timeZone === "North America"){
    tzCode = "64"
    localTz = "America/Chicago"
  } else {
    tzCode = "195"
    localTz = "Europe/Paris"
  }
  return (
    <>
    Broadcast live at <a 
    href = {`https://www.timeanddate.com/worldclock/fixedtime.html?msg=DevOps+Party+Games&iso=${moment(eventDate).tz(localTz).format("YYYY")}${moment(eventDate).tz(localTz).format("MM")}${moment(eventDate).tz(localTz).format("DD")}T${moment(eventDate).tz(localTz).format("HH")}&p1=${tzCode}`} 
    target = "_blank"
    rel="noreferrer"
    >
        {moment(eventDate).tz(localTz).format("DD MMMM, YYYY")} at {moment(eventDate).tz(localTz).format("HH:mm")} {localTz}
    </a> 
  </>

  )
}