import test from 'ava'
import nightmode from './'

test('throws error if navigator is not available', t => {
  t.plan(1)

  t.throws(nightmode(), "navigator is not defined")
})
