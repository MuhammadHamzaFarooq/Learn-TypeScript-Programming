import { color, rank, file } from './type';


//Chase Game
class Game{}
class Piece{
    protected position!: Position;
}
class Position{
    constructor(private file:file,private rank:rank){}
}

//There are six types of pieces
class King extends Piece{}
class Queen extends Piece{}
class Bishop extends Piece{}
class Knight extends Piece{}
class Rock extends Piece{}
class Pawn extends Piece{}







