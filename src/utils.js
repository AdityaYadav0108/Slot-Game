export const slotDimensions = {
  symbolSize:  0,
  reelWidth:  0
}

export const symbols = {
  ten : "../assets/symbols/01.png",
  j : "../assets/symbols/02.png",
  q : "../assets/symbols/03.png",
  k : "../assets/symbols/04.png",
  a : "../assets/symbols/05.png",
  coconut : "../assets/symbols/06.png",
  snake : "../assets/symbols/07.png",
  frog : "../assets/symbols/08.png",
  bird : "../assets/symbols/09.png",
  banana : "../assets/symbols/10.png",
  wild : "../assets/symbols/12.png",
  scatter : "../assets/symbols/13.png",
}
export const slotContainerPosition ={
  x: 0,
  y: 0,
  width: 0,
  height: 0
} 
export const symbolNames = Object.keys(symbols);

export const reels = [];

export let app;

export function setApp(newApp){
  app = newApp;
}

export function getApp(){
  return app;
}