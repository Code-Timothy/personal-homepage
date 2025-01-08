import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import GlobalStyles from './globalStyles';
import PersonalHomepage from "./features/PersonalHomepage";
import { selectDarkTheme } from './features/PersonalHomepage/Header/ThemeButton/themeSlice';

function App() {
  const theme = useSelector(selectDarkTheme);

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <PersonalHomepage />
    </ThemeProvider>
  );
};

export default App;
