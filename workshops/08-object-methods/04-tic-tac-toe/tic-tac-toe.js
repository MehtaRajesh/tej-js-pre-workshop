// YOUR CODE BELOW

const ticTacToe = {
    'board':[[null,null,null],[null,null,null],[null,null,null]],
    'move':function(x,rowNum,colNum){
        if(this.board[rowNum][colNum] === null)
            this.board[rowNum][colNum] = x;

        return this.board;
    },
    'clear': function(){
        this.board = [[null,null,null],[null,null,null],[null,null,null]];
        return this.board;
    }
};

