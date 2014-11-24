window.TrelloClone.Collections.Boards = Backbone.Collection.extend({
	url: "/api/boards",
	model: TrelloClone.Models.Board,

	getOrFetch: function (id) {
		var board = TrelloClone.boards.get(id)
		if (!board) {
			board = new TrelloClone.Models.Board({ id: id });
			board.fetch({
				success: function () {
					TrelloClone.boards.add(board)
				}
			});
		}

		return board;
	}
});

TrelloClone.boards = new TrelloClone.Collections.Boards();
