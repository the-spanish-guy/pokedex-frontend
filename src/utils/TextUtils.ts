export const formatNumber = (number: number): number | string => {
  console.log(number)
  const n = number.toString().length

  const cases: Record<number, string> = {
    1: `00${number}`,
    2: `0${number}`
  }

  return cases[n] || number
}
