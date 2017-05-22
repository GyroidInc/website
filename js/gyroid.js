// Upload user contact info to S3 Bucket
function uploadToS3Bucket(text, unique_id) {

		// Path to bucket
		var uploadPath = 'http://contacts.json.s3.amazonaws.com/' + unique_id + ".json";

		// Ajax request
		$.ajax({
			type: "PUT",
			url: uploadPath,
			dataType: 'json',
			async: false,
			data: JSON.stringify({"text": text})
		});
	}

	// Submit Message Button
	$("#submitMessage").click(function() {
		// Grab input values
		var name = $('#contact-name').val();
		if (name.length === 0) {
			alert("Please enter your name");
			return
		}

		var email = $('#contact-email').val();
		if (email.length === 0) {
			alert("Please enter your email address");
			return
		}

		var phone = $('#contact-phone').val();
		if (phone.length === 0) {
			phone = "N/A";
		}

		var msg = $('#contact-msg').val();
		if (msg.length === 0) {
			alert("Please enter your message");
			return
		}

		// Put all info together into one string and download
		var user_msg = "Name: " + name + ", Email: " + email + ", Phone: " + phone + ", Message: " + msg;
		uploadToS3Bucket(user_msg, "contact_" + name.replace(/ /g,''));

		// Message to user
		alert("Hi " + name + ",\n\nThanks for the message -- we will contact you soon!\n-Steve, Wade, Robert");
	});

	// Youtube
	$("#Youtube").click(function() {
		alert("We are slowly but surely working on our Youtube channel!");
	});

	// Facebook
	$("#Facebook").click(function() {
		alert("We are still working on our Facebook page!");
	});

	// Twitter
	$("#Twitter").click(function() {
		alert("We are still working on our Twitter account!");
	});

	// Subscribe button
	$("#subscribe").click(function() {
		var email = $("#subscribe-email").val();
		if (email.length === 0) {
			alert("Please enter your email address to subscribe");
			return;
		}

		// Upload to S3 bucket
		uploadToS3Bucket(email, "subscribe_" + email);

		// Message to user
		alert("Hi " + email + ",\n\nThanks for subscribing to our mailing list!\n-Steve, Wade, Robert");
	});