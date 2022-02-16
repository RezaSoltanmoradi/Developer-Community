import SocialIcons from "./socialIcon";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer-styled";
export default function Footer() {
    return (
        <StyledFooter>
            <Container>
                <img src="./images/logo_white.svg" alt="" />
                <Flex>
                    <ul>
                        <li className="mt-3">
                           connect me:
                        </li>
                        <li>+98 919 541 65 61</li>
                        <li>https://github.com/RezaSoltanmoradi</li>
                    </ul>
                    <ul>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                    </ul>
                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                    {/* social icons  */}
                    <SocialIcons />
                </Flex>
                <p>&copy; 2021 it's not ilegal</p>
            </Container>
        </StyledFooter>
    );
}
