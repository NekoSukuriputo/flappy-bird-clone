import { Scene } from "phaser";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  create() {
    this.add.image(0, 0, "sky").setOrigin(0, 0);
    // this.input.once('pointerdown', () => {
    //     this.scene.start('GameOver');
    // });
  }
}
