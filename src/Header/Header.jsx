import "./Header.css";

export default function Header() {
  const themeToggle = () => {
    document.documentElement.classList.toggle("light");
  };
  return (
    <>
      <header>
        <img />
        <button
          onClick={themeToggle}
          className="themeToggle focusOutlineRed"
        ></button>
      </header>
    </>
  );
}
