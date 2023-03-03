var map = L.map("map").setView([42.705, 25.09], 7.4);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

function drawRoute(path, color, description) {
  fetch(`routes/${path}.geojson`)
    .then((response) => response.json())
    .then((data) =>
      L.geoJSON(data, { style: { color: color } })
        .bindPopup(`<div style='font-size: 1.4rem'>${description}</div>`)
        .addTo(map)
    );
}

drawRoute(
  "IskarStruma1",
  "#ffeb3b",
  "Национален маршрут 1 - Искър-Струма"
);

drawRoute(
  "DunavChernoMore2",
  "#3b83d1",
  "Национален маршрут 2 - Дунав-Черно море"
);

drawRoute(
  "YantraMaritsa3",
  "#827717",
  "Национален маршрут 3 - Янтра-Марица-Арда"
);

drawRoute(
  "Predbalkan4",
  "green",
  "Национален маршрут 4 - Предбалкан"
);

drawRoute(
  "Ludogorie5",
  "orange",
  "Национален маршрут 5 - Лудогорие"
);

drawRoute(
  "Podbalkanski6",
  "#7cb342",
  "Национален маршрут 6 - Подбалкански"
);

drawRoute(
  "Chernomorski7",
  "#2042b3",
  "Национален маршрут 7 - Черноморски"
);

drawRoute(
  "ViaDiagonalis8",
  "#8e24aa",
  "Национален маршрут 8 - Виа Диагоналис"
);

drawRoute(
  "IronCurtainTrail10",
  "#d32f2f",
  "Национален маршрут 10 - Пътя на Желязната завеса"
);
