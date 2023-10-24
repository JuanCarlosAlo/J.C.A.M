import { styled } from 'styled-components';

const StyledSection = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: center;
	width: 100vw;
	height: ${({ height }) => height};
	background: ${({ bg }) => bg};
	background-repeat: no-repeat;
    background-size: cover;
    padding-left: 1REM;
    padding-right: 1rem;  
    @media screen and (min-width: 468px) {
        padding-left: 4REM;
    padding-right: 4rem;  
    }
`;

const StyledTitleContainer = styled.div`
position: absolute;
top: 2rem;
left: 2rem;
@media screen and (min-width: 468px) {
        padding-left: 4REM;
    padding-right: 4rem;  
    }
`

export { StyledSection, StyledTitleContainer };
