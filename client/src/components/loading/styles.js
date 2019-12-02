import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { colors } from '../../styles';

const animation = keyframes`
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`

const Loader = styled.div`
    font-size: 10px;
    margin: 0 auto;
    width: 6em;
    height: 6em;
    border-radius: 50%;
    background: ${colors.accent};
    background: linear-gradient(to right, ${colors.primary} 10%, ${colors.accent} 45%);
    animation: ${animation} 1.4s infinite linear;
    transform: translateZ(0);
`;

export { Loader };
  
  