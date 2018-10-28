import {combineReducers} from "redux";

const themeInitialState = {
    images: {
        headerURL: ""
    },
    colors: {
        accentcolor: "#ff0000",
        textcolor: "#ffffff"
    }
}

const theme = (state = themeInitialState, action) => {
    var newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case "SET_THEME_STATE":
            newState.colors[action.id] = action.color;
            return newState;
        default:
            return state
    }
}

const name = (state = "My theme", action) => {
    switch (action.type) {
        case "SET_THEME_TITLE":
            return action.title;
        default:
            return state
    }
}

const manifest_version = (state = 2, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const version = (state = "1.0", action) => {
    switch (action.type) {
        default:
            return state
    }
}

const description = (state = "This theme was created using Ultimate theme creator", action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default combineReducers({
    theme,
    name,
    manifest_version,
    version,
    description
});