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
];
