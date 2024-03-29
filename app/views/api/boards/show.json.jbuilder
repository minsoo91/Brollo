# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list

json.(@board, :id, :title, :user_id, :created_at, :updated_at)
json.lists (@board.lists) do |list|
	json.extract!(list, :id, :title, :board_id, :ord, :created_at, :updated_at)
	json.cards (list.cards) do |card|
		json.extract!(card, :id, :title, :list_id, :description, :ord, :created_at, :updated_at)
	end
end
