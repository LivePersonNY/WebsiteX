export default function ItemControls({index, itemArray, callback}) {
	return (
		<div className="stack-controls">
			<a
				className="stat-remove"
				onClick={
				function(e) {
					itemArray.splice(index, 1);
					callback(itemArray);
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
					itemArray.splice(new_index, 0, itemArray.splice(old_index, 1)[0]);
					callback(itemArray);
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
					if (new_index >= itemArray.length) {
						return;
					}
					itemArray.splice(new_index, 0, itemArray.splice(old_index, 1)[0]);
					callback(itemArray);
				}
			}>
				<span className="dashicons-before dashicons-arrow-right-alt"></span>
			</a>
		</div>
	);
}
