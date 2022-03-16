export type ColorType =
    "primary" | "white" | "black" | "transparent" | "primaryInput" | "primaryFont" | "text" |
    "error" | "text_secondary"


type Colors = {
    primary: string;
    white: string;
    black: string;
    transparent: string;
    primaryInput: string;
    primaryFont: string;
    error: string;
    text: string;
    text_secondary: string;
}

const colors: Colors = {
    white: "#ffffff",
    black: "#000000",
    transparent: "transparent",
    primaryInput: "#CCDEF2",
    primary: '#0052A8',
    primaryFont: "#1A2A45",
    text: '#000000',
    text_secondary: '#696969',
    error: "#FF0000",
}

export default colors;

