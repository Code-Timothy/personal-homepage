import { Wrapper, Text, Spinner } from "./styled";

const Loading = () => (
    <Wrapper>
        <Text>Please wait, projects are being loaded...</Text>
        <Spinner></Spinner>
    </Wrapper>
);

export default Loading;