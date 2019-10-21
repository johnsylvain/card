#! /usr/bin/env node

const boxen = require('boxen');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');

const me = {
  name: 'John Sylvain',
  title: 'Software Engineer',

  links: [
    ['Web', 'https://johnsylvain.me'],
    ['GitHub', 'https://github.com/johnsylvain'],
    ['LinkedIn', 'https://linkedin.com/in/johnsylvain']
  ]
}

const card = `${chalk.bold(me.name)} - ${me.title}

${me.links.map(([label, url]) => `${chalk.bold(`${label}:`)} ${url}`).join('\n')}

${chalk.bold('Card:')} npx johnsylvain`;

fs.writeFileSync(path.join(__dirname, 'bin/output'), boxen(card, { padding: 1, borderStyle: 'round' }))
