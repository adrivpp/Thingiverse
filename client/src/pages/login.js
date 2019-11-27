import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import queryString from 'query-string';


const EXCHANGE_CODE = gql`
  mutation exchangeAuthCode($code: String!) {
    exchangeCode(code: $code)
  }
`;

export default class login extends Component {
    state = {
        code: null
    }

    componentDidMount() {
        const { history } = this.props;
        if (history.location.search) {
            const code = queryString.parse(history.location.search).code;
            this.setState({ code });
        }
    }

    handleRedirect = () => {
        window.open(
            process.env.REACT_APP_AUTH_URL, '_self'
        );
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
                    <Mutation mutation={EXCHANGE_CODE}>
                        {(exchangeCode, { data, loading, error }) => {
                            if (error) return <div>error</div>
                            if (loading) return <div>loading</div>
                            const token = (data && data.exchangeCode.token) || null;
                            return (
                                <CallMutation exchangeCode={exchangeCode} code={code}>
                                    <h1>ya esta</h1>
                                </CallMutation>
                            )
                        }}
                    </Mutation>
                )
        }
    }
}

class CallMutation extends Component {

    async componentDidMount() {
        const { code, exchangeCode } = this.props
        await exchangeCode({ variables: { code } });
    }

    render() {
        return (
            { ...this.props.children }
        )
    }
}