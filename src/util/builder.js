const fs = require('fs');
const readline = require('readline');

const builder = {};

/**
 * @param {String} directory - The directory in which the folder is to be created
 * @description: Generates the problem folder
 */

builder.makeFolder = (directory) => {
  fs.mkdir(directory, (err) => {});
};

/**
 * @param directory - The directory where the test folder is to be created in
 * @description: Creates the test directory with pre-filled basic test.
 */

builder.makeTestDirectory = (directory) => {
  fs.mkdir(`${directory}/__tests__`, (err) => {});
};

/**
 * @param {string} directory: Takes in the name of the directory, and creates an index file
 */

builder.makeIndexFile = (directory) => {
  const data = `module.exports = {
    Date: "${new Date().toLocaleDateString()}",
    Problem: "[PROBLEM_NAME]",
    Link: "[PROBLEM_LINK]",
    Time_spent: [TIME SPENT],
    Times_visited: [TIMES VISITED],
    Difficulty: "",
    Type: "",
    Solved: "",
    Notes: "",
  }`;

  fs.writeFile(`${directory}/index.js`, data, (err) => {
    if (err) throw err;
  });
};

/**
 * @param {string} directory: Takes in the directory, and creates the base solution file
 */

builder.makePrimaryFile = (directory, primaryFile) => {
  const data = `FILL ME OUT
  
module.exports = ;
  `;

  fs.writeFile(`${directory}/${primaryFile}.js`, data, (err) => {
    if (err) throw err;
  });
};

/**
 * @param {string} directory: The directory of where to create the test file.
 * E.g Easy/<Problem_Name> will create E.g Easy/<Problem_Name>/__tests__
 * @param {string} primaryFile: The file name to generate the corresponding test file
 */

builder.makeTestFile = (directory, primaryFile) => {
  const fileName = `${primaryFile}.test.js`;
  const data = `const fn = require('../${primaryFile}');
  
  describe('[Insert title]', () => {
    test('It should exist', () => {
      expect(fn).toBeTruthy();
    });

    // Add more tests!
  })
  `;

  fs.writeFile(`${directory}/__tests__/${fileName}`, data, (err) => {
    if (err) throw err;
  });
};

/**
 * @description: Asks user which directory to place the file thats inputted in.
 */

builder.prompt = async () => {
  let basePath = 'src/';
  let primaryFile;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const directoryPrompt = () => {
    return new Promise((resolve, reject) => {
      rl.question('What is the directory path? Ex: Easy/dirName or Medium/dirName: ', (answer) => {
        basePath += answer;
        resolve();
      });
    });
  };

  const filePrompt = () => {
    return new Promise((resolve, reject) => {
      rl.question(
        'What is the file name? Make sure it matches the directory name from the previous question: ',
        (answer) => {
          primaryFile = answer;
          resolve();
        },
      );
    });
  };

  await directoryPrompt();
  await filePrompt();
  rl.close();

  return [basePath, primaryFile];
};

/**
 *
 * @description: Scaffolds a toy problem file based on user input.
 */

builder.build = async () => {
  const [directory, primaryFile] = await builder.prompt();

  if (primaryFile !== directory.split('/')[2]) {
    throw new Error('Primary file name must match directory name');
  }

  builder.makeFolder(directory);
  builder.makeIndexFile(directory);
  builder.makeTestDirectory(directory);
  builder.makeTestFile(directory, primaryFile);
  builder.makePrimaryFile(directory, primaryFile);
};

builder.build();
