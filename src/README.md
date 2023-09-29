
# JavaScript CRUD simple

In this repository, I will save what I learned requests to the mockAPI where I make the basic queries of any data storage system.

## API Reference

#### POST all items

```http
  POST /https://6509d04cf6553137159c10aa.mockapi.io/tabla
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `number` | **Required**. Your API key |
| `tipo` | `string` | **Required** |
| `valor` | `number` | **Required** |


#### Delete Item

```http
  DELETE /https://6509d04cf6553137159c10aa.mockapi.io/tabla/:id
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
