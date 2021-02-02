# Learning notes MongoDB and Node.js

29-Jan-2021

1. The following command initializes package.json file:
```
npm init
```
2. saves locally the necessary mongodb modules into node_modules folder (this also created package-lock.json)
```
npm install mongodb --save
```
3. Depending on the shell the following command in CLI starts MongoDB
```
mongo
mongo.exe
```
4. Shor available databases:
```
show dbs;
```
5. Exit mongo CLI:
```
exit
```
6. Choose a specified database for further operations:
```
use <name>
```
7. Show the sets of data (collections or tables) inside the current db:
```
show collections;
``` 
8. Mongo works like a JS shell

```javascript
let doc = {'title': 'Tacos marinaros', 'cooking-time': 20};
db.<collection-name>.insertOne(doc); // inserts the entry (document)
db.<collection-name>.find(); // displays all the entries in the collection
db.<collection-name>.find().pretty(); // prettifies the output

// display entries that have 'taco' in the title property
db.<collection-name>.find({'title' : {$regex: /taco/i}});

// display only title properties for all entries that have title
db.<collection-name>.find({}, {'title': 1});
// display all entries and all properties except for title
db.<collection-name>.find({}, {'title': 0});
```
9. Find out which database is in use currently:
```
db.getName();
```
10. Removes a collection from the database or the whole database:
```javascript
db.collection.drop();
db.dropDatabase();
```


