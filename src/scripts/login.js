import { loginAdmin } from "../utils/api.js";
document.addEventListener("DOMContentLoaded", () => {
  const userBtn = document.getElementById("userBtn");
  const adminBtn = document.getElementById("adminBtn");
  const userForm = document.getElementById("userForm");
  const adminForm = document.getElementById("adminForm");
  userForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      alert("Inloggning som användare lyckades (demo)");
      window.location.href = "/index.html";
    } catch (err) {
      alert("Inloggning misslyckades. Kontrollera uppgifterna.");
    }
  });
  adminForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const adminID = document.getElementById("admin-email").value;
    const adminPassword = document.getElementById("admin-password").value;
    try {
      const result = await loginAdmin(adminID, adminPassword);
      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));
      window.location.href = "/pages/admin-dashboard.html";
    } catch (err) {
      alert("Inloggning misslyckades. Kontrollera uppgifterna.");
    }
  });
  userBtn.addEventListener("click", () => {
    userBtn.classList.add("active");
    adminBtn.classList.remove("active");
    userForm.classList.add("active");
    adminForm.classList.remove("active");
  });
  adminBtn.addEventListener("click", () => {
    adminBtn.classList.add("active");
    userBtn.classList.remove("active");
    adminForm.classList.add("active");
    userForm.classList.remove("active");
  });
});
