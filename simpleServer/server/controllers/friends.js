console.log('friends controller');

var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below
function FriendsController(){


  this.index = function(req,res){
    console.log("******IN friendsControllers")

    Friend.find({}, function(err, results){
      res.json(results);
    })
  };
  this.create = function(req,res){
    //your code here
    var friend = new Friend(req.body)
    friend.save( function(err, result){
      if (err) {
        console.log(err);
      }
      else{
        res.json(result);
        }
    })
  }
  this.update = function(req,res){
    //your code here
    console.log("body", req.body)
    Friend.findOne({_id: req.body._id},
     function(err, friend){
     if(err){
       console.log(err);
     }else{
       friend.fname = req.body.fname;
       friend.lname = req.body.lname;
       friend.birthdate = req.body.birthdate;
       friend.save(function(err, updatedFriend){
         if (err){
           console.log(err);
         }else{
           res.json(updatedFriend);
         }
       })
     }
   })
  };
  this.delete = function(req,res){
    Friend.remove({_id: req.params.id}, function(err, friend){
      if (err) {
        console.log(err);
      }else{
        res.json({message: "Friend deleted"});
      }
    })
  };
  this.show = function(req,res){
    console.log("In friend js show")
    Friend.findOne({_id: req.params.id}, function(err, friend){
      if (err) {
        console.log(err);
      }else{
        console.log("&&&333 --- Json")
        console.log(friend)
        res.json(friend);
      }
    })
    //your code here
  }
//Close of FriendsController function
}
module.exports = new FriendsController(); // what does this export?