import Content from "../Content";
import SocialIcons from "./SocialIcons";
import { Wrapper, Link } from "./styled";

const Footer = () => (
    <Wrapper>
        <Content
            title={<Link href="mailto:timmywojcik@gmail.com">timmywojcik@gmail.com</Link>}
            subtitle="Let's talk!"
            description="I'm always open to new projects whenever I gave the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to contact me ✌🏻"
            additionalContent={<SocialIcons />}
        />
    </Wrapper>
);

export default Footer;