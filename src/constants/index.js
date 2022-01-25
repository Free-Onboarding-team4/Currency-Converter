export const SELECT_CURRENCY = ['KRW', 'JPY', 'PHP'];
export const TAB_CURRENCY = ['USD', 'KRW', 'JPY', 'PHP', 'CAD', 'HKD', 'CNY'];

export const API_ENDPOINT = (currencies) =>
  `http://api.currencylayer.com/live?access_key=866734413fd906b3ca4b9709a36b47d9&currencies=${currencies}&format=1`;

export const COLOR = {
  MAIN: '#FFDFDE',
  BACKGROUND: '#6a7ba2',
  FONT: '#000',
};

export const BORDER = {
  SHORTCUT: '3px solid #000',
};

export const ConDate = [
  {
    id: 0,
    label: '한국(KRW)',
  },
  {
    id: 1,
    label: '일본(JPY)',
  },
  {
    id: 2,
    label: '필리핀(PHP)',
  },
];

export const Country = [
  {
    id: 0,
    label: 'KRW',
  },
  {
    id: 1,
    label: 'JPY',
  },
  {
    id: 2,
    label: 'PHP',
  },
];
