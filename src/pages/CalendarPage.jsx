import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { load, save } from '../utils/storage';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const [events, setEvents] = useState(() => load('events', []));

  const moveEvent = ({ event, start, end }) => {
    const updated = events.map(e => (e.id === event.id ? { ...e, start, end } : e));
    setEvents(updated);
    save('events', updated);
  };

  return (
    <Calendar
      localizer={localizer}
      events={events}
      defaultView="week"
      style={{ height: 'calc(100vh - 50px)' }}
      onEventDrop={moveEvent}
      draggableAccessor={() => true}
    />
  );
};

export default CalendarPage;
