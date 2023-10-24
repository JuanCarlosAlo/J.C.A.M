import { styled } from "styled-components";

const StyledProjects = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 2rem;
height: 100%;
width: 100%;
@media screen and (min-width: 768px) {
    width:60%;
    }
`

export { StyledProjects }