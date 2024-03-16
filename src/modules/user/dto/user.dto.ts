import { IsNotEmpty, IsString } from 'class-validator';

export class UserDTO {
    @IsNotEmpty()
    @IsString()
    phone           : string    

    @IsNotEmpty()
    @IsString()
    animal_category : string


    @IsNotEmpty()
    @IsString()
    clerk_id : string
}