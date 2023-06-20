import { Injectable } from "@nestjs/common";
import { UsersCreateRequest } from "./dto/UsersCreateRequest";

@Injectable()
export class UsersService{

    public create(body: UsersCreateRequest){
        return {
            name: body.name,
            age: body.age,
        }
    }
}