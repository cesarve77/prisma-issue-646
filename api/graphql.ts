import { schema } from 'nexus'

schema.objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.foo()
    t.model.bar()
    t.model.text()
  },
})

schema.objectType({
  name: 'Foo',
  definition(t) {
    t.model.id()
    t.model.text()
  },
})

schema.objectType({
  name: 'Bar',
  definition(t) {
    t.model.id()
    t.model.text()
  },
})

schema.queryType({
  definition(t) {
    t.crud.users({pagination: true, filtering: true, ordering:true})
    t.crud.foos({pagination: true, filtering: true, ordering:true})
    t.crud.bars({pagination: true, filtering: true, ordering:true})
  }
})


schema.mutationType({
  definition(t) {
    t.crud.createOneUser()
    t.crud.createOneFoo()
    t.crud.createOneBar()
  }
})
