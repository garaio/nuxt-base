declare module '@nuxt/schema' {
  interface RuntimeConfig {
    public: {
      appInsightsInstrumentationKey: string;
      backendUrl: string;
      environment: "Production" | "Staging" | "Preview" | "Development";
    }
  }
}
// It is always important to ensure you import/export something when augmenting a type
export {}