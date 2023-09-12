function adicionarContato() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;

    if (nome === "" || telefone === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    var tabelaContatos = document.getElementById("tabelaContatos");
    var newRow = tabelaContatos.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.innerHTML = nome;
    cell2.innerHTML = telefone;

    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
}

