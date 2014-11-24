window.TrelloClone.Views.ListIndexItem = Backbone.View.extend({
	template: JST['lists/show'],

	initialize: function (options) {
		this.board = options.board
	},

	render: function () {
		var content = this.template({
			board: this.board
		})
		this.$el.html(content);

		return this;
	}
});