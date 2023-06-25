import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { UsersCreateRequest } from "./dto/UsersCreateRequest";
import { UsersService } from "./users.service";

@Controller('user')
export class UsersController{
    constructor(
        @Inject(UsersService)
        private usersService: UsersService
    ){}
    @Post()
    public create(@Body() body: UsersCreateRequest){
        return this.usersService.create(body)    
    }
    @Get()
    public read(){
        return this.usersService.read();
    }
}
