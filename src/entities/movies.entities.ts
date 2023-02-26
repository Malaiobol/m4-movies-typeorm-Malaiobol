import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn 
} from 'typeorm'

@Entity('movies')
class Movie{

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({
        unique: true, 
        length:50,
    })
    name: string

    @Column({ nullable: true })
    description: string

    @Column({
        
    })
    duration: number

    @Column({

    })
    price: number
}   

export {
    Movie
}