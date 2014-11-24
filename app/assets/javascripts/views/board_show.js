window.TrelloClone.Views.BoardShow = Backbone.View.extend({
	className: "board-wrapper",

	events: {
		"click .list.new-list": "renderNewList",
		"click .remove-form": "removeNewList",
	},

	initialize: function () {
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.model.lists(), "sync add", this.render);
		
	},

	template: JST['boards/show'],

	render: function () {
		var content = this.template({ board: this.model });
		this.$el.html(content);
		this.renderListsIndex();

		return this; 
	},

	renderListsIndex: function () {
		var indexLists = new TrelloClone.Views.ListsIndex({
			board: this.model
		})
		this.$('.list-wrapper').html(indexLists.render().$el);
		return this;
	},

	renderNewList: function (event) {
		event.preventDefault();
		listNewView = new TrelloClone.Views.ListsForm({
			board: this.model
		})
		this.$('.list.new-list-container').html(listNewView.render().$el);
		$('#new-list-form input[type="text"]').focus();
	},

	removeNewList: function (event) {
		event.preventDefault();
		listNewView.remove();
		this.$('.list.new-list-container').empty();
		this.render();
	},


});