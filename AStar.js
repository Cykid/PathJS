class AStar{
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.nodeList = [];

        this.initNodeMap();
        console.log('Hello World');
        console.log(this.nodeList);
    }

    initNodeMap(){
        for (let index = 0; index < this.width; index++) {
            for(let i = 0 ; i < this.height; i++){
                this.nodeList.push(new Node(new Vector2(index,i)));
            }
        }
    }

    getNode(pos){
        for (let index = 0; index < this.nodeList.length; index++) {
            const node = this.nodeList[index];
            
            if(node.pos = pos) {
                return node;
            }
        }
    }
}

class Seeker{
    constructor(AStar){
        this.graph = AStar;
    }

    seekPath(start,goal){

        var distances = [];
        for(var i = 0; i < this.graph.nodeList.length; i++) distances[i] = Number.MAX_VALUE;
        distances[start] = 0;
        
        var priorities = [];
        for(var i = 0; i < this.graph.nodeList.length; i++) priorities[i] = Number.MAX_VALUE;
        priorities[start] = new Vector2(this.graph.nodeList[start].pos.x, this.graph.nodeList[start].pos.y).distance(new Vector2(this.graph.nodeList[goal].pos.x, this.graph.nodeList[goal].pos.y))

        var visited = [];

        while(true){
            var lowestPriority = Number.MAX_VALUE;
            var lowestPriorityIndex = -1;
            for(var i = 0; i < priorities.length; i++){
                if(priorities[i] < lowestPriority && !visited[i]){
                    lowestPriority = priorities[i];
                    lowestPriorityIndex = i;
                }
            }

            if(lowestPriority === -1){
                return -1;
            }
            else if (lowestPriorityIndex === goal){
                // return distances[lowestPriorityIndex];

                console.log('found Target');
                return;
            }

            var nb = [
                lowestPriorityIndex - this.graph.height,
                lowestPriorityIndex + this.graph.height,
                ((lowestPriorityIndex + 1) % this.graph.height == 0)? lowestPriorityIndex - 1 : '',
                ((lowestPriorityIndex + 1) % this.graph.height != 0)? lowestPriorityIndex + 1 : ''
            ]
            console.log(nb);

            for(var i = 0; i < nb.length; i++){
                var n = nb[i];
                if(n <= this.graph.nodeList.length && n >= 0){
                    priorities[n] = new Vector2(this.graph.nodeList[n].pos.x, this.graph.nodeList[n].pos.y).distance(new Vector2(this.graph.nodeList[goal].pos.x, this.graph.nodeList[goal].pos.y))
                }else[
                    priorities[n] = Number.MAX_VALUE
                ]
            }
        
       




            console.log("Visiting node " + lowestPriorityIndex + " with currently lowest priority of " + lowestPriority);
            

            visited[lowestPriorityIndex] = true;
        }
        
    }

}

class Node{

    constructor(pos){
        this.pos = new Vector2(pos.x,pos.y);
    }

    set walkable(b){
        this._walkable = b;
    }

    get walkable(){
        return this._walkable;
    }
}

class Vector2{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    distance(Vector2){
        var dis = Math.sqrt( ((this.x - Vector2.x) * (this.x - Vector2.x) ) + ((this.y - Vector2.y) * (this.y - Vector2.y) ))
        return Math.round(dis);
    }

    add(Vector2){
        this.x = Vector2.x;
        this.y = Vector2.y;
    }

    eq(Vector2){
        if(this.x == Vector2.x && this.y == Vector2.y) return true;
        return false;
    }
}

module.exports = {AStar, Vector2, Node, Seeker};
