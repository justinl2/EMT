# EMT
Welcome to the EMT APP (Caretalk)

to run the app

need to install npm and expo

when pulling from github make sure to do "npm i" to install all dependencies used in the app

then run "npx expo start" which will launch an expo server on your machine

from there you can either run a simulator to run the app or download the "Expo Go" app on your mobile device and scan the qr code in the terminal


Files are organized in the following structure

All the apps code is inside the src file with the main primary screen being App.tsx

the nav file contains all pages and tabs and creates a stack navigation which is used by each individual tab/page

the redux folder holds the global state management container for all pages (i.e. data, profile information, medical forms)

the screen folder holds the individual pages that are used within the nav file

all other folders are either in progress or are irrelevant to the app
