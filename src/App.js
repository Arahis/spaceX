import "./App.css";
import { Layout } from "antd";
import { NavBar } from "./common/components/nav-bar";
import { MainContent } from "./common/components/main-content";

function App() {
  return (
    <Layout>
      <NavBar />
      <MainContent />
    </Layout>
  );
}

export default App;
