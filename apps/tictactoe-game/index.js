let turn = 0;
let block_states = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
let magic_square = [6,7,2,1,5,9,8,3,4];
let winner = false;

const blocks = document.querySelectorAll('.board-block');
document.getElementById('reset-button').addEventListener('click', reset);

blocks.forEach((block) => {
    block.addEventListener('click', () => {
        playerMove(block.id);
    })
})

function playerMove(block_id){
    if(winner || block_states[block_id] != -1){
        return;
    }

    let symbol = (turn == 0) ? 'X' : 'O';

    block_states[block_id] = turn;
    
    document.getElementById(block_id).textContent = symbol;

    checkWin(block_id);

    if(winner){
        return;
    }

    turn = (turn + 1) % 2;
    document.getElementById('player-turn').textContent = `TURN: PLAYER ${turn + 1}`;
}

function reset(){
    for(let i = 0; i < 9; i++){
        block_states[i] = -1;
    }

    blocks.forEach((block) => {
        block.textContent = '';
    })

    turn = 0;
    document.getElementById('player-turn').textContent = `TURN: PLAYER ${turn + 1}`;
    winner = false;
}

function checkWin(block_id){
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            if(i == j || j == block_id || i == block_id){continue;}

            if(block_states[i] != turn || block_states [j] != turn){continue;}

            if(magic_square[block_id] + magic_square[i] + magic_square[j] == 15){
                winner = true;
                document.getElementById('player-turn').textContent = `WINNER: PLAYER ${turn + 1}`;
                return;
            }


        }
    }
}

