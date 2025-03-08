"use client";

import { ThemeProvider } from "./ThemeContext";
import { AuthProvider } from "./AuthContext";

export function Providers({ children }) {
  return (
    <AuthProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </AuthProvider>
  );
}
