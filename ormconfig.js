const path = __importDefault(require("path"));

console.log(`${path.default.join(__dirname,'dist','database', 'database.sqlite')}`)

module.exports =
{
    "type": "sqlite",
    "database":`${path.default.join(__dirname,'dist','database', 'database.sqlite')}` ,
    "migrations": [
      "dist/database/migrations/*.js"
    ],
    "entities": [
      "dist/models/*.js"
    ],
    "cli": {
      "migrationsDir": "./dist/database/migrations"
    }
  }