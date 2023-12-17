export function checkNumber(number: number): number {

    const parsedNumber = Number(number);
  
    if (isNaN(parsedNumber))
    {
      return 0
    }
    else {
      return parsedNumber
    }
  }