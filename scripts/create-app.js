/* eslint-disable no-console */
const path = require('path');
const fs = require('fs');
const cp = require('child_process');

const TEMPLATE_DIR = '../templates/cra-template-plus';
const TEMPLATE_PATH_URL = `${TEMPLATE_DIR}/template/paths.json`;
const DIST_DIR = '../packages/';

/**
 * @description fix extends tsconfig.base.json path error
 */
function main() {
  const args = process.argv.slice(2);
  const projectName = args[0];
  if (!projectName) {
    console.log('you had to pass a project name!');
    process.exit(0);
  }
  // check if already exist
  const distUrl = path.resolve(__dirname, DIST_DIR, projectName);
  const isExist = fs.existsSync(distUrl);
  if (isExist) {
    console.log(`${projectName} is already exist, please tap a new name and try again`);
    process.exit(0);
  }
  console.log('creating……');
  const url = path.resolve(__dirname, TEMPLATE_PATH_URL);
  // load data
  const jsonObj = fs.readFileSync(url);
  const jsonStr = jsonObj.toString();
  const regex = /(: ").*tsconfig.base.json(")/;
  const newJson = jsonStr.replace(regex, '$1../../tsconfig.base.json$2');
  fs.writeFileSync(url, newJson);
  const templateUrl = path.resolve(__dirname, TEMPLATE_DIR);
  cp.exec(
    `npx create-react-app ${distUrl} --template file:${templateUrl}`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
      // remove yarn.lock in new project, it's no need for monorepo
      fs.rmSync(`${distUrl}/yarn.lock`, { force: true });
      // write back
      fs.writeFileSync(url, jsonStr);
      console.log('finished!');
    },
  );
}

main();
