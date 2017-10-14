import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Helmet } from "react-helmet";

import { Flex, Box } from 'grid-styled';




import { Link } from 'react-router-dom';
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl';

import Button from '../../components/button';


class Home extends Component {
    render() {
        return (
            <Flex justify='center' style={{ height: '100%' }}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>@ciro-maciel/My version of React Boilerplate</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
                <Flex wrap width={1024}>
                    <Box width={[ 1, 3/12 ]} p={[1, 2]}>
                        Half width
                    </Box>
                    <Box width={[ 1, 9/12 ]} p={[1, 2]}>
                        <Button type="success">
                            Success
                        </Button>
                        <Button>
                            Default
                        </Button>
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