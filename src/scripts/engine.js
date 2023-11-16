const state = {
    view:{
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelectorAll(".enemy"),
        timeLeft: document.querySelectorAll("#time-left"),
        score: document.querySelectorAll("#score"),
    }, 
    values:{ timerId: null,
        countDownTimerId: setInterval(countDown, 1000),
            gameVelocity:1000,
            hitPosition: 0,
            result: 0,
            curretTime: 60,

    },
};
function countDown() {
    state.values.curretTime--;
    state.view.timeLeft.texContent = state.values.curretTime;

    if(state.values.curretTime <= 0){
        lert("Game Over! o seu resultado foi: " + state.values.result);
    }

}

function playSound(){
    let audio = new Audio("./src/audio.hit.m4a");
    audio.play();

}

function randomSquare(){
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");   
});
    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}

function moveEnemy(){
    state.values.timeId = setInterval(randomSquare, state.values.gameVelocity);
}

function addlistnerHitBox() {
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if(square.id === state.values.hitPosition){
                state.values.result++;
                state.view.score.texContent = state.values.result;
                state.values.hitPosition = null;
                playSound();

            }
        });
    });

}

function initial() {
    moveEnemy();
    addlistnerHitBox();
}

initial();