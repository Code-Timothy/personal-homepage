import { HiOutlineEnvelope } from "react-icons/hi2";
import {
    Wrapper,
    Subtitle,
    Title,
    AboutMe,
    ContactLink,
    HireMeButton,
} from "./styled";

const Content = () => (
    <Wrapper>
        <Subtitle>This is</Subtitle>
        <Title>Tymoteusz Wójcik</Title>
        <AboutMe>🤵🏻💻 I`m passionate Fontend Developer in love with React, currently looking for new job opportunities.</AboutMe>
        <ContactLink href="mailto:timmywojcik@gmail.com">
            <HireMeButton><HiOutlineEnvelope size={24} />Hire me</HireMeButton>
        </ContactLink>
    </Wrapper>
);

export default Content;