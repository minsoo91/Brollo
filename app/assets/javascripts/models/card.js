window.TrelloClone.Models.Card = Backbone.Model.extend({
	intialize: function (options) {
		this.list = options.list
	},

	urlRoot: "api/cards"
});