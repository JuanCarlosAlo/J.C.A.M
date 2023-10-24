import { styled } from "styled-components"
import { COLORS } from "../../constants/colors"

const StyledDirectionContainer = styled.div`
display: none;
align-items: center;
justify-content: flex-start;
gap: 1rem;

`

const StyledWorksContainer = styled.div`
display: flex;
align-items: flex-start;
justify-content: flex-start;
width: 100%;
gap: 1REM;
@media screen and (min-width: 768px) {
    &:hover{
    background-color: ${COLORS.UNACTIVE};
    cursor: pointer;
    ${StyledDirectionContainer}{
        display: flex;
    }
}
    }

`
const StyledInfo = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
gap: 1rem;
@media screen and (min-width: 768px) {
    gap: 0.2rem;
    }
`


const StyledArrowContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: ${COLORS.WHITE};
border-radius: 50%;
width: 50px;
height: 32px;
`


const StyledImg = styled.img`
width: 40%;
`
export { StyledWorksContainer, StyledImg, StyledInfo, StyledDirectionContainer, StyledArrowContainer }