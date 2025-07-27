document.addEventListener('DOMContentLoaded', function() {
  let timeout;
  const searchInput = document.getElementById('searchInput');
  const dropdown = document.getElementById('searchDropdown');

  function stripHTML(html) {
    var tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }

  searchInput.addEventListener('input', function() {
    clearTimeout(timeout);
    timeout = setTimeout(performSearch, 300);
  });

  function performSearch() {
    const query = searchInput.value.toLowerCase();
    const results = knowledgeBase.filter(item =>
      item.title.toLowerCase().includes(query) ||
      stripHTML(item.desc).toLowerCase().includes(query) ||
      item.tags.some(tag => tag.includes(query))
    );
    displayResults(results, query);
  }

  function displayResults(results, query) {
    dropdown.innerHTML = '';
    if(results.length === 0) {
      dropdown.innerHTML = '<div class="dropdown-item">No results found</div>';
    } else {
      results.forEach(result => {
        const item = document.createElement('div');
        item.className = 'dropdown-item';
        item.innerHTML = `<strong>${result.title}</strong><br><small>${stripHTML(result.desc).slice(0, 100)}...</small>`;
        item.addEventListener('click', () => {
          showModal(result, query);
          dropdown.style.display = 'none';
        });
        dropdown.appendChild(item);
      });
    }
    dropdown.style.display = 'block';
  }

  function showModal(result, query) {
    let modal = document.getElementById('modal');
    if(!modal){
      modal = document.createElement('div');
      modal.id = 'modal';
      modal.className = 'modal';
      document.body.appendChild(modal);
    }

    let lowerDesc = stripHTML(result.desc).toLowerCase();
    let snippet = '';
    if(query){
      let idx = lowerDesc.indexOf(query);
      if(idx !== -1){
        snippet = stripHTML(result.desc).substr(idx-30, 100);
      }
    }

    modal.innerHTML = `
      <h3>${result.title}</h3>
      <p>⚡ Choose:</p>
      <button onclick="showSnippet('${snippet.replace(/'/g,"\\'")}', '${query}')">Show related part</button>
      <button onclick="showFull('${result.id}','${query}')">View full topic</button>
      <br><br>
      <button onclick="closeModal()">Close</button>
    `;
    modal.style.display='block';
  }

  window.showSnippet = function(snippet, query){
    let modal = document.getElementById('modal');
    const highlighted = snippet.replace(new RegExp(query,'gi'), match => `<span class="highlight">${match}</span>`);
    modal.innerHTML = `<p>${highlighted}</p><br><button onclick="closeModal()">Close</button>`;
  }

  window.showFull = function(id, query){
    const item = knowledgeBase.find(k=>k.id===id);
    let full = item.desc.replace(new RegExp(query,'gi'), match => `<span class="highlight">${match}</span>`);
    let modal = document.getElementById('modal');
    modal.innerHTML = `<h3>${item.title}</h3>${full}<br><button onclick="closeModal()">Close</button>`;
  }

  window.closeModal = function(){
    document.getElementById('modal').style.display='none';
  }

  document.addEventListener('click', e => {
    if(!e.target.closest('.search-container')) dropdown.style.display = 'none';
  });
});