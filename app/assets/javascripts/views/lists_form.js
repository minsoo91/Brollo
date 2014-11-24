window.TrelloClone.Views.ListsForm = Backbone.View.extend({
	events: {
		"submit form": "submit"
	},

	template: JST['lists/form'],

	initialize: function (options) {
		this.board = options.board
	},

	render: function () {
		var content = this.template({
			board: this.board
		});
		this.$el.html(content);

		return this;
	},

	submit: function (event) {
		event.preventDefault();

		var params = $(event.currentTarget).serializeJSON()["list"];
		var list = new TrelloClone.Models.List(params);
		var that = this;
		list.save({}, {
			success: function () { that.board.lists().add(list) }
		})
	}
});