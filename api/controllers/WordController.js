/**
 * WordController
 *
 * @description :: Server-side logic for managing Words
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  search: function (req, res) {
   //  	Word.find({ class: { 'contains': 'test' }})
			// .done(function(err, word) {
			// 		console.log(word);
	  //   });
		Word.find({word: { 'contains': req.param('text') }}).then(
					console.log(res)
			  //res.send(res)
		);
		// .exec(function findCB(err, found){
		// 	  while (found.length)
		// 	    console.log('Found User with name ' + found.pop().word)
		// 	});
  	},
 	hi: function (req, res) {
 		console.log(req.param('text'));
    return res.send("Hi there!");
  },
  bye: function (req, res) {
    return res.redirect("http://www.sayonara.com");
  }

	
};

