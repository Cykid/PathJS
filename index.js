const {AStar, Vector2, Seeker} = require('./AStar');

astar = new AStar(4,4);

ai = new Seeker(astar);

ai.seekPath(3,12);

VecA = new Vector2(1,0);

vecB = new Vector2(5,5);



