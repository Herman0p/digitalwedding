import Hero from '@/components/Hero';
import Quote from '@/components/Quote';
import Couple from '@/components/Couple';
import EventDetails from '@/components/EventDetails';
import Countdown from '@/components/Countdown';
import Gallery from '@/components/Gallery';
import Story from '@/components/Story';
import Rsvp from '@/components/Rsvp';
import Gift from '@/components/Gift';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <SmoothScroll>
      <main className="bg-background text-foreground">
        <Hero />
        <Quote />
        <Couple />
        <EventDetails />
        <Countdown />
        <Gallery />
        <Story />
        <Rsvp />
        <Gift />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
