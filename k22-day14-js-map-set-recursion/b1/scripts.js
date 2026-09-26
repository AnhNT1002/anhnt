const userA_searches = ["áo thun", "quần jeans", "áo khoác", "áo thun", "giày cừu"];
const userB_searches = ["quần jeans", "mũ bảo hiểm", "giày cừu", "balo"];

// Loại bỏ phần tử trùng và trả về Array mới
function getUniqueTags(arr) {
    return [...new Set(arr)];
}

// Tìm các tag xuất hiện ở cả arr1 và arr2
function getCommonTags(arr1, arr2) {
    const uniqueArr1 = getUniqueTags(arr1); // Loại trùng arr1
    const set2 = new Set(arr2); // Chuyển arr2 thành Set để dùng .has()

    return uniqueArr1.filter(tag => set2.has(tag)); // Chỉ giữ tag có trong arr2
}

// Kiểm tra kết quả
console.log(getCommonTags(userA_searches, userB_searches));
console.log(getCommonTags(["áo thun", "áo thun", "balo"], ["áo thun"]));
console.log(getCommonTags(["áo thun"], ["balo"]));
console.log(getUniqueTags([]));