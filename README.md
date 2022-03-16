# RNBoilerplate

## Project Structure


    .
    ├──component       # custom componet like textInput (jsx)
    ├──fremwork        # contain app block, enum, and singletonFactory (ts)
    ├──module          # contain app screen (ts,tsx)
    ├──localization.   # contain localization file (json,ts)
    ├──resources.      # contain app icon and images (ts)
    ├──thems.          # cntain app style releted (ts)
    ├──utilities.      # contain app releted file  (js, ts) 
    └── ...

this project using typeScript 
  - ts : for without using jsx
  - tsx : using jsx. 
  - json
 
    
## Setup

node v17.3.1
yarn v1.22.11 (OR npm v8.3.0)

```
$ npm install -g npm@latest
$ npm install -g yarn
```
Other (Optional)

```
npm install -g react-native-cli
npm install -g expo-cli
```

  ## Build and run the app

1. Install React Native as described at [https://facebook.github.io/react-native/docs/getting-started.html#content](https://facebook.github.io/react-native/docs/getting-started.html#content)
2. Clone this repository
3. If you are using `yarn` Run `yarn install` or `npm` Run `npm install`, all required components will be installed automatically

    ### iOS
      
    1. Run `pod install` from `EMR/ios` folder
    2. Start XCode and open generated `EMR.xcworkspace`
     
    ### Android
    
    no steps required
        
4. It is recommended to run `react-native start` command from root project directory.
5. Run your project from XCode (`Cmd+R`) for iOS, or use `react-native run-android` to run your project on Android.
6. If you are using `yarn` use `yarn android` or `yarn ios` to run your project on Android.
