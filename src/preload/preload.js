const { contextBridge } = require("electron");

// Expose a minimal, safe API to the renderer
contextBridge.exposeInMainWorld("appInfo", {
  platform: process.platform,
});
