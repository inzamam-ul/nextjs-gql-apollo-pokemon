import Header from "./Header";

export default function App({ children }) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
