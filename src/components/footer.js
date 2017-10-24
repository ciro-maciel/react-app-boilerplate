import React from 'react';

import { Flex, Box } from 'grid-styled';

import { I18nOption } from '../containers/i18n';

const Footer = () =>(
    <Box width={1} style={{alignSelf:'flex-end', textAlign:'center'}}>
        <I18nOption />
    </Box>
)

export default Footer;