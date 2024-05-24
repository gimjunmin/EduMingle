/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1tocmku02cjjb17")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rozv8ayt",
    "name": "essayReviewRequests",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "net1rrby6f6919v",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1tocmku02cjjb17")

  // remove
  collection.schema.removeField("rozv8ayt")

  return dao.saveCollection(collection)
})
