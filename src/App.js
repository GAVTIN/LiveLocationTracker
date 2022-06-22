import React, { useState, useEffect } from 'react';
import './App.css'
import useWebSocket from 'react-use-websocket';
import GoogleMap from './Component/GoogleMap';
const SOCKET_URL = 'wss://live-tracking-websocket.lab.prox.engineering/';
// const READY_STATE_OPEN = 1;

//Generates the click handler, which returns a promise that resovles to the provided url.
const generateAsyncUrlGetter =
  (url, timeout = 500) =>
  () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(url);
      }, timeout);
    });
  };

export default function UseWebSocketTester() {
  const [currentSocketUrl, setCurrentSocketUrl] = useState(null);
  const [messageHistory, setMessageHistory] = useState({});
  const { lastMessage, readyState } = useWebSocket(currentSocketUrl, {
    share: true,
    shouldReconnect: () => false,
  });

  useEffect(() => {
    lastMessage && setMessageHistory(JSON.parse(lastMessage.data));
  }, [lastMessage]);

  const readyStateString = {
    0: 'CONNECTING',
    1: 'OPEN',
    2: 'CLOSING',
    3: 'CLOSED',
  }[readyState];

  return (
    <div>
      <h1 id='head'>Live Location Tracker</h1>
      Get Socket Data:
      <button
        onClick={() => setCurrentSocketUrl(generateAsyncUrlGetter(SOCKET_URL))}
        disabled={currentSocketUrl === SOCKET_URL}
      >
        START
      </button>
      <br />
      ReadyState: {readyStateString}
      <br />
      <h3>
        Latitude:{messageHistory.latitude} <br /> Longitude:
        {messageHistory.longitude}
      </h3>
      <GoogleMap lat={messageHistory.latitude} lon={messageHistory.longitude} />
    </div>
  );
}
