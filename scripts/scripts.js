document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os dados do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Aqui você pode adicionar a lógica para enviar os dados para um servidor ou API

    alert(`Obrigado, ${name}! Sua mensagem foi enviada.`);
    
    // Limpa o formulário
    this.reset();
});