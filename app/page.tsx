export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="font-serif text-5xl tracking-wide sm:text-6xl">
        Lecouve Bouquet
      </h1>

      <p className="mt-6 font-serif text-xl italic text-muted">
        Francia ihletésű esküvői dekoráció Budapesten
      </p>
      <p className="mt-1 text-sm text-muted">
        French-inspired wedding decor in Budapest
      </p>

      <div className="mt-16 space-y-1 text-sm">
        <p>Hamarosan új weboldallal jelentkezünk.</p>
        <p className="text-muted">Our new website is on its way.</p>
      </div>

      <div className="mt-12 flex gap-6 text-sm">
        <a
          className="underline underline-offset-4 hover:text-muted"
          href="mailto:reka@lecouvebouquet.hu"
        >
          reka@lecouvebouquet.hu
        </a>
        <a
          className="underline underline-offset-4 hover:text-muted"
          href="https://www.instagram.com/lecouvebouquet"
        >
          Instagram
        </a>
      </div>
    </main>
  );
}
