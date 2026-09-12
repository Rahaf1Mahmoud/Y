document.addEventListener('DOMContentLoaded', function () {
  var order = ['1.jpg','2.jpg','3.jpg','4.jpeg','5.jpeg','6.jpeg','7.jpg'];
  var imgs = document.querySelectorAll('.polaroid img');
  for (var i = 0; i < imgs.length; i++) {
    var src = order[i] || '';
    var m = (imgs[i].getAttribute('alt') || '').match(/\d+/);
    if (m) {
      var n = m[0];
      src = (n === '4' || n === '5' || n === '6') ? n + '.jpeg' : n + '.jpg';
    }
    if (src) imgs[i].src = src;
  }
});
