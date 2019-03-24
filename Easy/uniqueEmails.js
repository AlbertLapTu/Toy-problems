let arr = [
  'test.email+alex@leetcode.com',
  'test.e.mail+bob.cathy@leetcode.com',
  'testemail+david@lee.tcode.com',
];

const validateEmail = array => {
  let valid = 0;
  let uniques = new Set();

  for (email of array) {
    let domainName = email.split('@')[1];
    let userName = email.split('@')[0];
    let userNameNoPlus = userName.split('+')[0];
    let noPeriods = userName.split('.').join('');

    uniques.add(`${noPeriods}@${domainName}`);
  }
  console.log(uniques);
  return uniques.size;
};

validateEmail(arr);
