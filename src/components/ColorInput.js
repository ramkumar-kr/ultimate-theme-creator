/* eslint-env webextensions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import "./ColorInput.css";
import RedStar from './RedStar';

const mapStateToProps = (state, ownProps) => {
    return {
        defaultValue: state.theme.colors[ownProps.id],
        message: browser.i18n.getMessage(ownProps.id)
        // message: ownProps.id
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateState: (event) => {
            dispatch({type: "SET_THEME_STATE", id: ownProps.id, color: event.target.value })
        }
    }
}

class ColorInput extends Component {
    render() {
        const props = this.props;
        var star = null;
        if(props.mandatory === true){
            star = <RedStar/>
        }
        return (
            <div className="row">
                <label className="grid-item">
                    {props.message}
                    {star}
                </label>
                <div className="grid-item" >
                    <input 
                        id={props.id}
                        type="color"
                        defaultValue={props.defaultValue}
                        onChange={this.props.updateState} />
                </div>
            </div>
        );
    }
}

ColorInput.propTypes = {
    id: PropTypes.string.isRequired,
    mandatory: PropTypes.bool
}
//browser.i18n.getMessage(this.props.id)
export default connect(mapStateToProps, mapDispatchToProps)(ColorInput)