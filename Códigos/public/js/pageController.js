
class BasePage {
    constructor(conteudo, blocoDiarioBorda) {
        this.conteudo = conteudo;
        this.blocoDiarioBorda = blocoDiarioBorda;
        this.dadosFormulario = {};
    }

    mostrarConteudo() {
        this.blocoDiarioBorda.innerHTML = this.conteudo;
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
}

export class Page1 extends BasePage {
    constructor(blocoDiarioBorda, dadosFormularioAnterior = {}) {
        super(`
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
        `, blocoDiarioBorda);

        this.dadosFormulario = dadosFormularioAnterior;
    }
}

export class Page2 extends BasePage {
    constructor(blocoDiarioBorda, dadosFormularioAnterior = {}) {
        super(`
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
        </div>`, blocoDiarioBorda);

        this.dadosFormulario = dadosFormularioAnterior;
    }
}

export class Page3 extends BasePage {
    constructor(blocoDiarioBorda, dadosFormularioAnterior = {}) {
        super(`
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
        `, blocoDiarioBorda
        )

        this.dadosFormulario = dadosFormularioAnterior;
    }
}

export class Page4 extends BasePage {
    constructor(blocoDiarioBorda, dadosFormularioAnterior = {}) {
        super(`
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
        `, blocoDiarioBorda);

        this.dadosFormulario = dadosFormularioAnterior;
    }
}
