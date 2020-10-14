import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity({ name: 'customer_lucas_b'})
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  company: string;

  @Column()
  position: string;

  @Column({ type: 'date' })
  birthday: Date;
}




