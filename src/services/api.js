import axios from "axios";

// Create an axios instance with default config
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to add the auth token to requests
api.interceptors.request.use(
  (config) => {
    // Get the token from localStorage if we're in the browser
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle 401 Unauthorized errors (token expired or invalid)
    if (error.response && error.response.status === 401) {
      // Clear the token and redirect to login if we're in the browser
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
        // Redirect to login page
        window.location.href = "/admin/login";
      }
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  register: (userData) => api.post("/auth/register", userData),
  login: (credentials) => api.post("/auth/login", credentials),
  getMe: () => api.get("/auth/me"),
  logout: () => api.get("/auth/logout"),
};

// Projects API
export const projectsAPI = {
  getAll: (params) => api.get("/projects", { params }),
  getById: (id) => api.get(`/projects/${id}`),
  create: (projectData) => api.post("/projects", projectData),
  update: (id, projectData) => api.put(`/projects/${id}`, projectData),
  delete: (id) => api.delete(`/projects/${id}`),
  uploadImage: (id, formData) =>
    api.put(`/projects/${id}/image`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
};

// Certifications API
export const certificationsAPI = {
  getAll: (params) => api.get("/certifications", { params }),
  getById: (id) => api.get(`/certifications/${id}`),
  create: (certificationData) => api.post("/certifications", certificationData),
  update: (id, certificationData) =>
    api.put(`/certifications/${id}`, certificationData),
  delete: (id) => api.delete(`/certifications/${id}`),
  uploadImage: (id, formData) =>
    api.put(`/certifications/${id}/image`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
};

// Contact API
export const contactAPI = {
  submit: (contactData) => api.post("/contact", contactData),
  getAll: (params) => api.get("/contact", { params }),
  getById: (id) => api.get(`/contact/${id}`),
  update: (id, statusData) => api.put(`/contact/${id}`, statusData),
  delete: (id) => api.delete(`/contact/${id}`),
};

// About API
export const aboutAPI = {
  get: () => api.get("/about"),
  update: (aboutData) => api.put("/about", aboutData),
  uploadProfileImage: (formData) =>
    api.put("/about/image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  uploadResume: (formData) =>
    api.put("/about/resume", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
};

// Visitor API
export const visitorAPI = {
  record: (pageData) => api.post("/visitors", pageData),
  getStats: () => api.get("/visitors/stats"),
};

// Blog API
export const blogAPI = {
  getAll: (params) => api.get("/blogs", { params }),
  getById: (id) => api.get(`/blogs/${id}`),
  getBySlug: (slug) => api.get(`/blogs/slug/${slug}`),
  create: (blogData) => api.post("/blogs", blogData),
  update: (id, blogData) => api.put(`/blogs/${id}`, blogData),
  delete: (id) => api.delete(`/blogs/${id}`),
  uploadImage: (id, formData) =>
    api.put(`/blogs/${id}/image`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  addComment: (id, commentData) =>
    api.post(`/blogs/${id}/comments`, commentData),
  like: (id) => api.put(`/blogs/${id}/like`),
};

// Testimonials API
export const testimonialsAPI = {
  getAll: (params) => api.get("/testimonials", { params }),
  getById: (id) => api.get(`/testimonials/${id}`),
  create: (testimonialData) => api.post("/testimonials", testimonialData),
  update: (id, testimonialData) =>
    api.put(`/testimonials/${id}`, testimonialData),
  delete: (id) => api.delete(`/testimonials/${id}`),
  uploadImage: (id, formData) =>
    api.put(`/testimonials/${id}/image`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
};

export default api;
