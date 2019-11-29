import React from 'react';
import styled from 'react-emotion';
import { unit } from '../styles';

export default function PageContainer({ children }) {
    return (
        <Container>{children}</Container>
    )
}

const Container = styled('div')({
    marginTop: unit * 12,
    padding: unit * 4
});