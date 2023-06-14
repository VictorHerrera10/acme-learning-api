import { EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { CreatedUserCommand } from "../../../domain/model/commands/created-user.command";

@CreateUserHandler(CreatedUserCommand)
class CreateUserHandler implements ICommandHandler<CreateUserHandler>
  contructor(
    private publisher: EventPublisher,
  {
    const { username, email}
  }
  )