const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');


let bookmarks = [];


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


// fetch Bookmarks 
function fetchBookmarks() {
// get books from localStorage 
    if(localStorage.getItem('bookmarks')) {
        bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    } else {
        //Create  bookmarks array in localstorage 
        bookmarks = [
            {
                name: 'aghubatech',
                url: 'https://aghubatech.com',
            },
        ];
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    }
    console.log(bookmarks);
}


// Handle Data from form 
function storeBookmark(e) { 
    e.preventDefault();
    const nameValue = websiteNameEl.value;
    let urlValue = websiteUrlEl.value;
    if(!urlValue.includes('https://', 'http://')) {
        urlValue = `https://${urlValue}`
    }
    const bookmark = {
        name: nameValue,
        url : urlValue,
    };
    bookmarks.push(bookmark);
    // console.log(JSON.stringify(bookmarks));

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    fetchBookmarks();
    
    bookmarkForm.reset();
    websiteNameEl.focus();
};

// Event listeners 
bookmarkForm.addEventListener('submit', storeBookmark)

// onLoad 
fetchBookmarks();
