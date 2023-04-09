import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface Event {
  id: string;
  title: string;
  city: string;
  description: string;
  image: string;
  emails_registered: string[];
}

interface EventCatPageProps {
  data: Event[];
}

const EventsCatPage: NextPage<EventCatPageProps> = ({ data, pageName }) => {
  return (
    <div className="event-page">
      <h1>Event in {pageName}</h1>
      <div className="event-page-container">
        {data.map((ev) => (
          <Link
            className="event-page-card"
            key={ev.id}
            href={`/events/${ev.city}/${ev.id}`}
          >
            <Image alt={ev.title} width={300} height={300} src={ev.image} />
            <div className="event-page-content">
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import("../../../data/data.json");
  const allPath = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });

  return {
    paths: allPath,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const id = context?.params.cat;
  const { allEvents } = await import("../../../data/data.json");

  const data = allEvents.filter((ev) => ev.city === id);
  console.log(data);

  return { props: { data, pageName: id } };
}
