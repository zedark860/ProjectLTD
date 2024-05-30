
class RouteToFactory {
    constructor(formData) {
        this.stops = {
            stop1: {
                type: formData.stop1Type,
                start: formData.stop1Start,
                end: formData.stop1End,
            },
            stop2: {
                type: formData.stop2Type,
                start: formData.stop2Start,
                end: formData.stop2End,
            },
            stop3: {
                type: formData.stop3Type,
                start: formData.stop3Start,
                end: formData.stop3End,
            },
            stop4: {
                type: formData.stop4Type,
                start: formData.stop4Start,
                end: formData.stop4End,
            }
        };
    }

    getStopTimes(stopNumber) {
        return this.stops[`stop${stopNumber}`] || null;
    }

    async insertDataToFactory(db, tripId) {
        try {
            const sql = `INSERT INTO Parada_Ida 
            (id_viagem, tipo, inicio, fim) 
            VALUES (?, ?, ?, ?);`;

            for (let i=1;i <= Object.keys(this.stops).length; i++) {
                const stop = this.getStopTimes(i);
                if (stop) {
                    const values = [tripId, stop.type, stop.start, stop.end];
                    console.log("Valores ida fábrica " + values);
                    await db.query(sql, values);
                }
            }
        } catch (error) {
            throw error;
        }
    }
}

module.exports = RouteToFactory;