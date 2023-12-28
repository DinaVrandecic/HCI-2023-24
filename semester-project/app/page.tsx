import HeroSection from "./_components/HeroSection";
import CollectionSection from "./_components/CollectionSection";
import CustomerReviews from "./_components/CustomerReviews";

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center -z-20 relative bg-page_background">
      <HeroSection />
      <CollectionSection />
      <CustomerReviews/>
    </main>
  );
}
