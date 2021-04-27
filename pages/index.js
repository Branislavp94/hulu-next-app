import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Rezults from "../components/Rezults";
import reguest from "../utills/reguest";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu-next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <Nav></Nav>
      <Rezults results={results}></Rezults>
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      reguest[genre]?.url || reguest.fetchTrending.url
    }`
  ).then(res => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
