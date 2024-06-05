// TS CODE
export {}

// interface接口类型

// 基础语法
interface Person {
  name: string
  age: number
}

let p: Person = {
  name: 'jack',
  age: 18,
}

// 表单数据收集场景说明
interface LoginForm {
  username: string
  password: string
}

let form: LoginForm = {
  username: 'jack',
  password: '123456',
}

// 渲染后端列表场景说明

interface Goods {
  id: string
  price: number
}

let list: Goods[] = [
  {
    id: '1001',
    price: 200,
  },
]

list.forEach((item) => console.log(item.price))

// 可选设置

interface Props {
  type: string
  size?: string
}

let props: Props = {
  type: 'success',
}

props = {
  type: 'success',
  size: 'large',
}

// 接口继承

// 父接口
interface GoodsType {
  id: string
  price: number
}

// 子接口继承
interface DisGoodsType extends GoodsType {
  disPrice: number
}

let goods: DisGoodsType = {
  id: '1001',
  price: 200,
  disPrice: 180,
}

// 思考题

interface Data {
  title: string
  content: string
  time: string
}

interface ResData {
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
