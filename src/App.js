import { Container } from "./common/Container/inedx";
import Header from "./features/Header";
import Section from "./features/Section";
import SkillsList from "./features/Section/SkillsList";

function App() {
  return (
    <Container>
      <Header />
      <Section
        title="My skillset includes 🛠"
        body={<SkillsList />}
      />
    </Container>
  );
};

export default App;
