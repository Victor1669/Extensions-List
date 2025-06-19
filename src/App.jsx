import Extension from "./ExtensionsList/Extensions";
import Header from "./Header/Header";

import "./Site.css";

export default function App() {
  return (
    <>
      <main className="main">
        <Header />
        <Extension />
      </main>
    </>
  );
}
