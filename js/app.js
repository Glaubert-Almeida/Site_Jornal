let todasNoticias = []
const cadastrarNoticia = function(id){

    let noticia = document.querySelector("#noticia").value
        if (noticia == "") {
            alert("Digite uma noticia!")
            return
        }
        
        if(id === undefined){
            todasNoticias.push(noticia) 
        }else{
            todasNoticias[id] = noticia 

            document.querySelector("#btnCadastrarNoticia").style = "display: block"
            document.querySelector("#btnEditarNoticia").style = "display: none"
        }
        limparFocarCampo()
        mostrarNoticias()
    }

const mostrarNoticias = function(){

    let mostrar = document.querySelector("#mostrarNoticias")
    let htmlTela = ""
    todasNoticias.forEach(
        (n, i) => htmlTela += `
        <article class="message is-info is-medium">
            <div class="message-header">
                <h1> Notícia ${i+1} </h1> 
            </div> 
            <div class="message-body">
                    ${n}
                <div class="buttons is-pulled-right">
                    <button class="button is-primary" onclick="editar(${i})">
                        <span>Editar</span>
                        <span class="icon is-small">
                        <i class="fas fa-edit"></i>
                        </span>
                    </button>
                    <button class="button is-danger" onclick="excluir(${i})">
                        <span>Excluir</span>
                        <span class="icon is-small">
                        <i class="fas fa-trash"></i>
                        </span>
                    </button>
                </div>
            </div>
            
        </article>
    `)

     qtdNoticias.innerHTML = todasNoticias.length
     mostrar.innerHTML = htmlTela
     document.querySelector("#tituloNoticias").style = "display: block"
     document.querySelector("#btnDeletar").style = "display: block"
     limparTela() 
}

const deletarNoticias = function(){
    if (todasNoticias.length === 0) {
        alert("Você não possui noticias para deletar!");
        return false
    }

    if(confirm("Deseja deletar todas as notícias?") === true){
        todasNoticias = []
        limparTela()
    }
}


const editar = function(idNoticia){

    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.querySelector("#noticia").value = todasNoticias[idNoticia]
    document.querySelector("#btnEditarNoticia").style = "display: block"
    document.querySelector("#btnCadastrarNoticia").style = "display: none"
    document.querySelector("#btnEditarNoticia").onclick = () => {
        cadastrarNoticia(idNoticia)
    };
}


const excluir = function(idNoticia){

    if (confirm(`Deseja deletar a notícia ${idNoticia+1}?`) === true) {

        todasNoticias.splice(idNoticia,1)
        mostrarNoticias()
    }
}

const limparTela = function(){
     limparFocarCampo()
     if (todasNoticias.length === 0) {

        document.querySelector("#mostrarNoticias").innerHTML = ""
        ocultarItens()
     }
}

const ocultarItens = function () {

    document.querySelector("#tituloNoticias").style = "display: none"
    document.querySelector("#btnEditarNoticia").style = "display: none"
    document.querySelector("#btnDeletar").style = "display: none"
}

const limparFocarCampo = function () {
    document.querySelector("#noticia").value = ""
    document.querySelector("#noticia").focus()
}
ocultarItens()
btnCadastrarNoticia.addEventListener("click", () => { cadastrarNoticia() })
btnDeletar.addEventListener("click", deletarNoticias)