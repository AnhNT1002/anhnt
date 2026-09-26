const salesReport = {
    branch: "Hà Nội",
    revenue: 500,
    subBranches: [
        {
            branch: "Cầu Giấy",
            revenue: 200,
            subBranches: [
                { branch: "Cầu Giấy 1", revenue: 50, subBranches: [] }
            ]
        },
        {
            branch: "Đống Đa",
            revenue: 150,
            subBranches: []
        }
    ]
};

// Tính doanh thu của nhánh hiện tại + tất cả nhánh con
function calculateTotalRevenue(report) {
    let total = report.revenue; // Lấy doanh thu của chính nhánh hiện tại

    // Mỗi nhánh con lại tự tính doanh thu của nó và các nhánh bên dưới
    for (const subBranch of report.subBranches) {
        total += calculateTotalRevenue(subBranch);
    }

    return total;
}

console.log(calculateTotalRevenue(salesReport)); // 900