import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import Chat from "./pages/user/Chat";
import Test from "./pages/user/Test";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Chat />
      {/* <Test /> */}
    </ThemeProvider>
  );
}

export default App;
