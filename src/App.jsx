import "./App.css";
import Header from "./components/header";
import PageContainer from "./components/PageContainer";
import RouterConfig from "./config/RouterConfig";

function App() {
  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
      </PageContainer>
    </div>
  );
}

export default App;
