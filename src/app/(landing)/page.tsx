import CompaniesList from "@/components/CompaniesList";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="max-w-screen-xl mx-auto">
        <CompaniesList />
      </div>
    </main>
  );
}
