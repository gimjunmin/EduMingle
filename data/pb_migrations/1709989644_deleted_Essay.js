/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("rc0orv32ls0japg");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "rc0orv32ls0japg",
    "created": "2024-03-07 16:50:05.593Z",
    "updated": "2024-03-07 16:50:05.593Z",
    "name": "Essay",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "e9m8dgq1",
        "name": "Student",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
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
})
