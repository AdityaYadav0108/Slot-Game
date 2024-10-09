import * as PIXI from 'pixi.js'
export function addButton(app){
  const style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
});
const playText = new PIXI.Text('Spin the wheels!', style);
playText.anchor.set(0.5);
playText.position.set(app.screen.width/2 , app.screen.height * 0.9);
app.stage.addChild(playText);


}