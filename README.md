# Shop•com React native App

- Requirements
  - > Create an iOS or Android application, capable of being run or installed on our phones.Use JavaScript or React native.Register an account at developer.shop.com to gain access to the APIs use at least 2 of the APIs in your App (i.e. Search, Product Detail) Use at least one native feature of the phone/tablet (camera, contacts db, fingerprint scanner, etc.) Style the application beyond base styling

- APIs Used: 
  - /categories
  - /products

_NOTE: You must supply your own API key_

## Installation

1. Clone repo using ``git clone REPO``
2. cd into the root project folder
3. Add ``.env`` file 
   - Add ``API_KEY=YOUR_API_KEY``
   - Add ``API_URL=https://api2.shop.com``
   - Save file
4. run ``npm install`` to install all NPM dependecies
5. Install Native Dependecies
   - __If using iOS__
     1. In the root project folder, run ``npx pod-install``
6. In root folder run ``npm run start``
7. - __To run on iOS simulator__
      1. After Pods have finished installing. Simply run ``npm run ios`` on the terminal
    - __To Run on iOS device__
      1.  Connect iOS device to computer
      2.  Open xCode
      3.  Make sure you are signed in to an apple developer account (doesnt need to be a paid account)
      4.  Select your device from the device menu.
      5.  Press ``⌘ + R`` or the ▶︎ button to begin building process
   - __To run on an Android Device or Simulator__
      1. In project root folder run ``npm run android``
      2. To run on device, connect device and run ``npm run android``

## Folder Structure

```
project
├── app
│   ├── components
│   ├── navigation
│   ├── screens
│   ├── theme
│   ├── utils
│   ├── app.js
|   ├── assets/
├── README.md
├── android
├── index.js
├── ios
└── package.json
```

### ./app directory

The inside of the `app` directory looks similar to the following:

```
app
│── components
├── navigation
├── screens
├── theme
├── utils
├── app.js
```

**components**
This is where your React dumb components will live. Each component will have a directory containing the `.js` file,and optionally `.presets`,The app will come with some commonly used components like Button.

**navigation**
This is where your `react-navigation` navigators will live.

For a walkthrough about how React Navigation v5 works, check out Harris Robin's post: [Getting Started with the New React Navigation v5](https://reactnavigation.org/)

**screens**
This is where your screen components will live. A screen is a React component which will take up the entire screen and be part of the navigation hierarchy. Each screen will have a directory containing the `.js` file, along with any assets or other helper files.

**theme**
Here lives the theme for your application, including spacing, colors, and typography. For help with adding custom fonts to your application, [check out the readme in ./assets/fonts/](./boilerplate/assets/fonts/custom-fonts.md).

**utils**
This is a great place to put miscellaneous helpers and utilities. Things like date helpers, formatters, etc. are often found here. However, it should only be used for things that are truely shared across your application. If a helper or utility is only used by a specific component or model, consider co-locating your helper with that component or model.

**app.js** This is the entry point to your app. This is where you will find the main App component which renders the rest of the application.
