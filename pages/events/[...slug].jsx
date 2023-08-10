import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/error-alert";

export default function FilterEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;
  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p className="center">Invalid Filter. Please adjust your values!</p>;
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all Events</Button>
        </div>
        ;
      </>
    );
  }

  const filterEvents = getFilteredEvents({ year: numYear, month: numMonth });
  if (!filterEvents || filterEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p className="center">
            No events found for the chosen year and month
          </p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);
  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filterEvents}></EventList>
    </>
  );
}
