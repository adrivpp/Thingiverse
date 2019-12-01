import styled from 'react-emotion';
import { unit } from '../../styles';

const Row = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
});

const DefaultImage = styled('img')({
    maxWidth: '70%',
    minWidth: '70%',
});

const SmallContainer = styled('div')({
    backgroundColor: 'white',
    width: '25%',
    padding: unit * 1.5
});

const DetailsContainer = styled('div')({
    width: '70%',
});

const Image = styled('img')({
    maxWidth: '100%',
    minWidth: '100%',
});

export { Row, DefaultImage, SmallContainer, DetailsContainer, Image }; 