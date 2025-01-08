import { FiAlertTriangle } from "react-icons/fi";
import { Wrapper, Icon, Title, Text, Link } from "./styled";

const Error = () => (
    <Wrapper>
        <Icon><FiAlertTriangle /></Icon>
        <Title>Ooops! Something went wrong...</Title>
        <Text>
            Sorry, failed to load Github projects. <br />
            You can check them directly on Github.
        </Text>
        <Link href="https://github.com/Code-Timothy" target="_blank" rel="noreferrer noopener">Go to Github</Link>
    </Wrapper>
);

export default Error;