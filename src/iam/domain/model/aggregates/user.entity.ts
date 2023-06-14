import { AggregateRoot } from "@nestjs/cqrs";
import { Entity } from "typeorm";
import { EmailAddress } from "../value-objects/email-addres.value-object";
import { UserCreatedEvent } from "../events/user-created.event";

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

onCreation() :void {
   this.apply(new UserCreatedEvent(this.id));
}