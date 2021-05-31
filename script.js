const modal = document.getElementById('modal')
const modalShow = document.getElementById('show-modal')
const modalClose = document.getElementById('close-modal')
const bookmarkForm = document.getElementById('bookmark-form')
const websiteNameEl = document.getElementById('website-name')
const websiteUrlEl = document.getElementById('website-url')
const bookmarksContainer = document.getElementById('bookmarks-container')

// Show modal, Focus on Input 
function showModal() {
    modal.classList.add('show-modal');
    websiteNameEl.focus();
}

// Modal event Listeners 


// Display the modal when prompt 
modalShow.addEventListener('click', showModal);
// on clicking the closebutton then remove the modal 
modalClose.addEventListener('click', () => modal.classList.remove('show-modal'));
// if clicking outside the model then clode the modal 
window.addEventListener('click', (e) =>(e.target === modal ? modal.classList.remove('show-modal') : false));
