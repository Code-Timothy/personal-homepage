import { ReactComponent as FacebookIcon } from "../../../../assets/images/facebookIcon.svg";
import { ReactComponent as GithubIcon } from "../../../../assets/images/githubIcon.svg";
import { ReactComponent as InstagramIcon } from "../../../../assets/images/instagramIcon.svg";
import { ReactComponent as LinkedinIcon } from "../../../../assets/images/linkedinIcon.svg";
import { SocialIcon } from "./styled";

export const socials = [
    {
        icon: <SocialIcon as={GithubIcon} />,
        link: "https://github.com/Code-Timothy",
        rel: "noreferrer noopener",
        target: "_blank",
    },
    {
        icon: <SocialIcon as={FacebookIcon} />,
        link: "https://www.facebook.com/?locale=pl_PL",
        rel: "noreferrer noopener",
        target: "_blank",
    },
    {
        icon: <SocialIcon as={LinkedinIcon} />,
        link: "https://www.linkedin.com/",
        rel: "noreferrer noopener",
        target: "_blank",
    },
    {
        icon: <SocialIcon as={InstagramIcon} />,
        link: "https://www.instagram.com/",
        rel: "noreferrer noopener",
        target: "_blank",
    },
];