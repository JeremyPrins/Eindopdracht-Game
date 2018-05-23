class Game {

    public static instance: Game

    private gameobject: GameObject;

    constructor() {
        this.gameobject = new GameObject
        console.log("New Game!")
        this.gameLoop()

    }

        public static getInstance() {
            if (!Game.instance) {
                Game.instance = new Game()
            }
            return Game.instance
        }

    private gameLoop() {
        this.gameobject.update()
        requestAnimationFrame(() => this.gameLoop())
    }

}
//load
window.addEventListener("load", () => {
    new Game()
})