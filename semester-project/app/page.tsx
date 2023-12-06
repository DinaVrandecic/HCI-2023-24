import HeroSection from "./_components/HeroSection";
import CollectionSection from "./_components/CollectionSection";

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center">
      <HeroSection />
      <CollectionSection />
    </main>
  );
}
