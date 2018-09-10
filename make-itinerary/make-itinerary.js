'use strict';

function findItinerary(tickets) {
  const length = tickets.length;

  const map = {
    JFK: [],
  };

  let result = [];

  for (let i = 0; i < length; i++) {
    let from = tickets[i][0];
    let to = tickets[i][1];

    if (!map[from]) {
      map[from] = [];
      map[from].push(to);
    } else {
      map[from].push(to);
    }
  }

  for (let prop in map) {
    map[prop].sort();
  }
  console.log(map, 'this is the map');

  makeItinerary('JFK'); // dfs

  function makeItinerary(from) {
    let tos = map[from];
    console.log(tos, 'tos', from, 'from');
    while (tos && tos.length > 0) {
      console.log(from, 'before', tos[0], 'this is first of tos');
      makeItinerary(tos.shift());
      console.log(tos, 'after');
    }
    console.log(result, 'result before');
    result.unshift(from);
    console.log(result, 'result after');
  }

  return result;
}


// var tickets = [["AXA","EZE"],["EZE","AUA"],["ADL","JFK"],["ADL","TIA"],["AUA","AXA"],["EZE","TIA"],["EZE","TIA"],["AXA","EZE"],["EZE","ADL"],["ANU","EZE"],["TIA","EZE"],["JFK","ADL"],["AUA","JFK"],["JFK","EZE"],["EZE","ANU"],["ADL","AUA"],["ANU","AXA"],["AXA","ADL"],["AUA","JFK"],["EZE","ADL"],["ANU","TIA"],["AUA","JFK"],["TIA","JFK"],["EZE","AUA"],["AXA","EZE"],["AUA","ANU"],["ADL","AXA"],["EZE","ADL"],["AUA","ANU"],["AXA","EZE"],["TIA","AUA"],["AXA","EZE"],["AUA","SYD"],["ADL","JFK"],["EZE","AUA"],["ADL","ANU"],["AUA","TIA"],["ADL","EZE"],["TIA","JFK"],["AXA","ANU"],["JFK","AXA"],["JFK","ADL"],["ADL","EZE"],["AXA","TIA"],["JFK","AUA"],["ADL","EZE"],["JFK","ADL"],["ADL","AXA"],["TIA","AUA"],["AXA","JFK"],["ADL","AUA"],["TIA","JFK"],["JFK","ADL"],["JFK","ADL"],["ANU","AXA"],["TIA","AXA"],["EZE","JFK"],["EZE","AXA"],["ADL","TIA"],["JFK","AUA"],["TIA","EZE"],["EZE","ADL"],["JFK","ANU"],["TIA","AUA"],["EZE","ADL"],["ADL","JFK"],["ANU","AXA"],["AUA","AXA"],["ANU","EZE"],["ADL","AXA"],["ANU","AXA"],["TIA","ADL"],["JFK","ADL"],["JFK","TIA"],["AUA","ADL"],["AUA","TIA"],["TIA","JFK"],["EZE","JFK"],["AUA","ADL"],["ADL","AUA"],["EZE","ANU"],["ADL","ANU"],["AUA","AXA"],["AXA","TIA"],["AXA","TIA"],["ADL","AXA"],["EZE","AXA"],["AXA","JFK"],["JFK","AUA"],["ANU","ADL"],["AXA","TIA"],["ANU","AUA"],["JFK","EZE"],["AXA","ADL"],["TIA","EZE"],["JFK","AXA"],["AXA","ADL"],["EZE","AUA"],["AXA","ANU"],["ADL","EZE"],["AUA","EZE"]];

// const tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]

const tickets = [['JFK', 'KUL'], ['JFK', 'NLT'], ['KUL', 'JFK']];
const tickets2 = [['JFK', 'KUL'], ['JFK', 'NLT'], ['NLT', 'JFK']];

findItinerary(tickets2);
// findItinerary(tickets2);
