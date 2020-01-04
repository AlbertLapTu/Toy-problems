const GoogleSpreadsheet = require('google-spreadsheet');
const { promisify } = require('util');
const readline = require('readline');

const { sheetId } = require('../../config');
const credentials = require('../../client_secret.json');

/**
 * @description: Authenticates using the client credentials provided, and grabs the first spreadsheet associated with the spreadsheet id (if more than 1 worksheet exists)
 *
 * @return {array} Returns an array of cells
 */

const accessSpreadsheet = async () => {
  const doc = new GoogleSpreadsheet(sheetId);
  await promisify(doc.useServiceAccountAuth)(credentials);
  const info = await promisify(doc.getInfo)();
  const sheet = info.worksheets[0];

  const rows = await promisify(sheet.getRows)({
    offset: 1,
    limit: 5,
  });

  return rows;
};

/**
 * @description: Adds a new entry to the first google spreadsheet. Waits for user-input as to which
 * index.js note file to use.
 */

const addEntry = async () => {
  // Authentication && selection of spreadsheet
  const doc = new GoogleSpreadsheet(sheetId);
  await promisify(doc.useServiceAccountAuth)(credentials);
  const info = await promisify(doc.getInfo)();
  const sheet = info.worksheets[0];

  let problemPath = await fileNotePath();

  // Path will usually be Difficulty/ProblemName
  // e.g. Easy/balancedBinaryTree
  const problemNotes = require(`../${problemPath}/index.js`);

  const {
    Date,
    Problem,
    Link,
    Time_spent,
    Times_visited,
    Difficulty,
    Type,
    Solved,
    Notes,
  } = problemNotes;

  const row = await promisify(sheet.addRow)({
    Date,
    Problem,
    Link,
    Time_spent,
    Times_visited,
    Difficulty,
    Type,
    Solved,
    Notes,
  });

  console.log('Added row');
};

/**
 * @description
 *
 * @return {String} - Returns a string of the file location that the user inputted. Format
 * will always be: <Difficulty>/<directory_name>
 */

const fileNotePath = async () => {
  let filePath;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const filePrompt = () => {
    return new Promise((resolve, reject) => {
      rl.question(
        'What is the file path of the toy problem you just finished? E.g. Medium/<Toy_Problem_Name>: ',
        (answer) => {
          filePath = answer;
          resolve();
        },
      );
    });
  };

  await filePrompt();

  if (filePath.split('/').length < 2) {
    throw new Error(
      'Provide a path such as <difficulty>/<folder_name>. Path is incorrect or unreadable',
    );
  }

  rl.close();

  return filePath;
};

addEntry();
