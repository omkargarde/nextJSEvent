import useSWR from "swr";
import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../dummy-data";
export default function HomePage(props) {
  const featuredEvents = props.featuredEvents;
  return (
    <div>
      <EventList items={featuredEvents}></EventList>
    </div>
  );
}
export async function getStaticProps(context) {
  // const { data, error } = useSWR(
  //   "https://react-todo-56d15-default-rtdb.asia-southeast1.firebasedatabase.app/events.json",
  //   (url) => fetch(url).then((res) => res.json())
  // );
  // if (error) {
  //   return {
  //     props: null,
  //   };
  // }
  const response = await fetch(
    "https://react-todo-56d15-default-rtdb.asia-southeast1.firebasedatabase.app/events.json"
  );
  const data = await response.json();

  const transformedData = [];
  for (const key in data) {
    transformedData.push({
      id: key,
      ...data[key],
    });
  }
  return {
    props: {
      featuredEvents: data,
    },
  };
}
