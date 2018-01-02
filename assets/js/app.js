$(function() {

	// Facebook Pages Token
	var facebookToken = "";

	// Get Request
	$.ajax({
		type: "GET",
		url: "https://graph.facebook.com/v2.11/me/posts?fields=id,message,full_picture,picture&limit=10&access_token="+facebookToken,
		// success status:
		success: function(response) {
			// Object status
			$.each(response.data, function(index, val){
				if(val.message != null && val.full_picture != null) {
					// Append data
					$('.row').append(
						'<div class="col-md-6"> message & story:' + val.message + '</div> <div class="col-md-3"> <img src="' + val.picture + '"></div>'
					);
				}
				// end

				else if(val.story != null) {
					// Append data
					$('.row').append(
						'<div class="col-md-6"> Only story:' + response.name + '</div> <div class="col-md-3">' + val.story + '</div>'
					);
				}
				// end

				else if(val.message != null) {
					$('.row').append(
						'<div class="col-md-6"> Only message:' + response.name + '</div> <div class="col-md-3">' + val.message + '</div>'
					);
				}
				// end
			});
		},
		// error status:
		error: function(response) {
			alert('Error validating access token: Session 可能過期了')
		}
		// on/off status:
	});

});