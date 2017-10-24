import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import { FormattedMessage, injectIntl } from 'react-intl';

import { Flex, Box } from 'grid-styled';

import { I18nOption } from '../i18n';

import Navigation from '../../components/navigation';
import Menu from '../../components/menu';


class Home extends Component {
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
                    <Box width={[ 1, 3/12 ]} p={[1, 2]}>
                        <Menu 
                            title={intl.formatMessage({id: "6592623"})} 
                            items={[
                                    {
                                        display: intl.formatMessage({id: "71ef8f1"}), 
                                        url: '/'
                                    },
                                    {
                                        display: intl.formatMessage({id: "6871c58"}), 
                                        url: '/user'
                                    },
                                    {
                                        display: intl.formatMessage({id: "3b17930"}), 
                                        url: ''
                                    },
                                ]} 
                        />
                    </Box>
                    <Box width={[ 1, 9/12 ]} p={[1, 2]}>
                        <Navigation>
                            <FormattedMessage id="71ef8f1" />
                        </Navigation>
                        <br/>
                        <I18nOption />
                    </Box>
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
)(injectIntl(Home))