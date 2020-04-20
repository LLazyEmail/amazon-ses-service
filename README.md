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

---


### To send simple email (POST requests):

```
localhost:3000/email/send
```

JSON object should be like this(soon will be added this feature):

```
{

}
```

---

### To send templated email (POST requests):

```

localhost:3000/email/send-templated

```

JSON should be like this:

```
{
    "addresses":[
        "example1@g.com",
        "example2@g.com"
    ]
}
```

## Managing templates

---

### Create template (POST requests):

```
localhost:3000/template/create
```
JSON:

```
{
    "TemplateName": "MyTemplate" 
}
```
---

### Update template (PUT request): 

```
localhost:3000/template/update-template
```
JSON:

```
{
    "TemplateName": "MyTemplate"
}
```

---

### Get list of all templates (POST requests):

```
localhost:3000/template/get-list-templates
```
JSON:

```
{

}
```
---

### Get template by Name (POST requests):

```
localhost:3000/template/get-template

```
JSON:
```
{
	"TemplateName": "MyTemplate123"
}
```

---
### Delete template (DELETE request):

```
localhost:3000/template/delete
```
JSON:

```
{
	"TemplateName": "TEST_TEMPLATE1"
}
```
---

GET requests

```
localhost:3000/email/send-templated?addresses=["example@g.com"]
```

```
localhost:3000/email/send?addresses=["example@g.com"]
```


https://docs.google.com/spreadsheets/d/1ZV3nr6DLwHShrPIHtPll-UjZ-DCadcjsYy-UpDEXq5E/edit#gid=0
