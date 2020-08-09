# vidlectrontimer

A video timer app using electron

---
## Notes on code for myself
- app instantiates the mainwindow where we will have buttons that will allow users to pick videos they want to work with
- we utilize fluent-ffmpeg to transcode multimedia files
- mainWindow will communicate to the ellectron app (ask for info about the video)
    - mainWindow (`ipcRenderer.send`) -> electron app (`ipcMain.on`)
- app will communicate back to mainWindow with info on the video via IPC
    - electron app (`mainWindow.webContents.send`) -> mainWindow (`ipcRenderer.on`)

## Logic workflow
1. User selects a video file
2. Feed file details to FFMPEG
3. FFMPEG reads video file duration
4. Show the duration to the user

---
### Initial Setup
`nvm install 14.7.0`
`nvm use --delete-prefix v14.7.0`
`npm init`

### npm packages
`npm install --save electron`
`npm install --save fluent-ffmpeg` - need to install on your OS via `sudo apt update -y; sudo apt install ffmpeg -y`

### Running electron
`"electron": "electron ."` inside `package.json`
Then, in CLI, run `npm run electron` -> `electron` here is referring to `electron` in `package.json` (line 7)

### `breaking app.on('ready', () => {});`
- `app` the thing we're listening to
- `ready` the event we're listening for
- `() => {}` the function to run when an event occurs
