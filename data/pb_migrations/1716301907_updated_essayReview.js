/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1tocmku02cjjb17")

  collection.name = "consultant"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1tocmku02cjjb17")

  collection.name = "essayReview"

  return dao.saveCollection(collection)
})
