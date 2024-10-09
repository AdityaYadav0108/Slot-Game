import * as PIXI from "pixi.js";

export async function handleLogo(app) {
  PIXI.Assets.addBundle("logos", {
    logoP: "../assets/images/game_name_logo_portrait.png",
    logoL: "../assets/images/game_name_logo_landscape.png",
  });

  let logos = await PIXI.Assets.loadBundle("logos");
  // let logoP = new PIXI.Sprite(logos["logoP"]);
  let logoL = new PIXI.Sprite(logos["logoL"]);
  logoL.anchor.set(0.5);
  logoL.scale.set(0.5, 0.5);
  logoL.position.set(app.screen.width / 2, 100);
  app.stage.addChild(logoL);

  // window.addEventListener("resize", () => {
  //   logoL.position.set(app.screen.width / 2, 100);
  //   logoP.position.set(app.screen.width / 2, app.screen.height / 5);
  //   logoL.anchor.set(0.5);
  //   logoP.anchor.set(0.5);
  //   logoL.scale.set(0.5, 0.5);
  //   logoP.scale.set(0.5, 0.5);

  //   if (innerWidth < innerHeight) {
  //     app.stage.removeChild(logoL);
  //     if (!app.stage.children.includes(logoP)) {
  //       app.stage.addChild(logoP);
  //     }
  //   } else {
  //     app.stage.removeChild(logoP);
  //     if (!app.stage.children.includes(logoL)) {
  //       app.stage.addChild(logoL);
  //     }
  //   }
  // });
  

}
