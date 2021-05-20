import { WaveGroup } from "./src/WaveGroup.js";
import "./style.css";

class App {
    constructor() {
        this.canvas = document.createElement("canvas");
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d");
        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

        this.waveGroup = new WaveGroup();

        window.addEventListener("resize", this.resize.bind(this));
        window.requestAnimationFrame(this.animate.bind(this));
        this.resize();
    }
    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);
        this.waveGroup.resize(this.stageWidth, this.stageHeight);
    }
    animate() {
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        this.waveGroup.draw(this.ctx);
        window.requestAnimationFrame(this.animate.bind(this));
    }
}
new App();
