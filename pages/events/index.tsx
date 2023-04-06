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
    <div>
      <h1>Events Page</h1>
      {data.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.id}`}>
          <Image alt={ev.title} width={300} height={300} src={ev.image} />
          <h2>{ev.title}</h2>
        </Link>
      ))}
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
