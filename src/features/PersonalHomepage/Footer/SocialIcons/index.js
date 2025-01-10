import { socials } from "./socials";
import { Wrapper } from "./styled";

const SocialIcons = () => (
    <Wrapper>
        {socials.map((social, index) => (
            <a
                key={index}
                href={social.link}
                rel={social.rel}
                target={social.target}
            >
                {social.icon}
            </a>
        ))}
    </Wrapper>
);

export default SocialIcons;