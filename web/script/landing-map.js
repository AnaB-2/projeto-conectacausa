import { API_URL } from "./apiconfig.js";

(() => {
  const mapElement = document.getElementById('mapaOngsPublico');
  if (!mapElement || !window.L) return;
  const list = document.getElementById('listaOngsPublico');
  const status = document.getElementById('statusMapaPublico');
  const apiBase = API_URL;

  const map = L.map(mapElement, { scrollWheelZoom: false }).setView([-21.406, -48.505], 12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  const markerIcon = L.divIcon({
    className: 'cc-map-marker',
    html: '<span style="display:grid;place-items:center;width:34px;height:34px;border:3px solid white;border-radius:50% 50% 50% 4px;transform:rotate(-45deg);background:#7139a8;color:white;box-shadow:0 3px 10px #27143866"><b style="transform:rotate(45deg);font-size:13px">♥</b></span>',
    iconSize: [34, 34], iconAnchor: [17, 34]
  });
  function field(ong, keys) {
    for (const key of keys) if (ong[key] !== undefined && ong[key] !== null && String(ong[key]).trim()) return String(ong[key]).trim();
    return '';
  }
  function addressOf(ong) {
    const street = [field(ong, ['endereco', 'logradouro']), field(ong, ['numero'])].filter(Boolean).join(', ');
    return [street, field(ong, ['bairro']), field(ong, ['cidade']), field(ong, ['estado']), field(ong, ['cep']), 'Brasil'].filter(Boolean).join(', ');
  }
  function addOng(ong) {
    if (!list) return;
    const item = document.createElement('div'); item.className = 'cc-ong-mini';
    const pin = document.createElement('div'); pin.className = 'pin'; pin.innerHTML = '<i class="fa-solid fa-location-dot"></i>';
    const details = document.createElement('div');
    const name = document.createElement('strong'); name.textContent = field(ong, ['nome_ong', 'nome']) || 'ONG cadastrada';
    const place = document.createElement('span'); place.textContent = [field(ong, ['cidade']), field(ong, ['estado'])].filter(Boolean).join(' - ') || 'Localização a confirmar';
    details.append(name, place); item.append(pin, details); list.append(item);
  }
  async function geocode(address) {
    const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&q=${encodeURIComponent(address)}`;
    const response = await fetch(url, { headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error('Falha no serviço de localização.');
    const results = await response.json();
    return results[0] ? [Number(results[0].lat), Number(results[0].lon)] : null;
  }
  async function loadOngs() {
    try {
      const response = await fetch(`${apiBase}/ongs`);
      if (!response.ok) throw new Error(`API respondeu com status ${response.status}`);
      const payload = await response.json();
      const ongs = Array.isArray(payload) ? payload : (Array.isArray(payload.data) ? payload.data : []);
      if (list) list.innerHTML = '';
      if (!ongs.length) {
        if (list) list.innerHTML = '<p class="cc-map-empty">Ainda não há ONGs cadastradas.</p>';
        status.textContent = 'Quando uma ONG for cadastrada, ela poderá aparecer neste mapa.';
        return;
      }
      const bounds = [];
      for (let index = 0; index < ongs.length; index++) {
        const ong = ongs[index];
        const name = field(ong, ['nome_ong', 'nome']) || 'ONG cadastrada';
        const address = addressOf(ong);
        addOng(ong);
        if (address.replace(/[, ]/g, '').length >= 8) {
          try {
            const coordinates = await geocode(address);
            if (coordinates) {
              const marker = L.marker(coordinates, { icon: markerIcon }).addTo(map);
              const popup = document.createElement('div');
              const strong = document.createElement('strong'); strong.textContent = name;
              const small = document.createElement('div'); small.textContent = address;
              popup.append(strong, small); marker.bindPopup(popup);
              bounds.push(coordinates);
            }
          } catch (error) { console.warn('Não foi possível localizar:', name, error); }
        }
        if (index < ongs.length - 1) await new Promise(resolve => setTimeout(resolve, 1100));
      }
      if (bounds.length) map.fitBounds(bounds, { padding: [35, 35], maxZoom: 14 });
      status.textContent = `${ongs.length} ONG(s) recebida(s) pela API. ${bounds.length} localização(ões) encontrada(s) no mapa.`;
    } catch (error) {
      console.error('Erro ao carregar ONGs no mapa público:', error);
      status.textContent = 'Não foi possível carregar as ONGs. Verifique se a API está ligada.';
      if (list) list.innerHTML = '<p class="cc-map-empty">A lista de organizações ficará disponível quando a API estiver conectada.</p>';
    }
  }
  loadOngs();
})();
