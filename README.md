# Delivery Much Tech Challenge

This project was developed in order to solve the proposed problem Delivery Much Tech Challenge.</br>
The project goal is develop an API which receives a set of ingredients and returns a list
of recipes.
Two publics APIs was used in this problem:
- [RecipePuppy]
- [Giphy]

# Requisites
- [Node.js]
- [Docker]


# Running
## Giphy API
- Navigate to `https://developers.giphy.com/docs/sdk`.
- Click on `Create an App` button to get a key.
- Create an account if you haven't and then copy the key.

## Project
- Clone the repository using:
```
	git clone https://github.com/SamuelLFA/challenge
```
- Open `.env` file on the root of the project. Insert the key at `GIPHY_API_KEY`.
- Install all dependecies using:
```
	npm install
```

## Tests
- To run the tests, execute in terminal of the project root:
```
	npm test
```

## Development
- To run the development environment, execute in terminal of the project root:
```
	npm run dev
```
### endpoint: http://{HOST}/recipes/?i={ingredient_1},{ingredient_2}
### example: localhost:3333/recipes?i=hot sauce,onions,garlic

## Docker
- To create the Docker image, you can run:
```
	docker build -t challenge .
```
- After the build you can run the container image with the command:
```
	docker run -dp 3333:3333 challenge
```
### endpoint: http://{HOST}/recipes/?i={ingredient_1},{ingredient_2}
### example: localhost:3333/recipes?i=hot sauce,onions,garlic

## Reponse example

```
{
    "keywords": [
        "hot sauce",
        "onions",
        "garlic"
    ],
    "recipes": [
        {
            "title": "Roasted Garlic Grilling Sauce \r\n\t\t\r\n\t\r\n\t\t\r\n\t\r\n\t\t\r\n\t\r\n\t\r\n\r\n",
            "ingredients": "garlic, onions, hot sauce",
            "link": "http://www.kraftfoods.com/kf/recipes/roasted-garlic-grilling-sauce-56344.aspx",
            "gif": "https://media4.giphy.com/media/Q4PcMC8apFXBm/giphy.gif?cid=889d04596800psalzcue87xr9z4415300b25h7kq7vjaitc9&rid=giphy.gif"
        },
        {
            "title": "Steak House Grilled Sirloin \r\n\t\t\n",
            "ingredients": "garlic, onions, hot sauce, beef",
            "link": "http://www.kraftfoods.com/kf/recipes/steak-house-grilled-sirloin-56345.aspx",
            "gif": "https://media0.giphy.com/media/rH0Rvox4pCpTG/giphy.gif?cid=889d0459z4nd1rbknz9h0qykazcl55j90u9ciezr9es3qcjj&rid=giphy.gif"
        },
        {
            "title": "Steak House Grilled Sirloin \r\n\t\t\n",
            "ingredients": "garlic, onions, hot sauce, beef",
            "link": "http://www.kraftfoods.com/kf/recipes/steak-house-grilled-sirloin-56345.aspx?cm_re=1-_-1-_-RecipeAlsoEnjoy",
            "gif": "https://media0.giphy.com/media/rH0Rvox4pCpTG/giphy.gif?cid=889d0459z4nd1rbknz9h0qykazcl55j90u9ciezr9es3qcjj&rid=giphy.gif"
        },
        {
            "title": "Stuffed Dill Pickles",
            "ingredients": "cream cheese, dill pickle, garlic, onions, hot sauce",
            "link": "http://www.recipezaar.com/Stuffed-Dill-Pickles-100688",
            "gif": "https://media2.giphy.com/media/2nTWV9aDiJbFe/giphy.gif?cid=889d04592scweadgq01ln8uz3nw0w41a99e9f9521qhdenc1&rid=giphy.gif"
        }
    ]
}
```

# Collection
## Import the [Collection] (https://www.getpostman.com/collections/dbb153f9524ce0fb5e7d) from [Postman] to make an example request to API.

# Contact
samuellfa3@gmail.com

### Thank you and best regards 👨‍💻
[Docker]: <https://docs.docker.com/desktop/>
[Node.js]: <https://nodejs.org/en/>
[Postman]: <https://www.postman.com/>
[RecipePuppy]: <http://www.recipepuppy.com/about/api/>
[Giphy]: <https://developers.giphy.com/docs/>
[Collection]: <https://www.getpostman.com/collections/dbb153f9524ce0fb5e7d>