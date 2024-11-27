import "./App.css";
import profile from "./assets/profile.png";

const skils = ["Go", "JavaScript", "TypeScript", "AWS"];

const links = [
  {
    name: "X @ss49919201",
    url: "https://twitter.com/ss49919201",
  },
  {
    name: "BlueSky @snsn29",
    url: "https://bsky.app/profile/ss29.bsky.social",
  },
  {
    name: "GitHub @ss49919201",
    url: "https://github.com/ss49919201",
  },
  {
    name: "Zenn @ss49919201",
    url: "https://zenn.dev/ss49919201",
  },
  {
    name: "Hatena @ss49919201",
    url: "https://ss49919201.hatenablog.com/",
  },
];

function App() {
  return (
    <>
      <main>
        <section className="title">
          <h1>shinshin</h1>
          <img src={profile} className="logo" alt="Vite logo" />
        </section>
        <section>
          <h2>Profile</h2>
          <p>I&apos;m a Software Developer. I love Programing.</p>
        </section>
        <section>
          <h2>Skils</h2>
          <p>{skils.join("/")}</p>
        </section>
        <section>
          <h2>Links</h2>
          <ul className="skils-unordered-list">
            {links.map(({ name, url }) => {
              return (
                <li className="" key={name}>
                  <a href={url}>{name}</a>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
      <footer className="footer">
        <p>© 2024 shinshin</p>
      </footer>
    </>
  );
}

export default App;
