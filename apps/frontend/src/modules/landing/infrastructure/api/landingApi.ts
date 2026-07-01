const API_URL = import.meta.env.VITE_API_URL;

export const landingApi = {
  async getAll() {
    const response = await fetch(`${API_URL}/landing`);

    if (!response.ok) {
      throw new Error("Error fetching landing");
    }

    return response.json();
  }
};
