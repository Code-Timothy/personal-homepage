import myPhoto from "../../../assets/images/myPhoto.jpeg";
import Content from "../Content";
import AboutMe from "./AboutMe";
import { StyledHeader, MyPhoto, ContactLink, Envelope } from "./styled";

const Header = () => (
    <StyledHeader>
        <MyPhoto src={myPhoto} alt="My Photo" />
        <Content
            title="Tymoteusz Wójcik"
            subtitle="This is"
            description={<AboutMe />}
            additionalContent={
                <ContactLink href="mailto:timmywojcik@gmail.com">
                    <Envelope /> Hire Me
                </ContactLink>
            }
        />
    </StyledHeader>
);

export default Header;