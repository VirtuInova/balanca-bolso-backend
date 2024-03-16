import { IsNumber, IsNotEmpty, IsOptional, IsDateString, IsString, IsByteLength, IsInt } from 'class-validator';

export class AnimalDTO {
  @IsString()
  @IsNotEmpty()
  identificator : string

  @IsOptional()
  @IsDateString()
  updatedAt : string

  @IsNumber()
  @IsNotEmpty()
  peso: number

  @IsNotEmpty()
  imagem: string

  @IsNotEmpty()
  @IsString()
  category: string
  
  @IsString()
  @IsNotEmpty()
  idade: string

  @IsString()
  @IsOptional()
  userId: string
}

export class PesoDTO{
  @IsInt()
  @IsNotEmpty()
  peso: number

  @IsString()
  @IsNotEmpty()
  animalId: string
}

export class getPesoDTO{
  @IsString()
  @IsNotEmpty()
  animalId: string
}