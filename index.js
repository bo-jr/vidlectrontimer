const electron = require('electron');

const { app, BrowserWindow } = electron; // Electron app

app.on('ready', () => {
  const mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/index.html`); // __dirname is for current working directory of the app
});
