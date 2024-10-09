# rb-scoreboard-backend

<!--toc:start-->

- [rb-scoreboard-backend](#rb-scoreboard-backend)
  - [DB Setup](#db-setup)
    - [Prerequisites](#prerequisites)
    - [Starting the DB](#starting-the-db)
    - [Stopping the DB](#stopping-the-db)
  - [Usage](#usage)

<!--toc:end-->

Rb scoreboard v2 with kyseli

## DB Setup

### Prerequisites

- [Docker](https://docs.docker.com/get-started/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Starting the DB

Within this directory, run

`docker compose up`

Inspect the DB using [adminer](https://www.adminer.org/) on
`http://localhost:8080`.

Credentials:

```
user: postgres
password: example
```

### Stopping the DB

Run:

```shell
docker compose down
```

## Usage

1. Start the express server:

```shell
npm run dev
```

2. Create the `person` DB:

```shell
curl -X GET http://localhost:3000/db
```

3. Create people:

```shell
curl -X POST http://localhost:3000/person/create
```

4. Vitis the [adminer](https://www.adminer.org/) GUI on `http://localhost:8080`
   and verify that the `person` was created and populated with data.
