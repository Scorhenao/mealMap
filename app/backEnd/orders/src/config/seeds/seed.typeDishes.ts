import { Seeder } from 'typeorm-extension';
import { TypeDish } from 'src/type-dishes/entities/type-dish.entity';
import { DataSource } from 'typeorm';

export class dishesSeed {
  public async seed(dataSource: DataSource) {
    const typeRepository = dataSource.getRepository(TypeDish);

    const typeDish = [
      { nameDishes: 'morning' },
      { nameDishes: 'noon' },
      { nameDishes: 'night' },
      { nameDishes: 'general' },
    ];

    for (const type of typeDish) {
      const typeExist = await typeRepository.findOne({
        where: { nameDishes: type.nameDishes },
      });
      if (!typeExist) {
        const newType = typeRepository.create(type);
        await typeRepository.save(newType);
      }
    }
  }
}
