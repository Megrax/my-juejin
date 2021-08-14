// 分类数据
export const categories = [
  { category_id: 0, category_name: '推荐',category_route: 'recommended' },
  {
    category_id: 1,
    category_name: '后端',
    category_route: 'backend',
    children: [
      { category_id: 11, category_name: 'Java', category_route: 'java' },
      { category_id: 12, category_name: 'Python', category_route: 'python' },
      { category_id: 13, category_name: 'Go', category_route: 'go' },
    ],
  },
  {
    category_id: 2,
    category_name: '前端',
    category_route: 'frontend',
    children: [
      { category_id: 21, category_name: 'JavaScript', category_route: 'javascript' },
      { category_id: 22, category_name: 'Vue.js', category_route: 'vue' },
      { category_id: 23, category_name: 'React.js', category_route: 'react' },
    ],
  },
  {
    category_id: 3,
    category_name: 'Android',
    category_route: 'android',
    children: [
      { category_id: 31, category_name: 'Flutter', category_route: 'flutter' },
      { category_id: 32, category_name: 'Java', category_route: 'java' },
      { category_id: 33, category_name: 'Kotlin', category_route: 'kotlin' },
    ],
  },
  {
    category_id: 4,
    category_name: 'iOS',
    category_route: 'ios',
    children: [
      { category_id: 41, category_name: 'Swift', category_route: 'swift' },
      { category_id: 42, category_name: 'Objective-C', category_route: 'objective-c' },
      { category_id: 43, category_name: 'Flutter', category_route: 'flutter' },
    ],
  },
];