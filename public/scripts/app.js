console.log('Hello World');

// On form submit, grab the zip and pass it along
// $('#form').on('submit', grabZip);
const zipForm = document.getElementById('form');
zipForm.addEventListener('submit', grabZip);

function grabZip(e) {
	e.preventDefault();

	// Getting value from form input
	let zip = document.getElementById('form').elements[0].value;
	// Prepare form data as an object to pass to body
	let data = { zip };

	fetch('http://localhost:3000/api/rep-info/', {
		method: 'POST',
		headers: {
			"content-type": "application/json"
		},
		body: JSON.stringify(data) // Stringify form data object for fetch
	})
		.then(res => res.json())
		.then(data => console.log(data))
		.catch(err => console.log(err));
}




//////////////////////////////////////////////////////
//Add -- Remove Items from cart
//////////////////////////////////////////////////////
var itemCount = 0;

$('.add').click(function (){
  itemCount ++;
  $('#letterCount').html(itemCount).css('display', 'block');
});

$('.clear').click(function() {
  itemCount = 0;
  $('#letterCount').html('').css('display', 'none');
  $('#letterItems').html('');
});
///////////////////////////////////////////////////////////



