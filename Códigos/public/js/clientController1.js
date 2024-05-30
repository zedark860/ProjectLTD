import { Page1, Page2, Page3, Page4 } from './pageController.js';

class ClientController {
    constructor() {
        this.botaoProximo = document.getElementById("botao-prox");
        this.botaoAnterior = document.getElementById("botao-ant");
        this.blocoDiarioBorda = document.getElementById("bloco-principal");
        this.blocoBotaoProx = document.getElementById("bloco-botao-prox");
        this.formRegistro = document.getElementById('formRegistro');
        this.botaoSalvar = document.getElementById("btn-save");
        this.modal = document.getElementById("modal");
        this.btnCancel = document.getElementById("cancelar");
        this.btnConfirmar = document.getElementById("confirmar");
        this.btnClose = document.getElementsByClassName("close")[0];
        this.timetOutTransitions = 300;

        this.botaoSalvar.addEventListener("click", () => {
            this.paginaAtual.armazenarDados();
            this.mostrarPopup();
        });

        this.botaoProximo.addEventListener("click", this.proximaPagina.bind(this));
        this.botaoAnterior.addEventListener("click", this.paginaAnterior.bind(this));

        this.paginaAtual = new Page1(this.blocoDiarioBorda);
        this.paginaAtual.mostrarConteudo();
        this.atualizarEstiloNavegacao();
    }

    proximaPagina() {
        this.paginaAtual.armazenarDados();

        if (this.paginaAtual instanceof Page1) {
            this.paginaAtual = new Page2(this.blocoDiarioBorda, this.paginaAtual.dadosFormulario);
            this.blocoBotaoProx.classList.add("space-between");
            this.botaoAnterior.style.display = "flex";
        } else if (this.paginaAtual instanceof Page2) {
            this.paginaAtual = new Page3(this.blocoDiarioBorda, this.paginaAtual.dadosFormulario);
        } else if (this.paginaAtual instanceof Page3) {
            this.paginaAtual = new Page4(this.blocoDiarioBorda, this.paginaAtual.dadosFormulario);
            this.botaoProximo.style.display = "none";
        }

        this.atualizarEstiloNavegacao();
        setTimeout(() => {
            this.fadeIn(this.blocoDiarioBorda);
            this.paginaAtual.mostrarConteudo();
        }, this.timetOutTransitions);
    }

    paginaAnterior() {
        this.paginaAtual.armazenarDados();

        if (this.paginaAtual instanceof Page2) {
            this.paginaAtual = new Page1(this.blocoDiarioBorda, this.paginaAtual.dadosFormulario);
            this.blocoBotaoProx.classList.add("space-between");
            this.botaoAnterior.style.display = "none";
        } else if (this.paginaAtual instanceof Page3) {
            this.paginaAtual = new Page2(this.blocoDiarioBorda, this.paginaAtual.dadosFormulario);
        } else if (this.paginaAtual instanceof Page4) {
            this.paginaAtual = new Page3(this.blocoDiarioBorda, this.paginaAtual.dadosFormulario);
            this.botaoProximo.style.display = "flex";
        }

        this.atualizarEstiloNavegacao();
        setTimeout(() => {
            this.fadeIn(this.blocoDiarioBorda);
            this.paginaAtual.mostrarConteudo();
        }, this.timetOutTransitions);
    }

    atualizarEstiloNavegacao() {
        const botoesNavegacao = document.querySelectorAll(".button-navegation");
        botoesNavegacao.forEach((botao) => {
            botao.classList.remove("pagina-atual");
        });
    
        let paginaIndice;
        if (this.paginaAtual instanceof Page1) {
            paginaIndice = 1;
        } else if (this.paginaAtual instanceof Page2) {
            paginaIndice = 2;
        } else if (this.paginaAtual instanceof Page3) {
            paginaIndice = 3;
        } else if (this.paginaAtual instanceof Page4) {
            paginaIndice = 4;
        }
    
        const botaoAtual = document.querySelector(
            `.button-navegation[data-pagina="pagina${paginaIndice}"]`
        );
    
        if (botaoAtual) {
            botaoAtual.classList.add("pagina-atual");
        }
    
        if (this.paginaAtual instanceof Page4) {
            this.botaoSalvar.style.cursor = "pointer";
            this.botaoSalvar.disabled = false; // Habilita o botão de salvar
            this.botaoSalvar.classList.add("hover-efect");
        } else {
            this.botaoSalvar.style.cursor = "auto";
            this.botaoSalvar.disabled = true; // Desabilita o botão de salvar
            this.botaoSalvar.classList.remove("hover-efect");
        }
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

    async enviarFormulario() {
        this.paginaAtual.armazenarDados();
        const formData = new FormData();
        for (const key in this.paginaAtual.dadosFormulario) {
            formData.append(key, this.paginaAtual.dadosFormulario[key]);
        }

        console.log('Dados do formulário enviados:', Object.fromEntries(formData.entries()));

        try {
            const response = await fetch(this.formRegistro.action, {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (response.ok) {
                this.fecharPopup();
                this.mostrarPopupSucesso(data);
                this.resetFormulario();
                window.location.reload();
            } else {
                this.mostrarPopupErro(data);
                console.error('Erro ao enviar formulário', response.statusText);
            }
        } catch (error) {
            this.mostrarPopupErro({ message: 'Ocorreu um erro durante o processamento da solicitação.' });
            console.error('Erro ao enviar formulário catch', error);
        }
    }

    mostrarPopup() {
        setTimeout(() => {
            this.fadeIn(this.modal);
            this.modal.style.display = "block";

            this.btnConfirmar.addEventListener("click", this.enviarFormulario.bind(this));
            this.btnClose.addEventListener("click", this.fecharPopup.bind(this));
            this.btnCancel.addEventListener("click", this.fecharPopup.bind(this));
        }, this.timetOutTransitions);
    }

    mostrarPopupSucesso(data) {
        alert(`Dados Salvos com Sucesso!\nID inserido: ${data.insertedId}\nPróximo ID disponível: ${data.nextId}`);
    }

    mostrarPopupErro(data) {
        alert(`Ocorreu um erro ao processar a solicitação:\n${data.message}\nID para registro disponível: ${data.nextId}`);
    }

    resetFormulario() {
        this.formRegistro.reset();
        this.dadosFormulario = {}; 
        this.paginaAtual = new Page1(this.blocoDiarioBorda); // Definindo a página atual como Page1
        this.atualizarEstiloNavegacao();
        this.paginaAtual.mostrarConteudo();
        this.botaoAnterior.style.display = "none";
        this.botaoProximo.style.display = "flex";
    }

    limparEventosPopup() {
        popup.querySelectorAll('.close').forEach(btnClose => {
            btnClose.removeEventListener("click", () => this.fecharPopup());
        });
        this.btnConfirmar.removeEventListener("click", this.enviarFormulario.bind(this));
    }

    fecharPopup() {
        this.fadeOut(this.modal);
        setTimeout(() => {
            popup.style.display = "none";
            this.limparEventosPopup();
        }, 250);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    new ClientController();
});
