import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Helmet } from "react-helmet";

import { Flex, Box } from 'grid-styled';




import { Link } from 'react-router-dom';
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl';

import Navigation from '../../components/navigation';
import Menu from '../../components/menu';


class Home extends Component {
    render() {
        return (
            <Flex justify='center' style={{ height: '100%' }}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>@ciro-maciel/My version of React/Preact Application Boilerplate</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
                <Flex wrap width={1024}>
                    <Box width={[ 1, 3/12 ]} p={[1, 2]}>
                        <Menu>
                            Menu
                        </Menu>
                    </Box>
                    <Box width={[ 1, 9/12 ]} p={[1, 2]}>
                        <Navigation>
                            Navigation
                        </Navigation>
                    </Box>
                </Flex>
            </Flex>
        );
    }
}


export default Home;

// export default connect(
// 	state => ({
// 		user: state.user,
// 		signOut: state.signOut
// 	})
// )(injectIntl(Home))