export default function ItemControls({index, onRemove, onLeft, onRight}) {
	return (
		<a
			className="stat-remove"
			onClick={
			function(e) {
				cards.splice(index, 1);
				setAttributes({ cards: cards});
			}
		}>
			<span className="dashicons-before dashicons-remove"></span>
		</a>
		<a
			className="stat-left"
			onClick={
			function(e) {
				var new_index = index-1;
				var old_index = index;
				if (new_index < 0) {
					return;
				}
				cards.splice(new_index, 0, cards.splice(old_index, 1)[0]);
				setAttributes({ cards: cards});
			}
		}>
			<span className="dashicons-before dashicons-arrow-left-alt"></span>
		</a>
		<a
			className="stat-right"
			onClick={
			function(e) {
				var new_index = index+1;
				var old_index = index;
				if (new_index >= cards.length) {
					return;
				}
				cards.splice(new_index, 0, cards.splice(old_index, 1)[0]);
				setAttributes({ cards: cards});
			}
		}>
			<span className="dashicons-before dashicons-arrow-right-alt"></span>
		</a>
	);
}
