import { v4 as uuidv4 } from 'uuid';

export const extensionData = [
  {
    id: uuidv4(),
    browserName: 'Chrome',
    imgSrc: 'assets/icons/logo-chrome.svg',
    version: 62,
    address: 'https://chromewebstore.google.com/?hl=pl',
  },
  {
    id: uuidv4(),
    browserName: 'Firefox',
    imgSrc: 'assets/icons/logo-firefox.svg',
    version: 55,
    address: 'https://addons.mozilla.org/pl/firefox/extensions/',
  },
  {
    id: uuidv4(),
    browserName: 'Opera',
    imgSrc: 'assets/icons/logo-opera.svg',
    version: 45,
    address: 'https://addons.opera.com/en/extensions/',
  },
];
