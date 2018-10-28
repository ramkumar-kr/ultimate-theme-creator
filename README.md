# Ultimate theme creator

Create your ultimate firefox theme and share it with others.

---

## Installation

[![Get-the-addon-button](https://addons.cdn.mozilla.net/static/img/addons-buttons/AMO-button_1.png)](https://addons.mozilla.org/en-US/firefox/addon/ultimate-theme-creator/)

## Steps to generate the build directory

* Install `npm` and `web-ext` (one-time only)
* Clone the repository (one-time only)
* Run `npm install` in the root of the repository
* Run `npm run build` which generates a `build/` directory

## Testing the extension
* Generate the `build/` directory after making the changes
* Run the command  `web-ext run -s ./build` to create a new firefox profile and window with the extension installed.

## Building for production
* Generate the `build/` directory
* Run the command  `web-ext build -o -s ./build -i "static/js/*.js.map" "static/css/*.css.map" "asset-manifest.json"` to create a compressed zip file.
* Submit the zip file to the firefox addons store.

## FAQ

**What does the extension do?**

It lets you create static browser themes giving the highest extent of color customization available in firefox.

**Why do you need the permission to access browser tabs?**

The permission is needed to create a new tab whenever the icon in the toolbar is clicked. There is currently no other way to perform this or ask for the permission "Create new tabs for web pages inside this extension" in firefox.

**How can I create my own theme?**

* Click on the icon in the toolbar
* Select the ***Create your own theme*** option
* Give a name for your theme
* Select the colors you like and try it live.

**Does the extension store the themes I have created?**

No. If you would like to save them, then please save the code in the grey box (JSON) elsewhere.

**I don't understand what \<insert the option here> means**

Please go [here](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json/theme#colors) for a detail understanding of all options.

**Can I use a background image for inactive tabs?**

No. It is not supported right now.

**How do I share my theme with others?**

There are multiple ways to share your theme.

1. Please share the code in the grey box (JSON) to the person whom you want to share your theme with and use the text box in toolbar popup
2. **Recommended** Download the theme and share it by uploading it to mozilla's addon store

**How can I apply a theme shared to me (JSON)?**

* Click on the icon in the toolbar
* Enter the code (JSON) file shared in the textbox
* Click on the apply button

**Can I apply multiple themes (JSON)?**

No. you can apply only one theme at a time.

**When I click on try it button, why does my imported theme disappear?**

This is one of the current drawbacks of this extension.

**When I click reset to default theme, why does it reset to default theme of firefox?**

This is currently a limitation of the API. More details [here](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/theme/reset).

**How do I upload it to the addon store?**

* Click the download button and save the zip file.
* Upload it [here](https://addons.mozilla.org/en-US/developers/addon/submit/distribution).

**There is a new option available with the theme API but this addon does not have it. When can I get it?**

Please create a issue or a pull request for it on github.
