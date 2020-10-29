const Base = require("./base.model");
class Cat extends Base {
  findAll(){
    return this.query("SELECT * FROM cats", []);
  }
  create(catData){
    return this.query("INSERT INTO cats SET ?", [catData]);
  }
  update(values, conditions){
    return this.query("UPDATE cats SET ? WHERE ?", [values, conditions]);
  }
  delete(id){
    return this.query("DELETE FROM cats WHERE id = ?", [id]);
  }
}

// Export the database functions for the controller (catsController.js).
module.exports = Cat;
