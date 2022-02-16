import { StyledCard } from "./styles/Card-Styled";

export default function Card({ item: { id, title, body, image } }) {
    return (
        <StyledCard layout={id % 2 === 0 && " row-reverse"}>
            <div>
                <h2>{title}</h2>
                <p> {body}</p>
            </div>
            <div>
                <img src={`./images/${image}`}></img>
            </div>
        </StyledCard>
    );
}
