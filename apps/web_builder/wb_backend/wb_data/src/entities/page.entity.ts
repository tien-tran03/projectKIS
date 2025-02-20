import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'pages' })
export class PageEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  urlAlias!: string;

  @Column()
  title!: string;

  @Column('text')
  metaTags!: string;

  @Column('json')
  sections!: object;
}
