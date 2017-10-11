## fake API

### server
```
npm install
npm run server
```

### client(access from anywhere)
```
http://127.0.0.1:5500/client/index.html
```

### API
```

GET http://127.0.0.1:7777/item
GET http://127.0.0.1:7777/item/1
GET http://127.0.0.1:7777/item/?name=Rifle


POST http://127.0.0.1:7777/item
    {
        "name"  : "ABCD",
        "price" : 1234
    }


PUT http://127.0.0.1:7777/item/2
    {
        "name"  : "FIX_Shotgun"
    }


DELETE http://127.0.0.1:7777/item/3
```

> requirements
> * json-server