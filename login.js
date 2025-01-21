document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // ป้องกันไม่ให้ฟอร์มส่งข้อมูล

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // ดึงข้อมูลจาก localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // ตรวจสอบการเข้าสู่ระบบ
    if (username === storedUsername && password === storedPassword) {
        document.getElementById('error-message').innerText = ''; // ลบข้อความผิดพลาด
        alert('Login successful!');
        // เปลี่ยนเส้นทางไปที่หน้า index.html
        window.location.href = 'index.html'; // หน้า index ที่ต้องการไป
    } else {
        document.getElementById('error-message').innerText = 'Invalid username or password';
    }
});
