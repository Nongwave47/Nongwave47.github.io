document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // ป้องกันไม่ให้ฟอร์มส่งข้อมูล

    // ดึงค่าจากช่องกรอกข้อมูล
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // ตรวจสอบความถูกต้องของข้อมูล
    if (username === '' || password === '' || confirmPassword === '') {
        document.getElementById('error-message').innerText = 'Please fill in all fields';
    } else if (password !== confirmPassword) {
        document.getElementById('error-message').innerText = 'Passwords do not match';
    } else {
        // ลบข้อความผิดพลาด
        document.getElementById('error-message').innerText = '';
        
        // บันทึกข้อมูลลงใน localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        // แจ้งเตือนผู้ใช้ว่าการสมัครสมาชิกสำเร็จ
        alert('Registration successful! Redirecting to login page...');

        // เปลี่ยนเส้นทางกลับไปยังหน้า login.html
        window.location.href = 'login.html';
    }
});
