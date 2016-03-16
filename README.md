# Phonebook
Phone book application

Build
-------------

#### Clone

```sh
git clone https://github.com/warapitiya/phonebook.git
```

#### Move and install
```sh
cd phonebook/
bower install & npm install
```

## Mongodb Database Setup

#### Database start (maybe in a new terminal window)
```sh
mongod --dbpath $YOUR_PATH_TO_DB
```

#### Import database
```sh
cd phonebook/
mongoimport -d Phonebook -c contacts database_backup/contacts.json
```

## Start
```sh
npm start
```