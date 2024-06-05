// TS CODE
export {}

// 联合类型

let arr1: (string | number)[] = ['jack', 100]

let arr2: string | number[]

// 类型别名

type ItemType = (string | number)[]

let arr3: ItemType
let arr4: ItemType

arr3 = ['jack', 100]
arr4 = ['jack', 100]
