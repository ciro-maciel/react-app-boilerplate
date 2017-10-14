import { I18n_CHANGE } from './types';

// import utility from '@c37/utility';

import { addLocaleData } from 'react-intl';

import pt from 'react-intl/locale-data/pt';
import en from 'react-intl/locale-data/en';
// import { account } from '@c37/locale';

// let dataMessages = {
//   'pt-BR': account.pt_BR,
//   'en-US': account.en_US,
// }

addLocaleData([...en, ...pt]);

const hasCookieLocale = false,
    navigatorLocale = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.usserLanguage || 'pt-BR',
    cookieLocale = null;

let locale =hasCookieLocale ? cookieLocale : navigatorLocale ,
    messages = {};

let initialState = {
    locale,
    messages
}
saveInCookie(locale);

function saveInCookie(locale) {
    const validAt = new Date().setDate(new Date().getDate() + 360),
    domain = window.location.hostname === 'localhost' ? 'localhost' : 'c37.co';

    // document.cookie = "locale=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
    

    // utility.navigator.cookie.add('locale', locale, validAt, '/', domain)
}


export default function I18n(state = initialState, action) {
    switch (action.type) {
        case I18n_CHANGE:{

            saveInCookie(action.payload.locale);

            return Object.assign({}, state, {
                locale : action.payload.locale,
                messages: utility.i18n.flattenMessages(dataMessages[action.payload.locale])
            });

        }
        default:
            return state;
    }
}