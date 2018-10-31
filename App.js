/**
 * Sample React Native app
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import StackNavigator from "./app/StackNavigator"
import {ApolloClient} from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

export default class App extends Component<Props> {
    render() {
        return (
            <ApolloProvider client={client}>
                <StackNavigator/>
            </ApolloProvider>
        );
    }
}


const client = new ApolloClient({
    link: createHttpLink({uri: 'http://115.159.154.194:8080/graphql/'}),
    cache: new InMemoryCache(),
});
