import React from 'react';
import { GoogleCalendar, ICalendar } from 'datebook'
import moment from 'moment';

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
// const icalendar = new ICalendar(config)



return (
  <div>
  <a 
    href = {googleCalendar.render()}
    target = "_blank"
  >
    add to google calendar
  </a>

  {/* <a 
  href = {icalendar.download()}
  >
    ical download
  </a> */}
  </div>
)

}