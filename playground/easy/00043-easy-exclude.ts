/*
  43 - Exclude
  -------
  by Zheeeng (@zheeeng) #easy #built-in #union

  ### Question

  Implement the built-in `Exclude<T, U>`

  > Exclude from `T` those types that are assignable to `U`

  For example:

  ```ts
  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
  ```

  > View on GitHub: https://tsch.js.org/43
*/

/* _____________ Your Code Here _____________ */

/*
  https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#distributive-conditional-types
  运用到了 T extends U ? X : Y的语法：
  如果T为一个union，则T类型中的每一个实例都会被拿来判断是否可被赋值为U，是则类型为X，否则为Y。之后每个实例计算得到的类型再被重新union得到最终的类型
  如本题中第一个case，最终结果为 never | 'b' | 'c' => 'b' | 'c'
*/

type MyExclude<T, U> = T extends U ? never : T

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/43/answer
  > View solutions: https://tsch.js.org/43/solutions
  > More Challenges: https://tsch.js.org
*/
