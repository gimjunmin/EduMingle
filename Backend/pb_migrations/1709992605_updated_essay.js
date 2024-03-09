/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q9nl51jrm3ra95a")

  // remove
  collection.schema.removeField("zfrpsfa3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "snq7giv4",
    "name": "creator",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xkt0rc4z",
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
  const collection = dao.findCollectionByNameOrId("q9nl51jrm3ra95a")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zfrpsfa3",
    "name": "creator",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "vy5z413ummsybaa",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("snq7giv4")

  // remove
  collection.schema.removeField("xkt0rc4z")

  return dao.saveCollection(collection)
})
