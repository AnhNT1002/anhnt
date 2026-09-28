// Lấy ảnh lớn
const mainImage = document.querySelector("#mainImage");

// Lấy tất cả thumbnail
const thumbnails = document.querySelectorAll(".thumbnail");

// Duyệt qua từng thumbnail
thumbnails.forEach((thumbnail) => {

  // Khi click vào thumbnail
  thumbnail.addEventListener("click", () => {

    // Đổi ảnh lớn
    mainImage.src = thumbnail.src;
    mainImage.alt = thumbnail.alt;

    // Xóa active của tất cả thumbnail
    thumbnails.forEach((item) => {
      item.classList.remove("active");
    });

    // Thêm active vào ảnh vừa click
    thumbnail.classList.add("active");
  });

});