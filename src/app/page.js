
import Friends from "@/component/Friends";
import Hero from "@/component/Hero";
import Stat from "@/component/Stat";
import Theme from "@/component/Theme";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Theme />
      <Hero />
      <Stat />
      <Friends />
    </>
  );
}
