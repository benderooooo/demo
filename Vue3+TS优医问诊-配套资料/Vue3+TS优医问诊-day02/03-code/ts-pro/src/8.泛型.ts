// TS CODE
export {}

// 泛型

// interface User {
//   name: string
//   age: number
// }

// interface UserData {
//   code: number
//   msg: string
//   data: User
// }

// interface Goods {
//   id: number
//   goodsName: string
// }

// interface GoodsData {
//   code: number
//   msg: string
//   data: Goods
// }

// // 泛型改造

// // 1. 定义泛型 把可变的部分抽象成泛型参数T
// interface ResData<T> {
//   code: number
//   msg: string
//   data: T
// }

// // 2. 定义具体类型 然后使用泛型的时候传入到参数的位置

// interface User {
//   name: string
//   age: number
// }

// interface Goods {
//   id: number
//   goodsName: string
// }

// let user: ResData<User> = {
//   code: 200,
//   msg: 'success',
//   data: {
//     name: 'jack',
//     age: 18,
//   },
// }
// let goods: ResData<Goods> = {
//   code: 200,
//   msg: 'success',
//   data: {
//     id: 1001,
//     goodsName: '衬衫',
//   },
// }

// 泛型别名

// 1. 定义泛型 把可变的部分抽象成泛型参数T
type ResData<T> = {
  code: number
  msg: string
  data: T
}

// 2. 定义具体类型 然后使用泛型的时候传入到参数的位置

type User = {
  name: string
  age: number
}

type Goods = {
  id: number
  goodsName: string
}

let user: ResData<User> = {
  code: 200,
  msg: 'success',
  data: {
    name: 'jack',
    age: 18,
  },
}
let goods: ResData<Goods> = {
  code: 200,
  msg: 'success',
  data: {
    id: 1001,
    goodsName: '衬衫',
  },
}

// 泛型函数

function createArray<T>(length: number, value: T) {
  let result = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}

createArray<number>(4, 100)
createArray<string>(4, '100')

// 泛型约束

function logLength<T>(obj: T) {
  console.log(obj.length)
}

interface lengthObj {
  length: number
}
function logLength1<T extends lengthObj>(obj: T) {
  console.log(obj.length)
}

logLength1({ length: 8 })
logLength1(['1'])
logLength1(100)
