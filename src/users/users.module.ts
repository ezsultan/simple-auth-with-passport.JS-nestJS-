import { Module } from "@nestjs/common";
import { UsersResolver } from "./users.resolver";
import { UsersService } from "./users.service";

@Module({
    imports: [UsersService],
    providers: [UsersResolver, UsersService]
})
export class UsersModule {}