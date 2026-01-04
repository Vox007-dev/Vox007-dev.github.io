// 📦 Données par défaut
const defaultWeaponsData = {
  meta: { version: "1.2", lastUpdate: Date.now() },
  wz: [
    {
      name: "MCW 6.8",
      category: "AR",
      image: "https://via.placeholder.com/140x95/1a1a2e/ffffff?text=MCW",
      description: "Fusil d'assaut ultra polyvalent, excellent DPS et portée moyenne.",
      accessories: ["Barillet 15.9", "Optique VLK 4.0", "Poignée tactique", "Crosse renforcée", "Munitions 6.8mm"],
      tags: ["mid-range", "balanced", "meta"]
    },
    {
      name: "Striker EBJ-14",
      category: "SMG",
      image: "https://via.placeholder.com/140x95/1a1a2e/ffffff?text=EBJ",
      description: "SMG à haut DPS, idéal pour le close combat avec faible recul.",
      accessories: ["Canon 8.1 Silencieux", "Mag 50", "Laser 5mW", "Crosse légère", "Poignée avant"],
      tags: ["cqc", "low-recoil", "fast-ads"]
    }
  ],
  bo7: [
    {
      name: "BAL-39",
      category: "AR",
      image: "https://via.placeholder.com/140x95/1a1a2e/ffffff?text=BAL",
      description: "AR rapide avec excellente mobilité, favori en Multi.",
      accessories: ["Canon 14.5", "Optique Hybrid", "Poignée verticale", "Crosse ergo", "Munitions perforantes"],
      tags: ["mobile", "fast-ads", "meta"]
    },
    {
      name: "Rival-9",
      category: "SMG",
      image: "https://via.placeholder.com/140x95/1a1a2e/ffffff?text=Rival",
      description: "Pistolet-mitrailleur à 3 coups ultra rapide, dévastateur en CQC.",
      accessories: ["Canon 6.5", "Mag 32", "Laser tactique", "Crosse compacte", "Sourdine intégrée"],
      tags: ["cqc", "burst", "high-dps"]
    }
  ]
};

