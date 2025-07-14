export const load = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

export const save = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
