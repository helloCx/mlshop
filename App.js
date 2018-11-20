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
import {xToken} from "./app/config";
import { setContext } from 'apollo-link-context';


export default class App extends Component<Props> {
    render() {
        return (
            <ApolloProvider client={client}>
                <StackNavigator/>
            </ApolloProvider>
        );
    }
}


// const client = new ApolloClient({
//     link: createHttpLink({uri: 'http://115.159.154.194:8080/graphql/'}),
//     cache: new InMemoryCache(),
// });
const httpLink = createHttpLink({
    uri: 'http://115.159.154.194:8080/graphql/',
});


const authLink = setContext(() => {
     return {
        headers: {
            "x-auth-token":xToken,
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});
