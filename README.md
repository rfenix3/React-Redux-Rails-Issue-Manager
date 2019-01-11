# React Redux Rails Issue Manager
A React Create and Read application for managing issues.

## Description and Purpose
This is a React application that manages issues records through tables and forms. The goal of the application is to build an Issue Management System to support one of ITIL Incident Management's main function: The Service Desk. 

The service desk is the single point of contact for customers to report IT-related incidents. As such, this application aims to help service desk support staffs to capture and track IT issues promptly, work collaboratively, encourage knowledge transfer, collect IT data trend, and support problem management requirements.

## Home Page
Home Page screen shot here...

## Characteristics of the Application
1. Uses the React front-end.
2. Uses Redux to manage states through store.
3. Uses Rails backend server and sqlite3 database to persist data.

## Table Schema
 Table schema here...

## Application Features
1. Displays sqlite database table records.
2. Ability to create new table records.

## Technology Used
* React
* Redux
* Ruby
* Rails
* ActiveRecord
* SQLite3

## Pre-requisite
* Integrated Development Environment (IDE) or Amazon Web Services (AWS) Cloud9

## Get Started
1. Clone repository
```
$ git clone https://github.com/rfenix3/React-Redux-Rails-Issue-Manager.git
```
2. Go into the server directory (Ruby Rails backend)
```
$ cd React-Redux-Rails-Issue-Manager
```
3. Install bundle
```
$ bundle install
```
4. Run database migration
```
$ bin/rails db:migrate RAILS_ENV=development
```
5. Seed database table
```
$ rake db:seed
```
6. Go into the client directory (React front-end)
```
$ cd client
```
7. Install the node package
```
$ npm install
```
8. Go back up to the server directory
```
$ cd ..
```
9. Run the application
```
$ rake start
```
10. This should open the application in a web browser. If not, open a web browser and type in the localhost on url window
```
http://localhost:3001
```

## Tip:
You can stop the application from your IDE or AWS terminal by pressing Ctrl+C.