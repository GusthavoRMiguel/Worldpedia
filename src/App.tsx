import { Header } from "./components/Header";
import { MainRoutes } from "./Routes/MainRoutes";
import AppProvider from "./hooks";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Footer } from "./components/Footer";

function App() {
  return (
    <AppProvider>
      <Header />
      <MainRoutes />
      <Footer />
      <GlobalStyles />
    </AppProvider>
  );
}

export default App;
