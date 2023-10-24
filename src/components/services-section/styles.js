import { styled } from "styled-components"

const StyledServices = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
@media screen and (min-width: 468px) {
    flex-direction: row;
    justify-content: space-evenly;
    }
`

const StyledInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
gap: 0.5rem;
width: 100%;
@media screen and (min-width: 468px) {
    width: 40%;
    }
`

const StyledImg = styled.img`

max-width: 60%;
min-width:400px;
`

export { StyledServices, StyledImg, StyledInfo }