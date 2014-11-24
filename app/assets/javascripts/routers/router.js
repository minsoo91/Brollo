window.TrelloClone.Routers.Router = Backbone.Router.extend({
	initialize: function (options) {
		this.$rootEl = options.$rootEl;
	},

	routes: {
		"": "index",
		"boards/new": "new",
		"boards/:id":"show",
		"boards/:id/lists": "listnew"
	},

	index: function () {
		var indexView = new TrelloClone.Views.BoardsIndex({
			collection: TrelloClone.boards
		});

		TrelloClone.boards.fetch();
		this._swapView(indexView, 0);
	},

	new: function () {
		var newBoard = new TrelloClone.Models.Board();
		var formView = new TrelloClone.Views.BoardForm({
			collection: TrelloClone.boards,
			model: newBoard
		});

		TrelloClone.boards.fetch();
		
		this._swapView(formView, 0);
	},	

	show: function (id) {
		var that = this;
		var board = TrelloClone.boards.getOrFetch(id);
		board.fetch({
			success: function () {
				showView = new TrelloClone.Views.BoardShow({
					model: board
				})
				that._swapView(showView, 1);
			}
		});		
	},

	_swapView: function(view, token) {
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$rootEl.html(view.render().$el)
		if (token === 1) {
			this.$rootEl.css("background-color", "#0E74AF")
			this.$rootEl.css("color", "#f6f6f6")
			$('nav').css("background-color", "#0D639E");
		} else {
			this.$rootEl.css("background-color", "")
			this.$rootEl.css("color", "")
			$('nav').css("background-color", "#0E74AF");
		}
	}
});