function dislikeUser(user) {
	let form = {
		disliked: user
	}
    $.ajax({
		type: "POST", 
		url : '/user/dislike',
		data: JSON.stringify(form),
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function(data) {
			if (data == 'disliked') {
				swal(
					'disliked!',
					`You disliked this user.`,
					'success'
				)
			}
			else if (data == 'undisliked') {
				swal(
					'Dislike removed!!',
					`You removed your dislike on this user.`,
					'success'
				)
			} else
			swal(
				'Error!',
				`Unknown error`,
				'error'
			)
		}
	})
}

function likeUser(user) {
	let form = {
		liked: user
	}
    $.ajax({
		type: "POST", 
		url : '/user/like',
		data: JSON.stringify(form),
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function(data) {
			if (data == 'liked') {
				swal(
					'Liked!',
					`You liked this user.`,
					'success'
				)
			}
			else if (data == 'unliked') {
				swal(
					'Like Removed!',
					`You unliked this user.`,
					'success'
				)
			} else
			swal(
				'Error!',
				`Unknown error`,
				'error'
			)
		}
	})
}