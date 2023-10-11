import "./App.css";
import PageRoutes from "./Routes/PageRoutes";
import AppHeader from "./components/AppHeader/AppHeader";

function App() {
  return (
    <>
      <AppHeader />
      <main>
        <PageRoutes />
      </main>
    </>
  );
}

export default App;
