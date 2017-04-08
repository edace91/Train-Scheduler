# Train-Scheduler
A train schedule application that incorporates Firebase to store arrival and departure data.

## Synopsis

This app will retrieve and manipulate departure data with Moment.js. The website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.

## Project Structure

When adding trains, users submit the following:

Train Name
Destination
First Train Time -- in military time
Frequency -- in minutes

The app calculates when the next train will arrive, relative to the current time.
Users from many different machines are able to view same train times.

## Motivation

Create a application that links to a database that multiple people can use. 

https://peaceful-savannah-63677.herokuapp.com
