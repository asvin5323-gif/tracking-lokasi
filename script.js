function getLocation() {
  const status = document.getElementById("status");

  if (!navigator.geolocation) {
    status.innerHTML = "❌ Browser tidak mendukung GPS";
    return;
  }

  status.innerHTML = "⏳ Mengambil lokasi...";

  navigator.geolocation.getCurrentPosition(
    position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      status.innerHTML = `
        ✅ Lokasi terkirim<br>
        Latitude: ${lat}<br>
        Longitude: ${lon}
      `;

      const map = document.getElementById("map");
      map.style.display = "block";
      map.src = `https://www.openstreetmap.org/export/embed.html?marker=${lat}%2C${lon}&zoom=15`;
    },
    error => {
      status.innerHTML = "❌ Izin lokasi ditolak";
    }
  );
}
