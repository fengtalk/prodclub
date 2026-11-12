'use strict';
const referralCode = '8G2FVD';
const statusBox = document.getElementById('copy-status');
let statusTimer;
for (const button of document.querySelectorAll('[data-copy]')) {
  button.addEventListener('click', async () => {
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(referralCode);
      statusBox.textContent = '推荐码 8G2FVD 已复制';
    } catch {
      statusBox.textContent = '请手动复制推荐码：8G2FVD';
    }
    statusBox.classList.add('show');
    clearTimeout(statusTimer);
    statusTimer = setTimeout(() => statusBox.classList.remove('show'), 4000);
  });
}

// Keep one FAQ answer open, including in browsers without details-name grouping.
const faqItems = [...document.querySelectorAll('.faqs details')];
for (const item of faqItems) {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    for (const other of faqItems) {
      if (other !== item && other.open) other.open = false;
    }
  });
}
