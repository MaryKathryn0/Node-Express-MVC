module.exports = function (props){
	const {id, name, sleepy} = props;
	return /*html*/ `
		<li>
			${name}

			<button class="change-sleep" data-id="${id}" data-newsleep="${!sleepy}">
				${sleepy
					? /*html*/`
						<span>
							SLEEP TIME!
						</span>
					`
					: /*html*/`
						<span>
							WAKE UP!
						</span>
					`
				}
			</button>
			<button class="adopt-cat" data-id="${id}">Adopt!</button>
		</li>
		`
}