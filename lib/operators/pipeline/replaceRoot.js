import { assert, isObject, map } from '../../util'
import { computeValue } from '../../internal'

/**
 * Replaces a document with the specified embedded document or new one.
 * The replacement document can be any valid expression that resolves to a document.
 *
 * https://docs.mongodb.com/manual/reference/operator/aggregation/replaceRoot/
 *
 * @param  {Array} collection
 * @param  {Object} expr
 * @return {*}
 */
export function $replaceRoot (collection, expr) {
  return map(collection, (obj) => {
    obj = computeValue(obj, expr.newRoot)
    assert(isObject(obj), '$replaceRoot expression must return an object')
    return obj
  })
}