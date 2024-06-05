// TS CODE
export {}

// 综合案例

// 时间处理函数

function formatTime(): string {
  const _date = new Date()
  const h = _date.getHours()
  const m = _date.getMinutes()
  const s = _date.getSeconds()
  return `${h}:${m}:${s}`
}

console.log(formatTime())

// 基于ls封装存取函数

type DataItem = {
  count: number
  time: string
}
const KEY = 'ts-key'
function setData(data: DataItem[]) {
  localStorage.setItem(KEY, JSON.stringify(data))
}

function getData(): DataItem[] {
  return JSON.parse(localStorage.getItem(KEY) || '[]')
}

// setData([{ count: 1, time: '10:10:10' }])
// console.log(getData())

// 核心业务处理函数

function updateData() {
  // 1. 获取当前的列表
  const list = getData()
  // 2. 取到上一条记录
  const lastItem = list[list.length - 1]
  // 3. 基于上一条记录count自增，然后把新数据添加到列表末尾
  list.push({
    count: lastItem ? lastItem.count + 1 : 1,
    time: formatTime(),
  })
  // 4. 把最新的列表存入本地
  setData(list)
}

updateData()
