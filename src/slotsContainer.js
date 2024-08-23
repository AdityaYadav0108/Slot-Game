import * as PIXI from 'pixi.js';

export async function slotsBG(app){
  const slotContainer = new PIXI.Container();
  app.stage.addChild(slotContainer);
  let slotBG;
  await PIXI.Assets.load('../assets/images/symbols_bg.png')
  .then((texture) => {
    slotBG = new PIXI.Sprite(texture);
    slotBG.anchor.set(0.5);
    slotContainer.addChild(slotBG);
  })

  window.addEventListener('resize', ()=>{
    slotBG.width = innerWidth * .5;
    slotBG.height = innerHeight * .7;
    slotBG.position.set(innerWidth/2, innerHeight/2);
  })

  console.log(slotContainer.width);
  console.log(slotContainer.height);

  window.dispatchEvent(new Event('resize'))
}