/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vy5z413ummsybaa")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mhaltfqi",
    "name": "c_profile",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jjxbgnls",
    "name": "delete_at",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vy5z413ummsybaa")

  // remove
  collection.schema.removeField("mhaltfqi")

  // remove
  collection.schema.removeField("jjxbgnls")

  return dao.saveCollection(collection)
})
