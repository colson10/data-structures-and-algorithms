'use strict';

const bankRequests = (accounts, requests) => {
  for (let i = 0; i < requests.length; i++) {
    const req = requests[i].split(' ');
    if (req[0] === 'transfer') {
      if (!accounts[req[1] - 1] || !accounts[req[2] - 1]) return [-i - 1];
      accounts[req[1] - 1] -= Number(req[3]);
      accounts[req[2] - 1] += Number(req[3]);
      if (accounts[req[1] - 1] < 0) return [-i - 1];
    } else if (req[0] === 'deposit') {
      if (!accounts[req[1] - 1]) return [-i - 1];
      accounts[req[1] - 1] += Number(req[2]);
    } else if (req[0] === 'withdraw') {
      if (!accounts[req[1] - 1]) return [-i - 1];
      accounts[req[1] - 1] -= Number(req[2]);
      if (accounts[req[1] - 1] < 0) return [-i - 1];
    }
  }
  return accounts;
};

export default bankRequests;
