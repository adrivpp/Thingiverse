import styled from 'react-emotion';
import { unit } from '../../styles';

const Row = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
});

const DefaultImage = styled('img')({
    maxWidth: '70%',
    minWidth: '70%',
});

const SmallContainer = styled('div')({
    backgroundColor: 'white',
    width: '25%',
    padding: unit * 2,
});

const ImagesContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '25%',
    padding: unit * 2,
});

const DetailsContainer = styled('div')({
    width: '70%',
    marginTop: 40
});

const Image = styled('img')({
    margin: '0 auto',
    maxWidth: '80%',
    minWidth: '80%',
    marginBottom: unit * 2,
    marginTop: unit * 2
});

export { Row, DefaultImage, SmallContainer, DetailsContainer, Image, ImagesContainer }; 