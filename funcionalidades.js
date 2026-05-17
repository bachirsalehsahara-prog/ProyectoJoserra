// 3 cosas: mostrar/ocultar contraseña, confirmar borrado, contar de caracteres
// Mostrar / ocultar contraseña
function togglePassword() {
  var pwd = document.getElementById('password');
  var btn = document.getElementById('togglePwd');
  if (!pwd || !btn) return;
  btn.addEventListener('click', function () {
    if (pwd.type === 'password') {
      pwd.type = 'text';
      btn.textContent = 'Ocultar';
      btn.setAttribute('aria-pressed', 'true');
    } else {
      pwd.type = 'password';
      btn.textContent = 'Mostrar';
      btn.setAttribute('aria-pressed', 'false');
    }
  });
}

// Confirmación antes de borrar
document.addEventListener('DOMContentLoaded', function () {
  var items = document.querySelectorAll('.btn-delete');
  items.forEach(function(elemento) {
    elemento.addEventListener('click', function(e) {
      var msg = elemento.getAttribute('data-confirm-message') || '¿Estás seguro?';
      if (!confirm(msg)) {
        e.preventDefault();
      }
    });
  });
});


// Contador de caracteres para textarea
document.addEventListener('DOMContentLoaded', function () {
  var ta = document.getElementById('soporteDesc');
  var counter = document.querySelector('.char-count');
  if (!ta || !counter) return;
  var max = parseInt(ta.getAttribute('maxlength') || '0', 10) || 0;
  function update() {
    var len = ta.value.length;
    counter.textContent = max ? len + ' / ' + max : len + ' caracteres';
    counter.style.color = (max && len > max) ? 'red' : '';
  }
  ta.addEventListener('input', update);
  update();
});

//No funcionaba y estuvimos probando cosas, al final consultamos la IA y nos dio esta solucion la 'DOMContentLoeaded'
//Añadir el defer tambien en el enlace al js
document.addEventListener('DOMContentLoaded', function () {
  togglePassword();
  confirmDeletes();
  charCounters();
});
