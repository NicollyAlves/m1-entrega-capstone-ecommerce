
    const section = document.querySelector('.produtos')
    const ul = document.querySelector('.listaProdutos');

function criarProdutos (produto) {
    
      const li = document.createElement('li');
      li.classList.add("produto")
      
      const imagem = document.createElement('img');
      imagem.classList.add("img")

      const p = document.createElement('p')
      p.classList.add("categoria")

      const h3 = document.createElement('h3');
      h3.classList.add("nomeProduto")

      const parag = document.createElement('p')
      parag.classList.add("descricao")

      const preco = document.createElement('h3');
      preco.classList.add("preco")
      
      const button = document.createElement('button');
      button.classList.add("botaoAdicionar")
      button.id = produto.id-1
    
      imagem.src = produto.img;
      p.innerText = produto.tag;
      h3.innerText = produto.nameItem;
      parag.innerText = produto.description;
      preco.innerText = `R$ ${produto.value}`;
      button.innerText = produto.addCart;
      
      li.append(imagem, p, h3, parag, preco, button);
    
    return li
  }
  
function listarProdutos(listaProdutos){
    for (let i=0; i<listaProdutos.length; i++){
       const produto = listaProdutos[i]
       const produtoCard = criarProdutos(produto)
       ul.appendChild(produtoCard)
    }

}
listarProdutos(data)

const card = document.querySelector("aside")
function emptyCart(){
  return card.insertAdjacentHTML("afterbegin",
  `
  <div class="pesquisa">
  <input class="espacoDigitar" type="text" placeholder="Digite aqui sua pesquisa">
  <button class="botaoPesquisar">Pesquisar</button>
</div>

<ul class="vazio">
  <h3 class="carrinhoCompras">Carrinho de compras</h3>
  `
) }
const cartSpace = document.querySelector(".vazio")
function space(item, i){
  return cartSpace.insertAdjacentHTML("beforeend",
  `
  <li class="produto">
                    <img class="imgMascara" src=${item.img} alt="Imagem de máscara preta">
                    <h3 class="nomeProduto">${item.nomeProduto}</h3>
                    <h3 class="preco"><strong>${item.value}</strong></h3>
                    <button class="remover" id=${i}>Remover do carrinho</button>
                </li>
  `
)}
  
let car = []

addEventListener("click", event => {
    
    const clique = event.target
    if(clique.className === "botaoAdicionar"){
       car.push(data[clique.id])
       console.log(car)
       cartSpace.innerHTML = ""
       car.map((item, i)=>space(item, i))

       return
    }

    if(clique.className==="remover"){
      car.splice(clique.id, 1)
      cartSpace.innerHTML = ""
      car.map(space)
      return
    }
})


