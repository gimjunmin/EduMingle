/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ok1inmgdrn3a3ao")

  collection.name = "student"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ok1inmgdrn3a3ao")

  collection.name = "Student"

  return dao.saveCollection(collection)
})
