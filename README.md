# Getting Started

### This project is a technical assignment for Priotix.

## Available Scripts

To get the frontend running locally:

### Clone this repo
### npm install 
to install all requested dependencies
### npm run start 
to start the local server (this project uses create-react-app)

Local web server will use port 3000 to run the project.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Description

This application contains a form that allows the user to search for sports tournaments by typing a query string in the search bar. After getting search results in the dropdown bellow, the user can select a tournament they want to save and by clicking on it they can add it to their favorites list. If the user wants to remove the item from the favorites list, they should click on the close icon of the item.

## Functionality overview

- This project was bootstrapped with [Create React App].

- As a state management tool, Redux was added to this React application.

- The application only consists of functional components, which makes the code easier to read, easier to understand and assures better performance.

- To locally save the changes in the browser that the user made to their favorites list, the localstorage was used.

- In order to avoid abusing the API, the debounce effect was added when making the API call.

