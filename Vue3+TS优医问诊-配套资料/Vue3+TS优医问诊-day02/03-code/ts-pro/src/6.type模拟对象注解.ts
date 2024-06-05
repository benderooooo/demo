// TS CODE
export {}

// type实现对象类型注解

type Person = {
  name: string
  age?: number
}

let p: Person = {
  name: 'jack',
  age: 18,
}

p = {
  name: 'jack',
}

// type模拟继承 (交叉类型&)

// 父接口
type GoodsType = {
  id: string
  price: number
}

// 子接口
type DisGoodsType = GoodsType & {
  disPrice: number
}

let goods: DisGoodsType = {
  id: '1001',
  price: 200,
  disPrice: 180,
}

console.log(goods.id)

// 同名interface
interface Item {
  name: string
}
interface Item {
  name: string
  age: number
}

let item: Item = {
  name: 'jack',
  age: 18,
}
console.log(item.age)

// 同名type

// 思考题

type Data = {
  title: string
  content: string
  time: string
}

type ResData = {
  code: number
  msg: string
  data: Data
}

let res: ResData = {
  code: 200,
  msg: '成功',
  data: {
    title: '文章标题',
    content: '文章内容',
    time: '2023-01-01',
  },
}

console.log(res.data.time)
