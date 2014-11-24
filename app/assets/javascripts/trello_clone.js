window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	new TrelloClone.Routers.Router({
  		$rootEl: $('#main')
  	});
    
  	Backbone.history.start()
  }
};
