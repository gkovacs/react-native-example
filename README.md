# react native example

This is my evaluation of using react native for android development in javascript

It implements a simple app with a widget where code can be entered in a textbox and will be run via eval

Uses the expo sdk https://expo.io/

In order to make use of android native APIs you will need to write some wrapper code as described at https://facebook.github.io/react-native/docs/native-modules-android.html - as a prerequisite for that you will need to eject to expokit as described at https://docs.expo.io/versions/v15.0.0/guides/expokit.html and https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md

Also consider nativescript which according to https://docs.nativescript.org/runtimes/android/metadata/accessing-packages allows you to access the android APIs from javascript without any glue code

