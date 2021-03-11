import React from 'react';

const moment = require("moment-timezone")

export default function EpisodeSubtitle({ eventDate, timeZone, ...props}) {
  var myThing = eventDate
  if (timeZone === "North America"){
    var tzCode = "64"
    var localTz = "America/Chicago"
  } else {
    var tzCode = "3903"
    var localTz = "Europe/Paris"
  }
  return (
    <div className="post-subtitle">
    Broadcast live at <a 
    href = {`https://www.timeanddate.com/worldclock/fixedtime.html?msg=DevOps+Party+Games&iso=${moment(eventDate).tz(localTz).format("YYYY")}${moment(eventDate).tz(localTz).format("MM")}${moment(eventDate).tz(localTz).format("DD")}T${moment(eventDate).tz(localTz).format("HH")}&p1=${tzCode}`} 
    target = "_blank"
    >
        {moment(eventDate).tz(localTz).format("DD MMMM, YYYY")} at {moment(eventDate).tz(localTz).format("HH:mm")} {localTz}
    </a> 
  </div>

  )
}