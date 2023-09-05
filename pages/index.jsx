import useSWR from "swr";
import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../helpers/api-utils";
export default function HomePage(props) {
  const featuredEvents = props.featuredEvents;
  return (
    <div>
      <EventList items={featuredEvents}></EventList>
    </div>
  );
}
export async function getStaticProps(context) {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      featuredEvents: featuredEvents,
    },
  };
}
