import easingsFunctions from "./easingsFunctions.js";

function interpolate(
  a: number | number[] | object,
  b: number | number[] | object,
  alpha: number,
  type: string = "linear"
): number | number[] | object {
  // @ts-ignore
  const interpolate = (start = a, end = b) => (1 - easingsFunction(alpha)) * start + easingsFunction(alpha) * end
  const easingsFunction = easingsFunctions[type]

  if(easingsFunction === undefined)
    throw new Error('Argument "type" is invalid')

  else if (typeof alpha !== 'number' || alpha < 0 || alpha > 1)
    throw new Error('Argument "alpha" must been a Number between 0 to 1')

  else if (typeof a === 'number' && typeof b === 'number')
    return interpolate()

  else if (Array.isArray(a) && typeof b === 'number')
    return a.map(e => typeof e === 'number' ? interpolate(e, b) : e)

  else if (Array.isArray(a) && Array.isArray(b))
    return a.map((e, i) => typeof e === 'number' && typeof b[i] === 'number' ? interpolate(e, b[i]) : e)

  else if (typeof a === 'object' && typeof b === 'number')
    return Object.fromEntries(Object.entries(a).map(e => typeof e[1] === 'number' ? [e[0], interpolate(e[1], b)] : e))

  else if (typeof a === 'object' && typeof b === 'object')
    // @ts-ignore
    return Object.fromEntries(Object.entries(a).map(e => typeof e[1] === 'number' && typeof b[e[0]] === 'number' ? [e[0], interpolate(e[1], b[e[0]])] : e))

  else
    throw new Error('Invalid arguments')
}

export default interpolate;