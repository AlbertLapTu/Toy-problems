/*
Questions on how to store Graph's?

Method 1: Adjacency Matrix
Example graph

                   A
                /     \
              F         B
             \           \
             \           C
              \        /
              E ---- D

Modeled in a Matrix:
-  A  B  C  D  E  F
A  0  1  0  0  0  1
B  1  0  1  0  0  0
C  0  1  0  1  0  0
D  0  0  1  0  1  0
E  0  0  0  1  0  1
F  1  0  0  0  1  0

Method 2: Adjacency List

                   0
                /     \
              5         1
             \           \
             \           2
              \        /
              4 ---- 3


Modeled as an array that stores the edges
[
  0  [1,5]
  1  [0,2]
  2  [1,3]
  3  [2,4]
  4  [3,5]
  5  [4,0]
]


TRADEOFFS:

Adjacency List: (usually real-world data modeled as this);
Pros:
- Takes up less space 
- Faster to iterate over all edges
Cons:
- Can be slower to look up other edges

Adjacency Matrix:
Pros: Faster to look up specific edge
Cons: Takes up more space, and slower to iterate over

*/

//UNDIRECTED GRAPH
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    if (!this.adjacencyList[name]) {
      this.adjacencyList[name] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex2].push(vertex1);
    this.adjacencyList[vertex1].push(vertex2);
  }
  //Won't work if there's nothing in the array
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(item => {
      item !== vertex2;
    });

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(item => {
      item !== vertex1;
    });
  }

  removeVertex(vertex1, vertex2) {
    //Vertex 1 is the vertex that we're trying to remove
    for (let i = 0; i < this.adjacencyList[vertex1].length; i++) {
      this.removeEdge(this.adjacencyList[vertex1][i], vertex2);
    }
    delete this.adjacencyList[vertex1];
  }

  // Note: Depth first in this context means selecting a root, and moving away from it.
  // Find ONE neighbor, and then continue down that neighbor's children.
  // Recursive solution
  DFS(start) {
    const list = [];
    const visited = {};
    //This keyword context gets changed, saving ref for recursive function
    const adjacencyList = this.adjacencyList;

    const traverse = node => {
      if (!node) {
        return null;
      }
      //For current node, set it to true to keep track of visited nodes
      visited[node] = true;
      list.push(node);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return traverse(neighbor);
        }
      });
    };
    traverse(start);
    return list;
  }
  // Note: Breadth first search visits all the numbers, prior to visiting the neighbors
  // Iterative solution
  DFS(start) {
    let result = [];
    let stack = [start];
    let visited = {};
    let currentVertex;

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  BFS(start) {
    //Remove the first vertex in the queue, and put it into visited array
    //Loop over each vertex of the adjacency list that you were visiting.
    //If it hasn't been visited yet, mark as visited and push it into the queue
    //Return array of visited nodes.
    let queue = [start];
    let visited = [];
    let hasVisited = {};
    let currentNode;
    visited[start] = true;

    while (queue.length) {
      currentNode = queue.shift();
      visited.push(currentNode);

      this.adjacencyList[currentNode].forEach(node => {
        if (!hasvisited[node]) {
          hasVisited[node] = true;
          queue.push(node);
        }
      });
    }
    return visited;
  }
}
