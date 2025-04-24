// Filtrování tabulky
document.getElementById('filterTable').addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll('#tableBody tr');
    rows.forEach(row => {
      const city = row.cells[1].textContent.toLowerCase();
      row.style.display = city.includes(filter) ? '' : 'none';
    });
  });
  
  // Filtrování výběrového menu
  const originalOptions = Array.from(document.querySelectorAll('#citySelect option'));
  
  document.getElementById('filterSelect').addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    const select = document.getElementById('citySelect');
    select.innerHTML = '';
    originalOptions.forEach(option => {
      if (option.textContent.toLowerCase().includes(filter)) {
        select.appendChild(option.cloneNode(true));
      }
    });
  });
  
  // Zpracování formuláře
  document.getElementById('cityForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const city = document.getElementById('citySelect').value;
    alert('Vybrané město: ' + city);
  });
  