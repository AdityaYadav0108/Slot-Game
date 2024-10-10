import * as PIXI from "pixi.js";
import { reels, slotDimensions, symbolNames, symbols } from "../utils";
import { addMask } from "./addMask";

export async function addSymbols(slotBG, slotContainer, app) {
  PIXI.Assets.addBundle("symbols", symbols);

  const symbolAssets = await PIXI.Assets.loadBundle("symbols");
  slotDimensions.symbolSize = slotBG.height / 5 - 10;
  slotDimensions.reelWidth = slotBG.width / 5 - 10;
  const reelWidth = slotDimensions.reelWidth;
  const symbolSize = slotDimensions.symbolSize;

  console.log(slotBG.width, reelWidth);
  console.log(slotBG.height, symbolSize);

  const reelContainer = new PIXI.Container();
  for (let i = 0; i < 5; i++) {
    const rc = new PIXI.Container();
    rc.x = i * reelWidth;
    reelContainer.addChild(rc);
    const reel = {
      container: rc,
      symbols: [],
      position: 0,
      previousPosition: 0,
      blur: new PIXI.BlurFilter(),
    };
    reel.blur.blurX = reel.blur.blurY = 0;
    rc.filters = [reel.blur];
    for (let j = 0; j < 6; j++) {
      const symbol = new PIXI.Sprite(
        symbolAssets[symbolNames[Math.floor(Math.random() * symbolNames.length)]]
      );
      symbol.y = j * symbolSize;
      symbol.scale.x = symbol.scale.y = Math.min(
        symbolSize / symbol.width,
        symbolSize / symbol.height
      );
      symbol.x = Math.round((symbolSize - symbol.width) / 2);
      reel.symbols.push(symbol);
      rc.addChild(symbol);
    }
    reels.push(reel);
  }
  reelContainer.pivot.set(reelContainer.width/2, reelContainer.height/2)
  reelContainer.position.set(slotBG.x, slotBG.y)
  slotContainer.addChild(reelContainer);
  console.log(reels);

  addMask(slotBG, reelContainer, slotContainer);
}
