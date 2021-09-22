## Water My Plants API Reference Sheet

### API URL `https://water-my-plants-bw3.herokuapp.com/api`

#### Create New User

```
POST /users/register
```
*Response includes newly created user object*

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required** **Unique**. User username |
| `password` | `string` | **Required**. User password |
| `phoneNumber` | `integer` | **Optional**. User phone number |

---------------------------------------------------------

#### User Login

```
POST /users/login
```
*Response includes user object. Authorization token in headers object*

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. User username |
| `password` | `string` | **Required**. User password |

Everyone has been given a default login. Your login info is:
username: your first name (garrett)
password: password
phoneNumber: 1234567890

---------------------------------------------------------


#### Get All Plants (**Authorization Required!**)

```
GET /plants/
```

*Returns list of all plants as objects.*

Each object follows the pattern below:
```
{
  plant_id: 1,
  nickname: "cactus",
  species: "cactus maractus",
  h2oFrequency: 1,
  image: 'image url'
}
```

---------------------------------------------------------

#### Add a Plant (**Authorization Required!**)

```
POST /plants/
```

*Response includes newly added item*

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `nickname` | `string` | **Required** |
| `species` | `string` | **Required** |
| `h2oFrequency` | `integer` | **Required** |
| `image` | `string` | **Optional** |

---------------------------------------------------------

#### Get Plant by ID (**Authorization Required!**)

```
GET /plants/:plant_id
```

*Returns single plant object*

---------------------------------------------------------

#### Edit Plant (**Authorization Required!**)
```
PUT /plants/:plant_id
```

*Response includes edited plant*

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `nickname` | `string` | Optional |
| `species` | `string` | Optional|
| `h2oFrequency` | `integer` | Optional|
| `image` | `string` | Optional|

---------------------------------------------------------

#### Delete Plant (**Authorization Required!**)

```
DELETE /plants/:plant_id
```

*Response includes deleted plant*

---------------------------------------------------------
