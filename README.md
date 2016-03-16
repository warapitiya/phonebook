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


Packages
-------------

#### Bower

 - angular - (1.5.0)
 - angular-animate
 - jquery
 - angular-ui-router
 - bootstrap
 - angular-bootstrap
 - lodash
 - font-awesome
 - angular-xeditable
 
#### NPM
 
  - ExpressJS
  - mongoose
  
  
Clarifications
-------------

#### Why use dataService factory($http) over $resource

 - Data Service factory is useful because we can write too many custom routes rather than $resource. Yes $resource supports custom endpoints but it's too much complicated to maintain in large systems.