// 🌐 Traductions
const translations = {
  fr: {
    title: "META OPS",
    subtitle: "Warzone 3.0 & Black Ops 7 — Builds optimisés après chaque patch",
    searchPlaceholder: "🔍 Rechercher arme, accessoire ou tag (ex: MXR, Maddox, VS)...",
    btnWz: "Warzone 3.0",
    btnBo7: "Black Ops 7 (Multi)",
    addWeaponTitle: "➕ Gestion des armes",
    exportBtn: "📥 Exporter",
    importBtn: "📤 Importer",
    restoreBackupBtn: "♻️ Restaurer backup",
    gameLabel: "🎮 Jeu",
    nameLabel: "🪄 Nom de l'arme",
    categoryLabel: "🏷️ Catégorie",
    tagsLabel: "🔖 Tags (optionnel)",
    imageLabel: "🖼️ URL image (optionnel)",
    descLabel: "📝 Description",
    accessoriesLabel: "⚙️ Accessoires (séparés par virgule)",
    addWeaponBtn: "➕ Ajouter l'arme",
    editTitle: "✏️ Modifier l'arme",
    saveBtn: "✅ Enregistrer",
    cancelBtn: "❌ Annuler",
    noWeapons: "❌ Aucune arme trouvée.",
    lastUpdate: "Dernière mise à jour :",
    copyCode: "📋 Copier",
    configCodeTitle: "📦 CODE DE CONFIGURATION",
    footer: "© 2026 META OPS",
    submitBuild: "📤 Soumettre un build",
    pendingTitle: "📤 Builds en attente",
    accept: "✅ Accepter",
    reject: "❌ Refuser",
    submittedOn: "Soumis le"
  },
  en: {
    title: "META OPS",
    subtitle: "Warzone 3.0 & Black Ops 7 — Optimized builds after every patch",
    searchPlaceholder: "🔍 Search weapon, attachment or tag (e.g. VLK, CQC, recoil)...",
    btnWz: "Warzone 3.0",
    btnBo7: "Black Ops 7 (Multi)",
    addWeaponTitle: "➕ Weapon Management",
    exportBtn: "📥 Export",
    importBtn: "📤 Import",
    restoreBackupBtn: "♻️ Restore backup",
    gameLabel: "🎮 Game",
    nameLabel: "🪄 Weapon Name",
    categoryLabel: "🏷️ Category",
    tagsLabel: "🔖 Tags (optional)",
    imageLabel: "🖼️ Image URL (optional)",
    descLabel: "📝 Description",
    accessoriesLabel: "⚙️ Attachments (comma-separated)",
    addWeaponBtn: "➕ Add Weapon",
    editTitle: "✏️ Edit Weapon",
    saveBtn: "✅ Save",
    cancelBtn: "❌ Cancel",
    noWeapons: "❌ No weapon found.",
    lastUpdate: "Last update:",
    copyCode: "📋 Copy",
    configCodeTitle: "📦 CONFIG CODE",
    footer: "© 2026 META OPS",
    submitBuild: "📤 Submit a build",
    pendingTitle: "📤 Pending builds",
    accept: "✅ Accept",
    reject: "❌ Reject",
    submittedOn: "Submitted on"
  },
  es: {
    title: "META OPS",
    subtitle: "Warzone 3.0 & Black Ops 7 — Builds optimizados tras cada parche",
    searchPlaceholder: "🔍 Buscar arma, accesorio o etiqueta (ej: VLK, CQC, retroceso)...",
    btnWz: "Warzone 3.0",
    btnBo7: "Black Ops 7 (Multi)",
    addWeaponTitle: "➕ Gestión de armas",
    exportBtn: "📥 Exportar",
    importBtn: "📤 Importar",
    restoreBackupBtn: "♻️ Restaurar copia",
    gameLabel: "🎮 Juego",
    nameLabel: "🪄 Nombre del arma",
    categoryLabel: "🏷️ Categoría",
    tagsLabel: "🔖 Etiquetas (opcional)",
    imageLabel: "🖼️ URL de imagen (opcional)",
    descLabel: "📝 Descripción",
    accessoriesLabel: "⚙️ Accesorios (separados por comas)",
    addWeaponBtn: "➕ Añadir arma",
    editTitle: "✏️ Editar arma",
    saveBtn: "✅ Guardar",
    cancelBtn: "❌ Cancelar",
    noWeapons: "❌ No se encontró ningún arma.",
    lastUpdate: "Última actualización:",
    copyCode: "📋 Copiar",
    configCodeTitle: "📦 CÓDIGO DE CONFIG",
    footer: "© 2026 META OPS",
    submitBuild: "📤 Enviar un build",
    pendingTitle: "📤 Builds pendientes",
    accept: "✅ Aceptar",
    reject: "❌ Rechazar",
    submittedOn: "Enviado el"
  }
};

// 🔁 Charger les données
let weaponsData = JSON.parse(localStorage.getItem('weaponsData')) || structuredClone(defaultWeaponsData);
let weaponsDataBackup = JSON.parse(localStorage.getItem('weaponsDataBackup')) || null;
let pendingSubmissions = JSON.parse(localStorage.getItem('pendingSubmissions')) || [];
let currentCategory = 'wz';
let currentWeapons = weaponsData.wz;
let currentFilter = 'all';
let currentSearchQuery = '';
let isAdmin = localStorage.getItem('isAdmin') === 'true';
let currentLang = localStorage.getItem('lang') || 'fr';

// Normalisation pour la recherche
function normalize(str) {
  return str.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, '');
}

// === ADMIN — MOT DE PASSE EN CLAIR ===
document.getElementById('adminBtn').addEventListener('click', () => {
  if (isAdmin) {
    isAdmin = false;
    localStorage.setItem('isAdmin', 'false');
    document.getElementById('adminPanel').classList.remove('active');
    document.getElementById('adminBtn').textContent = '🔐 Mode Admin';
  } else {
    const pwd = prompt("🔒 Mot de passe admin :");
    if (pwd === "Lolo@320i") {
      isAdmin = true;
      localStorage.setItem('isAdmin', 'true');
      document.getElementById('adminPanel').classList.add('active');
      document.getElementById('adminBtn').textContent = '🔒 Quitter Admin';
      updateLastUpdateDisplay();
      // Ajouter l'onglet "En attente" si admin
      addPendingTab();
    } else if (pwd !== null) {
      alert("❌ Mot de passe incorrect.");
    }
  }
  renderWeapons();
});

