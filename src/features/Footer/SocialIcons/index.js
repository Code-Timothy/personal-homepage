import { ReactComponent as FacebookIcon } from "../../../assets/images/facebookIcon.svg";
import { ReactComponent as GithubIcon } from "../../../assets/images/githubIcon.svg";
import { ReactComponent as InstagramIcon } from "../../../assets/images/instagramIcon.svg";
import { ReactComponent as LinkedinIcon } from "../../../assets/images/linkedinIcon.svg";
import { Wrapper } from "./styled";

const SocialIcons = () => (
    <Wrapper>
        <a href="https://github.com/Code-Timothy" rel="noopener noreferrer" target="_blank"><GithubIcon /></a>
        <a href="https://www.facebook.com/?locale=pl_PL" rel="noopener noreferrer" target="_blank"><FacebookIcon /></a>
        <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank"><LinkedinIcon /></a>
        <a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank"><InstagramIcon /></a>
    </Wrapper>
);

export default SocialIcons;