/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  const hash = {};

  for (let i = 0; i < cpdomains.length; i++) {
    let [value, domain] = cpdomains[i].split(' ');
    value = Number(value);

    while (domain) {
      if (!hash[domain]) {
        hash[domain] = value;
      } else {
        hash[domain] += value;
      }
      domain =
        domain.indexOf('.') === -1
          ? null
          : domain.substring(domain.indexOf('.') + 1, domain.length);
    }
  }

  const res = [];
  let entries = Object.entries(hash);

  for (const [domain, value] of entries) {
    let str = value + ' ' + domain;
    res.push(str);
  }

  return res;
};
