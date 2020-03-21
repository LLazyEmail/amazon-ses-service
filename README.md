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