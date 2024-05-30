const mysql = require("mysql");

class ConnectionDatabase {
  constructor() {
    // todos os dados abaixo deverão virar variáveis de ambiente
    this.connection = mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "",
      database: "registroviagensltd",
    });
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.connection.connect((err) => {
        if (err) {
          reject(err);
        } else {
          console.log("Conectado ao banco de dados MySQL");
          resolve();
        }
      });
    });
  }

  query(sql, params) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, params, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  beginTransaction() {
    return new Promise((resolve, reject) => {
      this.connection.beginTransaction((err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  commit() {
    return new Promise((resolve, reject) => {
      this.connection.commit((err) => {
        if (err) {
          this.connection.rollback(() => reject(err));
        } else {
          resolve();
        }
      });
    });
  }

  rollback() {
    return new Promise((resolve, reject) => {
      this.connection.rollback(() => resolve());
    });
  }

  close() {
    return new Promise((resolve, reject) => {
      this.connection.end((err) => {
        if (err) {
          reject(err);
        } else {
          console.log("Conexão com o banco de dados encerrada");
          resolve();
        }
      });
    });
  }
}

module.exports = ConnectionDatabase;
