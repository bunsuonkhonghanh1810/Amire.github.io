// Định nghĩa các điểm cuộn mà bạn muốn theo dõi
const scrollPositions = {
    home: 0,
    product: 800, // 800px từ đầu trang
    introduce: 1600, // 1600px từ đầu trang
    contact: 2400 // 2400px từ đầu trang
};

// Hàm để cập nhật lớp active cho các liên kết trong header
function updateNavbar() {
    const navLinks = document.querySelectorAll('.HPIC');
    let currentLink = null;

    // Xác định liên kết hiện tại dựa trên vị trí cuộn
    for (const [key, position] of Object.entries(scrollPositions)) {
        if (window.scrollY >= position) {
            currentLink = document.querySelector(`.HPIC[data-target="${key}"]`);
        } else {
            break; // Dừng lại khi không còn trong phạm vi cuộn
        }
    }

    // Cập nhật lớp active cho liên kết hiện tại
    navLinks.forEach(link => link.classList.remove('active'));
    if (currentLink) {
        currentLink.classList.add('active');
    }
}

// Lắng nghe sự kiện cuộn trang để cập nhật lớp active
window.addEventListener('scroll', updateNavbar);

// Gọi hàm để cập nhật trạng thái ban đầu
updateNavbar();
