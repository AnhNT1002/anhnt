const cart = new Map();

const voucherMap = new Map([
    ["SALE10", 10],
    ["SALE20", 20],
    ["SALE50",20]
]);

// Thêm sản phẩm vào giỏ hàng
function addToCart(productId, productInfo) {
    // Có rồi → chỉ tăng số lượng
    if (cart.has(productId)) {
        cart.get(productId).quantity++;
        return;
    }

    // Chưa có → tạo sản phẩm mới với quantity = 1
    cart.set(productId, { ...productInfo, quantity: 1 });
}

// Tính tổng tiền của giỏ hàng
function getTotalPrice() {
    let total = 0;

    // Tổng = giá × số lượng của từng sản phẩm
    for (const product of cart.values()) {
        total += product.price * product.quantity;
    }

    return total;
}

// Áp dụng voucher
function applyVoucher(voucherMap) {
    const total = getTotalPrice();
    const code = prompt("Nhập mã giảm giá:");

    // Không nhập hoặc mã sai → trả giá gốc
    if (!code || !voucherMap.has(code)) return total;

    // Mã đúng → lấy % giảm và tính giá mới
    const discount = voucherMap.get(code);
    return total * (1 - discount / 100);
}

addToCart(101, { name: "Áo thun", price: 150000 });
addToCart(102, { name: "Quần jeans", price: 300000 });
addToCart(101, { name: "Áo thun", price: 150000 });

console.log("Số loại sản phẩm:", cart.size);
console.log("Sản phẩm 101:", cart.get(101));
console.log("Sản phẩm 102:", cart.get(102));

console.log("Tổng tiền:", getTotalPrice());
console.log("Sau giảm giá:", applyVoucher(voucherMap));