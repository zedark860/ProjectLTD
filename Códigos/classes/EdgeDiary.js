class EdgeDiary {
    constructor(formData) {
        this.travelDate = formData.travelDate;
        this.start = formData.start;
        this.driver = formData.driver;
        this.warehouse = formData.warehouse;
        this.factory = formData.factory;
        this.horse = formData.horse;
        this.cart = formData.cart;
    }

    getTravelDate() {
        return this.travelDate;
    }

    getStart() {
        return this.start;
    }

    getDriver() {
        return this.driver;
    }

    getWarehouse() {
        return this.warehouse;
    }

    getFactory() {
        return this.factory;
    }

    getHorse() {
        return this.horse;
    }

    getCart() {
        return this.cart;
    }

    async insertDataEdgeDiary(db, tripId) {
        try {
            const sql = `INSERT INTO Diario_de_Borda 
            (id_viagem, data_viagem, inicio, motorista, deposito, fabrica, cavalo, carreta) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

            const values = [
                tripId,
                this.getTravelDate(),
                this.getStart(),
                this.getDriver(),
                this.getWarehouse(),
                this.getFactory(),
                this.getHorse(),
                this.getCart()
            ];

            console.log("Valores Diario de borda " + values);

            await db.query(sql, values);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = EdgeDiary;