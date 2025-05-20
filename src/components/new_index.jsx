import React, { useState, useRef, useEffect } from 'react';

const Scheduler = (props) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [events, setEvents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [showNewEventModal, setShowNewEventModal] = useState(false);
  
    const calendarRef = useRef(null); // replacement for this.calendarRef
  
    //for componentDidMount
    useEffect(() => {

    }, []);
  
    //for componentDidUpdate (example if reacting to selectedDate)
    useEffect(() => {
        
    }, [selectedDate]);
  
    return (
      <div>
        {/* JSX will go here */}
      </div>
    );
  };
  
  export default Scheduler;