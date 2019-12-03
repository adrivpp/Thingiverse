import styled from '@emotion/styled';
import { unit } from '../../styles';

const ErrorContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: unit * 6,
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    backgroundColor: 'rgba(0,0,0, 0.5)',
});

export { ErrorContainer };