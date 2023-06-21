import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength, isString } from "class-validator";

export class CreateEstudianteDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    description: string;

    @IsArray({ always: true })
    @IsString({ each: true })
    @IsOptional()
    generos: string[]
}
