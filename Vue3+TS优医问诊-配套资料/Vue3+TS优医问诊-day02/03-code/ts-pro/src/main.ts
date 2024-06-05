// TS CODE
export {}

// 综合案例

// 先主线逻辑 后细节

function updateData() {
  // 1. 获取最新列表 取到最后一项
  const list = getList()
  const lastItem = list[list.length - 1]
  // 2. 在上一条记录的基础上count + 1 配合当前时间添加到列表的尾部
  list.push({
    count: lastItem ? lastItem.count + 1 : 1,
    time: getFormatTime(),
  })
  // 3. 最新列表渲染到页面
  render(list)
  // 4. 最新列表存入本地
  setList(list)
}

type Item = {
  count: number
  time: string
}
const KEY = 'ts-key'
function getList(): Item[] {
  // TODO
  return JSON.parse(localStorage.getItem(KEY) || '[]')
}

// console.log(getList())

function setList(list: Item[]) {
  // TODO
  localStorage.setItem(KEY, JSON.stringify(list))
}
// setList([{ count: 1, time: '10:10:10' }])

function getFormatTime() {
  // TODO
  const _time = new Date()
  const h = _time.getHours()
  const m = _time.getMinutes()
  const s = _time.getSeconds()
  return `${h}:${m}:${s}`
}

// console.log(getFormatTime())
function render(list: Item[]) {
  // TODO
  // 1. 把list中每个对象格式化成字符串
  const strArr = list.map((item) => {
    return `刷新次数为:${item.count},刷新时间为:${item.time}`
  })
  // 2. 调用dom api渲染到页面中
  const app = document.getElementById('app') as HTMLDivElement
  app.innerHTML = strArr.join('<br>')
}

updateData()
