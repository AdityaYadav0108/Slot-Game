import * as PIXI from "pixi.js";

import { slotContainerHandler } from "./slotsContainer";
import { setApp } from "./utils";
import { handleBG } from "./Handlers/handleBG";
import { handleLogo } from "./Handlers/handleLogo";
import { addButton } from "./Handlers/handleButton";

let app;

window.onload = async () => {
  app = new PIXI.Application({
    resizeTo: window,
    backgroundColor: "#1099bb",
  });

  setApp(app);

  globalThis.__PIXI_APP__ = app;
  document.body.appendChild(app.view);

  handleBG(app).then(() => {
    handleLogo(app);
    slotContainerHandler(app);
    addButton(app);
  });
};
