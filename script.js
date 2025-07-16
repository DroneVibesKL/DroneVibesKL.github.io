document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map', {
    center: [37.7749, -122.4194],
    zoom: 10,
    zoomControl: true,
    scrollWheelZoom: false,
  });

  L.tileLayer(
    'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
    {
      maxZoom: 20,
      attribution:
        '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    }
  ).addTo(map);

  const locations = [
    {
      coords: [37.7749, -122.4194],
      title: 'Golden Gate Drone Shot',
      desc: 'A cinematic aerial shot of the Golden Gate Bridge.',
    },
    {
      coords: [37.8024, -122.4058],
      title: 'Downtown Skyline',
      desc: 'Dramatic drone footage over San Francisco skyscrapers.',
    },
    {
      coords: [37.7694, -122.4862],
      title: 'Ocean Beach',
      desc: 'Smooth flying over the Pacific coastline.',
    },
  ];

  locations.forEach(({ coords, title, desc }) => {
    L.marker(coords).addTo(map).bindPopup(`<h3>${title}</h3><p>${desc}</p>`);
  });
});
