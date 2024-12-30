import myPhoto from "../../assets/images/myPhoto.jpeg";
import Content from "./Content";
import { StyledHeader, MyPhoto } from "./styled";

const Header = () => (
    <StyledHeader>
        <MyPhoto src={myPhoto} alt="My Photo" />
        <Content />
    </StyledHeader>
);

export default Header;