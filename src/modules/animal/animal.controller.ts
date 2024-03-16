import { Body, Controller, Get, NotFoundException, Param, ParseUUIDPipe, Post } from "@nestjs/common";
import { AnimalService } from "./animal.service";
import { AnimalDTO, PesoDTO, getPesoDTO } from "./dto/animal.dto";
import { ActiveUserId } from "src/shared/database/decorators/activerUserId";
import { UserService } from "../user/user.service";
import { log } from "console";

@Controller('animal')
export class AnimalController {
  constructor(
    private readonly animalService: AnimalService,
    private readonly criadorService: UserService,
  ) {}

  @Post('cadastrar-animal')
  async cadastrarAnimal(
    @Body() animalDTO: AnimalDTO,
    @ActiveUserId() userId: string,
  ) {

    const { identificator, updatedAt, idade, imagem, peso, category} = animalDTO
    
    const user = await this.criadorService.getUserBydId(userId);

    if (!user) {
      throw new NotFoundException();
    }

    return await this.animalService.cadastrarAnimal({
      idade, identificator, imagem, peso, updatedAt, userId: user.id, category
    })
  }

  @Get('get-animals')
  async getAnimais(@ActiveUserId() userId: string) {
    const user = await this.criadorService.getUserBydId(userId);
    
    if (!user) {
      throw new NotFoundException();
    }
    const animals = await this.animalService.getAnimais(user.id);
    
    return animals
  }

  @Post('cadastrar-peso')
  async getAnimaisCriadorId(
   @ActiveUserId() userId: string, @Body() pesoDTO: PesoDTO ){
    const { animalId, peso} = pesoDTO
    const user = await this.criadorService.getUserBydId(userId);

    if (!user) {
      throw new NotFoundException();
    }

    return this.animalService.cadastrarPeso(peso, animalId);
  }

  @Get('get-pesos/:id')
  async getPesosAnimal(
   @ActiveUserId() userId: string, @Param('id')
   animalId: string ){
    const user = await this.criadorService.getUserBydId(userId);

    if (!user) {
      throw new NotFoundException();
    }

    return this.animalService.getPesos(animalId);
  }

  @Get('get-identificator/:id')
  async getIdentificator(
   @ActiveUserId() userId: string, @Param('id')
   animalId: string ){
    const user = await this.criadorService.getUserBydId(userId);

    if (!user) {
      throw new NotFoundException();
    }

    return this.animalService.getIdentificator(animalId);
  }

}