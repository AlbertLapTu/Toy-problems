const fs = require('fs');
const readline = require('readline');

const builder = {};

builder.makeFolder = (directory) => {
  fs.mkdir(directory, (err) => {});
};

/**
 * @param {string} directory: Takes in the name of the directory, and creates an index file
 */

builder.makeIndexFile = (directory) => {
  const data = `module.exports = {
    Date: ${new Date().toLocaleDateString()},
    Problem: [PROBLEM_NAME],
    Link: [PROBLEM_LINK],
    Type: [PROBLEM_TYPE],
    "Solved?": [Y/N],
    Notes: [DESCRIPTION],
  }`;

  fs.writeFile(`${directory}/index.js`, data, (err) => {
    if (err) throw err;
  });
};

/**
 * @param {string} directory: Takes in the directory, and creates the base solution file
 */

builder.makePrimaryFile = (directory, primaryFile) => {
  fs.writeFile(`${directory}/${primaryFile}.js`, 'FILL_ME_OUT', (err) => {
    if (err) throw err;
  });
};

/**
 * @description:
 */

builder.prompt = async () => {
  let directory;
  let primaryFile;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const directoryPrompt = () => {
    return new Promise((resolve, reject) => {
      rl.question(
        'What is the directory path? Ex: Easy/dirName or src/Medium/dirName: ',
        (answer) => {
          directory = answer;
          resolve();
        },
      );
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

  return [directory, primaryFile];
};

/**
 *
 * @description: Scaffolds a file based on user input.
 */

builder.build = async () => {
  const [directory, primaryFile] = await builder.prompt();

  if (primaryFile !== directory.split('/')[2]) {
    throw new Error('Primary file name must match directory name');
  }

  builder.makeFolder(directory);
  builder.makeIndexFile(directory);
  builder.makePrimaryFile(directory, primaryFile);
};

builder.build();
