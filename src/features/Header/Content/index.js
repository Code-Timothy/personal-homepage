import { HiOutlineEnvelope } from "react-icons/hi2";
import {
    Wrapper,
    Subtitle,
    Title,
    AboutMe,
    ContactLink,
    HireMeButton,
} from "./styled";

const Content = ({ subtitle, title, description }) => (
    <Wrapper>
        <Subtitle>{subtitle}</Subtitle>
        <Title>{title}</Title>
        <AboutMe>{description}</AboutMe>
        <ContactLink href="mailto:timmywojcik@gmail.com">
            <HireMeButton><HiOutlineEnvelope size={24} />Hire me</HireMeButton>
        </ContactLink>
    </Wrapper>
);

export default Content;