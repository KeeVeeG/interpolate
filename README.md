## Installation
```sh
$ npm install --save interpolate-all
```

## Import
```javascript
import interpolate from "interpolate-all"
```

## Syntax
```javascript
interpolate(
  a: number | number[] | object,
  b: number | number[] | object,
  alpha: number,
  type: string = "linear"
): number | number[] | object
```

## Examples
```javascript
//Number and Number
interpolate(0, 10, 0.6) // 6
```
```javascript
//Array and Number
interpolate([0, 10], 100, 0.5) // [50, 55]
```
```javascript
//Array and Array
interpolate([0, 10], [10, -2], 0.5) // [5, 4]
```
```javascript
//Object and Number
interpolate({foo: 0, bar: 200}, 100, 0.5) // {foo: 50, bar: 150}
```
```javascript
//Object and Object
interpolate({foo: 0, baz: 33, bar: 200}, {foo: 100, bar: 300}, 0.5) // {foo: 50, baz: 33, bar: 250}
interpolate({foo: 0, bar: 200}, {foo: 100, baz: 33, bar: 300}, 0.5) // {foo: 50, bar: 250}
```

## Custom types
```javascript
interpolate(0,10,0.7,"easeInOutExpo") // 9.6875 
```
![image](https://user-images.githubusercontent.com/35378637/126375847-b018231f-c7ab-457e-bb63-a985565d992e.jpg)
