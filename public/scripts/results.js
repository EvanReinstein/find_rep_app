console.log('Hello World');

window.onload = function() {
	let reps = [];
	const repCards = $('.row');
	$.ajax ({
		method: 'GET',
		url: 'http://localhost:3000/api/rep-details',
		success: handleSuccess,
		error: handleError,
		complete: () => {console.log('Ajax GET complete!')}
	});

	function render () {
		//clears out HTML that contains representative cards
		repCards.empty();
		//create HTML code to be appended to representative cards
		let repCardsHtml = reps.map( (rep) => {
            //If line 2 doesn't exist, display empty string
            let line2 = rep.address[0].line2 === undefined ? '' : `${rep.address[0].line2} `
            //If part affiliation doesn't exist, display empty string
            let party = rep.party === undefined ? 'None' : `${rep.party}`
            return `
			<div class="card mb-4 shadow-sm">
              <img class="card-img-top smaller" src="${rep.photoUrl[0]}" alt="Card image cap">
              <div class="card-body">
                  <h3 class="card-text">${rep.name}</h3>
                  <p>Party Affiliation: ${ party }</p>
                  <p>${rep.address[0].line1} ${ line2 }${rep.address[0].city}, ${rep.address[0].state}, ${rep.address[0].zip}</p>
                  <p>${rep.phones[0]}</p>
                  <p>${rep.urls[0]}</p>
                    <div class="social">
                      <i class="fab fa-twitter"></i>
                      <i class="fab fa-facebook"></i>
                      <i class="fab fa-instagram"></i>
                      <i class="fab fa-linkedin"></i>
                    </div>
                    <div class="form-profile hidden">
                        <h1>Check Your Rep- Send a letter...</h1>
                        <form>
                        <input type="text" name="field1" placeholder="Your Name" />
                        <input type="email" name="field2" placeholder="Email Address" />
                        <textarea name="field3" placeholder="Dear Representative..."></textarea>
                        <input type="submit" value="Send Letter" class="saveMessage" />
                        </form>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
	                    <div class="btn-group">
	                      <button type="button" class="btn btn-sm btn-outline-secondary" data-id="${rep._id}">Message</button>
	                    </div>
                    </div>
              </div>
            </div>`
		}).join('');
		  repCards.append(repCardsHtml);

	}
// Save Message to database
$('body').on('click', '.saveMessage', saveMessage);

function saveMessage (e) {
	e.preventDefault();
	debugger;
	formData = $(this).serialize(); //.serialize()
	console.log(formData);
}

	function handleSuccess (json) {
		reps = json;
		console.log(reps);
		render();
	}

	function handleError (err) {
		$('.container').text(`Failed to load reps, server is out to lunch.`);
		console.log(`Error during render of rep-details is: ${err}`);
	}
}
