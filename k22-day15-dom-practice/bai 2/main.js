// Lấy input mật khẩu
const password = document.querySelector("#password");

// Lấy nút Hiện/Ẩn
const btn = document.querySelector("#showBtn");

// Khi bấm nút
btn.addEventListener("click", () => {

  // Nếu mật khẩu đang bị ẩn
  if (password.type === "password") {
    password.type = "text";
    btn.textContent = "Ẩn";
  } 
  
  // Nếu mật khẩu đang hiện
  else {
    password.type = "password";
    btn.textContent = "Hiện";
  }
});