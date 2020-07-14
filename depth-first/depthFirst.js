
class Graph {
    // constructor(noOfVertices)
    // {
    //   this.noOfVertices = noOfVertices;
    //   this.adjList = new Map();
    // }


    dfs(v) {

        let visited = []; // let visited = new Array();
        let keys = this.adjList.keys();
        for (let v of keys) {
            visited[v] = false;
        }

        this.dfsRecu(v, visited);
    }

    dfsRecu(v, visited) {
        let eList = this.adjList.get(v);
        visited[v] = true;
        console.log(v);
        for (let eData in eList) {
            let e = eList[eData];
            if (!visited[e]) {
                visited[e] = true;
                this.dfsRecu(e, visited);
            }
        }
    }


}


