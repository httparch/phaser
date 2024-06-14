
import Phaser from "lib/phaser.js";
import { SCENE_KEYS } from "./scene-keys";

export class PreloadScene extends Phaser.Scene{
    constructor(){
        super({
            key:SCENE_KEYS.PRELOAD_SCENE,
        });
        console.log(PreloadScene.name);
    }
}