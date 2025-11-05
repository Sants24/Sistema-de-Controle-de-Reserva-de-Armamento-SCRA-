//Mostrar / Ocultar Senha 
const senhaInput = document.getElementById('senha');
const toggleSenha = document.getElementById('toggleSenha');

if (toggleSenha) {
  toggleSenha.addEventListener('click', () => {
    const tipo = senhaInput.getAttribute('type') === 'password' ? 'text' : 'password';
    senhaInput.setAttribute('type', tipo);
    toggleSenha.textContent = tipo === 'password' ? '👁' : '👁';
  });
}

// Relógio Dinâmico
function atualizarRelogio() {
  const relogio = document.getElementById('relogio');
  if (!relogio) return; 
  const agora = new Date();
  const horas = agora.getHours().toString().padStart(2, '0');
  const minutos = agora.getMinutes().toString().padStart(2, '0');
  const segundos = agora.getSeconds().toString().padStart(2, '0');
  relogio.textContent = `${horas}:${minutos}:${segundos}`;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();

// === Alternar Tema Claro/Escuro ===
const botaoTema = document.getElementById('toggleTema');

if (botaoTema) {
  // Aplica o tema salvo anteriormente (caso o usuário já tenha escolhido)
  const temaSalvo = localStorage.getItem('tema');
  if (temaSalvo === 'claro') {
    document.body.classList.add('light-mode');
    botaoTema.textContent = '🌞';
  }

  botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const modoClaro = document.body.classList.contains('light-mode');

    // Altera o ícone
    botaoTema.textContent = modoClaro ? '🌞' : '🌙';

    // Salva a preferência no navegador
    localStorage.setItem('tema', modoClaro ? 'claro' : 'escuro');
  });
}
