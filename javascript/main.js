const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// تحقق من الوضع الحالي عند تحميل الصفحة
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.querySelector('.fa-moon').classList.add('active');
} else {
  themeToggle.querySelector('.fa-sun').classList.add('active');
}

// تبديل الوضع عند النقر على الزر
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');

  // حفظ الوضع في localStorage
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

  // تبديل الأيقونات
  themeToggle.querySelector('.fa-sun').classList.toggle('active');
  themeToggle.querySelector('.fa-moon').classList.toggle('active');
});