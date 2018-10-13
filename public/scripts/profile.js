console.log('Go ahead panda!!!');
// Global Variables
const baseUrl = '/api/saved-messages';
const messageCards = $('.row');
let messages = [];
window.onload = function () {
// Display all messages
  $.ajax({
    method: 'GET',
    url: baseUrl,
    success: handleSuccess,
    error: handleError,
    complete: (e) => {console.log('AJAX GET request is complete')}
  });
// Combination of Delete and Update
  messageCards.on('click', '.changeBtn', function(event) {
    let messageId = $(this).attr('data-id');
    if ($(this).hasClass('deleteBtn')) {
      // if the delete message button was clicked, delete the message
      console.log('Clicked delete button to /api/saved-messages/' + messageId);
      $.ajax({
        method: 'DELETE',
        url: baseUrl + '/' + messageId,
        success: deleteMessageSuccess,
        error: deleteMessageFail,
        complete: () => { console.log('Delete Message AJAX request complete') }
      });
    }
  })

// Functions for rendering saved messages
  function render () {
    // Clear out HTML that contains any left over messages
    messageCards.empty();
    // create HTML to append
    let messageCardsHtml = messages.map( (message) => {
      console.log(message);
      return `
         <div class="card mb-4 shadow-sm">
             <img class="card-img-top smaller" src="${message.photoUrl}" alt="Card image cap">
           <div class="card-body">
               <h3 class="card-text">To: ${message.representative}</h3>
               <p class="center">${message.partyAffiliation}</p>
               <p class="center">${message.content}</p>
               <p class="center">From: ${message.name}</p>
               <div class="d-flex justify-content-between align-items-center">
                 <div class="btn-group">
                   <button type="button" class="btn btn-sm btn-outline-secondary changeBtn editBtn" data-id="${message._id}">Edit</button>
                   <button type="button" class="btn btn-sm btn-outline-secondary changeBtn deleteBtn" data-id="${message._id}">Delete</button>
                 </div>
               </div>
             </div>
           </div>
      `
    }).join('');
    messageCards.append(messageCardsHtml);
  }

  function handleSuccess (json) {
    messages = json;
    console.log(messages);
    render();
  }

  function handleError (err) {
    $('.row').text(`Failed to load messages, server is out to lunch`);
    console.log(`Error during render of saved messages is: ${err}`);
  }

// Functions for deleting saved messages
  function deleteMessageSuccess (json) {
    var message = json;
    // console.log(json + '!!!');
    var messageId = message._id;

    // find the message with the right ID and delete it
    for (var i = 0; i < messages.length; i++) {
      if (messages[i]._id === messageId) {
        messages.splice(i, 1);
        break; // we found the right message, get out of the loop
      }
    }
    render();
  }

  function deleteMessageFail () {
    console.log('Failed to delete message');
  }


 }


// Vanilla JS...
// const render = (Messages) => {
//   messageCards.innerHTML = '';
//   form.children[0] = ''; //Name
//   form.children[1] = ''; //email
//   form.children[2] = ''; //Content
//
//   const message = messages.forEach( (message) => {
//     messageCards.innerAdjacentHtml('afterbegin', `
//   <div class="card mb-4 shadow-sm">
//       <img class="card-img-top smaller" src="/images/headshot.png" alt="Card image cap">
//     <div class="card-body">
//         <h3 class="card-text">First Name, Last Name</h3>
//         <p class="center">Representative, STATE, (D)</p>
//         <img src="/images/edit-letter.png" alt="" class="edit-letter" />
//         <div class="d-flex justify-content-between align-items-center">
//           <div class="btn-group">
//             <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
//             <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
//           </div>
//         </div>
//       </div>
//     </div>
//     `)
//   })
// }
//
// // Get and render
// const getMessages = () => {
//   fetch(baseUrl)
//     .then(res => res.json())
//     .then(messages => render(messages))
//     .catch(err => console.log(err));
// }
