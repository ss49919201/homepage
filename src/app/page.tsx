import Footer from "@/components/ui/Footer";
import { links, skils } from "./data";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2 className="text-3xl sm:text-5xl font-bold text-center sm:text-left">
          shinshin
        </h2>
        <p>Programmer💻</p>
        <h3
          className="text-xl sm:text-2xl font-semibold text-center sm:text-left"
          style={{ color: "var(--geist-foreground)" }}
        >
          Skils
        </h3>
        {skils.map((skil) => {
          return <li key={skil}>{skil}</li>;
        })}
        <h3
          className="text-xl sm:text-2xl font-semibold text-center sm:text-left"
          style={{ color: "var(--geist-foreground)" }}
        >
          Links
        </h3>
        {links.map(({ name, url }) => {
          return (
            <li key={name}>
              <a
                className="hover:underline hover:underline-offset-4"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {name}
              </a>
            </li>
          );
        })}
      </main>
      <Footer />
    </div>
  );
}
