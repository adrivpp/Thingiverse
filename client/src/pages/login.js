import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';
import { useMutation } from 'react-apollo';
import queryString from 'query-string';

import { EXCHANGE_CODE } from '../mutations';
import { GetStarted, Error } from '../components';

export default function Login() {
    const [code, setCode] = useState(null);
    const [error, setError] = useState(false);
    const location = useLocation();

    const client = useApolloClient();
    const [exchangeCode] = useMutation(EXCHANGE_CODE,
        {
            onCompleted({ exchangeCode }) {
                const { access_token } = queryString.parse(exchangeCode);
                localStorage.setItem('token', access_token);
                window.location.reload();
                client.writeData({ data: { isLoggedIn: true } });
            },
            onError() {
                setError(true);
            }
        }
    );

    if (location.search && !code) {
        const { code } = queryString.parse(location.search);
        setCode(code);
        exchangeCode({ variables: { code } })
    }

    if (error) return <Error message={ error.message }/>

    return (
        <GetStarted />
    )
}