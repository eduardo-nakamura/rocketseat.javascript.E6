/* classes 
class todoList {
    // metodo constructor
    constructor() {
        this.todos = [];
    }

    // adiciona todo no arrray
    addTodo() {
        this.todos.push('Novo Todo')
        console.log(this.todos)
    }

}
const MinhaLista = new todoList();

// botão adicionar
document.getElementById('novotodo').onclick = function() {
    MinhaLista.addTodo();
}
*/

// Herança
class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data)
    }
}

class todoList extends List {
    constructor() {
        super();
        this.usuario = 'naka'
    }

    mostraUsuario() {
        console.log(this.usuario)
    }
}

const MinhaLista = new todoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo todo')
}

MinhaLista.mostraUsuario()

// static
class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica.soma(1, 5));