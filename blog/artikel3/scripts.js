// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const likeBtn = document.getElementById('like-btn');
    const unlikeBtn = document.getElementById('unlike-btn');
    const likeCount = document.getElementById('like-count');
    const unlikeCount = document.getElementById('unlike-count');

    let likes = 0;
    let unlikes = 0;

    likeBtn.addEventListener('click', function() {
        likes++;
        likeCount.textContent = likes;
    });

    unlikeBtn.addEventListener('click', function() {
        unlikes++;
        unlikeCount.textContent = unlikes;
    });

    const submitCommentBtn = document.getElementById('submit-comment');
    const commentText = document.getElementById('comment-text');
    const commentSection = document.getElementById('comment-section');

    submitCommentBtn.addEventListener('click', function() {
        const comment = commentText.value.trim();
        if (comment) {
            const commentElement = document.createElement('p');
            commentElement.textContent = comment;
            commentSection.appendChild(commentElement);
            commentText.value = '';
        }
    });
});
document.getElementById('submit-comment').addEventListener('click', function() {
    const commentText = document.getElementById('comment-text').value;
    if (commentText.trim() === '') return;

    const commentSection = document.getElementById('comment-section');
    
    // Membuat elemen komentar baru
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    
    // Nama penulis komentar (hardcoded atau bisa diganti dengan dynamic user data)
    const commentAuthor = document.createElement('p');
    commentAuthor.classList.add('comment-author');
    commentAuthor.textContent = 'Smart People';
    
    // Teks komentar
    const commentTextElement = document.createElement('p');
    commentTextElement.classList.add('comment-text');
    commentTextElement.textContent = commentText;
    
    // Tombol hapus
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.addEventListener('click', function() {
        commentSection.removeChild(newComment);
        saveComments(); // Simpan perubahan setelah menghapus komentar
    });
    
    newComment.appendChild(commentAuthor);
    newComment.appendChild(commentTextElement);
    newComment.appendChild(deleteButton);
    commentSection.appendChild(newComment);
    
    // Kosongkan textarea
    document.getElementById('comment-text').value = '';
    
    // Simpan komentar
    saveComments();
});

function saveComments() {
    const commentSection = document.getElementById('comment-section');
    localStorage.setItem('comments', commentSection.innerHTML);
}

function loadComments() {
    const savedComments = localStorage.getItem('comments');
    if (savedComments) {
        document.getElementById('comment-section').innerHTML = savedComments;
    }
}


