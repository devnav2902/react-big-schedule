import React, { useRef, useState } from 'react';
import { DemoData, Scheduler, SchedulerData, ViewType } from '../../../index';

function FunctionalResizeByParent() {
  const parentRef = useRef(null);
  const [schedulerData, setSchedulerData] = useState(() => {
    const sd = new SchedulerData('2022-12-18', ViewType.Week, false, false, {
      ...DemoData.config,
      responsiveByParent: true,
      schedulerWidth: '100%',
      besidesWidth: 0,
      schedulerMaxHeight: 500,
    });
    sd.localeDayjs.locale('en');
    sd.setResources(DemoData.resources);
    sd.setEvents(DemoData.events);
    return sd;
  });

  return (
    <div>
      <h2>Resize By Parent Example (Functional)</h2>
      <div
        ref={parentRef}
        style={{
          border: '2px solid #1890ff',
          transition: 'width 0.3s',
          margin: '0 auto',
          background: '#f0f5ff',
          padding: 8,
        }}
      >
        <Scheduler
          schedulerData={schedulerData}
          prevClick={sd => { sd.prev(); sd.setEvents(DemoData.events); setSchedulerData(sd); }}
          nextClick={sd => { sd.next(); sd.setEvents(DemoData.events); setSchedulerData(sd); }}
          onSelectDate={(sd, date) => { sd.setDate(date); sd.setEvents(DemoData.events); setSchedulerData(sd); }}
          onViewChange={(sd, view) => { sd.setViewType(view.viewType, view.showAgenda, view.isEventPerspective); sd.setEvents(DemoData.events); setSchedulerData(sd); }}
          eventItemClick={(sd, event) => { alert(`You just clicked an event: {id: ${event.id}, title: ${event.title}}`); }}
          viewEventClick={(sd, event) => { alert(`You just executed ops1 to event: {id: ${event.id}, title: ${event.title}}`); }}
          viewEventText="Ops 1"
          viewEvent2Text="Ops 2"
          viewEvent2Click={(sd, event) => { alert(`You just executed ops2 to event: {id: ${event.id}, title: ${event.title}}`); }}
          toggleExpandFunc={(sd, slotId) => { sd.toggleExpandStatus(slotId); setSchedulerData(sd); }}
          parentRef={parentRef}
        />
      </div>
    </div>
  );
}

export default FunctionalResizeByParent;
