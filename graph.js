class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(data) {
    this.adjacencyList[data] = [];
  }
  addEdge(vertex, edges) {
    this.adjacencyList[vertex] = edges;
  }
  depthFirstRecursive(start) {
      const visited = {};
      const result = [];
      const adjacencyList = this.adjacencyList;
      function dfs(vertex){
          if(!vertex) return null;
          visited[vertex] = true;
          result.push(vertex);
          adjacencyList[vertex].forEach(element => {
            if(!visited[element]) {
                dfs(element);
            }
          });;
            
      };
      dfs(start);
      return result;
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("C");
graph.addVertex("B");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", ["B", "C"]);
graph.addEdge("C", ["A", "E"]);
graph.addEdge("B", ["A", "D"]);
graph.addEdge("D", ["B", "F", "E"]);
graph.addEdge("E", ["D", "C", "F"]);
graph.addEdge("F", ["D", "E"]);
console.log(graph.depthFirstRecursive('A'));
console.log(graph);
