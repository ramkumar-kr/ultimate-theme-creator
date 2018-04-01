/* eslint-env webextensions */
import React, { Component } from 'react'
import './ImportApp.css'

class ImportApp extends Component {
    constructor(props) {
        super(props);
        this.state = { jsonString: "" };
        this.applyTheme = this.applyTheme.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

  applyTheme(event) {
    browser.theme.update(JSON.parse(this.state.jsonString).theme);
  }

  handleChange(event){
    this.setState({ jsonString: event.target.value });
  }

    render () {
        return (
            <div className="bordered">
                <h1>Apply a theme</h1>
                <textarea id="themeObject" value={this.state.jsonString} rows="3" cols="40" onChange={this.handleChange}/>
                <div>
                <button 
                    id="Apply"
                    className="gaps"
                    onClick={this.applyTheme}>
                    Apply theme
                </button>
                </div>
                
            </div>
        )
    }
}

export default ImportApp;