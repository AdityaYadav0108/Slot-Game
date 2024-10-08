import * as PIXI from 'pixi.js';

let app;

window.onload = async () => {
  app = new PIXI.Application({
    resizeTo: window,
    backgroundColor: '#1099bb'
  });

  globalThis.__PIXI_APP__ = app;
  document.body.appendChild(app.view);

  handleBG(app);
  slotsBG(app);
}

