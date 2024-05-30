class ClientController {
    constructor() {
        this.botaoProximo = document.getElementById("botao-prox");
        this.botaoAnterior = document.getElementById("botao-ant");
        this.blocoDiarioBorda = document.getElementById("bloco-principal");
        this.blocoBotaoProx = document.getElementById("bloco-botao-prox");
        this.formRegistro = document.getElementById('formRegistro');
        this.paginaAtual = "pagina1";
        this.botaoSalvar = document.getElementById("btn-save");

        this.botaoSalvar.addEventListener("click", () => {
            this.armazenarDados();
            this.mostrarPopup();
        });
        this.modal = document.getElementById("modal");
        this.btnCancel = document.getElementById("cancelar");
        this.btnConfirmar = document.getElementById("confirmar");
        this.btnClose = document.getElementsByClassName("close")[0];
        this.timetOutTransitions = 300;

        this.dadosFormulario = {}; 

        this.conteudos = {
            pagina1: `
            <div class="row">
                <div class="col">
                    <label for="dataViagem1">Data Viagem</label>
                    <input type="date" name="dataViagem1" id="dataViagem1">
                </div>
                <div class="col">
                    <label for="inicio1">Inicio</label>
                    <input type="time" name="inicio1" id="inicio1">
                </div>
                <div class="col">
                    <label for="motorista1">Motorista</label>
                    <select name="motorista1" id="motorista1">
                        <option value="">teste</option>
                    </select>
                </div>
                <div class="col">
                    <label for="deposito1">Depósito</label>
                    <select name="deposito1" id="deposito1">
                        <option value="">teste</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label for="fabrica1">Fábrica</label>
                    <select name="fabrica1" id="fabrica1">
                        <option value="">teste</option>
                    </select>
                </div>
                <div class="col">
                    <label for="cavalo1">Cavalo</label>
                    <select name="cavalo1" id="cavalo1">
                        <option value="">teste</option>
                    </select>
                </div>
                <div class="col">
                    <label for="carreta1">Carreta</label>
                    <select name="carreta1" id="carreta1">
                        <option value="">teste</option>
                    </select>
                </div>
            </div>    
            `,

            pagina2: `
            <div class="row">
                <div class="col">
                    <label for="parada1_p2">Parada 1</label>
                    <select name="parada1_p2" id="parada1_p2">
                        <option value="">teste</option>
                    </select>
                </div>
                <div class="col">
                    <label for="parada2_p2">Parada 2</label>
                    <select name="parada2_p2" id="parada2_p2">
                        <option value="">teste</option>
                    </select>
                </div>
                <div class="col">
                    <label for="parada3_p2">Parada 3</label>
                    <select name="parada3_p2" id="parada3_p2">
                        <option value="">teste</option>
                    </select>
                </div>
                <div class="col">
                        <label for="parada4_p2">Parada 4</label>
                        <select name="parada4_p2" id="parada4_p2">
                            <option value="">teste</option>
                        </select>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label for="inicio1_p2">Inicio</label>
                    <input type="time" name="inicio1_p2" id="inicio1_p2">
                </div>
                <div class="col">
                    <label for="inicio2_p2">Inicio</label>
                    <input type="time" name="inicio2_p2" id="inicio2_p2">
                </div>
                <div class="col">
                    <label for="inicio3_p2">Inicio</label>
                    <input type="time" name="inicio3_p2" id="inicio3_p2">
                </div>
                <div class="col">
                    <label for="inicio4_p2">Inicio</label>
                    <input type="time" name="inicio4_p2" id="inicio4_p2">
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label for="fim1_p2">Fim</label>
                    <input type="time" name="fim1_p2" id="fim1_p2">
                </div>
                <div class="col">
                    <label for="fim2_p2">Fim</label>
                    <input type="time" name="fim2_p2" id="fim2_p2">
                </div>
                <div class="col">
                    <label for="fim3_p2">Fim</label>
                    <input type="time" name="fim3_p2" id="fim3_p2">
                </div>
                <div class="col">
                    <label for="fim4_p2">Fim</label>
                    <input type="time" name="fim4_p2" id="fim4_p2">
                </div>
            </div>
            <div>
            </div>`,

            pagina3: `
            <div class="row">
                <div class="col">
                    <label for="refeicao3">Refeição</label>
                    <select name="refeicao3" id="refeicao3">
                        <option value="">teste</option>
                    </select>
                </div>
                <div class="col">
                    <label for="tempoEspera3">Tempo de espera</label>
                    <select name="tempoEspera3" id="tempoEspera3">
                        <option value="">teste</option>
                    </select>
                </div>
                <div class="col">
                    <label for="retorno3">Encerramento de viagem <br> Retorno</label>
                    <input type="date" name="retorno3" id="retorno3">
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label for="inicio1_p3">Inicio</label>
                    <input type="time" name="inicio1_p3" id="inicio1_p3">
                </div>
                <div class="col">
                    <label for="inicio2_p3">Inicio</label>
                    <input type="time" name="inicio2_p3" id="inicio2_p3">
                </div>
                <div class="col">
                    <label for="hora3">Hora</label>
                    <input type="time" name="hora3" id="hora3">
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label for="fim1_p3">Fim</label>
                    <input type="time" name="fim1_p3" id="fim1_p3">
                </div>
                <div class="col">
                    <label for="fim2_p3">Fim</label>
                    <input type="time" name="fim2_p3" id="fim2_p3">
                </div>
                <div class="col">
                    <label for="idViagem3">Id viagem</label>
                    <input type="text" name="idViagem3" id="idViagem3">
                </div>
            </div>
            `,

            pagina4: `
            <div class="row">
                <div class="col">
                    <label for="parada1_p4">Parada 1</label>
                    <select name="parada1_p4" id="parada1_p4">
                        <option value="">teste</option>
                    </select>
                </div>
                <div class="col">
                    <label for="parada2_p4">Parada 2</label>
                    <select name="parada2_p4" id="parada2_p4">
                        <option value="">teste</option>
                    </select>
                </div>
                <div class="col">
                    <label for="parada3_p4">Parada 3</label>
                    <select name="parada3_p4" id="parada3_p4">
                        <option value="">teste</option>
                    </select>
                </div>
                <div class="col">
                        <label for="parada4_p4">Parada 4</label>
                        <select name="parada4_p4" id="parada4_p4">
                            <option value="">teste</option>
                        </select>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label for="inicio1_p4">Inicio</label>
                    <input type="time" name="inicio1_p4" id="inicio1_p4">
                </div>
                <div class="col">
                    <label for="inicio2_p4">Inicio</label>
                    <input type="time" name="inicio2_p4" id="inicio2_p4">
                </div>
                <div class="col">
                    <label for="inicio3_p4">Inicio</label>
                    <input type="time" name="inicio3_p4" id="inicio3_p4">
                </div>
                <div class="col">
                    <label for="inicio4_p4">Inicio</label>
                    <input type="time" name="inicio4_p4" id="inicio4_p4">
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label for="fim1_p4">Fim</label>
                    <input type="time" name="fim1_p4" id="fim1_p4">
                </div>
                <div class="col">
                    <label for="fim2_p4">Fim</label>
                    <input type="time" name="fim2_p4" id="fim2_p4">
                </div>
                <div class="col">
                    <label for="fim3_p4">Fim</label>
                    <input type="time" name="fim3_p4" id="fim3_p4">
                </div>
                <div class="col">
                    <label for="fim4_p4">Fim</label>
                    <input type="time" name="fim4_p4" id="fim4_p4">
                </div>
            </div>
            `,
        };

        this.botaoProximo.addEventListener("click", this.proximaPagina.bind(this));
        this.botaoAnterior.addEventListener("click", this.paginaAnterior.bind(this));

        this.atualizarEstiloNavegacao();
        this.mostrarConteudo();
    }

    fadeIn(element) {
        element.style.opacity = 0;
        element.style.display = "block";
        let opacity = 0;

        function fade() {
            opacity += 0.1;
            element.style.opacity = opacity;
            if (opacity <= 1) {
                requestAnimationFrame(fade);
            }
        }

        fade();
    }

    fadeOut(element) {
        let opacity = 1;
        const fadeInterval = setInterval(() => {
            if (opacity <= 0.1) {
                clearInterval(fadeInterval);
                element.style.display = "none";
            } else {
                opacity -= 0.1;
                element.style.opacity = opacity;
            }
        }, 50);
    }

    atualizarEstiloNavegacao() {
        const botoesNavegacao = document.querySelectorAll(".button-navegation");
        botoesNavegacao.forEach((botao) => {
            botao.classList.remove("pagina-atual");
        });
        const botaoAtual = document.querySelector(
            `.button-navegation[data-pagina="${this.paginaAtual}"]`
        );
        if (botaoAtual) {
            botaoAtual.classList.add("pagina-atual");
        }
        if (this.paginaAtual === "pagina4") {
            this.botaoSalvar.style.cursor = "pointer";
            this.botaoSalvar.disabled = false; // Habilita o botão de salvar
            this.botaoSalvar.classList.add("hover-efect");
        } else {
            this.botaoSalvar.style.cursor = "auto";
            this.botaoSalvar.disabled = true; // Desabilita o botão de salvar
            this.botaoSalvar.classList.remove("hover-efect");
        }
    }

    proximaPagina() {
        this.armazenarDados();
        switch (this.paginaAtual) {
            case "pagina1":
                this.paginaAtual = "pagina2";
                this.blocoBotaoProx.classList.add("space-between");
                this.botaoAnterior.style.display = "flex";
                break;
            case "pagina2":
                this.paginaAtual = "pagina3";
                break;
            case "pagina3":
                this.paginaAtual = "pagina4";
                this.botaoProximo.style.display = "none";
                break;
        }
        this.atualizarEstiloNavegacao();
        setTimeout(() => {
            this.fadeIn(this.blocoDiarioBorda);
            this.mostrarConteudo();
        }, this.timetOutTransitions);
    }

    paginaAnterior() {
        this.armazenarDados();
        switch (this.paginaAtual) {
            case "pagina2":
                this.paginaAtual = "pagina1";
                this.blocoBotaoProx.classList.add("space-between");
                this.botaoAnterior.style.display = "none";
                break;
            case "pagina3":
                this.paginaAtual = "pagina2";
                break;
            case "pagina4":
                this.paginaAtual = "pagina3";
                this.botaoProximo.style.display = "flex";
                break;
        }
        this.atualizarEstiloNavegacao();
        setTimeout(() => {
            this.fadeIn(this.blocoDiarioBorda);
            this.mostrarConteudo();
        }, this.timetOutTransitions);
    }

    mostrarConteudo() {
        this.blocoDiarioBorda.innerHTML = this.conteudos[this.paginaAtual];
        this.preencherDados();
    }

    armazenarDados() {
        const inputs = this.blocoDiarioBorda.querySelectorAll("input, select, textarea");
        inputs.forEach((input) => {
            this.dadosFormulario[input.name] = input.value;
        });
    }

    preencherDados() {
        const inputs = this.blocoDiarioBorda.querySelectorAll("input, select, textarea");
        inputs.forEach((input) => {
            if (this.dadosFormulario[input.name]) {
                input.value = this.dadosFormulario[input.name];
            }
        });
    }

    mostrarPopup() {
        setTimeout(() => {
            this.fadeIn(this.modal);
            this.modal.style.display = "block";

            this.btnConfirmar.addEventListener("click", this.enviarFormulario.bind(this));
            this.btnCancel.addEventListener("click", this.fecharPopup.bind(this));
            this.btnClose.addEventListener("click", this.fecharPopup.bind(this));
        }, this.timetOutTransitions);
    }

    async enviarFormulario() {
        this.armazenarDados();
        const formData = new FormData();
        for (const key in this.dadosFormulario) {
            formData.append(key, this.dadosFormulario[key]);
        }

        console.log('Dados do formulário enviados:', Object.fromEntries(formData.entries()));

        try {
            const response = await fetch(this.formRegistro.action, {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                this.fecharPopup();
                this.resetFormulario();
                window.location.reload();
            } else {
                console.error('Erro ao enviar formulário', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao enviar formulário catch', error);
        }
    }

    resetFormulario() {
        this.formRegistro.reset();
        this.dadosFormulario = {}; 
        this.paginaAtual = "pagina1";
        this.atualizarEstiloNavegacao();
        this.mostrarConteudo();
        this.botaoAnterior.style.display = "none";
        this.botaoProximo.style.display = "flex";
    }

    limparEventosPopup() {
        this.btnConfirmar.removeEventListener("click", this.enviarFormulario.bind(this));
        this.btnCancel.removeEventListener("click", this.fecharPopup.bind(this));
        this.btnClose.removeEventListener("click", this.fecharPopup.bind(this));
    }

    fecharPopup() {
        this.fadeOut(this.modal);
        setTimeout(() => {
            this.modal.style.display = "none";
            this.limparEventosPopup();
        }, 250);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    new ClientController();
});
