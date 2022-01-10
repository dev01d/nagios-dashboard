# Nagios Dashboard

An easy to read Nagios dashboard.

![image](images/screen-shot1.png)

## Run

#### Docker

There is a docker compose file in the [docker](../docker/docker-compose.yml) directory. Add env variables there or add them to a `.env` file.

#### Node

Rename [example.env.local](../example.env.local) to `.env.local`, change the values, and then run `yarn build && yarn start`

##### Dev

Next.js automatically ingests [.env and .env.local](https://nextjs.org/docs/basic-features/environment-variables) files. Rename [example.env.local](../example.env.local), change the values, and then run `yarn dev`.
