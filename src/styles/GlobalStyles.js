import { createGlobalStyle } from 'styled-components';
import { COLORS, SECONDARY_COLORS } from '../constants/colors';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
  }
  img{
    display: block;
    max-width: 100%;
  }

@font-face {
    font-family: Abnes;
    src: url('/fonts/nuber-next-font-family/Abnes.otf');
}
@font-face {
    font-family: Red-Seven;
    src: url('/Fonts/red-seven/Red-Seven.otf');
}
  body{
    margin: 0;
    font-family: sans-serif;
    height: 100vh;
    width: 100vw;
    background: radial-gradient(109.21% 61.43% at 50% 50%, #000 0%, #121212 80.94%, #1F1F1F 100%);
    background-size: cover;
    background-position: center;
    background-repeat: repeat;
    overflow-x: hidden;
    /* margin-left: auto;
    margin-right: auto; */
  
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
  
  
video{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

  /* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: transparent;
}

/* Chrome, Edge and Safari */
*::-webkit-scrollbar {
  width: 5px;

}
*::-webkit-scrollbar-track {
  border-radius: 0px;
  background-color: transparent;
}

*::-webkit-scrollbar-track:hover {
  background-color: transparent;
}

*::-webkit-scrollbar-track:active {
  background-color: transparent;
}

*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: ${COLORS.WHITE};
}

*::-webkit-scrollbar-thumb:hover {
  background-color: transparent;
}

*::-webkit-scrollbar-thumb:active {
  background-color: #DA831D;
}
`;

export { GlobalStyles };
