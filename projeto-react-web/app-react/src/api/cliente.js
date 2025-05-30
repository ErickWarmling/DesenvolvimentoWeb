const clienteApi = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
)

const obterUsuario = (usuario) => clienteApi.get(`/caminho/${usuario}`);