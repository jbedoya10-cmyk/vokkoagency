'use strict';

/* ── FAQ Accordion ── */
document.querySelectorAll('[data-faq]').forEach(item => {
  const btn    = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('[data-faq].open').forEach(other => {
      other.classList.remove('open');
      other.querySelector('.faq-answer').style.maxHeight = '0';
      other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });

    // Open clicked if it was closed
    if (!isOpen) {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});
