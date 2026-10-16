import { Hero } from "@/components/site/hero";
import { Stats } from "@/components/site/stats";
import { Explore } from "@/components/site/explore";
import { Trackers, NewsletterSponsor, Submit } from "@/components/site/sections";
export default function Home() {
  return (<><Hero /><Stats /><Explore /><Trackers /><NewsletterSponsor /><Submit /></>);
}
