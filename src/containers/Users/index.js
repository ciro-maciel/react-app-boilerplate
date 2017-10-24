import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { FormattedMessage, injectIntl } from 'react-intl';

import { Flex, Box } from 'grid-styled';

import { I18nOption } from '../i18n';

import Footer from '../../components/footer';
import Navigation from '../../components/navigation';
import Menu from '../../components/menu';


class Users extends Component {
    render() {
        const { intl } = this.props;
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
                            <p><Link to={"/"}>Return to Home</Link></p>
                        </Box>
                    </Flex>
                    <Footer />
                </Flex>
            </Flex>
        );
    }
}

export default connect(
    state => ({ i18n: state.i18n }),
    dispatch => ({
        handleChange: (locale) => dispatch(i18nChange(locale)),
    })
)(injectIntl(Users))