/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i73f8qjum4vp1jy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6jfomfzb",
    "name": "consultant",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "1tocmku02cjjb17",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i73f8qjum4vp1jy")

  // remove
  collection.schema.removeField("6jfomfzb")

  return dao.saveCollection(collection)
})
