import { styled } from "styled-components";


const StyledWorksContainer = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
justify-content: space-between;
gap: 2rem;
width: 100%;

@media screen and (min-width: 768px) {
   flex-direction: row;
    }
`
const StyledContactInfo = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
min-width: 40%;
height: 100%;
`
const StyledProyects = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
min-width: 50%;
gap: 1rem;
height: 100%;
`

const StyledProyectsContainer = styled.div`
overflow-y: scroll;
height: 400px;
`
const StyledIconContainer = styled.div`
margin-top: 4REM;
display: flex;
align-items: center;
justify-content: flex-start;
gap: 2.5REM;
width: 350px;
`
export { StyledIconContainer, StyledWorksContainer, StyledContactInfo, StyledProyects, StyledProyectsContainer }