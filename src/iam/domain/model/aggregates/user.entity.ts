import { AggregateRoot } from "@nestjs/cqrs";
import { Entity } from "typeorm";
import { EmailAddress } from "../value-objects/email-addres.value-object";

@Entity(users)
class User extends AggregateRoot{
  @PrimaryGeneratedColumn (uuid)
  id: string;
  @column()
  username: string;
  @column (() => EmailAddress)
  email: EmailAddress;
  @column({name: password})
  password: string;

}

