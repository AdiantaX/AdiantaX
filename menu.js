(function () {
  var btn = document.getElementById('menuBtn');
  var lista = document.getElementById('menuLista');
  if (!btn || !lista) return;
  btn.addEventListener('click', function () {
    var aberto = lista.classList.toggle('aberto');
    btn.setAttribute('aria-expanded', aberto ? 'true' : 'false');
  });
  lista.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      lista.classList.remove('aberto');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
})();
