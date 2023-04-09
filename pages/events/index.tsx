import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface Event {
  id: string;
  title: string;
  image: string;
}

interface EventsPageProps {
  data: Event[];
}

const EventsPage: NextPage<EventsPageProps> = ({ data }) => {
  return (
    <div className="events-page">
      <h1>Events Page</h1>
      <div className="events-page-container">
        {data.map((ev) => (
          
          <Link
            className="events-page-card"
            key={ev.id}
            href={`/events/${ev.id}`}
          >
            <Image
              className="events-page-img"
              alt={ev.title}
              width={300}
              height={300}
              src={ev.image}
            />
            <h2 className="events-page-title">{ev.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("../../data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
