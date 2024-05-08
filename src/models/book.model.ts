import { Model, Table, Column, DataType, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table({
    tableName: 'bookdirectory'
})
export default class Book extends Model {

    @Column({
        type: DataType.STRING,
        primaryKey: true,
        autoIncrement: true,
        field: 'title',
    })
    title?: string;

    @Column({
        type: DataType.STRING,
        field: 'author'
    })
    author?: string;

    @Column({
        type: DataType.INTEGER,
        field: 'release_year'
    })
    release_year?: number;

    @Column({
        type: DataType.STRING,
        field: 'edition'
    })
    edition?: string;

    @Column({
        type: DataType.STRING,
        field: 'ISBN'
    })
    ISBN?: string;
}