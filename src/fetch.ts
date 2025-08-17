const data =  [
  { value: `password`, label: `密码输入框`, initialValue: '123456' },
  { value: `money`, label: `金额输入`, initialValue: '123456' },
  { value: `textarea`, label: `文本域`, initialValue: '123456\n121212' },
  { value: `date`, label: `日期`, initialValue: Date.now() },
  { value: `dateTime`, label: `日期时间`, initialValue: Date.now() },
  { value: `dateWeek`, label: `周`, initialValue: Date.now() },
  { value: `dateMonth`, label: `月`, initialValue: Date.now() },
  { value: `dateQuarter`, label: `季度输入`, initialValue: Date.now() },
  { value: `dateYear`, label: `年份输入`, initialValue: Date.now() },
  {
    value: `dateRange`,
    label: `日期区间`,
    initialValue: [Date.now(), Date.now()],
  },
  {
    value: `dateTimeRange`,
    label: `日期时间区间`,
    initialValue: [Date.now(), Date.now()],
  },
  { value: `time`, label: `时间`, initialValue: Date.now() },
  {
    value: `timeRange`,
    label: `时间区间`,
    initialValue: [Date.now(), Date.now()],
  },
  { value: `text`, label: `文本框`, initialValue: '123456' },
  { value: `select`, label: `下拉框`, initialValue: 'open' },
  {
    value: 'treeSelect',
    label: '树形下拉框',
    initialValue: ['0-0', '0-0-0'],
  },
  { value: `checkbox`, label: `多选框`, initialValue: 'open' },
  {
    value: `avatar`,
    label: `头像`,
    initialValue:
      'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  },
  { value: `fromNow`, label: `相对于当前时间`, initialValue: Date.now() },
  {
    value: `image`,
    label: `图片`,
    initialValue:
      'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  },
  {
    value: `jsonCode`,
    label: `JSON代码框`,
    initialValue: '{ "name":"qixian" }',
  },
  {
    value: `color`,
    label: `颜色选择器`,
    initialValue: '#1890ff',
  },
  {
    value: 'segmented',
    label: '分段控制器',
    initialValue: 'open',
  },
  {
    value: 'formList',
    label: '表单列表',
    initalValue: [{ state: 'all', title: '标题' }],
  },
  {
    value: 'formSet',
    label: '表单集合',
    initalValue: [{ state: 'all', title: '标题' }],
  },
  {
    value: 'divider',
    label: '分割线',
    initalValue: '',
  },
];
export default async function (){
  return new Promise((reso)=>{
    setTimeout(() => {
      reso(data);
    }, 500);
  })
}