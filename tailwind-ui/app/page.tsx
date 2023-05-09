import Image from "next/image";
import {Inter} from "next/font/google";
import Header from "./components/Header";
import Pricing from "./components/Pricing";
import Features from "./components/Features";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  return (
    <main>
      <Header />
      <Pricing />
      <Features />
    </main>
  );
}
