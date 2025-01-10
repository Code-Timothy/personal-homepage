import Content from "../Content";
import SocialIcons from "./SocialIcons";
import { Wrapper, Link } from "./styled";

const Footer = () => (
    <Wrapper>
        <Content
            title={<Link href="mailto:timmywojcik@gmail.com">timmywojcik@gmail.com</Link>}
            subtitle="Let's talk!"
            description="I'm always open to taking on exciting new projects whenever I have the time. 
                        you have a website, dashboard, mobile app, or any other digital product in mind,
                        I'here to help bring your ideas to life. Passionate about building intuitive,
                        user-friendly experiences with clean, maintainable code,
                        I'd love to collaborate on your next project. Feel free to get in touch - 
                        I'm excited to help you turn your vision into reality! ✌🏻"
            additionalContent={<SocialIcons />}
        />
    </Wrapper>
);

export default Footer;