import myPhoto from "../../../assets/images/myPhoto.jpeg";
import InfoBlock from "../InfoBlock";
import { StyledHeader, MyPhoto, Text, ContactLink, Envelope } from "./styled";

const Header = () => (
    <StyledHeader>
        <MyPhoto src={myPhoto} alt="My Photo" />
        <InfoBlock
            title="Tymoteusz Wójcik"
            subtitle="This is"
            description={<Text>I am a young and passionate <strong>Frontend (React) developer</strong> who is deeply in love with React ⚛️,
                with a strong interest in exploring and mastering new technologies. I prioritize writing clean,
                maintainable code and user-friendly UX/UI design to ensure the best possible experience for users.
                Currently, I am <strong>looking for exciting new job opportunities</strong> to further enhance
                my skills and contribute to innovative projects 🚀.</Text>}
            additionalContent={
                <ContactLink href="mailto:timmywojcik@gmail.com">
                    <Envelope /> Hire Me
                </ContactLink>
            }
        />
    </StyledHeader>
);

export default Header;