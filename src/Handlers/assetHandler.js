async function onAssetLoaded(app, slotContainer, slotBG){
  const slotTextures = await Promise.all([
    PIXI.Assets.load("../../assets/symbols/01.png"),
    PIXI.Assets.load("../../assets/symbols/02.png"),
    PIXI.Assets.load("../..assets/symbols/03.png"),
    PIXI.Assets.load("../../assets/symbols/04.png"),
  ]);

  const reelContainer = new PIXI.Container();
  const reels = [];

  const REEL_WIDTH = slotBG.width / 5;
  const SYMBOL_SIZE = REEL_WIDTH * 0.6;
  for (let i = 0; i < 5; i++) {
    const rc = new PIXI.Container();

    rc.x = i * REEL_WIDTH;
    rc.width =REEL_WIDTH;
    rc.height = slotBG.height;
    reelContainer.addChild(rc);

    const reel = {
      container: rc,
      symbols: [],
      position: 0,
      previousPosition: 0,
      blur: new PIXI.filters.BlurFilter(),
    };

    reel.blur.blurX = 0;
    reel.blur.blurY = 0;
    rc.filters = [reel.blur];

    // Build the symbols
    for (let j = 0; j < 4; j++) {
      const symbol = new PIXI.Sprite(
        slotTextures[Math.floor(Math.random() * slotTextures.length)]
      );
      // Scale the symbol to fit symbol area.

      symbol.y = j * SYMBOL_SIZE;
      symbol.scale.x = symbol.scale.y = Math.min(
        SYMBOL_SIZE / symbol.width,
        SYMBOL_SIZE / symbol.height
      );
      symbol.x = Math.round((SYMBOL_SIZE - symbol.width) / 2);
      reel.symbols.push(symbol);
      rc.addChild(symbol);
    }
    reels.push(reel);
    console.log(rc.position);
  }
  reelContainer.pivot = 0.5;
  reelContainer.position.set(slotBG.x, slotBG.y);
  reelContainer.visible = true;

  console.log(reelContainer.position)
  slotContainer.addChild(reelContainer);
}