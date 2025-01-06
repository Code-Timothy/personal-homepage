import myPhoto from "../../assets/images/myPhoto.jpeg";
import Content from "./Content";
import { StyledHeader, MyPhoto } from "./styled";

const Header = () => (
    <StyledHeader>
        <MyPhoto src={myPhoto} alt="My Photo" />
        <Content
            title="Tymoteusz Wójcik"
            subtitle="This is"
            description="🤵🏻💻 I`m passionate Fontend Developer in love with React, currently looking for new job opportunities."
        />
    </StyledHeader>
);

export default Header;