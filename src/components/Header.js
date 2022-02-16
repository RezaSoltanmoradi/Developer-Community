import { StyleHeader, Nav, Logo, Image } from "./styles/StyleHeader";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";
// import LogoImg from "../images/logo.svg";
// import mockups from "../images/illustration-mockups.svg";

export const Header = () => {
    return (
        <StyleHeader>
            <Container>
                <Nav>
                    <Logo src="./images/logo.svg" alt=""></Logo>
                    <Button>Try It Free</Button>
                </Nav>
                <Flex>
                    <div>
                        <h1 className="text-capitalize">
                            buld the comunity your fans will love
                        </h1>
                        <p>
                            lorem ipsum 10 background font color export items
                            images Fragment align weight justify weight lorem
                            ipsum 10 background font color export items images
                            Fragment align weight justify weight lorem ipsum 10
                            background font color export items images Fragment
                            align weight justify weight
                        </p>
                        <Button
                            bg="#ff0099"
                            color="#fff"
                            className="text-capitalize"
                        >
                            get started for free
                        </Button>
                    </div>
                    <Image
                        src="./images/illustration-mockups.svg"
                        alt=""
                    ></Image>
                </Flex>
            </Container>
        </StyleHeader>
    );
};
