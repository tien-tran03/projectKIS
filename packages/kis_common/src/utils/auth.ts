//jwt
import * as jwt from 'jsonwebtoken';
import { getRedisClient } from "./redis";

export type Token = {
  token: string;
}

export const generateTokens = (
  userId: string,
  jwtSecret: string,
  refreshSecret: string,
) => {
  const accessToken = jwt.sign({ userId }, jwtSecret, { expiresIn: "15m" });
  const refreshToken = jwt.sign({ userId }, refreshSecret, { expiresIn: "7d" });
  return { accessToken, refreshToken };
};

export const verifyToken = async (
  token: string,
  jwtSecret: string,
) => {
  const redisClient = getRedisClient();
  const isBlacklisted = await redisClient.get(token);
  if (isBlacklisted) throw new Error("Token revoked");
  return jwt.verify(token, jwtSecret);
};

export const revokeToken = async (token: string) => {
  const redisClient = getRedisClient();
  await redisClient.set(token, "blacklisted", { EX: 3600 });
};

export const verifyRefreshToken = async (
  refreshToken: string,
  refreshSecret: string,
) => {
  return jwt.verify(refreshToken, refreshSecret);
};
