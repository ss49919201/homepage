import "./App.css";

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
    url: "",
  },
  {
    name: "Hatena @ss49919201",
    url: "https://ss49919201.hatenablog.com/",
  },
];

function App() {
  return (
    <>
      {/* TODO: ロゴの位置を変える */}
      {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
      <h1 className="title">shinshin</h1>
      <div>
        <h2>Profile</h2>
        <p>I&apos;m a Software Developer. I love Programing.</p>
      </div>
      <div>
        <h2>Skils</h2>
        <p>{skils.join("/")}</p>
      </div>
      <div>
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
      </div>
      <footer className="footer">
        <p>© 2024 shinshin</p>
      </footer>
    </>
  );
}

export default App;
