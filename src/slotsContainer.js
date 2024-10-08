import * as PIXI from "pixi.js";
import { addSymbols } from "./Handlers/addSymbols.js";
import { addMask } from "./Handlers/addMask.js";

export let slotContainer;

export async function slotContainerHandler(app) {
  slotContainer = new PIXI.Container();
  app.stage.addChild(slotContainer);
  
  PIXI.Assets.add({
    alias: "slotBG",
    src: "../assets/images/symbols_bg.png",
  });

  const texture = await PIXI.Assets.load("slotBG");
  const slotBG = new PIXI.Sprite(texture);
  slotBG.anchor.set(0.5);
  slotContainer.addChild(slotBG);

 slotBG.position.set(app.screen.width/2, app.screen.height/2);
 slotBG.width = innerWidth * .42;
 slotBG.scale.y = slotBG.scale.x;
  // window.addEventListener("resize", () => {
  //   const isPortrait = innerWidth < innerHeight;
  //   const targetWidth = isPortrait ? innerWidth * 0.8 : innerWidth * 0.5;

  //   slotBG.width = targetWidth;
  //   slotBG.scale.y = slotBG.scale.x;
  //   slotBG.position.set(app.screen.width / 2, app.screen.height / 2);
  // });

  // window.dispatchEvent(new Event("resize"));

  addSymbols(slotBG, slotContainer, app);
}
