window.TrelloClone.Views.BoardForm = Backbone.View.extend({
	events: {
		"submit form": "submit"
	},

	template: JST['boards/form'],

	render: function () {
		var content = this.template({ post: this.model})
		this.$el.html(content)

		return this;
	},

	submit: function (event) {
		event.preventDefault();
		var attrs = $(event.target).serializeJSON();

		var success = function () {
			this.collection.add(this.model, { merge: true });
			Backbone.history.navigate("", { trigger: true });
		}.bind(this)

		function errors (model, response) {
			$('errors').empty();
			response.responseJSON.forEach(function (el) {
				var li = $('<li>');
				li.html(el);
				$('.errors').append(li);
			}.bind(this));
		}

		this.model.save(attrs, {
			success: success,
			error: errors.bind(this)
		});
	}

})