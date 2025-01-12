import InfoBlock from "../InfoBlock";
import SocialIcons from "./SocialIcons";
import { Wrapper, Link } from "./styled";

const Footer = () => (
    <Wrapper>
        <InfoBlock
            title={<Link href="mailto:timmywojcik@gmail.com">timmywojcik@gmail.com</Link>}
            subtitle="Let's talk!"
            description="I'm always open to taking on exciting new projects whenever I have the time.
                        If you have a website, dashboard, mobile app, or any other digital product in mind,
                        I'm here to help bring your ideas to life. Passionate about building intuitive,
                        user-friendly experiences with clean, maintainable code, I'd love to collaborate on your next project.
                        Feel free to get in touch - I'm excited to help turn your vision into reality! ✌🏻"
            additionalContent={<SocialIcons />}
        />
    </Wrapper>
);

export default Footer;