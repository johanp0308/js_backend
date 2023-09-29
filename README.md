
# JavaScript CRUD simple

In this repository, I will save what I learned requests to the mockAPI where I make the basic queries of any data storage system.

## API Reference

#### GET all items

**Method** : `GET`

**URL** : `http://localhost:5500/registros`

**Storage** : `src/modules/`

**Module** : `update` 

**Querys** : `(tabla)`

**Autho Required** : `false`

```javascript
{
  "records":[
    {
      "id": "2",
      "cash":"egreso",
      "value":20000
    },
    ...
  ]
}
```




#### POST items

**Method**: `POST`

**URL** : `http://localhost:5500/registros`

**Storage** : `src/modules/`

**Module** : `createData` 

**Querys** : `(data)`

**Auth Required** : `False`

```javascript
//Enviado
  data = {
      cash: "egreso",
      value: "20000"
  }
```

#### Delete Item

```http
  DELETE http://localhost:5500/registros/:id1
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### PUT

```http
  PUT /https://6509d04cf6553137159c10aa.mockapi.io/tabla/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `number` | **Required**. Your API key |
| `tipo` | `string` | **Required** |
| `valor` | `number` | **Required** |

## Author

- [@johanp0308](https://github.com/johanp0308)
