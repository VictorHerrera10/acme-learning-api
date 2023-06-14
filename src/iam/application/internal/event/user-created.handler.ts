import { IEventHandler } from "@nestjs/cqrs";
import { userId } from "../../../domain/model/value-objects/user-id.value-objets";
import { UserCreatedEvent } from "../../../domain/model/events/user-created.event";

export class UserCreatedHandler implements IEventHandler<userId>

  handle(event: UserCreatedEvent ) {
  console.log(UserCreatedEvent: ${)
}