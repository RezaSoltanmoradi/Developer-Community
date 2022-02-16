import { FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";
import { StyledSosialIcons } from "./styles/SocialIcons-styled";
const SocialIcons = () => {
    return (
        <StyledSosialIcons>
            <li>
                <a href="https://github.com/RezaSoltanmoradi?tab=repositories">
                    <FaGithub />
                </a>
            </li>
            <li>
                <a href="https://t.me/R_soltanmoradi_1995">
                    <FaTelegram />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/reza-moradi-00156222b//">
                    <FaLinkedin />
                </a>
            </li>
        </StyledSosialIcons>
    );
};

export default SocialIcons;
