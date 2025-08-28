// Service API centralisé pour toutes les requêtes
class ApiService {
  private baseURL: string;
  private token: string | null = null;

  constructor() {
    this.baseURL = import.meta.env.VITE_API_URL || 'https://api.agriconnect-cameroun.com';
    this.token = localStorage.getItem('agriconnect_token');
  }

  // Configuration des headers
  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    return headers;
  }

  // Méthode générique pour les requêtes
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      headers: this.getHeaders(),
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API Request failed:', error);
      throw error;
    }
  }

  // Méthodes HTTP
  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  async post<T>(endpoint: string, data: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async put<T>(endpoint: string, data: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }

  // Authentification
  setToken(token: string) {
    this.token = token;
    localStorage.setItem('agriconnect_token', token);
  }

  clearToken() {
    this.token = null;
    localStorage.removeItem('agriconnect_token');
  }

  // APIs spécifiques
  
  // Données météorologiques
  async getWeatherData(location: string) {
    try {
      // API OpenWeatherMap (exemple)
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric&lang=fr`
      );
      return await response.json();
    } catch (error) {
      console.error('Weather API error:', error);
      // Données de fallback
      return {
        name: 'Douala',
        main: { temp: 28, humidity: 75 },
        weather: [{ description: 'Partiellement nuageux', icon: '02d' }],
        wind: { speed: 3.2 }
      };
    }
  }

  // Statistiques agricoles
  async getAgriculturalStats() {
    try {
      return await this.get('/api/agricultural-stats');
    } catch (error) {
      // Données de fallback depuis les fichiers JSON locaux
      const keyIndicators = await import('../data/keyIndicators.json');
      const chartData = await import('../data/chartData.json');
      return { keyIndicators: keyIndicators.default, chartData: chartData.default };
    }
  }

  // Analyse IA des maladies
  async analyzePlantDisease(imageFile: File) {
    try {
      const formData = new FormData();
      formData.append('image', imageFile);
      
      const response = await fetch(`${this.baseURL}/api/ai/analyze-disease`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.token}`,
        },
        body: formData,
      });
      
      return await response.json();
    } catch (error) {
      console.error('AI Analysis error:', error);
      // Simulation de réponse
      return {
        disease: 'Mildiou',
        confidence: 0.85,
        treatment: 'Application de fongicide à base de cuivre',
        severity: 'Modérée'
      };
    }
  }

  // Mise en relation
  async getPartners(filters?: any) {
    try {
      const queryParams = filters ? `?${new URLSearchParams(filters)}` : '';
      return await this.get(`/api/partners${queryParams}`);
    } catch (error) {
      // Données de fallback
      return [
        {
          id: 1,
          name: 'Coopérative Agricole de l\'Ouest',
          type: 'Producteur',
          location: 'Bafoussam',
          crops: ['Maïs', 'Haricot'],
          contact: '+237 6XX XXX XXX'
        }
      ];
    }
  }

  // Conseils techniques
  async getTechnicalAdvice(cropType: string, issue: string) {
    try {
      return await this.post('/api/technical-advice', { cropType, issue });
    } catch (error) {
      // Conseil de fallback
      return {
        advice: 'Pour optimiser votre culture, assurez-vous d\'un bon drainage et d\'un apport nutritif équilibré.',
        expert: 'Ing. Agronome',
        priority: 'Moyenne'
      };
    }
  }
}

export const apiService = new ApiService();
export default apiService;