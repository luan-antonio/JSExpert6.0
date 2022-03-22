import { join, dirname } from "path";
import { fileURLToPath } from "url";

const curretDir = dirname(fileURLToPath(import.meta.url));
const root = join(curretDir, "../");
const audioDirectory = join(root, "audio");
const songsDirectory = join(audioDirectory, "songs");
const fxDirectory = join(audioDirectory, "fx");
const publicDirectory = join(root, "public");

export default {
  port: process.env.PORT || 3000,
  dir: {
    root,
    audioDirectory,
    publicDirectory,
    songsDirectory,
    fxDirectory,
  },
  pages: {
    homeHTML: "home/index.html",
    controllerHTML: "controller/index.html",
  },
  location: {
    home: "/home",
  },
  constants: {
    CONTENT_TYPE: {
      ".html": "text/html",
      ".css": "text/css",
      ".js": "text/javascript",
    },
  },
};
