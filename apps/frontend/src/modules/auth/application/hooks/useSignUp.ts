import { useState } from "react";
import { useNavigate } from "react-router";

import type { SignUpDTO } from "../dto/SignUpDTO";
import type { AuthSession } from "../../domain/models/AuthSession";
import { signUp as signUpUseCase } from "../use-cases/signUp";

export function useSignUp() {
  const navigate = useNavigate();

  const [session, setSession] = useState<AuthSession | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  async function signUp(dto: SignUpDTO) {
    try {
      setIsLoading(true);
      setAuthError(null);

      const authSession = await signUpUseCase(dto);

      setSession(authSession);
      localStorage.setItem("mini-casino-session", JSON.stringify(authSession));

      navigate("/profile");
    } catch {
      setAuthError("Could not create your account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return {
    session,
    isLoading,
    authError,
    signUp,
  };
}
