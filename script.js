// ===== 中英切换 =====
const btnZh = document.getElementById('btn-zh');
const btnEn = document.getElementById('btn-en');

function setLang(lang) {
  if (lang === 'zh') {
    document.body.classList.add('lang-zh');
    btnZh.classList.add('active');
    btnEn.classList.remove('active');
  } else {
    document.body.classList.remove('lang-zh');
    btnEn.classList.add('active');
    btnZh.classList.remove('active');
  }
}

if (btnZh) {
  btnZh.addEventListener('click', () => setLang('zh'));
}
if (btnEn) {
  btnEn.addEventListener('click', () => setLang('en'));
}

// ===== 导航链接横向滚动 =====
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    }
  });
});

// ===== 移动端菜单 =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// ===== 视频弹窗 =====
const videoModal = document.getElementById('video-modal');
const videoIframe = document.getElementById('video-iframe');
const closeModal = document.getElementById('close-modal');

function openBilibili(bvId) {
  if (!bvId || bvId.includes('你的')) {
    alert('视频暂未上传，请稍后再试');
    return;
  }
  window.open(`https://www.bilibili.com/video/${bvId}`, '_blank');
}

function closeVideoModal() {
  videoModal.classList.remove('active');
  videoIframe.src = '';
  // 恢复横向滚动容器的overflow
  const hs = document.querySelector('.horizontal-scroll');
  if (hs) hs.style.overflow = '';
}

// works 卡片点击 - 跳转B站
document.querySelectorAll('.work-card').forEach(card => {
  card.addEventListener('click', () => {
    const bvId = card.getAttribute('data-bv');
    openBilibili(bvId);
  });
});

// project 视频点击 - 跳转B站
document.querySelectorAll('.video-card').forEach(card => {
  card.addEventListener('click', () => {
    const bvId = card.getAttribute('data-bv');
    openBilibili(bvId);
  });
});

// ===== cta链接跳转 =====
const ctaLink = document.querySelector('.cta-link');
if (ctaLink) {
  ctaLink.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    }
  });
}

// ===== 项目标签切换 =====
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tabId = btn.getAttribute('data-tab');
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.getElementById(`tab-${tabId}`).classList.add('active');
  });
});