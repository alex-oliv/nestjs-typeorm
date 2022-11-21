import { ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  name: 'users_view',
  schema: 'persons',
  expression: `SELECT * FROM persons.users`,
})
export class BrandsView {
  @ViewColumn({ name: 'id' })
  userId: number;

  @ViewColumn({ name: 'email' })
  userEmail: string;
}