// === BOUTON SOUMETTRE UN BUILD ===
document.getElementById('submitBuildBtn').addEventListener('click', () => {
  const formHTML = `
    <div class="modal-content" id="submitModalContent">
      <span class="close" id="closeSubmitModal">&times;</span>
      <h3>${translations[currentLang].submitBuild}</h3>
      <p style="color:#aaa; margin-bottom:1.2rem;">${currentLang === 'fr' ? "Ton build sera examiné par un admin avant publication." : currentLang === 'en' ? "Your build will be reviewed by an admin before publication." : "Tu build será revisado por un admin antes de publicarse."}</p>
      
      <div class="form-group">
        <label for="subGame">${translations[currentLang].gameLabel}</label>
        <select id="subGame" required>
          <option value="wz">${translations[currentLang].btnWz}</option>
          <option value="bo7">${translations[currentLang].btnBo7}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="subName">${translations[currentLang].nameLabel}</label>
        <input type="text" id="subName" placeholder="${currentLang === 'fr' ? 'Ex: MCW 6.8' : currentLang === 'en' ? 'e.g. MCW 6.8' : 'Ej: MCW 6.8'}" required />
      </div>
      <div class="form-group">
        <label for="subCategory">${translations[currentLang].categoryLabel}</label>
        <input type="text" id="subCategory" placeholder="${currentLang === 'fr' ? 'Ex: AR, SMG...' : currentLang === 'en' ? 'e.g. AR, SMG...' : 'Ej: AR, SMG...'}" required />
      </div>
      <div class="form-group">
        <label for="subDesc">${translations[currentLang].descLabel}</label>
        <textarea id="subDesc" placeholder="${currentLang === 'fr' ? 'Pourquoi ce build ?' : currentLang === 'en' ? 'Why this build?' : '¿Por qué este build?'}" required></textarea>
      </div>
      <div class="form-group">
        <label for="subAccessories">${translations[currentLang].accessoriesLabel}</label>
        <input type="text" id="subAccessories" placeholder="${currentLang === 'fr' ? 'Canon, Optique, Poignée...' : currentLang === 'en' ? 'Barrel, Optic, Grip...' : 'Cañón, Mira, Empuñadura...'}" required />
      </div>
      <div class="modal-actions">
        <button id="submitBtn">${translations[currentLang].submitBuild}</button>
        <button id="cancelSubmitBtn">${translations[currentLang].cancelBtn}</button>
      </div>
    </div>
  `;

  const modal = document.getElementById('editModal');
  modal.innerHTML = formHTML;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  // Fermer
  const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  };
  document.getElementById('closeSubmitModal').onclick = closeModal;
  document.getElementById('cancelSubmitBtn').onclick = closeModal;
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

  // Soumettre
  document.getElementById('submitBtn').onclick = () => {
    const game = document.getElementById('subGame').value;
    const name = document.getElementById('subName').value.trim();
    const category = document.getElementById('subCategory').value.trim();
    const desc = document.getElementById('subDesc').value.trim();
    const accessories = document.getElementById('subAccessories').value.split(',').map(a => a.trim()).filter(a => a);

    if (!name || !category || !desc || accessories.length === 0) {
      showNotification(currentLang === 'fr' ? "❌ Tous les champs sont obligatoires." : currentLang === 'en' ? "❌ All fields are required." : "❌ Todos los campos son obligatorios.", "error");
      return;
    }

    pendingSubmissions.push({
      id: Date.now(),
      game,
      name,
      category,
      description: desc,
      accessories,
      submittedAt: Date.now()
    });
    localStorage.setItem('pendingSubmissions', JSON.stringify(pendingSubmissions));
    closeModal();
    showNotification(currentLang === 'fr' ? "✅ Build soumis ! Un admin l’examinera bientôt." : currentLang === 'en' ? "✅ Build submitted! An admin will review it soon." : "✅ ¡Build enviado! Un admin lo revisará pronto.", "success");
  };
});

