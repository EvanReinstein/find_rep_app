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
			return `
			<div class="card mb-4 shadow-sm">
              <img class="card-img-top smaller" src="${rep.photoUrl[0]}" alt="Card image cap">
              <div class="card-body">
                  <h3 class="card-text">${rep.name}</h3>
                  <p>Party Affiliation: ${rep.party}</p>
                  <p>${rep.address[0].line1}, ${rep.address[0].line2}, ${rep.address[0].city}, ${rep.address[0].state}, ${rep.address[0].zip}</p>
                  <p>${rep.phones[0]}</p>
                  <p>${rep.urls[0]}</p>
                    <div class="social">
                      <i class="fab fa-twitter"></i>
                      <i class="fab fa-facebook"></i>
                      <i class="fab fa-instagram"></i>
                      <i class="fab fa-linkedin"></i>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
	                    <div class="btn-group">
	                      <button type="button" class="btn btn-sm btn-outline-secondary">Message</button>
	                    </div>
                    </div>
              </div>
            </div>`
		}).join('');
		  repCards.append(repCardsHtml);

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