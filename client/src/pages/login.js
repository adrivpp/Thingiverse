import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';
import { useMutation } from 'react-apollo';
import queryString from 'query-string';

import { EXCHANGE_CODE } from '../mutations';


class Login extends Component {

    state = {
        code: null,
    }

    componentDidMount() {
        const { location } = this.props;
        const { code } = this.state;
        if (location.search && !code) {
            const { code } = queryString.parse(location.search);
            this.setState({ code });
        }
    }

    handleRedirect = () => {
        window.open(
            process.env.REACT_APP_AUTH_URL, '_self'
        )
    }

    render() {
        const { code } = this.state;

        switch (code) {
            case null:
                return (
                    <div>
                        <h2>Welcome to thingy!</h2>
                        <p>Give us acces to your thingiverse account to continue</p>
                        <button onClick={this.handleRedirect}>Let's do it!</button>
                    </div>
                )
            default:
                return (
                    <CallMutation code={code} />
                )
        }
    }
}

function CallMutation({ code }) {
    const client = useApolloClient();
    const [exchangeCode, { loading }] = useMutation(EXCHANGE_CODE,
        {
            onCompleted({ exchangeCode }) {
                const { access_token } = queryString.parse(exchangeCode);
                localStorage.setItem('token', access_token);
                client.writeData({ data: { isLoggedIn: true } });
            }
        }
    );
    if (loading) return <p>loading</p>
    return (
        exchangeCode({ variables: { code } })
    )
}

export default withRouter(Login);