import * as PIXI from 'pixi.js';

export async function addMask(slotBG, reelContainer, slotContainer) {
  console.log("trying to add mask");

  const mask = new PIXI.Graphics();
  mask.beginFill(0xffffff);
  
  mask.drawRect(slotBG.x - slotBG.width/2 ,slotBG.y-slotBG.height/2.2 ,slotBG.width, slotBG.height * .9);
  mask.pivot.set(mask.width/2, mask.height/2);
  reelContainer.mask = mask;
}