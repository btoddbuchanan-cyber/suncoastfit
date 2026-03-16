import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Suncoastfit services: the Walker to Runner 8-week program on the Sunshine Coast, BC.",
};

export default function ServicesPage() {
  redirect("/services/walker-to-runner");
}
