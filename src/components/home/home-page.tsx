import Image from "next/image";
import Link from "next/link";

interface Home {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface HomeProps {
  data: Home[];
}

export const HomePage: React.FC<HomeProps> = ({ data }) => {
  return (
    <div className="home-body">
      {data.map((ev) => {
        return (
          <Link className="home-card" key={ev.id} href={`events/${ev.id}`}>
           <div className="home-img">
            <Image width={300} height={300} alt={ev.title} src={ev.image} />
            </div>
            <div className="home-content">
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
