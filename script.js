// [nome, email, telefone]
let contatos = [
    ["João", "joao@gmail.com", "11998774533"],
    ["Maria", "maria@gmail.com", "11933227566"],
    ["Pedro", "pedro@hotmail.com", "11987654567"],
  ];
  
  function exibirContatos() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "<h2>Lista de contatos:</h2>";
    contatos.forEach(contato => {
      resultado.innerHTML += `<p>Nome: ${contato[0]}, Email: ${contato[1]}, Telefone: ${contato[2]}</p>`;
    });
  }
  
  function cadastrarContato() {
    let nome = prompt("Informe o nome do novo contato:");
    let email = prompt("Informe o email do novo contato:");
    let telefone = prompt("Informe o número de telefone do novo contato:");
  
    // Verifica se o email e o telefone estão corretos
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let telefoneRegex = /^\d{11}$/;
  
    if (emailRegex.test(email) && telefoneRegex.test(telefone)) {
      contatos.push([nome, email, telefone]);
      alert("Contato cadastrado com sucesso!");
    } else {
      alert("Informações incorretas. Cadastro não realizado.");
    }
  }
  
  function removerContato() {
    let nome = prompt("Informe o nome do contato que deseja remover:");
    let index = contatos.findIndex(contato => contato[0] === nome);
  
    if (index !== -1) {
      contatos.splice(index, 1);
      alert(`Contato '${nome}' removido com sucesso!`);
    } else {
      alert(`Contato '${nome}' não encontrado.`);
    }
  }
  
  function buscarContato() {
    let nome = prompt("Informe o nome do contato que deseja buscar:");
    let contato = contatos.find(contato => contato[0] === nome);
  
    if (contato) {
      let resultado = document.getElementById('resultado');
      resultado.innerHTML = `<h2>Contato encontrado:</h2><p>Nome: ${contato[0]}, Email: ${contato[1]}, Telefone: ${contato[2]}</p>`;
    } else {
      alert(`Contato '${nome}' não encontrado.`);
    }
  }