import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Grid View',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Tree View',
        link: '/pages/tables/tree-grid',
      },
    ],
  },
];
