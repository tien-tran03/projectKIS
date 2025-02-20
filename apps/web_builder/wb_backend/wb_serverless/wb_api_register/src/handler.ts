
import { APIGatewayProxyHandler } from 'aws-lambda';
import * as yup from 'yup';
import { getEnvConfig, loadEnvConfig } from '@kis/common';
import { getAppDataSource } from '@kis/wb-data/dist/app-data-source';
import { UserEntity } from '@kis/wb-data/dist/entities';
import bcrypt from 'bcryptjs';

function getConnectionOptions() {
  const envConfig = getEnvConfig();

  const connectionOptions = {
    host: envConfig.DB_HOST,
    port: Number(envConfig.DB_PORT),
    username: envConfig.DB_USER,
    password: envConfig.DB_PASSWORD,
    database: envConfig.DB_NAME,
  };

  return connectionOptions;
}

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().min(6).required(),
});

export const register: APIGatewayProxyHandler = async (event) => {
  loadEnvConfig();
  const body = JSON.parse(event.body ?? '{}');

  try {
    await schema.validate(body);

    const appDataSource = getAppDataSource(
      getConnectionOptions()
    );

    if (!appDataSource.isInitialized) {
      await appDataSource.initialize();
    }

    // Mã hóa mật khẩu
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(body.password, salt);

    const user = new UserEntity();
    user.username = body.username;
    user.password_hash = passwordHash;

    await appDataSource.manager.save(user);

    return {
      statusCode: 201,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'User registered', userId: user.id }),
    };
  } catch (error: any) {
    console.error('Lỗi:', error);
    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error: error.message }),
    };
  }
};
