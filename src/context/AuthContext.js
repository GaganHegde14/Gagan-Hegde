"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { authAPI } from "@/services/api";

// Create the auth context
const AuthContext = createContext();

// Auth provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load user on initial render if token exists
  useEffect(() => {
    const loadUser = async () => {
      try {
        // Check if token exists in localStorage
        const token = localStorage.getItem("token");
        if (!token) {
          setLoading(false);
          return;
        }

        // Get user data
        const response = await authAPI.getMe();
        setUser(response.data.data);
      } catch (error) {
        console.error("Failed to load user:", error);
        localStorage.removeItem("token");
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  // Login function
  const login = async (credentials) => {
    try {
      setLoading(true);
      setError(null);

      const response = await authAPI.login(credentials);
      const { token, data } = response.data;

      // Save token to localStorage
      localStorage.setItem("token", token);

      // Set user data
      setUser(data);

      return { success: true };
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
      return {
        success: false,
        error: error.response?.data?.message || "Login failed",
      };
    } finally {
      setLoading(false);
    }
  };

  // Register function
  const register = async (userData) => {
    try {
      setLoading(true);
      setError(null);

      const response = await authAPI.register(userData);
      const { token, data } = response.data;

      // Save token to localStorage
      localStorage.setItem("token", token);

      // Set user data
      setUser(data);

      return { success: true };
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed");
      return {
        success: false,
        error: error.response?.data?.message || "Registration failed",
      };
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      setLoading(true);

      // Call logout API
      await authAPI.logout();

      // Remove token from localStorage
      localStorage.removeItem("token");

      // Clear user data
      setUser(null);

      return { success: true };
    } catch (error) {
      console.error("Logout error:", error);
      return {
        success: false,
        error: error.response?.data?.message || "Logout failed",
      };
    } finally {
      setLoading(false);
    }
  };

  // Check if user is authenticated
  const isAuthenticated = !!user;

  // Check if user is admin
  const isAdmin = user?.role === "admin";

  // Context value
  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    isAuthenticated,
    isAdmin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
