/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  let totalPaths = [];
  let path = [];

  //Starting point
  path.push(0);

  const dfsSearch = node => {
    //If the node is
    if (node === graph.length - 1) {
      totalPaths.push(path.slice(0));
    } else {
      for (neighbor of graph[node]) {
        path.push(neighbor);
        dfsSearch(neighbor);
        path.pop();
      }
    }
  };
  dfsSearch(0);
  return totalPaths;
};

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  let result = [];
  let visited = {};

  const traverse = node => {
    if (!visited[node]) {
      visited[node] = true;
    }
  };
};

/*

Given a directed, acyclic graph of N nodes.  Find all possible paths from node 0 to node N-1, and return them in any order.
The graph is given as follows:  the nodes are 0, 1, ..., graph.length - 1.  graph[i] is a list of all nodes j for which the 
edge (i, j) exists.

Example:
Input: [[1,2], [3], [3], []] 
Output: [[0,1,3],[0,2,3]] 
Explanation: The graph looks like this:
0--->1
|    |
v    v
2--->3
There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

0: [1, 2]
1: [3]
2: [3]
3: []


*/
