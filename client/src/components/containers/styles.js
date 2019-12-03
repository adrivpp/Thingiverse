import styled from '@emotion/styled';
import { unit } from '../../styles';

const Container = styled('div')({
    marginTop: unit * 12,
    padding: '5%',
    width: '100%'
});

const ThingsContainer = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
});

export { Container, ThingsContainer };