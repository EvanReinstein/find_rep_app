// This file allows us to provide our database with data

const db = require('./models');

let issue = [
  {
  issueName: 'Climate Change',
  learnMore: 'http://www.ipcc.ch/'
  },
  {
    issueName: 'Economy',
    learnMore: 'https://www.bea.gov/news/glance',
  },
  {
    issueName: 'National Security',
    learnMore: 'https://www.csis.org/'
  },
  {
    issueName: 'Education',
    learnMore: 'https://edtrust.org/'
  },
  {
    issueName: 'Foreign Policy',
    learnMore: 'https://www.brookings.edu/topic/international-affairs/'
  }
  {
    issueName: 'Healthcare',
    learnMore: 'https://www.vox.com/search?q=health+care&type=Feature'
  }
];

let saved_messages = [
  {
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    representative: 'Diane Feinstein',
    issue: 'Healthcare'
  },
  {
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    representative: 'Marco Rubio',
    issue: 'Economy'
  },
  {
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    representative: 'Jerry Brown',
    issue: 'Education'
  },
  {
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    representative: 'Barbara Lee',
    issue: 'Climate Change'
  },
  {
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    representative: 'Nancy Pelosi',
    issue: 'Foreign Policy'
  },
]
