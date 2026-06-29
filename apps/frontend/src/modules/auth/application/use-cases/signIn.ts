import type { SignInDTO } from "../dto/SignInDTO";
import { authApi } from "../../infrastructure/api/authApi";

export async function signIn(dto: SignInDTO) {
  return authApi.signIn(dto);
}
