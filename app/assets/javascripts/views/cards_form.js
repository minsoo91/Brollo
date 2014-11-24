window.TrelloClone.Views.CardsForm = Backbone.View.extend({
	events: {
		"submit form": "submit",
		"keypress": "keyAction"
	},

	template: JST['cards/form'],

	initialize: function (options) {
		this.list = options.list;
	},

	keyAction: function (e) {
		var code = e.keyCode
		if (code == 13) {
			this.submit(e);
		}
	},

	render: function () {
		var content = this.template({
			list: this.list
		});

		this.$el.html(content);

		return this;
	},
	
	submit: function (event) {
		event.preventDefault();

		var params = this.$('form').serializeJSON()["card"];
		var card = new TrelloClone.Models.Card(params);
		var that = this;
		card.save({}, {
			success: function () { 
				TrelloClone.boards.get(that.list.get('board_id')).fetch({
					success: function () {
						that.list.cards().add(card) 
					}
				});
			}
		})
	}
});