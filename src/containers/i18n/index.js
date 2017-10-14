import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLocaleData, IntlProvider, injectIntl } from 'react-intl';

import { i18nChange } from './actions';

// import { Option } from '@c37/style-react';


class i18nProvider extends Component {
    constructor(props) {
        super(props);
        // this.props.dispatch(i18nChange(locale, messages));
    }

    componentWillMount() {
        // storeee.event.listen('change-locate', this.changeListener);
    }
    componentWillUnmount() {
        // storeee.event.unListen('change-locate', this.changeListener);
    }
    componentWillUpdate() {
        // console.log('sa')
    }

    render() {
        return (
            // https://github.com/yahoo/react-intl/issues/213
            // locale={locale} messages={flattenMessages(i18n[locale])}
            // <IntlProvider {...this.state}>
            // <IntlProvider locale={this.state.locale} messages={this.state.messages}>
            <IntlProvider locale={this.props.i18n.locale} messages={this.props.i18n.messages}>
                {this.props.children}
            </IntlProvider>
        );
    }
}
export const I18nProvider = connect(
    state => ({ i18n: state.i18n })
)(i18nProvider)


class i18nOption extends Component {
    
    handleChange = (e) => {
        let locale = e.props.value;        
        this.props.dispatch(i18nChange(locale));
    }    

    render() {
        return (
            <Option onChange={this.handleChange} selected={this.props.i18n.locale} style={this.props.style}>
                <Option.Item value="ar-AE">
                    <i className="i18n-AE i18n-24"></i>
                    <span> ‏العربية‏ </span>
                </Option.Item>
                <Option.Item value="de-DE">
                    <i className="i18n-DE i18n-24"></i>
                    <span>Deutsch</span>
                </Option.Item>
                <Option.Item value="en-GB">
                    <i className="i18n-GB i18n-24"></i>
                    <span>English (UK)</span>
                </Option.Item>
                <Option.Item value="en-US">
                    <i className="i18n-US i18n-24"></i>
                    <span>English (US)</span>
                </Option.Item>
                <Option.Item value="es-ES"> 
                    <i className="i18n-ES i18n-24"></i>
                    <span>Español (España)</span>
                </Option.Item>
                <Option.Item value="hi-IN">
                    <i className="i18n-IN i18n-24"></i>
                    <span>भारत</span>
                </Option.Item>
                <Option.Item value="ja-JP">
                    <i className="i18n-JP i18n-24"></i>
                    <span>日本語</span>
                </Option.Item>
                <Option.Item value="pl-PL">
                    <i className="i18n-PL i18n-24"></i>
                    <span>Polski</span>
                </Option.Item>
                <Option.Item value="pt-BR">
                    <i className="i18n-BR i18n-24"></i>
                    <span>Português (Brasil)</span>
                </Option.Item>
                <Option.Item value="ro-RO">
                    <i className="i18n-RO i18n-24"></i>
                    <span>Română</span>
                </Option.Item>
                <Option.Item value="ru-RU">
                    <i className="i18n-RU i18n-24"></i>
                    <span>Русский</span>
                </Option.Item>
                <Option.Item value="tr-TR">
                    <i className="i18n-TR i18n-24"></i>
                    <span>Türkçe</span>
                </Option.Item>
                <Option.Item value="uk-UA">
                    <i className="i18n-UA i18n-24"></i>
                    <span>Українська</span>
                </Option.Item>
                <Option.Item value="zh-CN">
                    <i className="i18n-CN i18n-24"></i>
                    <span>中文(简体)</span>
                </Option.Item>
            </Option>
        )
    }
}
export const I18nOption = connect(
    state => ({ i18n: state.i18n })
)(i18nOption)
