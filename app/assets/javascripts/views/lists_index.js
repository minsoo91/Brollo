window.TrelloClone.Views.ListsIndex = Backbone.View.extend({
	template: JST['lists/index'],

	events: {
		"click .list.add-card": "renderNewCard",
		"click .card-remove-form": "removeNewCard"
	},

	initialize: function (options) {
		this.board = options.board
		this.listCollection = this.board.lists()
		for (var i=0; i < this.listCollection.length; i++) {
			this.listenTo(this.listCollection.models[i].cards(), "add", this.render)
		}
	},

	render: function () {
		var content = this.template({
			board: this.board
		})
		this.$el.html(content);
		return this;
	},

	renderNewCard: function (event) {
		event.preventDefault();
		var id = $(event.currentTarget).data('id')
		cardNewView = new TrelloClone.Views.CardsForm({
			list: this.board.lists().get(id)
		})
		$(".new-card-container[data-id=" + id + "]").html(cardNewView.render().$el);
		$("textarea").focus();
	},

	removeNewCard: function (event) {
		event.preventDefault();
		var id = $(event.currentTarget).data('id')
		cardNewView.remove();
		this.$(".new-card-container[data-id=" + id + "]").empty();
		this.render();
	},
});