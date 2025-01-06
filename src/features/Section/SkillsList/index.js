import { skills } from "./skillsArray";
import { List, Item } from "../StyledList";

const SkillsList = () => (
    <List>
        {skills.map((skill, index) => (
            <Item key={index}>
                {skill}
            </Item>
        ))}
    </List>
);

export default SkillsList;