// === AFFICHAGE DES ARMES ===
function renderWeapons() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  let filtered = currentWeapons;

  if (currentFilter !== 'all') {
    filtered = filtered.filter(w => w.category === currentFilter);
  }

  if (currentSearchQuery.trim()) {
    const q = normalize(currentSearchQuery);
    filtered = filtered.filter(w => {
      const searchable = [
        w.name,
        w.category,
        ...w.accessories,
        ...(w.tags || [])
      ].map(normalize);
      return searchable.some(s => s.includes(q));
    });
  }

  if (filtered.length === 0) {
    content.innerHTML = `<p style="text-align:center; color:#ff6f61; padding:2rem; font-size:1.2rem;">${translations[currentLang].noWeapons}</p>`;
    return;
  }

  filtered.forEach((weapon, index) => {
    const card = document.createElement('div');
    card.className = 'weapon-card';
    card.style.animationDelay = `${(index + 1) * 0.1}s`;

    const imgSrc = weapon.image || `https://via.placeholder.com/140x95/1a1a2e/ffffff?text=${encodeURIComponent(weapon.name.substring(0,6))}`;
    const accessoriesHTML = (weapon.accessories || []).map(acc => `<span class="accessory">${acc}</span>`).join('');
    const tagsHTML = (weapon.tags || []).map(tag => `<span class="tag">${tag}</span>`).join('');

    let adminActions = '';
    if (isAdmin) {
      adminActions = `
        <div class="admin-actions">
          <button class="edit-btn" onclick="openEditForm(${getCurrentIndex(weapon)})">${translations[currentLang].editTitle.split(' ')[0]}</button>
          <button class="delete-btn" onclick="deleteWeapon(${getCurrentIndex(weapon)})">🗑️ Supprimer</button>
        </div>
      `;
    }

    card.innerHTML = `
      <img src="${imgSrc}" alt="${weapon.name}" loading="lazy" />
      <div class="weapon-info">
        <h2>${weapon.name} <small>(${weapon.category})</small></h2>
        ${tagsHTML ? `<div class="weapon-tags">${tagsHTML}</div>` : ''}
        <p>${weapon.description}</p>
        <div class="accessories">${accessoriesHTML}</div>
        ${adminActions}
      </div>
    `;
    content.appendChild(card);
  });
}

function getCurrentIndex(weapon) {
  return currentWeapons.findIndex(w => w.name === weapon.name && w.category === weapon.category);
}

// === FILTRES ===
function renderCategoryFilters(weapons) {
  const categories = ['all', ...new Set(weapons.map(w => w.category))];
  const container = document.getElementById('filterContainer');
  container.innerHTML = '';

  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.textContent = cat === 'all' ? (currentLang === 'fr' ? 'Tout' : currentLang === 'en' ? 'All' : 'Todo') : cat;
    if (cat === currentFilter) btn.classList.add('active');
    btn.addEventListener('click', () => {
      currentFilter = cat;
      renderCategoryFilters(currentWeapons);
      renderWeapons();
    });
    container.appendChild(btn);
  });
}

// === NAVIGATION ===
document.getElementById('btn-wz').addEventListener('click', () => switchGame('wz'));
document.getElementById('btn-bo7').addEventListener('click', () => switchGame('bo7'));

function switchGame(game) {
  currentCategory = game;
  currentWeapons = weaponsData[game];
  currentFilter = 'all';
  currentSearchQuery = '';
  document.getElementById('searchInput').value = '';
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  document.getElementById(game === 'wz' ? 'btn-wz' : 'btn-bo7').classList.add('active');
  renderCategoryFilters(currentWeapons);
  renderWeapons();
}

// === RECHERCHE ===
document.getElementById('searchInput').addEventListener('input', (e) => {
  currentSearchQuery = e.target.value;
  renderWeapons();
});

