import { Column, Table, Model } from 'sequelize-typescript';

@Table
export class Task extends Model<Task> {
  @Column({
    allowNull: false,
  })
  taskText: string;
  @Column({
    allowNull: false,
    defaultValue: false,
  })
  isChecked: boolean;
  @Column({
    allowNull: false,
  })
  createdAt: Date;
  @Column({
    allowNull: false,
  })
  updatedAt: Date;
}
