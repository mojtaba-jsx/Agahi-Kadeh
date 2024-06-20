// ! Leaflet Map Config
document.addEventListener("DOMContentLoaded", function () {
  // ایجاد نقشه و تنظیمات اولیه
  var map = L.map("map").setView([35.6892, 51.389], 13); // مختصات تهران

  // اضافه کردن لایه نقشه
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // اضافه کردن یک مارکر به نقشه
  var marker = L.marker([35.6892, 51.389])
    .addTo(map)
    .bindPopup("تهران")
    .openPopup();
});
