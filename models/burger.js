const orm = require("../config/orm");

var burger = {
    //This is for printing all the burgers
    all: function(cb) {
        orm.all("burgers", function(res) {
            //return the results to the function that calls this
            cb(res);
        });
    },
    // This is for creating a new burgers
    create: function(newBurger, cb){
        orm.create("burgers", newBurger, function(res) {
            cb(res);
        });
    },
    // This is for updating the burgers eaten status
    // Could change this to update burger name
    update: function(isEaten, id, cb){
        orm.update("burgers", isEaten, id, function(res) {
            cb(res);
        });
    },
    // This is for deleting a burger
    delete: function(id, cb){
        orm.delete("burgers", id, function(res) {
            cb(res);
        });
    }
}

module.exports=burger;