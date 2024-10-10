import * as PIXI from "pixi.js";
import { reels, slotDimensions, symbolNames, symbols } from "../utils";
import { tweenTo } from "./tweening";

export async function addButton(app) {
  // Load symbol textures
  await PIXI.Assets.load(Object.values(symbols));
  const symbolTextures = Object.fromEntries(
    Object.entries(symbols).map(([key, value]) => [key, PIXI.Texture.from(value)])
  );

  const style = new PIXI.TextStyle({
    fontFamily: "Arial",
    fontSize: 36,
    fontStyle: "italic",
    fontWeight: "bold",
    fill: ["#ffffff", "#00ff99"],
    stroke: "#4a1850",
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: "#000000",
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
  });
  
  const playText = new PIXI.Text("Spin the wheels!", style);
  playText.anchor.set(0.5);
  playText.position.set(app.screen.width / 2, app.screen.height * 0.9);
  app.stage.addChild(playText);

  playText.eventMode = 'static';
  playText.cursor = 'pointer';
  playText.on('pointerdown', startPlay);

  let running = false;

  function startPlay() {
    if (running) return;
    running = true;

    for (let i = 0; i < reels.length; i++) {
      const r = reels[i];
      const extra = Math.floor(Math.random() * 3);
      const target = r.position + 10 + i * 5 + extra;
      const time = 2500 + i * 600 + extra * 600;

      tweenTo(
        r,
        "position",
        target,
        time,
        backout(0.5),
        null,
        i === reels.length - 1 ? reelsComplete : null
      );
    }
  }

  function reelsComplete() {
    running = false;
  }

  // Backout function from tweenjs
  // https://github.com/CreateJS/TweenJS/blob/master/src/tweenjs/Ease.js
  function backout(amount) {
    return (t) => --t * t * ((amount + 1) * t + amount) + 1;
  }

  app.ticker.add((delta) => {
    for (let i = 0; i < reels.length; i++) {
      const r = reels[i];
      r.blur.blurY = (r.position - r.previousPosition) * 8;
      r.previousPosition = r.position;

      for (let j = 0; j < r.symbols.length; j++) {
        const s = r.symbols[j];
        const prevy = s.y;
        s.y = ((r.position + j) % r.symbols.length) * slotDimensions.symbolSize - slotDimensions.symbolSize * .5;
        if (s.y < 0 && prevy > slotDimensions.symbolSize) {
          const randomSymbolName = symbolNames[Math.floor(Math.random() * symbolNames.length)];
          s.texture = symbolTextures[randomSymbolName];
          s.scale.x = s.scale.y = Math.min(
            slotDimensions.symbolSize / s.texture.width,
            slotDimensions.symbolSize / s.texture.height
          );
          s.x = Math.round((slotDimensions.symbolSize - s.width) / 2);
        }
      }
    }
  });
}