// === AJOUT D'ARME ===
document.getElementById('weaponForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const game = document.getElementById('gameSelect').value;
  const name = document.getElementById('weaponName').value.trim();
  const category = document.getElementById('weaponCategory').value.trim();
  const tags = document.getElementById('weaponTags').value.split(',').map(t => t.trim()).filter(t => t);
  const imageUrl = document.getElementById('weaponImage').value.trim();
  const desc = document.getElementById('weaponDesc').value.trim();
  const accessories = document.getElementById('accessories').value.split(',').map(a => a.trim()).filter(a => a);

  if (!name || !category || !desc || accessories.length === 0) {
    showNotification(currentLang === 'fr' ? "❌ Tous les champs obligatoires doivent être remplis." : currentLang === 'en' ? "❌ All required fields must be filled." : "❌ Todos los campos obligatorios deben rellenarse.", "error");
    return;
  }

  const newWeapon = {
    name,
    category,
    description: desc,
    accessories,
    tags,
    image: imageUrl || `https://via.placeholder.com/140x95/1a1a2e/ffffff?text=${encodeURIComponent(name.substring(0,6))}`
  };

  weaponsData[game].push(newWeapon);
  weaponsData.meta.lastUpdate = Date.now();
  saveData();

  if (game === currentCategory) {
    currentWeapons = weaponsData[game];
    renderCategoryFilters(currentWeapons);
    renderWeapons();
  }

  document.getElementById('weaponForm').reset();
  showNotification(`✅ ${currentLang === 'fr' ? `Arme "${name}" ajoutée !` : currentLang === 'en' ? `Weapon "${name}" added!` : `¡Arma "${name}" añadida!`}`, "success");
});

// === MODIFICATION ===
function openEditForm(index) {
  if (!isAdmin) return;
  
  const weapon = currentWeapons[index];
  const modal = document.getElementById('editModal');

  const formHTML = `
    <div class="modal-content">
      <span class="close" id="closeEditModal">&times;</span>
      <h3>${translations[currentLang].editTitle}</h3>
      <input type="hidden" id="editIndex" value="${index}" />
      
      <div class="form-group">
        <label>${translations[currentLang].gameLabel}</label>
        <select id="editGame" disabled>
          <option value="wz" ${weapon.game === 'wz' || currentCategory === 'wz' ? 'selected' : ''}>${translations[currentLang].btnWz}</option>
          <option value="bo7" ${weapon.game === 'bo7' || currentCategory === 'bo7' ? 'selected' : ''}>${translations[currentLang].btnBo7}</option>
        </select>
      </div>
      <div class="form-group">
        <label>${translations[currentLang].nameLabel}</label>
        <input type="text" id="editName" value="${weapon.name}" readonly />
      </div>
      <div class="form-group">
        <label>${translations[currentLang].categoryLabel}</label>
        <input type="text" id="editCategory" value="${weapon.category}" readonly />
      </div>
      <div class="form-group">
        <label>${translations[currentLang].tagsLabel}</label>
        <input type="text" id="editTags" value="${(weapon.tags || []).join(', ')}" placeholder="${currentLang === 'fr' ? 'cqc, low-recoil...' : currentLang === 'en' ? 'cqc, low-recoil...' : 'cqc, bajo retroceso...'}" />
      </div>
      <div class="form-group">
        <label>${translations[currentLang].imageLabel}</label>
        <input type="url" id="editImage" value="${weapon.image || ''}" placeholder="https://exemple.com/arme.jpg" />
      </div>
      <div class="form-group">
        <label>${translations[currentLang].descLabel}</label>
        <textarea id="editDesc" rows="3">${weapon.description}</textarea>
      </div>
      <div class="form-group">
        <label>${translations[currentLang].accessoriesLabel}</label>
        <textarea id="editAccessories" rows="4" placeholder="${currentLang === 'fr' ? 'Ex: Canon 8.1 Silencieux, Mag 50...' : currentLang === 'en' ? 'e.g. Silenced Barrel, 50 Mag...' : 'Ej: Cañón Silenciado, Cargador 50...'}">${(weapon.accessories || []).join(', ')}</textarea>
      </div>
      <div class="modal-actions">
        <button id="saveEditBtn">${translations[currentLang].saveBtn}</button>
        <button id="cancelEditBtn">${translations[currentLang].cancelBtn}</button>
      </div>
    </div>
  `;

  modal.innerHTML = formHTML;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  };
  document.getElementById('closeEditModal').onclick = closeModal;
  document.getElementById('cancelEditBtn').onclick = closeModal;
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

  document.getElementById('saveEditBtn').onclick = () => {
    const idx = parseInt(document.getElementById('editIndex').value);
    const w = currentWeapons[idx];
    w.description = document.getElementById('editDesc').value.trim();
    w.accessories = document.getElementById('editAccessories').value.split(',').map(a => a.trim()).filter(a => a);
    w.tags = document.getElementById('editTags').value.split(',').map(t => t.trim()).filter(t => t);
    w.image = document.getElementById('editImage').value.trim() || w.image;
    
    weaponsData.meta.lastUpdate = Date.now();
    saveData();
    renderWeapons();
    showNotification(`✅ ${currentLang === 'fr' ? `Arme "${w.name}" mise à jour !` : currentLang === 'en' ? `Weapon "${w.name}" updated!` : `¡Arma "${w.name}" actualizada!`}`, "success");
    closeModal();
  };
}

