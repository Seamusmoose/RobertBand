import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { DieBandHeute } from "@/components/DieBandHeute";
import { Dokumente } from "@/components/Dokumente";
import { Impressum } from "@/components/Impressum";
import History from "@/components/History";
import { HistoryRock } from "@/components/HistoryRock";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Goblins Petard Five</title>
        <meta
          name="The Goblins Petard Five"
          content="The Goblins Petard Five"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container flex row">
          <Impressum />
          <History />
          <DieBandHeute />
          <HistoryRock />
          <Dokumente />
        </div>
      </main>
    </>
  );
}
