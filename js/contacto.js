'use strict';

const form      = document.getElementById('contactForm');
const formWrap  = document.querySelector('.contact-form-wrap');
const success   = document.getElementById('formSuccess');
const mailtoBtn = document.getElementById('mailtoLink');

/* ── Build mailto link dynamically as user types ── */
function updateMailto() {
  const nombre   = document.getElementById('nombre').value.trim();
  const correo   = document.getElementById('correo').value.trim();
  const waNum    = document.getElementById('whatsapp').value.trim();
  const servicio = document.getElementById('servicio').value;
  const mensaje  = document.getElementById('mensaje').value.trim();

  const subject = [
    'Proyecto web',
    servicio ? ': ' + servicio : '',
    nombre   ? ' - ' + nombre  : '',
  ].join('');

  const body = [
    nombre   ? 'Nombre: '   + nombre   : '',
    correo   ? 'Correo: '   + correo   : '',
    waNum    ? 'WhatsApp: ' + waNum    : '',
    servicio ? 'Servicio: ' + servicio : '',
    mensaje  ? '\nMensaje:\n' + mensaje : '',
  ].filter(Boolean).join('\n');

  mailtoBtn.href =
    'mailto:jbedoya@vokkoagency.com'
    + '?subject=' + encodeURIComponent(subject)
    + '&body='    + encodeURIComponent(body);
}

form.addEventListener('input', updateMailto);

/* ── Form submit: open WhatsApp with pre-filled message ── */
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nombreInput = document.getElementById('nombre');
  const nombre      = nombreInput.value.trim();
  const correo      = document.getElementById('correo').value.trim();
  const waNum       = document.getElementById('whatsapp').value.trim();
  const servicio    = document.getElementById('servicio').value;
  const mensaje     = document.getElementById('mensaje').value.trim();

  /* Validate name */
  const nameGroup = nombreInput.closest('.form-group');
  if (!nombre) {
    nameGroup.classList.add('has-error');
    nombreInput.classList.add('input-error');
    nombreInput.focus();
    return;
  }
  nameGroup.classList.remove('has-error');
  nombreInput.classList.remove('input-error');

  /* Build WhatsApp message */
  const parts = [
    'Hola VokkoAgency! Soy ' + nombre + '.',
    servicio ? 'Me interesa: ' + servicio + '.' : '',
    mensaje  ? '\n\n' + mensaje : '',
    correo   ? '\n\nMi correo: ' + correo : '',
    waNum    ? '\nMi WhatsApp: ' + waNum  : '',
  ].filter(Boolean).join(' ');

  const waUrl = 'https://wa.me/573013296309?text=' + encodeURIComponent(parts);

  /* Open WhatsApp */
  window.open(waUrl, '_blank', 'noopener,noreferrer');

  /* Show success state */
  document.querySelector('.contact-form-header').classList.add('hidden');
  form.classList.add('hidden');
  success.hidden = false;
});

/* ── Clear error state on input ── */
document.getElementById('nombre').addEventListener('input', function () {
  this.closest('.form-group').classList.remove('has-error');
  this.classList.remove('input-error');
});
