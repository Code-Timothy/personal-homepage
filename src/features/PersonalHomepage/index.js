import { Container } from "../../common/Container/inedx";
import ThemeButton from "./ThemeButton";
import Header from "./Header";
import Section from "./Section";
import SkillsList from "./Section/SkillsList";
import LearningGoalsList from "./Section/LearningGoalsList";
import Projects from "./Projects";
import Footer from "./Footer";

const PersonalHomepage = () => (
    <Container>
        <ThemeButton />
        <Header />
        <Section
            title="My skillset includes 🛠"
            body={<SkillsList />}
        />
        <Section
            title="What I want to learn next 🚀"
            body={<LearningGoalsList />}
        />
        <Projects />
        <Footer />
    </Container>
);

export default PersonalHomepage;