// === SUPPRIMER ARME ===
function deleteWeapon(index) {
  if (!isAdmin) return;

  const weapon = currentWeapons[index];
  if (!confirm(currentLang === 'fr' ? `⚠️ Supprimer définitivement "${weapon.name}" ?\n(Cette action est irréversible.)` : currentLang === 'en' ? `⚠️ Permanently delete "${weapon.name}"?\n(This action is irreversible.)` : `⚠️ ¿Eliminar permanentemente "${weapon.name}"?\n(Esta acción es irreversible.)`)) {
    return;
  }

  currentWeapons.splice(index, 1);
  weaponsData[currentCategory] = currentWeapons;
  weaponsData.meta.lastUpdate = Date.now();
  saveData();

  renderCategoryFilters(currentWeapons);
  renderWeapons();
  showNotification(`🗑️ ${currentLang === 'fr' ? `Arme "${weapon.name}" supprimée.` : currentLang === 'en' ? `Weapon "${weapon.name}" deleted.` : `Arma "${weapon.name}" eliminada.`}`, "info");
}

// === SAUVEGARDE & UTILITAIRES ===
function saveData() {
  localStorage.setItem('weaponsData', JSON.stringify(weaponsData));
  if (!weaponsDataBackup || Date.now() - weaponsDataBackup.timestamp > 5 * 60 * 1000) {
    weaponsDataBackup = {
      data: structuredClone(weaponsData),
      timestamp: Date.now()
    };
    localStorage.setItem('weaponsDataBackup', JSON.stringify(weaponsDataBackup));
  }
}

function updateLastUpdateDisplay() {
  const date = new Date(weaponsData.meta.lastUpdate);
  const options = { 
    year: 'numeric', month: 'short', day: 'numeric',
    hour: '2-digit', minute: '2-digit'
  };
  const formatted = date.toLocaleDateString(
    currentLang === 'fr' ? 'fr-FR' : currentLang === 'es' ? 'es-ES' : 'en-US',
    options
  );
  document.getElementById('lastUpdate').textContent = `${translations[currentLang].lastUpdate} ${formatted}`;
}

// === EXPORT / IMPORT / RESTAURATION ===
document.getElementById('exportBtn').addEventListener('click', () => {
  const dataStr = JSON.stringify(weaponsData, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `meta-ops-${new Date().toISOString().slice(0,10)}.json`;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    URL.revokeObjectURL(url);
    a.remove();
  }, 100);
});

document.getElementById('importInput').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(reader.result);
      if (imported.wz && imported.bo7) {
        weaponsData = imported;
        if (!weaponsData.meta) weaponsData.meta = { version: "1.2", lastUpdate: Date.now() };
        saveData();
        currentWeapons = weaponsData[currentCategory];
        renderCategoryFilters(currentWeapons);
        renderWeapons();
        showNotification("✅ " + (currentLang === 'fr' ? "Données importées avec succès !" : currentLang === 'en' ? "Data imported successfully!" : "¡Datos importados con éxito!"), "success");
      } else {
        throw new Error("Structure invalide");
      }
    } catch (err) {
      showNotification("❌ " + (currentLang === 'fr' ? "Échec de l'import : fichier JSON invalide." : currentLang === 'en' ? "Import failed: invalid JSON file." : "Importación fallida: archivo JSON inválido."), "error");
    }
    e.target.value = '';
  };
  reader.readAsText(file);
});

