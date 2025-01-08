import { useDispatch, useSelector } from "react-redux";
import { Wrapper, ThemeText, StyledButton, StyledSunIcon } from "./styled";
import { selectDarkTheme, toggleTheme } from "./themeSlice";

const ThemeButton = () => {
    const dispatch = useDispatch();
    const darkTheme = useSelector(selectDarkTheme);

    return (
        <Wrapper>
            <ThemeText>Dark mode off</ThemeText>
            <StyledButton onClick={() => dispatch(toggleTheme())}>
                <StyledSunIcon $move={darkTheme} />
            </StyledButton>
        </Wrapper>
    );
};

export default ThemeButton;