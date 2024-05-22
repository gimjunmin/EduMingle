/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ok1inmgdrn3a3ao")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d9sy2nur",
    "name": "myConsultants",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "1tocmku02cjjb17",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ok1inmgdrn3a3ao")

  // remove
  collection.schema.removeField("d9sy2nur")

  return dao.saveCollection(collection)
})