document.getElementById('restoreBackupBtn').addEventListener('click', () => {
  if (weaponsDataBackup && confirm(currentLang === 'fr' ? "⚠️ Restaurer la dernière sauvegarde automatique ?\n(Vous perdrez les modifications récentes non sauvegardées)" : currentLang === 'en' ? "⚠️ Restore last automatic backup?\n(You'll lose recent unsaved changes)" : "⚠️ ¿Restaurar última copia de seguridad automática?\n(Perderás cambios recientes no guardados)")) {
    weaponsData = structuredClone(weaponsDataBackup.data);
    saveData();
    currentWeapons = weaponsData[currentCategory];
    renderCategoryFilters(currentWeapons);
    renderWeapons();
    showNotification("♻️ " + (currentLang === 'fr' ? "Backup restauré avec succès !" : currentLang === 'en' ? "Backup restored successfully!" : "¡Copia de seguridad restaurada con éxito!"), "info");
  }
});

// === NOTIFICATIONS ===
function showNotification(message, type = "success") {
  const colors = {
    success: "linear-gradient(135deg, #2ecc71, #27ae60)",
    error: "linear-gradient(135deg, #e74c3c, #c0392b)",
    info: "linear-gradient(135deg, #3498db, #2980b9)"
  };
  const notif = document.createElement('div');
  notif.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${colors[type]};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    z-index: 1000;
    animation: fadeInUp 0.5s ease forwards, fadeOut 0.5s ease 2.5s forwards;
  `;
  notif.textContent = message;
  document.body.appendChild(notif);
  setTimeout(() => notif.remove(), 3000);
}

// === MULTILINGUE ===
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  // Mettre à jour l’UI
  document.querySelector('h1').textContent = `🔥 ${translations[lang].title}`;
  document.getElementById('subtitle').textContent = translations[lang].subtitle;
  document.getElementById('searchInput').placeholder = translations[lang].searchPlaceholder;
  document.getElementById('btn-wz').textContent = translations[lang].btnWz;
  document.getElementById('btn-bo7').textContent = translations[lang].btnBo7;
  document.getElementById('submitBuildBtn').textContent = translations[lang].submitBuild;

  // Panneau admin
  if (document.querySelector('.admin-title')) {
    document.querySelector('.admin-title').textContent = translations[lang].addWeaponTitle;
    document.getElementById('exportBtn').textContent = translations[lang].exportBtn;
    document.querySelector('.file-label').textContent = translations[lang].importBtn;
    document.getElementById('restoreBackupBtn').textContent = translations[lang].restoreBackupBtn;

    document.querySelector('[for="gameSelect"]').textContent = translations[lang].gameLabel;
    document.querySelector('[for="weaponName"]').textContent = translations[lang].nameLabel;
    document.querySelector('[for="weaponCategory"]').textContent = translations[lang].categoryLabel;
    document.querySelector('[for="weaponTags"]').textContent = translations[lang].tagsLabel;
    document.querySelector('[for="weaponImage"]').textContent = translations[lang].imageLabel;
    document.querySelector('[for="weaponDesc"]').textContent = translations[lang].descLabel;
    document.querySelector('[for="accessories"]').textContent = translations[lang].accessoriesLabel;
    document.getElementById('addWeaponBtn').textContent = translations[lang].addWeaponBtn;
  }

  // Boutons de langue
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  updateLastUpdateDisplay();
  renderCategoryFilters(currentWeapons);
  renderWeapons();
}

// Initialiser la langue
applyLanguage(currentLang);

// Écouteurs boutons langue
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    applyLanguage(btn.dataset.lang);
  });
});

// === ADMIN : GESTION DES SOUMISSIONS EN ATTENTE ===
function addPendingTab() {
  // Ne pas dupliquer
  if (document.getElementById('btn-pending')) return;

  const nav = document.querySelector('nav');
  const pendingBtn = document.createElement('button');
  pendingBtn.id = 'btn-pending';
  pendingBtn.textContent = `${translations[currentLang].pendingTitle} (${pendingSubmissions.length})`;
  pendingBtn.style.background = 'rgba(60, 40, 20, 0.6)';
  pendingBtn.onclick = () => showPendingSubmissions();
  nav.appendChild(pendingBtn);
}

function showPendingSubmissions() {
  currentFilter = 'all';
  currentSearchQuery = '';
  document.getElementById('searchInput').value = '';

  const content = document.getElementById('content');
  content.innerHTML = `<h2 style="color:#ff6f61; text-align:center; margin:1.5rem 0;">${translations[currentLang].pendingTitle}</h2>`;

  if (pendingSubmissions.length === 0) {
    content.innerHTML += `<p style="text-align:center; color:#aaa;">✅ ${currentLang === 'fr' ? "Aucune soumission en attente." : currentLang === 'en' ? "No pending submissions." : "No hay envíos pendientes."}</p>`;
    return;
  }

  pendingSubmissions.forEach((sub, index) => {
    const card = document.createElement('div');
    card.className = 'weapon-card';
    card.style.borderLeft = '4px solid #ffa500';
    card.style.borderColor = '#ffa500';

    const accessoriesHTML = sub.accessories.map(acc => `<span class="accessory">${acc}</span>`).join('');

    card.innerHTML = `
      <div class="weapon-info">
        <h2>${sub.name} <small>(${sub.category}) — ${sub.game === 'wz' ? 'WZ' : 'BO7'}</small></h2>
        <p>${sub.description}</p>
        <div class="accessories">${accessoriesHTML}</div>
        <div class="admin-actions">
          <button class="edit-btn" onclick="acceptSubmission(${index})">${translations[currentLang].accept}</button>
          <button class="delete-btn" onclick="rejectSubmission(${index})">${translations[currentLang].reject}</button>
        </div>
        <div style="font-size:0.85rem; color:#777; margin-top:0.6rem;">
          ${translations[currentLang].submittedOn} ${new Date(sub.submittedAt).toLocaleDateString(
            currentLang === 'fr' ? 'fr-FR' : currentLang === 'es' ? 'es-ES' : 'en-US'
          )}
        </div>
      </div>
    `;
    content.appendChild(card);
  });
}

// Accepter une soumission
window.acceptSubmission = function(index) {
  const sub = pendingSubmissions[index];
  weaponsData[sub.game].push({
    name: sub.name,
    category: sub.category,
    description: sub.description,
    accessories: sub.accessories,
    tags: ["community"],
    image: `https://via.placeholder.com/140x95/1a1a2e/ffffff?text=${encodeURIComponent(sub.name.substring(0,6))}`
  });
  weaponsData.meta.lastUpdate = Date.now();
  saveData();

  pendingSubmissions.splice(index, 1);
  localStorage.setItem('pendingSubmissions', JSON.stringify(pendingSubmissions));
  showPendingSubmissions();
  showNotification(`✅ ${currentLang === 'fr' ? `Build "${sub.name}" ajouté !` : currentLang === 'en' ? `Build "${sub.name}" added!` : `¡Build "${sub.name}" añadido!`}`, "success");
};

