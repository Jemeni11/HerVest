import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Navigation from "./components/Navigation/Navigation";
import { AppContainer, MainContainer } from "./AppStyles";


const App = () => {
  return (
    <AppContainer>
      <Navigation />
      <MainContainer>
        <Header />
        <Content />
      </MainContainer>
    </AppContainer>
  );
};

export default App;
