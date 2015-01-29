var BookStoreApp = new Backbone.Marionette.Application();

var BookStoreController	= Backbone.Marionette.Controller.extend({

	displayBooks: function()
	{
		console.log("I will display books...");
	},

});

var BookStoreRouter = Backbone.Marionette.AppRouter.extend({

	controller: BookStoreController,

	appRoutes: {
		"": "displayBooks",
	},

});


BookStoreApp.addInitializer(function()
{
	console.log("[begin] addInitializer method()");
	var controller = new BookStoreController({});
	var router = new BookStoreRouter({ controller: controller });
	console.log("[end] addInitializer method()");
});

BookStoreApp.on('start', function()
{
	if( Backbone.history ) {
		Backbone.history.start();
	}
	console.log("start");

	var m1 = new BookModel({ id: 1, name: 'first'});
	var m2 = new BookModel({ id: 2, name: 'second'});
	var m3 = new BookModel({ id: 3, name: 'third'});
	var collection = new BookCollection();
	collection.add(m1);
	collection.add(m2);
	collection.add(m3);
	console.log(collection);

	var view = new BookListView({ collection: collection });
	view.render();	
})

