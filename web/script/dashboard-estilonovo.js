(() => {
  const campaigns = [
    { tag: 'Proteção animal', title: 'Patas que transformam', 
      text: 'Apoie iniciativas que acolhem, alimentam e cuidam de animais que precisam de uma nova chance.',
       date: 'Campanha permanente', 
       image: './img/doguinhos.webp', link: './categ.html' },
    { tag: 'Educação', title: 'Futuro em cada página',
       text: 'Livros, materiais e oportunidades podem abrir caminhos e transformar o futuro de crianças e jovens.', 
       date: 'Campanha permanente', 
       image: './img/escolinhaaaa.webp', link: './categ.html' },
    { tag: 'Apoio a famílias', 
      title: 'Laços de esperança', text: 'Fortaleça projetos que acolhem famílias e ajudam a construir dias mais seguros e cheios de possibilidades.', 
      date: 'Campanha permanente', 
      image: './img/familiasssss.webp', link: './categ.html' },
    { tag: 'Combate à fome', 
      title: 'Prato cheio, coração feliz', 
      text: 'Contribua com ações que levam alimentos e dignidade a pessoas em situação de vulnerabilidade.', 
      date: 'Campanha permanente', 
      image: './img/doar.jpg', link: './doar.html' }
  ];

  const campaignRoot = document.querySelector('[data-campaign]');
  if (campaignRoot) {
    let current = 0;
    const tag = campaignRoot.querySelector('[data-campaign-tag]');
    const title = campaignRoot.querySelector('[data-campaign-title]');
    const text = campaignRoot.querySelector('[data-campaign-text]');
    const date = campaignRoot.querySelector('[data-campaign-date]');
    const link = campaignRoot.querySelector('[data-campaign-link]');
    const bg = campaignRoot.querySelector('.cc-campaign-bg');
    const dots = campaignRoot.querySelector('.cc-campaign-dots');
    campaigns.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.type = 'button'; dot.setAttribute('aria-label', `Mostrar campanha ${index + 1}`);
      dot.addEventListener('click', () => show(index)); dots.appendChild(dot);
    });
    function show(index) {
      current = (index + campaigns.length) % campaigns.length;
      const item = campaigns[current];
      tag.textContent = item.tag; title.textContent = item.title; text.textContent = item.text;
      date.textContent = item.date; link.href = item.link;
      bg.style.backgroundImage = `url("${item.image}")`;
      [...dots.children].forEach((dot, i) => dot.classList.toggle('active', i === current));
    }
    campaignRoot.querySelector('.cc-campaign-prev').addEventListener('click', () => show(current - 1));
    campaignRoot.querySelector('.cc-campaign-next').addEventListener('click', () => show(current + 1));
    show(0);
  }

  const user = (() => { try { return JSON.parse(sessionStorage.getItem('usuarioLogado') || 'null'); } catch { return null; } })();
  if (!user) { window.location.replace('./entrar.html'); return; }
  const welcomeName = document.getElementById('nomeBoasVindas');
  if (welcomeName) welcomeName.textContent = user.nome ? user.nome.split(' ')[0] : 'por aqui';

const isLocalPreview = ['localhost', '127.0.0.1'].includes(window.location.hostname) || ['8080', '5500', '5501'].includes(window.location.port);
  const API_BASE = isLocalPreview ? `${window.location.protocol}//${window.location.hostname}:4002` : window.location.origin;
  const API_ONGS = `${API_BASE}/ongs`;
  const list = document.getElementById('listaOngsMapa');
  const status = document.getElementById('statusMapaOngs');
  const mapElement = document.getElementById('mapaOngs');
  if (!mapElement || !window.L) return;

  const map = L.map(mapElement, { scrollWheelZoom: false }).setView([-21.406, -48.505], 12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  const markerIcon = L.divIcon({ className: 'cc-map-marker', html: '<span style="display:grid;place-items:center;width:34px;height:34px;border:3px solid white;border-radius:50% 50% 50% 4px;transform:rotate(-45deg);background:#7139a8;color:white;box-shadow:0 3px 10px #27143866"><b style="transform:rotate(45deg);font-size:13px">♥</b></span>', iconSize: [34, 34], iconAnchor: [17, 34] });

  function field(ong, keys) {
    for (const key of keys) if (ong[key] !== undefined && ong[key] !== null && String(ong[key]).trim()) return String(ong[key]).trim();
    return '';
  }
  function addressOf(ong) {
    const street = [field(ong, ['endereco', 'logradouro']), field(ong, ['numero'])].filter(Boolean).join(', ');
    return [street, field(ong, ['bairro']), field(ong, ['cidade']), field(ong, ['estado']), field(ong, ['cep']), 'Brasil'].filter(Boolean).join(', ');
  }
  function addListItem(ong, address) {
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
    const response = await fetch(url, { headers: { 'Accept': 'application/json' } });
    if (!response.ok) throw new Error('Não foi possível consultar o serviço de mapas.');
    const results = await response.json();
    return results[0] ? [Number(results[0].lat), Number(results[0].lon)] : null;
  }
  async function loadOngs() {
    try {
      const response = await fetch(API_ONGS);
      if (!response.ok) throw new Error(`API respondeu com status ${response.status}`);
      const payload = await response.json();
      const ongs = Array.isArray(payload) ? payload : (payload.data || []);
      if (!Array.isArray(ongs) || !ongs.length) {
        status.textContent = 'Ainda não há ONGs cadastradas para mostrar no mapa. Quando uma ONG for cadastrada, ela aparecerá aqui.';
        return;
      }
      const bounds = [];
      for (let index = 0; index < ongs.length; index++) {
        const ong = ongs[index];
        const name = field(ong, ['nome_ong', 'nome']) || 'ONG cadastrada';
        const address = addressOf(ong);
        addListItem(ong, address);
        if (address.replace(/[, ]/g, '').length < 8) continue;
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
        } catch (error) { console.warn('Falha ao localizar ONG:', name, error); }
        // Respeita o limite do serviço público de geocodificação.
        if (index < ongs.length - 1) await new Promise(resolve => setTimeout(resolve, 1100));
      }
      if (bounds.length) map.fitBounds(bounds, { padding: [35, 35], maxZoom: 14 });
      status.textContent = `${ongs.length} ONG(s) recebida(s) pela API. ${bounds.length} localização(ões) encontrada(s) para exibir no mapa.`;
    } catch (error) {
      console.error('Erro ao carregar ONGs no mapa:', error);
      status.textContent = 'Não foi possível carregar as ONGs. Confira se o servidor da API está ligado e tente atualizar a página.';
    }
  }
  loadOngs();
})();
