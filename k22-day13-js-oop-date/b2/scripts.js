function timeAgo(dateString) {
    const now = new Date();
    const date = new Date(dateString);

    const diff = now - date;
    const diffMinutes = Math.floor(diff / (1000 * 60));
    const diffHours = Math.floor(diffMinutes / 60);

    if (diffMinutes < 1) return "Vừa xong";
    if (diffMinutes < 60) return `${diffMinutes} phút trước`;
    if (diffHours < 24) return `${diffHours} giờ trước`;

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

function getCountdown(targetDateString) {
    const now = new Date();
    const target = new Date(targetDateString);
    const diff = target - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds };
}

function isWeekend(dateString) {
    const day = new Date(dateString).getDay();

    return day === 0 || day === 6;
}

console.log(timeAgo("2026-09-21T21:00:00+07:00"));

console.log(
    getCountdown("2026-09-25T15:30:20+07:00")
);

console.log(isWeekend("2026-09-19"));
console.log(isWeekend("2026-09-20"));
console.log(isWeekend("2026-09-21"));