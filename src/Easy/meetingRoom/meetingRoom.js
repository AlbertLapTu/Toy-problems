var canAttendMeetings = function(intervals) {
  var sortedByStart = intervals.sort((a, b) => a.start - b.start);

  for (let i = 0; i < sortedByStart.length; i++) {
    let currentEndTime = sortedByStart[i].end;
    let nextMtgStartTime = sortedByStart[i + 1].start;
    if (currentEndTime >= nextMtgStartTime) {
      return false;
    }
  }
  return true;
};

//Time complexity: Log n
