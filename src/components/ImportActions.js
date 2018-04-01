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
    render() {
        return (
            <div className="action-grid" >
                <button onClick={this.OpenPage} id="openPage">
                    Create your own theme
                </button>

                <button onClick={this.ResetTheme} id="reset">
                    Reset to default theme
                </button>
            </div>
        )
    }
}

export default ImportActions;