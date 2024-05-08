export const config = {
    HOST: 'mysql-284a6074-bookdirectory.g.aivencloud.com',
    USER: 'avnadmin',
    PASSWORD: 'AVNS_pyn9SQEli3ioEb-TVV2',
    DB: 'defaultdb',
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    }
}

export const dialect = "mysql";