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
                <pre>{JSON.stringify(this.props.store, null, 4)}</pre>
            </div>
        )
    }
}

export default connect(mapStateToProps)(ManifestView);