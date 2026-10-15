'use strict';
(() => {
  const checks = [...document.querySelectorAll('.check-items input[type="checkbox"]')];
  const progress = document.querySelector('#check-progress');
  const reset = document.querySelector('#reset-check');
  if (!progress || !reset) return;
  const update = () => {
    const count = checks.filter(input => input.checked).length;
    progress.textContent = count === checks.length
      ? '4 su 4: ottimo, scegli quale abitudine ripetere nella prossima partita.'
      : `${count} su ${checks.length} abitudini provate.`;
  };
  checks.forEach(input => input.addEventListener('change', update));
  reset.addEventListener('click', () => {
    checks.forEach(input => { input.checked = false; });
    update();
  });
  // Nessun dato salvato o trasmesso: la lista appartiene solo a questa pagina.
  progress.hidden = false;
  reset.hidden = false;
  update();
})();
