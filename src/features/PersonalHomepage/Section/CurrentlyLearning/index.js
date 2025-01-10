import { currentlyLearning } from "./currentlyLearningArray";
import { List, Item } from "../StyledList";

const CurrentlyLearning = () => (
    <List>
        {currentlyLearning.map((currentLearning, index) => (
            <Item key={index}>
                {currentLearning}
            </Item>
        ))}
    </List>
);

export default CurrentlyLearning;