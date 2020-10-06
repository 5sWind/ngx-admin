import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: '主页',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
    data: {
      permission: 'view',
      resource: 'home',
    },
  },
  {
    title: '部门管理',
    icon: 'people-outline',
    link: '/pages/department',
    data: {
      permission: 'view',
      resource: 'department',
    },
  },
  {
    title: '员工管理',
    icon: 'person-outline',
    link: '/pages/employee',
    data: {
      permission: 'view',
      resource: 'employee',
    },
  },
  {
    title: '书籍管理',
    icon: 'book-outline',
    link: '/pages/book',
    data: {
      permission: 'view',
      resource: 'book',
    },
  },
  {
    title: '读者管理',
    icon: 'smiling-face-outline',
    link: '/pages/reader',
    data: {
      permission: 'view',
      resource: 'reader',
    },
  },
  {
    title: '借阅管理',
    icon: 'book-open-outline',
    link: '/pages/lending',
    data: {
      permission: 'view',
      resource: 'lending',
    },
  },
  {
    title: '供应商管理',
    icon: 'car-outline',
    link: '/pages/vendor',
    data: {
      permission: 'view',
      resource: 'vendor',
    },
  },
  {
    title: '库存管理',
    icon: 'shopping-bag-outline',
    link: '/pages/warehouse',
    data: {
      permission: 'view',
      resource: 'warehouse',
    },
  },
  {
    title: '采购管理',
    icon: 'shopping-cart-outline',
    link: '/pages/procurement',
    data: {
      permission: 'view',
      resource: 'procurement',
    },
  },
  {
    title: '到货管理',
    icon: 'cube-outline',
    link: '/pages/arrival',
    data: {
      permission: 'view',
      resource: 'arrival',
    },
  },
  {
    title: '系统管理',
    icon: 'settings-2-outline',
    link: '/pages/system',
    data: {
      permission: 'view',
      resource: 'system',
    },
  },
  {
    title: '数据管理',
    icon: 'bar-chart-outline',
    link: '/pages/data',
    data: {
      permission: 'view',
      resource: 'data',
    },
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Layout',
    icon: 'layout-outline',
    children: [
      {
        title: 'Stepper',
        link: '/pages/layout/stepper',
      },
      {
        title: 'List',
        link: '/pages/layout/list',
      },
      {
        title: 'Infinite List',
        link: '/pages/layout/infinite-list',
      },
      {
        title: 'Accordion',
        link: '/pages/layout/accordion',
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/pages/layout/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/pages/forms/datepicker',
      },
    ],
  },
  {
    title: 'UI Features',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Modal & Overlays',
    icon: 'browser-outline',
    children: [
      {
        title: 'Dialog',
        link: '/pages/modal-overlays/dialog',
      },
      {
        title: 'Window',
        link: '/pages/modal-overlays/window',
      },
      {
        title: 'Popover',
        link: '/pages/modal-overlays/popover',
      },
      {
        title: 'Toastr',
        link: '/pages/modal-overlays/toastr',
      },
      {
        title: 'Tooltip',
        link: '/pages/modal-overlays/tooltip',
      },
    ],
  },
  {
    title: 'Extra Components',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Calendar',
        link: '/pages/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/pages/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/pages/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/pages/extra-components/alert',
      },
      {
        title: 'Calendar Kit',
        link: '/pages/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/pages/extra-components/chat',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'map-outline',
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'text-outline',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/pages/tables/tree-grid',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
