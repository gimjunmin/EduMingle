/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ra5gogtrtkoa4xa",
    "created": "2024-05-21 14:33:58.344Z",
    "updated": "2024-05-21 14:33:58.344Z",
    "name": "consultantEssayComment",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zyu1ahpk",
        "name": "commentField",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "e8jlf6fl",
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
      },
      {
        "system": false,
        "id": "6pgkttye",
        "name": "student",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "ok1inmgdrn3a3ao",
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ra5gogtrtkoa4xa");

  return dao.deleteCollection(collection);
})
