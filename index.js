import { OP_EXPRESSION, OP_GROUP, OP_PIPELINE, OP_PROJECTION, OP_QUERY } from './lib/constants'
import { _internal, setup } from './lib/internal'
import { Query, find, remove } from './lib/query'
import { Aggregator, aggregate } from './lib/aggregator'
import { CollectionMixin } from './lib/mixin'
import { Cursor } from './lib/cursor'
import { addOperators } from './lib/operators/index'

const VERSION = '2.0.1'

// mingo!
export default {
  _internal,
  Aggregator,
  CollectionMixin,
  Cursor,
  OP_EXPRESSION,
  OP_GROUP,
  OP_PIPELINE,
  OP_PROJECTION,
  OP_QUERY,
  Query,
  VERSION,
  addOperators,
  aggregate,
  find,
  remove,
  setup
}
