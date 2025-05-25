
const produtos = [
  { nome: "Celular", preco: 1200, categoria: "Eletrônicos", disponibilidade: true },
  { nome: "Notebook", preco: 3500, categoria: "Eletrônicos", disponibilidade: false },
  { nome: "Camiseta", preco: 50, categoria: "Roupas", disponibilidade: true },
  { nome: "Calça Jeans", preco: 120, categoria: "Roupas", disponibilidade: true },
  { nome: "Tênis", preco: 250, categoria: "Roupas", disponibilidade: false },
  { nome: "Livro JS", preco: 80, categoria: "Livros", disponibilidade: true },
  { nome: "Livro HTML", preco: 60, categoria: "Livros", disponibilidade: false },
  { nome: "Fone de Ouvido", preco: 150, categoria: "Eletrônicos", disponibilidade: true },
  { nome: "Jaqueta", preco: 300, categoria: "Roupas", disponibilidade: true },
  { nome: "Tablet", preco: 800, categoria: "Eletrônicos", disponibilidade: true }
];

function criarElementoProduto(produto) {
  const div = document.createElement("div");
  div.className = "produto";
  div.innerHTML = `
    <h3>${produto.nome}</h3>
    <p>Preço: R$ ${produto.preco}</p>
    <p>Categoria: ${produto.categoria}</p>
    <p>${produto.disponibilidade ? "Disponível" : "Indisponível"}</p>
  `;
  return div;
}

function listarProdutos(produtosParaListar) {
  const container = document.getElementById("produtosContainer");
  container.innerHTML = "";
  produtosParaListar.forEach(produto => {
    container.appendChild(criarElementoProduto(produto));
  });
}

function filtrarProdutos(event) {
  event.preventDefault();
  const categoria = document.getElementById("categoria").value;
  const somenteDisponiveis = document.getElementById("disponiveis").checked;

  const filtrados = produtos.filter(produto => {
    const categoriaOk = categoria === "todas" || produto.categoria === categoria;
    const disponibilidadeOk = !somenteDisponiveis || produto.disponibilidade;
    return categoriaOk && disponibilidadeOk;
  });

  listarProdutos(filtrados);
}

document.getElementById("listarTodos").addEventListener("click", () => listarProdutos(produtos));
document.getElementById("filtroForm").addEventListener("submit", filtrarProdutos);
