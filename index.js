const poundInput = document.getElementById('pound-input');
const kiloInput = document.getElementById('kilo-input');

poundInput.addEventListener('input', () => {
	const pounds = poundInput.value;
	const kilos = pounds * 0.45359237;
	kiloInput.value = isNaN(kilos) ? 0 : kilos;
});

kiloInput.addEventListener('input', () => {
	const kilos = kiloInput.value;
	const pounds = kilos * 2.2046226218;
	poundInput.value = isNaN(pounds) ? 0 : pounds;
});