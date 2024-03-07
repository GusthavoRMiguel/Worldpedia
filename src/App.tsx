import { Header } from "./components/Header";
import { MainRoutes } from "./Routes/MainRoutes";
import AppProvider from "./hooks";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <AppProvider>
      <Header />
      <MainRoutes />
      <GlobalStyles />
    </AppProvider>
  );
}

export default App;
