import { Injectable } from '@nestjs/common';
import { AnimalDTO } from './dto/animal.dto';
import { PrismaService } from 'src/shared/database/prisma.service';

@Injectable()
export class AnimalService {
  constructor(private prismaService: PrismaService) {}

  async cadastrarAnimal(dto: AnimalDTO) {
    const animal = await this.prismaService.animal.create({
        data: {
            identificator: dto.identificator,
            userId: dto.userId,
            pesos: {
              create:{
                number: dto.peso
              }
            },
            imagem: dto.imagem,
            category: dto.category,
            idade: dto.idade
        },
    });

    return animal;
  }

  async getAnimais(userId: string) {
    const animais = await this.prismaService.animal.findMany({
      where: {
        userId,
      },
      include:{
        pesos: true
      }
    });

    return animais;
  }

  async getIdentificator(identificator: string) {
    const animal = await this.prismaService.animal.findFirst({
      where:{
        identificator
      }
    });
    if(animal){
      return animal.identificator;
    }
    return undefined
  }

  async cadastrarPeso(peso:number, animalId: string) {
    const animais = await this.prismaService.peso.create({
      data:{
        number: peso,
        animalId
      }
    })

    return animais;
  }

  async getPesos(animalId: string) {
    const pesos = await this.prismaService.peso.findMany({
      where:{
        animalId
      }
    })

    return pesos;
  }

  async getAnimalBydId(id: string) {
    const animal = await this.prismaService.animal.findUnique({
      where: {
        id,
      },
  });

    return animal;
  }

  async updateAnimal(dto: AnimalDTO, id: string) {
    const updateAnimal = await this.prismaService.animal.update({
      where: {
        id,
      },
      data: {
        ...dto,
      },
    });

    return updateAnimal;
  }

  async deleteAnimal(id: string) {
    const deleteAnimal = await this.prismaService.animal.delete({
      where: {
        id,
      },
    });

    return deleteAnimal;
  }
}
