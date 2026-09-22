class Employee {
    constructor(id, name, baseSalary) {
        this.id = id;
        this.name = name;
        this.baseSalary = baseSalary;
    }

    calculateSalary() {
        return this.baseSalary;
    }
}

class Developer extends Employee {
    constructor(id, name, baseSalary, overtimeHours) {
        super(id, name, baseSalary);
        this.overtimeHours = overtimeHours;
    }

    calculateSalary() {
        return this.baseSalary + this.overtimeHours * 200000;
    }
}

class Manager extends Employee {
    constructor(id, name, baseSalary, bonus) {
        super(id, name, baseSalary);
        this.bonus = bonus;
    }

    calculateSalary() {
        return this.baseSalary + this.bonus;
    }
}

const employees = [
    new Developer(1, "Nguyễn Văn A", 12000000, 10),
    new Developer(2, "Trần Thị B", 15000000, 5),
    new Manager(3, "Lê Văn C", 20000000, 5000000),
    new Manager(4, "Phạm Thị D", 18000000, 3000000)
];

function calculateTotalSalary(employeeList) {
    let total = 0;

    for (let employee of employeeList) {
        total += employee.calculateSalary();
    }

    return total;
}

console.log(calculateTotalSalary(employees));

const employeeList = document.getElementById("employee-list");

for (let employee of employees) {
    employeeList.innerHTML += `
        <tr>
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee instanceof Developer ? "Developer" : "Manager"}</td>
            <td>${employee.baseSalary.toLocaleString("vi-VN")} đ</td>
            <td>${employee.calculateSalary().toLocaleString("vi-VN")} đ</td>
        </tr>
    `;
}

const totalSalary = calculateTotalSalary(employees);

document.getElementById("total-salary").innerText =
    totalSalary.toLocaleString("vi-VN") + " đ";