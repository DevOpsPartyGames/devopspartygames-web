import React from 'react';
import { GoogleCalendar, ICalendar } from 'datebook'
import moment from 'moment';
import safePrefix from "../utils/safePrefix";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';

export default function DateBookCalendarButton({ eventDate, ...props}){


const endTime = new moment(eventDate).add(1, 'h').toDate();
const realEndTime = moment(endTime).format()
const config = {
  title: 'DevOps Party Games',
  location: 'https://twitch.tv/devopspartygames',
  description: 'It\'s time for DevOps Party Games!',
  start: new Date(eventDate),
  end: new Date(realEndTime),
}

const googleCalendar = new GoogleCalendar(config) 

// TODO: in the current code, the ical file just downloads on page load. Need some javascript magic I think
const icalendar = new ICalendar(config)



return (
  <div>
  <a 
    href = {googleCalendar.render()}
    target = "_blank"
    rel="noreferrer"
    class = "no-underline"
  >
  {/* <img 
    border="0" 
    src={safePrefix('/images/add-to-calendar.png')} 
    class = "player-episode-page" 
    alt="Add to Google Calendar"
  /> */}
  <button class="calendar-button">
    <FontAwesomeIcon icon={faCalendarPlus} size="1x"/> &nbsp;
    Add to Google Calendar
  </button>
  </a>

  <button 
    onClick={() => icalendar.download()}
    class="calendar-button"
  >
    <FontAwesomeIcon icon={faCalendarPlus} size="1x"/> &nbsp;
    Download iCal
  </button>
  </div>
)

}