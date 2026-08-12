window.Capacitor = window.Capacitor || {
  isNativePlatform: () => false,
  Plugins: {
    Preferences: {
      get: async ({ key }) => ({ value: localStorage.getItem(key) }),
      set: async ({ key, value }) => { localStorage.setItem(key, value); },
      remove: async ({ key }) => { localStorage.removeItem(key); }
    }
  }
};
