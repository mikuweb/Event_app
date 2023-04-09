import { NextPage } from "next";
import Image from "next/image";

interface Event {
  id: string;
  title: string;
  city: string;
  description: string;
  image: string;
  emails_registered: string[];
}

interface EventPageProps {
  data: Event;
}

const EventPage: NextPage<EventPageProps> = ({ data }) => {
  return (
    <div className="event">
      <Image src={data.image} width={1000} height={500} alt={data.title} />
      <div className="event-content">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default EventPage;

export async function getStaticPaths() {
  const { allEvents } = await import("../../../data/data.json");
  const allPaths = allEvents.map((path: Event) => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const { allEvents } = await import("../../../data/data.json");
  const eventData = allEvents.find((ev) => id === ev.id);
  return {
    props: { data: eventData },
  };
}
