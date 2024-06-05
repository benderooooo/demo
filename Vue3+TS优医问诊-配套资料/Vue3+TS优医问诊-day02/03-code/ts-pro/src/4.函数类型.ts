// TS CODE
export {}

// 函数类型注解

// 函数声明
function add(a: number, b: number): number {
  return a + b
}

add(1, 2)

let res: number
res = add(1, 2)
// 函数表达式

// 分开注解
const add2 = (a: number, b: number): number => {
  return a + b
}
add2(3, 4)

// 整体注解(库文件)
type AddFn = (a: number, b: number) => number
const add3: AddFn = (a, b) => {
  return a + b
}
add3(5, 6)

// 可选参数
function buildName(firstName: string, lastName?: string): string {
  if (lastName) {
    return `${firstName}${lastName}`
  } else {
    return firstName
  }
}

console.log(buildName('a'))
console.log(buildName('a', 'b'))

// 无返回值
function eachArr(arr: number[]): void {
  arr.forEach((item) => console.log(item))
}

const result1 = eachArr([1, 2, 3])

// 思考题

function arr2Str(arr: (number | string)[], split: string): string {
  // join
  return arr.join(split)
}

console.log(arr2Str([1, 2, 3], '-'))
console.log(arr2Str(['4', '5'], '&'))
