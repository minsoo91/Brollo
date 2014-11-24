window.TrelloClone.Collections.Cards = Backbone.Collection.extend({
	initialize: function (options) {
		this.list = options.list
	},

	url: function () {
		return this.list.url() + "/cards"
	},
	model: TrelloClone.Models.Card
});