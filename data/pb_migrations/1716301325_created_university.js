/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "h522qjhrw5oof8u",
    "created": "2024-05-21 14:22:05.642Z",
    "updated": "2024-05-21 14:22:05.642Z",
    "name": "university",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ftjvm2gu",
        "name": "image",
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
      },
      {
        "system": false,
        "id": "ceu1hxun",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("h522qjhrw5oof8u");

  return dao.deleteCollection(collection);
})
