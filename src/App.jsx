import "./App.css";
import Header from "./components/header";
import PageContainer from "./components/PageContainer";
import RouterConfig from "./config/RouterConfig";
import Loading from "./components/Loading";

function App() {
  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
      </PageContainer>
    </div>
  );
}

export default App;
