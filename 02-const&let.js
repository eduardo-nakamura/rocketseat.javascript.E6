// constante: não muda
const usuario = { nome: 'Diego' }

// mutação
usuario.nome = 'Cleysions'
console.log(usuario)

function teste(x) {
    let y = 2;

    if (x > 5) {
        console.log(x, y)
    }
}

teste(10)