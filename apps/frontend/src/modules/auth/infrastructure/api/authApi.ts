const API_URL = import.meta.env.VITE_API_URL;

export const authApi = {
  async getAll() {
    const response = await fetch(`${API_URL}/auth`);

    if (!response.ok) {
      throw new Error("Error fetching auth");
    }

    return response.json();
  }
};
