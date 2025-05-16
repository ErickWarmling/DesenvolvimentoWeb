function FunctionLink() {
    // Lógica
    function linkClicado(e) {
        e.preventDefault();
        console.log('O link foi clicado');
    }

    // View
    return (
        <a href="#" onClick={linkClicado}>Clique aqui</a>
    )
}

export default FunctionLink