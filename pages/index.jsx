import useSWR from "swr";
import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../helpers/api-util";
export default function HomePage(props) {
  return (
    <div>
      <EventList items={props.events}></EventList>
    </div>
  );
}
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    events: featuredEvents,
  };
}
