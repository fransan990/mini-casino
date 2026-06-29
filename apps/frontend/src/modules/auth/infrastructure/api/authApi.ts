import type { SignInDTO } from "../../application/dto/SignInDTO";
import type { SignUpDTO } from "../../application/dto/SignUpDTO";
import type { AuthSession } from "../../domain/models/AuthSession";

function wait(milliseconds: number): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, milliseconds);
  });
}

export const authApi = {
  async signIn(dto: SignInDTO): Promise<AuthSession> {
    await wait(600);

    return {
      accessToken: "development-access-token",
      user: {
        id: "dev-user-id",
        username: dto.email.split("@")[0] || "player",
        email: dto.email,
        chips: 5000,
      },
    };
  },

  async signUp(dto: SignUpDTO): Promise<AuthSession> {
    await wait(600);

    return {
      accessToken: "development-access-token",
      user: {
        id: crypto.randomUUID(),
        username: dto.username,
        email: dto.email,
        chips: 5000,
      },
    };
  },
};
