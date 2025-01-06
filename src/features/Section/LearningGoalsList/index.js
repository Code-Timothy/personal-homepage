import { learningGoals } from "./learningGoalsArray";
import { List, Item } from "../StyledList";

const LearningGoalsList = () => (
    <List>
        {learningGoals.map((goal, index) => (
            <Item key={index}>
                {goal}
            </Item>
        ))}
    </List>
);

export default LearningGoalsList;