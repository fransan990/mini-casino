import { Route, Routes } from "react-router";

import { HomePage } from "../shared/presentation/pages/HomePage";
import { LoginPage } from "../modules/auth/presentation/pages/LoginPage";
import { RegisterPage } from "../modules/auth/presentation/pages/RegisterPage";
import { LobbyPage } from "../modules/games/presentation/pages/LobbyPage";
import { RoulettePage } from "../modules/games/presentation/pages/RoulettePage";
import { SlotsPage } from "../modules/games/presentation/pages/SlotsPage";
import { BlackjackPage } from "../modules/games/presentation/pages/BlackjackPage";
import { ProfilePage } from "../modules/profile/presentation/pages/ProfilePage";
import { RankingPage } from "../modules/ranking/presentation/pages/RankingPage";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/lobby" element={<LobbyPage />} />
      <Route path="/games/roulette" element={<RoulettePage />} />
      <Route path="/games/slots" element={<SlotsPage />} />
      <Route path="/games/blackjack" element={<BlackjackPage />} />

      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/ranking" element={<RankingPage />} />
    </Routes>
  );
}
