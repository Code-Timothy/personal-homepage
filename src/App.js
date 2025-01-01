import { Container } from "./common/Container/inedx";
import Header from "./features/Header";
import Section from "./features/Section";

function App() {
  return (
    <Container>
      <Header />
      <Section
        title="My skillset includes 🛠"
      />
    </Container>
  );
};

export default App;
