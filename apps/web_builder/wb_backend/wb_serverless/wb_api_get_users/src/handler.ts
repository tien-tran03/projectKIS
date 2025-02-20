//import { AppDataSource, UserEntity } from '@kis/wb-data';
import { AppDataSource, UserEntity } from '../../../wb_data/src';


export const handler = async () => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }

  const userRepository = AppDataSource.getRepository(UserEntity);
  const users = await userRepository.find();

  return {
    statusCode: 200,
    body: JSON.stringify(users),
  };
};