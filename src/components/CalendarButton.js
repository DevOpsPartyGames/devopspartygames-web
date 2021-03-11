import React from 'react';
import safePrefix from "../utils/safePrefix";

const CalendarButton = ({ calendarURL, ...props }) => (
  <div>
    <a 
    target="_blank" 
    href={calendarURL}
  >
  <img 
    border="0" 
    src={safePrefix('/images/add-to-calendar.png')} 
    class = "player-episode-page" 
  />
  </a>
  <br clear = "all"></br>
</div>

)
export default CalendarButton