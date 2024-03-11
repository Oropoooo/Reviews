function addReview() {
    var name = document.getElementById('name').value;
    var comment = document.getElementById('comment').value;
  
    if (name && comment) {
      var review = document.createElement('div');
      review.className = 'review';
      review.innerHTML = '<strong>' + name + '</strong><p>' + comment + '</p>';
  
      document.getElementById('reviews').appendChild(review);
  
      // Очищаем поля после добавления отзыва
      document.getElementById('name').value = '';
      document.getElementById('comment').value = '';
    } else {
      alert('Пожалуйста, заполните все поля.');
    }
  }