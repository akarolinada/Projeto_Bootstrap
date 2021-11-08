//declaração de uma classe com o nome Streamer
class Streamer {
    //definição dos atributos da classe
    constructor() {
        this.id = 1;
        this.streamers = [];
        //propriedade para testar qual método deve ser executado pelo botão btn1
        this.testebtn = 0;

        let picture = document.getElementById("img-show");
        let file = document.getElementById("inputFoto");

        file.addEventListener("change", (e) => {
            let reader = new FileReader();

            reader.onload = () => {
                picture.src = reader.result;
            }
            reader.readAsDataURL(file.files[0]);
            console.log(reader);
        })
    }

    //leitura dos dados digitados, adicionando os mesmos na array
    lerDados() {
        let streamer = {};

        streamer.id = this.id;
        streamer.nick = $("#nick").val();
        streamer.link = $("#link").val();
        streamer.plataforma = $("#plataforma").val();
        if ($("#inputFoto").val() != "") {
            let nomeFile = $("#inputFoto")[0].files[0].name;
            streamer.picture = "/img/imgform/" + nomeFile;
        } else {
            streamer.picture = "";
        }
        console.log(streamer.plataforma, streamer.picture)
        return streamer;
    }

    limpar() {
        $("#inputFoto").val("");
        let img = document.getElementById("img-show");
        img.src = "/img/imgform/spaceimg.png";
    }

    //Validação dos campos dos inputs (para impedir campos vazios)
    validarCampos(streamer) {
        let msg = "";

        if (streamer.nick == "") {
            msg += "Informe seu nick!";
        }
        if (streamer.link == "") {
            msg += " Informe o link da sua live!"
        }
        if (streamer.plataforma === "") {
            msg += " Selecione  plataforma que você transmite!"
        }
        if (streamer.picture === "") {
            msg += " Carregue uma foto sua!"
        }

        if (msg != "") {
            alert(msg);
            return false;

        }
        console.log(msg, streamer);
        return true
    }

    adicionar(streamer) {
        this.streamers.push(streamer);
        this.id++;

        this.limpar();
    }

    //salvar a informação digitada na no objeto
    salvar() {
        let streamer = this.lerDados();
        if (this.validarCampos(streamer)) {
            if (this.testebtn == 0) {
                this.adicionar(streamer);
            } else {
                this.atualizar(this.testebtn);
            }
        }

        localStorage.setItem("cardsStreamers", JSON.stringify(this.streamers));

        this.cancelar();
        this.tabelarStreamer();
        this.showCards();
    }

    //método que desenha e mostra os dados no corpo da tabela
    tabelarStreamer() {
        let tbody = document.getElementById("tbody");
        console.log(tbody)
        //limpar tabela antes de ser mostrada
        tbody.innerText = "";


        for (let i = 0; i < this.streamers.length; i++) {

            tbody.innerHTML += `<tr>
            <th scope="row">${this.streamers[i].id}</th>
            <td>${this.streamers[i].nick}</td>
            <td><a href="${this.streamers[i].link}">${this.streamers[i].link}</td>
            <td>${this.streamers[i].plataforma}</td>
            <td><img src="/img/imgform/editar.png" class="editedel" id="edite${i}"><img src="/img/imgform/deletar.png" class="editedel" id="del${i}"></td>
          </tr>`

            let editId = "edite" + i;
            let delId = "del" + i;

            var edite = document.getElementById(editId);
            var del = document.getElementById(delId);

            edite.setAttribute("onclick", "streamers.possibilitarEdicao(" + JSON.stringify(this.streamers[i]) + ")");
            console.log(edite)
            del.setAttribute("onclick", "streamers.deletar(" + this.streamers[i].id + ")");
        }
    }

    cancelar() {
        $("#nick").val("");
        $("#link").val("");
        $("#plataforma").val("");

        $("#btn1").innerText = "Enviar";
        this.testebtn = 0;

        this.limpar();
    }

    possibilitarEdicao(dados) {
        $("#btn1").attr("disabled", false)

        $("#nick").val(dados.nick);
        $("#link").val(dados.link);
        $("#plataforma").val(dados.plataforma);
        $("#img-show").attr("src", dados.picture);
        $("#inputFoto").val(dados.reader);

        $("#btn1").text("Atualizar");

        this.testebtn = dados.id;
    }

    atualizar(id) {
        for (let i = 0; i < this.streamers.length; i++) {
            if (id == this.streamers[i].id) {
                this.streamers[i].nick = $("#nick").val();
                this.streamers[i].link = $("#link").val();
                this.streamers[i].plataforma = $("#plataforma").val();
                if ($("#inputFoto").val() != "") {
                    let nomeFile = $("#inputFoto")[0].files[0].name;
                    this.streamers[i].picture = "/img/imgform/" + nomeFile;
                } else {
                    this.streamers[i].picture = "";
                }
            }
        }
        $("#btn1").text("Enviar");
        this.testebtn = 0;
    }

    deletar(idP) {
        if (confirm("Deseja desistir de divulgar sua live?")) {
            for (let i = 0; i < this.streamers.length; i++) {
                if (this.streamers[i].id == idP) {
                    this.streamers.splice(i, 1)
                    tbody.deleteRow(i);                    
                }
            }            
        } 

        localStorage.setItem("cardsStreamers", JSON.stringify(this.streamers));   
        this.showCards();        
    }
   

    showCards() {
        let streamersCards = JSON.parse(localStorage.getItem("cardsStreamers"));

        let rowCards = document.getElementById("rowCards");

        let i = 0;

        rowCards.innerHTML = "";

        for (i = 0; i < streamersCards.length; i++) {
            rowCards.innerHTML += `<div class="col-lg-3 col-md-6 col-sm-12">
            <div class="card mb-3 card-st">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${this.streamers[i].picture}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8 d-flex flex-row">
                        <div class="card-body">
                            <h5 class="card-title h4">${this.streamers[i].nick}</h5>
                            <p class="card-text">Link para live: <a
                                    href="${this.streamers[i].link}">${this.streamers[i].plataforma}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
        }
    }
}

var streamers = new Streamer();

