import { getEnvConfig } from "@kis/common/src/utils/config";
import { generateTokens } from "@kis/common/src/utils/auth";

export const login = (req: any, res: any) => {
  const { username, password } = req.body;

  if (username !== "admin" || password !== "password") {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const envConfig = getEnvConfig();
  const { accessToken, refreshToken } = generateTokens(
    "123",
    envConfig.JWT_SECRET ?? '',
    envConfig.REFRESH_SECRET ?? ''
  );
  return res.json({ accessToken, refreshToken });
};
