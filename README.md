# api-mef19
API to compare the data related to the 2019 Italian goverment budget proposal with the approved one.

This repo contains a custom API that exposes the Italian 2019 approved budget and compare it with the original governmeny budget proposal.

It connets to the knowledge base provided by https://data.budget.g0v.it/ and produce datamodel suitable to be visualized with the  
https://budget.g0v.it/ application.

The code is just a patch to [example API provided by the data-budget project](https://github.com/g0v-it/data-budget/tree/master/apis)

**Reference implementations:**

- **API endpoint**: https://data.budget.g0v.it/2019/ddl/ldp
- **Example of a data consumer**: https://budget.g0v.it/2019/ddl

## Quickstart


The API server is build with a [Docker](https://docker.com) setup that makes it easy 
to get a containerized development environment up and running. 
If you do not already have Docker on your computer, 
[it's the right time to install it](https://docs.docker.com/install/).

To run and test the api server using [docker Compose](https://docs.docker.com/compose/) type: 

```
docker-compose build
docker-compose up -d
```

This starts locally the following services:

| Name        | Description                                                   | Port 
| ----------- | ------------------------------------------------------------- | ------- 
| app         | a budget visualization instance                               | 80    
| api         | a server that manages api                                     | 8080 

Try http://localhost:8080/ to test api server
Try http://localhost/ visualize the data

The first time you start the containers, Docker downloads and builds images for you. It will take some time, but don't worry
this is done only once. Starting servers will then be lightning fast

To shudown the platform type: 

```
docker-compose down
```

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
