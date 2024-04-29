/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vy5z413ummsybaa")

  collection.name = "student"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vy5z413ummsybaa")

  collection.name = "students"

  return dao.saveCollection(collection)
})
