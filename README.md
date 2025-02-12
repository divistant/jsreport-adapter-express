### Set up the project

```
# 1. Install packages
npm install

# 2. Go edit the env
# ...

# 3. Migrate the db 
## (note: this project contains sample data; if you already have a db, no need to do this)
npm run migrate

# 4. For developers, it is recommended to install 
## `nodemon` for hot reload
## `npx` for running npm executables (e.g for prisma)
npm i -g nodemon npx
```

### Running the project

By default, the app is available on [localhost:3000](http://localhost:3000)

```
npm run dev
```
