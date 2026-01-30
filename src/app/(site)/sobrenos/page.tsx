import Testimonials from "@/components/Home/Testimonials";
import TicketSection from "@/components/Home/TicketSection";
import WorkSpeakers from "@/components/Home/WorkSpeakers";
import HeroSub from "@/components/SharedComponent/HeroSub";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sobre nós | Qnext",
};

const page = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/speakers", text: "Speakers" },
      ];
  return (
    <>
      <WorkSpeakers />
    </>
  );
};

export default page;
