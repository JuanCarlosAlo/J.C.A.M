import { styled } from "styled-components";
import { COLORS } from "../../constants/colors";

const StyledProjectContainer = styled.div`
display: flex;
flex-direction: column;

align-items: center;
justify-content: flex-start;
gap: 2rem;
height: 20%;

@media screen and (min-width: 468px) {
    flex-direction: ${({ flex }) => flex};
    align-items: flex-start;
    width: 100%;
    }
`

const StyledModalText = styled.p`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%);
display: none;
color: ${COLORS.WHITE};
z-index: 10;

`

const StyledImgContainer = styled.div`
position: relative;
width: 300px;
cursor: pointer;
&:hover{
    &::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 240px;
        width: 100%;
        background-color: ${COLORS.BLACK_TRANSPARENT};
        @media screen and (min-width: 468px) {
    min-width: 380px;
 max-width: 380px;
    }
    }
    ${StyledModalText}{
        display: block;
    }
}
@media screen and (min-width: 468px) {
    min-width: 380px;
 max-width: 380px;
    }
`



const StyledImg = styled.img`


width: 100%;
object-fit: cover;
-webkit-box-shadow: 0px 0px 33px 0px rgba(255,255,255,0.4);
-moz-box-shadow: 0px 0px 33px 0px rgba(255,255,255,0.4);
box-shadow: 0px 0px 33px 0px rgba(255,255,255,0.4);
@media screen and (min-width: 468px) {
    min-width: 380px;
 max-width: 380px;
    }

`

export { StyledProjectContainer, StyledImg, StyledImgContainer, StyledModalText }