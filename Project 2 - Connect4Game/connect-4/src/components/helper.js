export const isWinner = (gameBoard, currpos, currentPlayer) => {

    let board = [...gameBoard];
    board[currpos] = currentPlayer;

    const winLines = [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15],
        [0, 4, 8, 12],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],
        [0, 5, 10, 15],
        [3, 6, 9, 12],
    ];

    for (let i = 0; i < winLines.length; i++) {
        const [c1, c2, c3, c4] = winLines[i];
        if (board[c1] > 0 &&
            board[c1] === board[c2] &&
            board[c2] === board[c3] &&
            board[c3] === board[c4]) {
            return true;
        }
    }

    return false;
}

export const isDraw = (gameBoard, currpos, currentPlayer) => {

    let board = [...gameBoard];
    board[currpos] = currentPlayer;

    let count = board.reduce((n, x) => n + (x === 0), 0);

    return count === 0;

}

export const guessMove = (gameBoard) => {

    const notClicked = []
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] === 0) {
            notClicked.push(i);
        }
    }

    const random = Math.floor(Math.random() * notClicked.length);
    return notClicked[random];
}