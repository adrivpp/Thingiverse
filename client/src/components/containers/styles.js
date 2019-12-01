import styled from 'react-emotion';
import { unit } from '../../styles';

const Container = styled('div')({
    marginTop: unit * 12,
    padding: '5%',
});

const ThingsContainer = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
});

export { Container, ThingsContainer };