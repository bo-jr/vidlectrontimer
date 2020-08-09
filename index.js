const electron = require("electron");
const ffmpeg = require("fluent-ffmpeg");

const { app, BrowserWindow, ipcMain } = electron; // Electron app and mainWindow

let mainWindow; // let the whole app know mainWindow exists - global var?

app.on("ready", () => {
  mainWindow = new BrowserWindow({ webPreferences: { nodeIntegration: true } });
  mainWindow.loadURL(`file://${__dirname}/index.html`); // __dirname is for current working directory of the app
});

ipcMain.on("video:submit", (event, path) => {
  // Electron app is now listening for a request from mainWindow's ipcRenderer.send request with `video:submit`
  ffmpeg.ffprobe(path, (err, metadata) => {
    mainWindow.webContents.send('video:metadata', metadata.format.duration);
  });
});
