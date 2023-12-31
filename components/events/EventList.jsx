import EventItem from "./Event-Item";
import classes from "./EventList.module.css";
export default function EventList(props) {
  const { items } = props;
  console.log(items);
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}
