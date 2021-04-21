import { useEffect } from 'react';
import { Header } from '../components/Header';

export default function Home({ episodes }) {
  return (
    <div>
      <p>{JSON.stringify(episodes)}</p>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3335/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8, //every 8 hours a new page is generated
  };
}
