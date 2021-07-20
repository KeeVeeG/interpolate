import interpolate from './lib/index.js'
import assert from 'assert'

describe('Interpolate tests', () => {
  it('Number and Number', () => {
    assert.strictEqual(interpolate(0, 10, 0.6), 6)
  })
  it('Array and Number', () => {
    assert.deepStrictEqual(interpolate([0, 10], 100, 0.5), [50, 55])
  })
  it('Array and Array', () => {
    assert.deepStrictEqual(interpolate([0, 10], [10, -2], 0.5), [5, 4])
  })
  it('Object and Number', () => {
    assert.deepStrictEqual(interpolate({
      foo: 0,
      bar: 200
    }, 100, 0.5), {
      foo: 50,
      bar: 150
    })
  })
  it('Object and Object', () => {
      assert.deepStrictEqual(interpolate({
        foo: 0,
        baz: 33,
        bar: 200
      }, {
        foo: 100,
        bar: 300
      }, 0.5), {
        foo: 50,
        baz: 33,
        bar: 250
      })
      assert.deepStrictEqual(interpolate({
        foo: 0,
        bar: 200
      }, {
        foo: 100,
        baz: 33,
        bar: 300
      }, 0.5), {
        foo: 50,
        bar: 250
      })
    }),
    it('Custom type', () => {
      assert.strictEqual(interpolate(0,10,0.7,"easeInOutExpo"),9.6875)
    })
    it('Invalid arguments throw', () => {
      assert.throws(() => interpolate("123", 123, 0.5))
      assert.throws(() => interpolate(123, null, 1))
      assert.throws(() => interpolate(123, 123, 2))
    }),
    it('Invalid custom type throw', () => {
      assert.throws(() => interpolate(0,10,0.7,"some"))
    })
})