import * as PIXI from 'pixi.js';

export async function handleBG(app){

  let bgContainer = new PIXI.Container();
  app.stage.addChild(bgContainer);

  let sheetTexture = await PIXI.Assets.load('../assets/images/game/background/background.jpg');

  PIXI.Assets.add({
    alias: "bgSheet",
    src: '../assets/images/game/background/background.json',
    data:{
      texture: sheetTexture
    }
  })

  let sheet = await PIXI.Assets.load('bgSheet');

  let pb = new PIXI.AnimatedSprite(sheet.animations['portrait']);
  let lb = new PIXI.AnimatedSprite(sheet.animations['landscape']);

  window.addEventListener('resize', () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const isPortrait = screenWidth < screenHeight;

    if(isPortrait){
      pb.width = screenWidth;
      pb.height = screenHeight;
      bgContainer.removeChild(lb);
      bgContainer.addChild(pb);
    }else{
      lb.width = screenWidth;
      lb.height = screenHeight;
      bgContainer.removeChild(pb);
      bgContainer.addChild(lb);
    }
  });

  window.dispatchEvent(new Event('resize'));
}


