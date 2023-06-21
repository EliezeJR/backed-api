
import { IsNotEmpty } from "class-validator";export class CreateGeneroDto {
    @IsNotEmpty()
    name: string;

}
