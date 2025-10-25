import { useState } from "react";
export default function EventObject() {
  const [event, setEvent] = useState<React.MouseEvent<HTMLButtonElement> | null>(null);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    (e.target as HTMLElement).outerHTML;
    const eventCopy = { ...e };
    delete (eventCopy as any).view;
    setEvent(eventCopy as React.MouseEvent<HTMLButtonElement>);
  };
  return (
    <div>
      <h2>Event Object</h2>
      <button onClick={(e) => handleClick(e)}
        className="btn btn-primary"
        id="wd-display-event-obj-click">
        Display Event Object
      </button>
      <pre>{JSON.stringify(event, null, 2)}</pre>
      <hr/>
    </div>
);}
