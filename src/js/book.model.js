var BookModel = Backbone.Model.extend({

	defaults: {
		name: "First"
	},

});

var BookCollection = Backbone.Collection.extend({

	model: BookModel,

});