// Refuser
window.rejectSubmission = function(index) {
  const sub = pendingSubmissions[index];
  pendingSubmissions.splice(index, 1);
  localStorage.setItem('pendingSubmissions', JSON.stringify(pendingSubmissions));
  showPendingSubmissions();
  showNotification(`❌ ${currentLang === 'fr' ? `Build "${sub.name}" refusé.` : currentLang === 'en' ? `Build "${sub.name}" rejected.` : `Build "${sub.name}" rechazado.`}`, "info");
};

// === ANIMATIONS DYNAMIQUES ===
if (!document.getElementById('dynamic-styles')) {
  const style = document.createElement('style');
  style.id = 'dynamic-styles';
  style.textContent = `
    @keyframes fadeInUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
    @keyframes fadeOut { to { opacity:0; } }
    .admin-panel { display: ${isAdmin ? 'block' : 'none'}; }
    .admin-panel.active { display: block; }
  `;
  document.head.appendChild(style);
}

// === INITIALISATION ===
if (isAdmin) addPendingTab();
updateLastUpdateDisplay();
renderCategoryFilters(currentWeapons);
renderWeapons();
document.getElementById('btn-wz').classList.add('active');

// Support clavier global (Escape ferme les modales)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modals = document.querySelectorAll('.modal[style*="display: flex"]');
    modals.forEach(m => {
      m.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  }
});