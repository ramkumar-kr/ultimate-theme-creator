/* eslint-env webextensions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import './style.css';
import ManifestView from './ManifestView';
import ColorInput from './ColorInput';
import JSZip from 'jszip';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onTitleChanged: (event) => {
      dispatch({ type: "SET_THEME_TITLE", title: event.target.value })
    }
  }
}

class CreatorApp extends Component {
  constructor(props) {
    super(props);
    this.applyTheme = this.applyTheme.bind(this);
    this.downloadTheme = this.downloadTheme.bind(this);
    this.autoApply = this.autoApply.bind(this);
    this.state = { unsubscribe: null };
  }

  autoApply(event) {
    if (event.target.checked) {
      this.setState({
        unsubscribe: store.subscribe(() => {
          browser.theme.update(store.getState().theme);
        })
      });

    } else {
      this.state.unsubscribe();
      this.setState({ unsubscribe: null });
    }
  }

  applyTheme() {
    browser.theme.update(store.getState().theme);
  }

  downloadTheme() {
    var zip = new JSZip();
    console.log(store.getState());
    zip.file("manifest.json", JSON.stringify(store.getState()));
    zip.generateAsync({type:"base64"}).then(function (base64) {
      window.location = "data:application/zip;base64," + base64;
    }).catch((e) =>{
      console.error(e);
      alert(browser.i18n.getMessage("downloadFailed"));
    });
  }

  render() {
    const name = store.getState().name;
    return (
      <div className="CreatorApp">
        <div className="CreatorApp-header">
          <h1>{browser.i18n.getMessage("extensionName")}</h1>
        </div>
        <p className="center">{browser.i18n.getMessage("fillMessage")}</p>
        <div className="CreatorApp-body">
          <label className="grid-item span2">{browser.i18n.getMessage("namePrompt")}</label>
          <div className="grid-item span2" ><input id="activeTabColor" defaultValue={name} type="text" onChange={this.props.onTitleChanged} /></div>

          <ColorInput id="tab_selected" />
          <ColorInput id="toolbar" />
          <ColorInput id="tab_text" />

          <ColorInput id="frame" mandatory={true} />
          <ColorInput id="tab_background_text" mandatory={true} />
          <ColorInput id="frame_inactive" />
          <ColorInput id="ntp_background" />
          <ColorInput id="ntp_text" />
          <ColorInput id="sidebar" />
          <ColorInput id="sidebar_border" />
          <ColorInput id="sidebar_highlight" />
          <ColorInput id="sidebar_text" />
          <ColorInput id="sidebar_highlight_text" />
          <ColorInput id="tab_background_separator" />
          <ColorInput id="button_background_active" />
          <ColorInput id="button_background_hover" />
          <ColorInput id="icons" />
          <ColorInput id="icons_attention" />
          <ColorInput id="popup" />
          <ColorInput id="popup_border" />
          <ColorInput id="popup_highlight" />
          <ColorInput id="popup_highlight_text" />
          <ColorInput id="popup_text" />
          <ColorInput id="tab_line" />
          <ColorInput id="tab_loading" />
          <ColorInput id="toolbar_bottom_separator" />
          <ColorInput id="toolbar_field" />
          <ColorInput id="toolbar_field_border" />
          <ColorInput id="toolbar_field_border_focus" />
          <ColorInput id="toolbar_field_focus" />
          <ColorInput id="toolbar_field_text" />
          <ColorInput id="toolbar_field_text_focus" />
          <ColorInput id="toolbar_field_highlight" />
          <ColorInput id="toolbar_field_highlight_text" />
          <ColorInput id="toolbar_field_separator" />
          <ColorInput id="toolbar_text" />
          <ColorInput id="toolbar_top_separator" />
          <ColorInput id="toolbar_vertical_separator" />
        </div>

        <div className="CreatorApp-actions">
          <div><label> <input type="checkbox" onClick={this.autoApply} />{browser.i18n.getMessage("autoApply")}</label> </div>
          <div><button className="primaryAction" id="try" onClick={this.applyTheme} >{browser.i18n.getMessage("tryIt")}</button></div>
          <div><button className="secondaryAction" id="download" onClick={this.downloadTheme} >{browser.i18n.getMessage("downIt")}</button></div>
        </div>

        <ManifestView />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(CreatorApp);

