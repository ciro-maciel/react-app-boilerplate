import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { FormattedMessage, injectIntl } from 'react-intl';

import { Flex, Box } from 'grid-styled';

import { I18nOption } from '../i18n';

import Footer from '../../components/footer';
import Button from '../../components/button';
import Menu from '../../components/menu';
import Input from '../../components/input';
import TableUser from '../../components/table-user';

import { usersRequest } from './actions';

class Users extends Component {
    render() {
        const { intl, handleSearch, users } = this.props;
        return (
            <Flex justify='center' style={{ height: '100%' }}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>@ciro-maciel/My version of React/Preact Application Boilerplate</title>
                    <link rel="canonical" href="https://ciro-maciel.github.io/react-app-boilerplate/" />
                </Helmet>
                <Flex wrap width={1024}>
                    <Flex wrap width={1} style={{alignSelf: 'flex-start'}}>
                        <Box width={1} p={[1, 2]}>
                            <Link to={"/"}>
                                <FormattedMessage id="b4db309"/>
                            </Link>
                            <h2> Pesquisa de Usuarios </h2>
                            <Input type="text" ref={(input) => { this.textQuery = input; }} />
                            <Button onClick={() =>  handleSearch(this.textQuery.value)}>
                                Procurar
                            </Button>
                            {
                                (users.found && users.found.items) &&
                                    <TableUser items={users.found.items} />
                            }
                        </Box>
                    </Flex>
                    <Footer />
                </Flex>
            </Flex>
        );
    }
}

export default connect(
    state => ({ users: state.users }),
    dispatch => ({
        handleSearch: (query) => dispatch(usersRequest(query)),
    })
)(injectIntl(Users))