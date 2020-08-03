const electron = require('electron');

const { app } = electron; // Electron app

app.on('ready', () => {
  console.log('App is now ready');
});
