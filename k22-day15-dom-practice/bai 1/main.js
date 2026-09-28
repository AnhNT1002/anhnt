// Lấy nút
const btn = document.querySelector("#themeBtn");
// lấy body
const body = document.body;

btn.addEventListener("click",() =>{
    body.classList.toggle("dark-mode");

    // Kiểm tra đang tối hay sáng
  btn.textContent = body.classList.contains("dark-mode")
   if (body.classList.contains("dark-mode")) {
        btn.textContent = "Chế độ sáng";
    } else {
    btn.textContent = "Chế độ tối";
    }
});