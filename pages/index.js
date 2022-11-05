import Head from "next/head";
import Navbar from "../components/Navbar";
import WorkSection from "../components/WorkSection";
import About from "./about";
import Work from "./work";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
