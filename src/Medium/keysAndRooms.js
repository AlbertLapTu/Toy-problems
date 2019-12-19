/**
 * @param {number[][]} rooms
 * @return {boolean}
 * 
 * There are N rooms and you start in room 0.  Each room has a distinct number in 0, 1, 2, ..., N-1, and each room may have some keys to access the next room. 

Formally, each room i has a list of keys rooms[i], and each key rooms[i][j] is an integer in [0, 1, ..., N-1] where N = rooms.length.  A key rooms[i][j] = v opens the room with number v.

Initially, all the rooms start locked (except for room 0). 

You can walk back and forth between rooms freely.

Return true if and only if you can enter every room.

Example 1:

Input: [[1],[2],[3],[]]
Output: true
Explanation:  
We start in room 0, and pick up key 1.
We then go to room 1, and pick up key 2.
We then go to room 2, and pick up key 3.
We then go to room 3.  Since we were able to go to every room, we return true.
Example 2:

Input: [[1,3],[3,0,1],[2],[0]]
Output: false
Explanation: We can't enter the room with number 2.
 */

var canVisitAllRooms = function(rooms) {
  if (!rooms.length) return false;
  let visited = new Set();
  let stack = [];

  const visitRoom = roomNumber => {
    if (visited.has(roomNumber)) {
      return;
    }
    visited.add(roomNumber);
    let keyArray = rooms[roomNumber];

    for (let i = 0; i < keyArray.length; i++) {
      stack.push(keyArray[i]);
    }
  };

  visitRoom(0);

  while (stack.length > 0) {
    visitRoom(stack.pop());
  }

  return rooms.length === visited.size;
};

//Within each room (index), it has a list of keys. Each
//key is an integer 0 - n-1, where N = rooms.length.
//A key that equals v, opens the room with the number v.

/*

[[1,3], [3,0,1], [2], [0]]

Start at room 0
You can pick key 1 or 3.
Pick key 1

Go to room 1
You can pick key 3, 0 or 1
Pick key 0 

Go to room 0
Pick key 3



*/
