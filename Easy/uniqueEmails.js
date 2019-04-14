var numUniqueEmails = function(emails) {
  let output = [];
  for (let i = 0; i < emails.length; i++) {
    let local = emails[i].split('@')[0];
    let domain = emails[i].split('@')[1];
    let ignorePlus = local.split('+')[0];
    let joinDots = ignorePlus.split('.').join('');
    output.push(`${joinDots}@${domain}`);
  }
  return new Set(output).size;
};
