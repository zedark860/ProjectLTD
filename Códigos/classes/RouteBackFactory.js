const RouteToFactory = require("./RouteToFactory");

class RouteBackFactory extends RouteToFactory {
    // se não puder herdar é só fazer o mesmo que RouteToFactory
    constructor(stops) {
        super(stops);
    }

    async insertDataBackFactory(db, tripId) {
        try {
            const sql = `INSERT INTO Parada_Volta 
            (id_viagem, tipo, inicio, fim) 
            VALUES (?, ?, ?, ?)`;

            for (let i = 1; i <= Object.keys(this.stops).length; i++) {
                const stop = this.getStopTimes(i);
                if (stop) {
                    const values = [tripId, stop.type, stop.start, stop.end];
                    console.log("Valores volta fábrica " + values);
                    await db.query(sql, values);
                }
            }  
        } catch (error) {
            throw error;
        }
    }
}

module.exports = RouteBackFactory;