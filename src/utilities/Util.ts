import { Alert, Dimensions, Platform, PixelRatio } from 'react-native';
//@ts-ignore
import _ from 'lodash';

export function getOS(): string {
  return Platform.OS;
}

/**
 * SCALING - SAME VIEW FOR TABLET AND IPHONE ADDED THIS SCALE IN HEIGHT, WIDTH, MARGIN, PADDING
 */
const { width, height, scale: deviceScale, fontScale } = Dimensions.get('window');
const baseWidth = 360;
const baseHeight = 700;

const scaleWidth = width / baseWidth;
const scaleHeight = height / baseHeight;
const scale = Math.min(scaleWidth, scaleHeight);


export const scaleRatio = deviceScale;
export const deviceWidth = width;
export const deviceHeight = height;
export const deviceAspectRatio = width / height;
export const scaledSize = (size: any) => Math.ceil(size * scale);
export const widthFromPercentage = (per: number) => (width * per) / 100;
export const heightFromPercentage = (per: number) => (height * per) / 100;

type DimensionType = {
  sh: number;
  sw: number;
  wh: number;
  ww: number;
  hp: (multiplier: number) => number;
  wp: (multiplier: number) => number;
}

const screenSize = Dimensions.get("screen");
const windowSize = Dimensions.get("window");

export const dimensions: DimensionType = {
  sh: screenSize.height,
  sw: screenSize.width,
  wh: windowSize.height,
  ww: windowSize.width,
  hp: (multiplier: number) => (screenSize.height / 100) * multiplier,
  wp: (multiplier: number) => (screenSize.width / 100) * multiplier
}


export function getHeaders(obj: Record<string, string>): Headers {
  const headers: any = {}
  headers["Content-Type"] = "application/json";
  for(let key in obj){
    headers[key] = obj[key];
  }
  return headers;
}


export const customAlert = (title: string = "", message: string = "", okOnPress: Function | any = null, cancelOnPress: Function | any = null) => {
  setTimeout(() => {
    const buttons: Array<any> = [];
    cancelOnPress ? buttons.push({ text: 'Cancel', onPress: () => cancelOnPress, style: 'cancel' }) : "";
    okOnPress ? buttons.push({ text: 'OK', onPress: () => okOnPress }) : buttons.push({ text: 'OK', onPress: () => console.log('Ok Pressed') })
    return (
      Alert.alert(
        title,
        message,
        buttons
      )
    );
  }, 100);

}

//Artboard Dimension
let artBoardHeightOrg = 640;
let artBoardWidthOrg = 360;
//Re calculated Artboard Dimension
let artBoardWidth = isSameRatio() ? artBoardWidthOrg : windowSize.width;
let artBoardHeight = isSameRatio() ? artBoardHeightOrg : windowSize.height;
// To check if Artboard and Device screen has same ratio
function isSameRatio(): boolean {
  return (
    artBoardWidthOrg / artBoardHeightOrg < 1 && windowSize.width / windowSize.height < 1
  );
}
//Top or Bottom nav spaces or any extra space occupied by os e.g Status bar, Notch
let extraSpace = 0;
export function deviceBasedDynamicDimension(
  originalDimen: number,
  compareWithWidth: boolean,
  resizeFactor: number
): number | undefined {
  if (originalDimen != null) {
    if (resizeFactor != null) {
      originalDimen *= resizeFactor;
    }
    const compareArtBoardDimenValue = compareWithWidth
      ? artBoardWidth
      : artBoardHeight;
    const artBoardScreenDimenRatio =
      (originalDimen * 100) / compareArtBoardDimenValue;
    let compareCurrentScreenDimenValue = compareWithWidth
      ? windowSize.width
      : windowSize.height - extraSpace;

    return PixelRatio.roundToNearestPixel(
      (artBoardScreenDimenRatio * compareCurrentScreenDimenValue) / 100
    );
  }
  return undefined;
}
