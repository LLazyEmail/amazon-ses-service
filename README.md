# amazon-ses-service

## Starting this project

```
npm install
```

Create `.env` file:

```
AWS_REGION=[ REGION ]
ACCESS_KEY_ID=[ YOUR ACCESS_KEY_ID ]
SECRET_ACCESS_KEY= [YOUR SECRET_ACCESS_KEY ]
RETURN_PATH=[ example@com ]
SOURCE=[ example@com ]
```

Create file addresses.js in root of project like this:

```
module.exports = [
    'example@com'
]
```

```
POST request /template/get-template

body json 
{
	"name" : "MyTemplate1"
}
```

POST request

```
localhost:3000/email/send
and 
localhost:3000/email/send-templated
body json 
{
    addresses:[
        "example1@g.com",
        "example2@g.com"
    ]
}
```

GET requests 

```
localhost:3000/email/send-templated?addresses=["example@g.com"]
```

```
localhost:3000/email/send?addresses=["example@g.com"]
```