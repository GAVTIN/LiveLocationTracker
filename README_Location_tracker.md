
# Location Pin-Pointer

This is a location tracker from a websocket!

## Socket Reference

#### Get all items

```
WebSocket:
wss://live-tracking-websocket.lab.prox.engineering/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `data` | `string` | *This give latitude and Longitude*|

#### Get item


It triggers the websocket on click and gets the value of 
latitude and longitude to update the google map.
## Installation

setup environment with npm create-react-app

```
Create folder structure as per git repo!
Have the following packages installed:

  "dependencies": {
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "react-use-websocket": "^4.2.0",
    "web-vitals": "^2.1.4"
  }
```
    
## Demo

stackblitz reference!

https://stackblitz.com/edit/react-ebbdvw?file=index.js,Component%2FGoogleMap.js,index.html


## Acknowledgements

 - [react-use-websocket-reference](https://www.npmjs.com/package/react-use-websocket)
 