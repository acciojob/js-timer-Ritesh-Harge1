// write js code here if required
function updateTimer() {
  const now = new Date();

  // Get individual components
  const day = String(now.getDate()).padStart(2, '0');       // Day with leading 0
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Month (0-11) + 1
  const year = now.getFullYear();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  // Format the timer string
  const timerString = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;

  // Display in the <p> tag
  document.getElementById('timer').textContent = timerString;
}

// Update every second
setInterval(updateTimer, 1000);

// Initialize immediately
updateTimer();
