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

export const HomePage:React.FC<HomeProps> = ({data}) => {
  return <main>
    {data.map((ev) => {
      return (
        <Link key={ev.id} href={`events/${ev.id}`}>
          <Image width={300} height={300} alt={ev.title} src={ev.image} />
          <h2>{ev.title}</h2>
          <p>{ev.description}</p>
        </Link>
      );
    })}
  </main>;
};
