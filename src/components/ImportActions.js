/* eslint-env webextensions */
import React, { Component } from 'react';
import './ImportActions.css';

class ImportActions extends Component {

    ResetTheme() {
        browser.theme.reset();
        window.close();
    }

    OpenPage() {
        browser.tabs.create({ url: browser.extension.getURL("/creator.html"), active: true });
        window.close();
    }

    FAQ() {
        browser.tabs.create({ url: "https://github.com/ramkumar-kr/ultimate-theme-creator#faq", active: true })
    }

    render() {
        return (
            <div className="action-grid" >
                <button onClick={this.OpenPage} id="openPage">
                {browser.i18n.getMessage("openPage")}
                </button>

                <button onClick={this.ResetTheme} id="reset">
                {browser.i18n.getMessage("resetDefault")}
                </button>

                <button onClick={this.FAQ} id="faq">
                    {browser.i18n.getMessage("faqButton")}
                </button>
            </div>
        )
    }
}

export default ImportActions;