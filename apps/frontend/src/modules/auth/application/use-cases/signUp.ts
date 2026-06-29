import type { SignUpDTO } from "../dto/SignUpDTO";
import { authApi } from "../../infrastructure/api/authApi";

export async function signUp(dto: SignUpDTO) {
  return authApi.signUp(dto);
}
