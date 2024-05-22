/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "i73f8qjum4vp1jy",
    "created": "2024-05-21 14:27:28.835Z",
    "updated": "2024-05-21 14:27:28.835Z",
    "name": "replyRatings",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mjuqaw6m",
        "name": "reply",
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
  const collection = dao.findCollectionByNameOrId("i73f8qjum4vp1jy");

  return dao.deleteCollection(collection);
})
