import { TargetSec, WhatSec, WhoSec } from "@/pages/about"
import { HeroPages } from "@/common/index";

export default function About() {
  return (
    <main>
      <HeroPages title='サイトについて' sub='ABOUT' imageSrc='/images/pages/about/about-hero-illust.svg' />
      <TargetSec />
      <WhatSec />
      <WhoSec />
    </main>
  );
}
