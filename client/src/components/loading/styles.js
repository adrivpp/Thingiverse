import { keyframes, css } from '@emotion/core';
import styled from 'react-emotion';

const spinning = keyframes(
    css`
        0, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.5);
        }
    `
);

const Loader = styled('div')({
    animation: `${spinning} 1s linear infinite`,
    margin: '50px auto',
    border: '5px double black',
    borderRadius: '50%',
    width: 50,
    height: 50,
});

export { Loader };