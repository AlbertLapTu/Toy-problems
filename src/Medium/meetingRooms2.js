var minMeetingRooms = function(intervals) {
  const startTimes = intervals.map((el) => el.start);
  const endTimes = intervals.map((el) => el.end);
  const len = intervals.length;

  startTimes.sort((a, b) => a - b);
  endTimes.sort((a, b) => a - b);

  let endPointer = 0;
  let maxCount = 0;

  for (let i = 0; i < len; i++) {
    if (startTimes[i] < endTimes[endPointer]) {
      maxCount++;
    } else {
      endPointer++;
    }
  }
  return maxCount;
};
