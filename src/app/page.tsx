import Footer from "@/components/ui/Footer";

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

        <li>Go</li>
        <li>JavaScript/TypeScript</li>
        <li>AWS</li>

        <h3
          className="text-xl sm:text-2xl font-semibold text-center sm:text-left"
          style={{ color: "var(--geist-foreground)" }}
        >
          Links
        </h3>
        <li>
          <a
            className="hover:underline hover:underline-offset-4"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:underline-offset-4"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:underline-offset-4"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </li>
      </main>
      <Footer />
    </div>
  );
}
