const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/BaseDados.db')


function run(sql, parametros){
    return new Promise((resolve, reject) => {
        db.run(sql, parametros, (err, rows)=>{
            if(err){
                reject(err)
            } else {
                resolve(rows)
            }
        })
    }) 
}

function all(sql, parametros){
    return new Promise((resolve, reject) => {
        db.all(sql, parametros, (err, rows)=>{
            if(err){
                reject(err)
            } else {
                resolve(rows)
            }
        })
    }) 
}

function get(sql, parametros){
    return new Promise((resolve, reject) => {
        db.get(sql, parametros, (err, rows)=>{
            if(err){
                reject(err)
            } else {
                resolve(rows)
            }
        })
    }) 
}

module.exports = {run, all, get};