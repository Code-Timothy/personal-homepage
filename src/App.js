import { Container } from "./common/Container/inedx";
import Header from "./features/Header";
import Section from "./features/Section";
import Footer from "./features/Footer";
import LearningGoalsList from "./features/Section/LearningGoalsList";
import SkillsList from "./features/Section/SkillsList";

function App() {
  return (
    <Container>
      <Header />
      <Section
        title="My skillset includes 🛠"
        body={<SkillsList />}
      />
      <Section
        title="What I want to learn next 🚀"
        body={<LearningGoalsList />}
      />
      <Footer />
    </Container>
  );
};

export default App;
