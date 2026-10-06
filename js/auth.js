document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const roleBtns = document.querySelectorAll('.role-btn');
    const selectedRoleInput = document.getElementById('selectedRole');

    // Role Selection
    if (roleBtns.length > 0) {
        roleBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                roleBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                if (selectedRoleInput) {
                    selectedRoleInput.value = btn.dataset.role;
                }
            });
        });
    }

    // Login Submission
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const role = selectedRoleInput ? selectedRoleInput.value : 'student';
            // Validation placeholder
            if (role === 'admin') {
                window.location.href = 'admindashboard.html';
            } else {
                window.location.href = 'userdashboard.html';
            }
        });
    }

    // Signup Submission
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Validation placeholder
            if(window.showToast) window.showToast('Account created successfully!');
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1000);
        });
    }
});\n
