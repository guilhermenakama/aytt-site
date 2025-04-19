// Exemplo de interatividade: alerta ao clicar em um botão (pode ser expandido conforme necessário)
document.addEventListener('DOMContentLoaded', () => {
    const contatoSection = document.getElementById('contato');
    if (contatoSection) {
      contatoSection.addEventListener('click', () => {
        alert('Obrigado por entrar em contato!');
      });
    }
  });
  