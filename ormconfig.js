const path = __importDefault(require("path"));

console.log(`${path.default.join(__dirname,'dist','database', )}/database.sqlite ssss`)


module.exports =
{
    "type": "sqlite",
    "database":`dist/database/database.sqlite` ,
    "migrations": [
      "dist/database/migrations/*.js"
    ],
    "entities": [
      `${path.default.join(__dirname,'dist','models' )}/*.js`
    ],
    "cli": {
      "migrationsDir": "./dist/database/migrations"
    }
  }