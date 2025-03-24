document.addEventListener("DOMContentLoaded", function () {
    // Oculta os formulários ao carregar a página
    document.querySelectorAll('.form-container').forEach(form => {
        form.style.display = 'none';
    });
});

function mostrarFormulario(value) {
    // Oculta todos os formulários
    document.querySelectorAll('.form-container').forEach(form => {
        form.style.display = 'none';
    });

    // Exibe apenas o formulário correspondente ao radio selecionado
    const selectedForm = document.getElementById(value);
    if (selectedForm) {
        selectedForm.style.display = 'block';
    }
}
