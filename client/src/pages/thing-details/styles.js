import styled from '@emotion/styled';
import { unit, colors } from '../../styles';

const Row = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
});

const DefaultImageContainer = styled('div')({
    backgroundColor: colors.text,
    maxWidth: '70%',
    minWidth: '70%',
    minHeight: '70%',
    maxHeight: '70%',
});

const DefaultImage = styled('img')({
    maxWidth: '100%',
    minWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
});

const SmallContainer = styled('div')({
    backgroundColor: 'white',
    width: '25%',
    padding: unit * 2,
});

const DetailsContainer = styled('div')({
    width: '70%',
    marginTop: 40
});

const ImagesContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '25%',
    padding: unit * 2,
});

const Image = styled('img')({
    margin: '0 auto',
    maxWidth: '80%',
    minWidth: '80%',
    marginBottom: unit * 2,
    marginTop: unit * 2
});

export { Row, DefaultImage, SmallContainer, DetailsContainer, Image, ImagesContainer, DefaultImageContainer }; 