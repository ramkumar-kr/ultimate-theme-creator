/* eslint-env webextensions */
import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        store: state
    }
}

class ManifestView extends Component {

    render () {
        return (
            <div className="CreatorApp-json">
                <p>Steps to upload your theme to the mozilla addons store</p>
                <ol>
                    <li>Create a new folder with the name as the name of the theme</li>
                    <li>Please copy the below JSON to a new file named <b>manifest.json</b> to the theme folder</li>
                    <li>Compress the theme folder as a zip file and upload it <a href="https://addons.mozilla.org/en-US/developers/addon/submit/distribution">here</a></li>
                </ol>
                <pre>{JSON.stringify(this.props.store, null, 4)}</pre>
            </div>
        )
    }
}

export default connect(mapStateToProps)(ManifestView);