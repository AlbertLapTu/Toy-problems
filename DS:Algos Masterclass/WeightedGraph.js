class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
  dequeue() {
    return this.values.shift();
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex1) {
    if (!this.adjacencyList[vertex1]) {
      this.advacencyList[vertex1] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList.push({ node: vertex2 }, weight);
    this.adjacencyList.push({ node: vertex1 }, weight);
  }

  Dijkstras(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let firstNode;

    // Build up initial distances state
    // Create an object (distances) and set each key to be every vertex in the
    // adjacency list, with a value of infinity, except for the starting vertex
    // which should have a value of 0.
    //  After setting a value in the distances object, add each vertex with a priority
    // of infinity to the priority queue, except the starting vertex, which should have a
    // priority of 0, because that's where we began
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // Loop as long as there is anything in the priority queue
    while (nodes.values.length) {
      firstNode = nodes.dequeue().val();
      if (firstNode === finish) {
        //TODO
      }
      //If there's an minimum value
      if (firstNode || distances[firstNode] !== Infinity) {
        //Loop over your current positions index
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[nextNode][neighbor];
          //Calculate new distance to neighboring node.
          let candidate = distances[firstNode] + nextNode.weight;
        }
      }
    }

    /*

-Dequeue a vertex from the queue
- If vertex is the same as the ending vertex, return
- If not, loop through each value in the adjacency list at that vertex
  -Calculate the distance to that vertex from the starting vertex
  - If the distance is less than what is currently stored within distances object
    -Update the distances object w/ new lower distance
    - Update ptervious object to contain that vertex
    - enqueue the vertex with the total distance from the start node
*/
  }
}

let graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);
