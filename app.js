// Base de Dados Completa de Atalhos
const shortcutsData = [
    // Tecla Windows
    { keys: ["Win"], desc: "Abre ou fecha o Menu Iniciar.", category: "tecla-win" },
    { keys: ["Win", "A"], desc: "Abre a Central de Ações / Configurações Rápidas.", category: "tecla-win" },
    { keys: ["Win", "B"], desc: "Define o foco no primeiro ícone na área de notificação da barra de tarefas.", category: "tecla-win" },
    { keys: ["Win", "C"], desc: "Abre o Microsoft Copilot ou o Microsoft Teams.", category: "tecla-win" },
    { keys: ["Win", "D"], desc: "Mostra ou oculta a Área de Trabalho.", category: "tecla-win" },
    { keys: ["Win", "E"], desc: "Abre o Explorador de Arquivos.", category: "tecla-win" },
    { keys: ["Win", "F"], desc: "Abre o Hub de Feedback e faz captura de tela.", category: "tecla-win" },
    { keys: ["Win", "G"], desc: "Abre a Xbox Game Bar.", category: "tecla-win" },
    { keys: ["Win", "H"], desc: "Inicia a ferramenta de digitação / ditado por voz.", category: "tecla-win" },
    { keys: ["Win", "I"], desc: "Abre o aplicativo de Configurações.", category: "tecla-win" },
    { keys: ["Win", "J"], desc: "Define o foco em uma dica do Windows.", category: "tecla-win" },
    { keys: ["Win", "K"], desc: "Abre o painel de Transmissão e conexão de dispositivos.", category: "tecla-win" },
    { keys: ["Win", "L"], desc: "Bloqueia o computador.", category: "tecla-win" },
    { keys: ["Win", "M"], desc: "Minimiza todas as janelas.", category: "tecla-win" },
    { keys: ["Win", "N"], desc: "Abre o Centro de Notificações e o calendário.", category: "tecla-win" },
    { keys: ["Win", "O"], desc: "Bloqueia a orientação do dispositivo.", category: "tecla-win" },
    { keys: ["Win", "P"], desc: "Abre as configurações de projeção e exibição de tela.", category: "tecla-win" },
    { keys: ["Win", "Q"], desc: "Abre a barra de Pesquisa do Windows.", category: "tecla-win" },
    { keys: ["Win", "R"], desc: "Abre a caixa de diálogo Executar.", category: "tecla-win" },
    { keys: ["Win", "S"], desc: "Abre a barra de Pesquisa.", category: "tecla-win" },
    { keys: ["Win", "T"], desc: "Percorre os aplicativos na barra de tarefas.", category: "tecla-win" },
    { keys: ["Win", "U"], desc: "Abre as Configurações de Acessibilidade.", category: "tecla-win" },
    { keys: ["Win", "V"], desc: "Abre o Histórico da Área de Transferência.", category: "tecla-win" },
    { keys: ["Win", "W"], desc: "Abre o painel de Widgets.", category: "tecla-win" },
    { keys: ["Win", "X"], desc: "Abre o Menu Link Rápido (menu técnico).", category: "tecla-win" },
    { keys: ["Win", "Y"], desc: "Alterna a entrada entre o Windows Mixed Reality e a Área de Trabalho.", category: "tecla-win" },
    { keys: ["Win", "Z"], desc: "Abre o menu de ajuste de Snap Layouts.", category: "tecla-win" },
    { keys: ["Win", "."], desc: "Abre o painel de emojis e caracteres especiais.", category: "tecla-win" },
    { keys: ["Win", ";"], desc: "Abre o painel de emojis e caracteres especiais.", category: "tecla-win" },
    { keys: ["Win", ","], desc: "Espia temporariamente a Área de Trabalho.", category: "tecla-win" },
    { keys: ["Win", "Pause"], desc: "Abre as Propriedades do Sistema / menu Sobre.", category: "tecla-win" },
    { keys: ["Win", "Home"], desc: "Minimiza todas as janelas, exceto a ativa.", category: "tecla-win" },
    { keys: ["Win", "Tab"], desc: "Abre a Visão de Tarefas.", category: "tecla-win" },
    { keys: ["Win", "↑"], desc: "Maximiza a janela ativa.", category: "tecla-win" },
    { keys: ["Win", "↓"], desc: "Minimiza ou remove a janela ativa da tela.", category: "tecla-win" },
    { keys: ["Win", "←"], desc: "Encaixa a janela ativa no lado esquerdo da tela.", category: "tecla-win" },
    { keys: ["Win", "→"], desc: "Encaixa a janela ativa no lado direito da tela.", category: "tecla-win" },
    { keys: ["Win", "+"], desc: "Abre e amplia o zoom com a Lupa.", category: "tecla-win" },
    { keys: ["Win", "-"], desc: "Reduz o zoom na Lupa.", category: "tecla-win" },
    { keys: ["Win", "Esc"], desc: "Fecha a Lupa.", category: "tecla-win" },
    { keys: ["Win", "PrtScn"], desc: "Salva uma captura da tela inteira na pasta de imagens.", category: "tecla-win" },

    // Combinacoes Avancadas
    { keys: ["Win", "Shift", "S"], desc: "Abre a Ferramenta de Captura para recortar parte da tela.", category: "win-avancado" },
    { keys: ["Win", "Shift", "R"], desc: "Seleciona uma área da tela para gravar vídeo.", category: "win-avancado" },
    { keys: ["Win", "Shift", "M"], desc: "Restaura as janelas minimizadas na Área de Trabalho.", category: "win-avancado" },
    { keys: ["Win", "Shift", "V"], desc: "Percorre as notificações recebidas.", category: "win-avancado" },
    { keys: ["Win", "Shift", "← / →"], desc: "Move a janela ativa para o monitor à esquerda ou à direita.", category: "win-avancado" },
    { keys: ["Win", "Shift", "↑"], desc: "Alonga a janela ativa até o topo e a base da tela.", category: "win-avancado" },
    { keys: ["Win", "Shift", "↓"], desc: "Restaura ou minimiza janelas verticalmente mantendo a largura.", category: "win-avancado" },
    { keys: ["Win", "Ctrl", "D"], desc: "Cria uma nova Área de Trabalho Virtual.", category: "win-avancado" },
    { keys: ["Win", "Ctrl", "F4"], desc: "Fecha a Área de Trabalho Virtual em uso.", category: "win-avancado" },
    { keys: ["Win", "Ctrl", "← / →"], desc: "Alterna entre as Áreas de Trabalho Virtuais criadas.", category: "win-avancado" },
    { keys: ["Win", "Ctrl", "Shift", "B"], desc: "Reinicia o driver gráfico em caso de tela congelada ou preta.", category: "win-avancado" },
    { keys: ["Win", "Ctrl", "Enter"], desc: "Ativa o leitor de tela Narrador.", category: "win-avancado" },
    { keys: ["Win", "Ctrl", "Q"], desc: "Abre o aplicativo Assistência Rápida.", category: "win-avancado" },
    { keys: ["Win", "Ctrl", "F"], desc: "Procura por computadores em uma rede.", category: "win-avancado" },
    { keys: ["Win", "Ctrl", "C"], desc: "Liga ou desliga os filtros de cores do sistema.", category: "win-avancado" },
    { keys: ["Win", "Alt", "R"], desc: "Grava vídeo da janela do jogo em foco via Xbox Game Bar.", category: "win-avancado" },
    { keys: ["Win", "Alt", "B"], desc: "Ativa ou desativa o recurso HDR.", category: "win-avancado" },
    { keys: ["Win", "Alt", "↑"], desc: "Encaixa a janela na metade superior da tela.", category: "win-avancado" },
    { keys: ["Win", "Alt", "↓"], desc: "Encaixa a janela na metade inferior da tela.", category: "win-avancado" },
    { keys: ["Win", "1..9"], desc: "Inicia ou alterna para o aplicativo fixado na barra de tarefas na posição do número.", category: "win-avancado" },
    { keys: ["Win", "Shift", "1..9"], desc: "Inicia uma nova instância do aplicativo na posição indicada.", category: "win-avancado" },
    { keys: ["Win", "Ctrl", "Shift", "1..9"], desc: "Abre como administrador nova instância do app na barra de tarefas.", category: "win-avancado" },

    // Edição de Texto e Comandos Gerais
    { keys: ["Ctrl", "C"], desc: "Copia o item ou texto selecionado.", category: "edicao-texto" },
    { keys: ["Ctrl", "V"], desc: "Cola o item ou texto selecionado.", category: "edicao-texto" },
    { keys: ["Ctrl", "X"], desc: "Recorta o item ou texto selecionado.", category: "edicao-texto" },
    { keys: ["Ctrl", "Z"], desc: "Desfaz a última ação.", category: "edicao-texto" },
    { keys: ["Ctrl", "Y"], desc: "Refaz uma ação desfeita.", category: "edicao-texto" },
    { keys: ["Ctrl", "A"], desc: "Seleciona todos os itens ou todo o texto.", category: "edicao-texto" },
    { keys: ["Ctrl", "S"], desc: "Salva o documento ativo.", category: "edicao-texto" },
    { keys: ["Ctrl", "P"], desc: "Abre a janela de impressão.", category: "edicao-texto" },
    { keys: ["Ctrl", "F"], desc: "Localiza texto em aplicativos compatíveis.", category: "edicao-texto" },
    { keys: ["Ctrl", "H"], desc: "Localiza e substitui texto.", category: "edicao-texto" },
    { keys: ["Ctrl", "Shift", "V"], desc: "Cola o conteúdo como texto sem formatação.", category: "edicao-texto" },
    { keys: ["Ctrl", "Shift", "Esc"], desc: "Abre o Gerenciador de Tarefas diretamente.", category: "edicao-texto" },
    { keys: ["Ctrl", "Alt", "Delete"], desc: "Abre a tela com opções de segurança do sistema.", category: "edicao-texto" },
    { keys: ["Ctrl", "Esc"], desc: "Abre o Menu Iniciar.", category: "edicao-texto" },
    { keys: ["Alt", "Tab"], desc: "Alterna entre aplicativos e janelas abertas.", category: "edicao-texto" },
    { keys: ["Alt", "F4"], desc: "Fecha o aplicativo ativo ou exibe a tela de encerramento.", category: "edicao-texto" },
    { keys: ["Alt", "Esc"], desc: "Alterna os itens na ordem em que foram abertos.", category: "edicao-texto" },
    { keys: ["Alt", "Enter"], desc: "Exibe a janela de Propriedades do item selecionado.", category: "edicao-texto" },
    { keys: ["Alt", "PrtScn"], desc: "Captura a imagem apenas da janela ativa para a área de transferência.", category: "edicao-texto" },
    { keys: ["Alt", "Espaço"], desc: "Abre o menu de contexto da janela ativa.", category: "edicao-texto" },
    { keys: ["F2"], desc: "Renomeia o item selecionado.", category: "edicao-texto" },
    { keys: ["F3"], desc: "Busca por um arquivo ou pasta.", category: "edicao-texto" },
    { keys: ["F4"], desc: "Exibe a lista da barra de endereços no Explorador de Arquivos.", category: "edicao-texto" },
    { keys: ["F5"], desc: "Atualiza a janela ou página ativa.", category: "edicao-texto" },
    { keys: ["F6"], desc: "Percorre elementos da tela de uma janela ou Área de Trabalho.", category: "edicao-texto" },
    { keys: ["F10"], desc: "Ativa a barra de menus do aplicativo em execução.", category: "edicao-texto" },
    { keys: ["F11"], desc: "Ativa ou desativa o modo de tela cheia.", category: "edicao-texto" },
    { keys: ["Shift", "Delete"], desc: "Exclui o item selecionado permanentemente sem enviar para a lixeira.", category: "edicao-texto" },
    { keys: ["Shift", "F10"], desc: "Exibe o menu de contexto do item selecionado.", category: "edicao-texto" },
    { keys: ["PrtScn"], desc: "Captura a tela inteira para a área de transferência.", category: "edicao-texto" },

    // Explorador de Arquivos
    { keys: ["Ctrl", "N"], desc: "Abre uma nova janela do Explorador de Arquivos.", category: "explorador" },
    { keys: ["Ctrl", "T"], desc: "Abre uma nova aba no Explorador de Arquivos.", category: "explorador" },
    { keys: ["Ctrl", "W"], desc: "Fecha a aba ou janela ativa.", category: "explorador" },
    { keys: ["Ctrl", "Shift", "N"], desc: "Cria uma nova pasta.", category: "explorador" },
    { keys: ["Ctrl", "Shift", "E"], desc: "Expande todas as pastas no painel de navegação.", category: "explorador" },
    { keys: ["Ctrl", "Scroll"], desc: "Altera o tamanho e a exibição de ícones de arquivos e pastas.", category: "explorador" },
    { keys: ["Alt", "D"], desc: "Seleciona a barra de endereços.", category: "explorador" },
    { keys: ["Alt", "P"], desc: "Exibe ou oculta o painel de visualização.", category: "explorador" },
    { keys: ["Alt", "Shift", "P"], desc: "Exibe ou oculta o painel de detalhes.", category: "explorador" },
    { keys: ["Alt", "←"], desc: "Volta para a pasta anterior.", category: "explorador" },
    { keys: ["Alt", "→"], desc: "Avança para a próxima pasta.", category: "explorador" },
    { keys: ["Alt", "↑"], desc: "Sobe um nível na estrutura de pastas.", category: "explorador" }
];

// Gerenciamento de Estado
let favorites = JSON.parse(localStorage.getItem('shortcuts_favs')) || [];
let activeCategory = 'all';
let currentQuizQuestion = null;
let quizScore = 0;
let deferredPrompt = null;

// Elementos do DOM
const grid = document.getElementById('shortcutsGrid');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const categoryChips = document.getElementById('categoryChips');
const resultsCount = document.getElementById('resultsCount');
const emptyState = document.getElementById('emptyState');
const favCountSpan = document.getElementById('favCount');
const themeToggle = document.getElementById('themeToggle');
const installPwaBtn = document.getElementById('installPwaBtn');
const quizSection = document.getElementById('quizSection');
const toast = document.getElementById('toast');

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    updateFavCount();
    renderShortcuts();
    setupEventListeners();
    setupTheme();
});

// Renderização dos Atalhos
function renderShortcuts() {
    const query = searchInput.value.toLowerCase().trim();
    grid.innerHTML = '';
    
    if (activeCategory === 'quiz') {
        grid.classList.add('hidden');
        emptyState.classList.add('hidden');
        quizSection.classList.remove('hidden');
        resultsCount.textContent = 'Modo de Treinamento Interativo';
        startQuizQuestion();
        return;
    } else {
        grid.classList.remove('hidden');
        quizSection.classList.add('hidden');
    }

    const filtered = shortcutsData.filter(item => {
        const matchesCategory = 
            activeCategory === 'all' ? true :
            activeCategory === 'favorites' ? favorites.includes(getShortcutId(item)) :
            item.category === activeCategory;

        const shortcutText = item.keys.join(' + ').toLowerCase();
        const descText = item.desc.toLowerCase();
        const matchesSearch = shortcutText.includes(query) || descText.includes(query);

        return matchesCategory && matchesSearch;
    });

    resultsCount.textContent = `Exibindo ${filtered.length} atalho(s)`;

    if (filtered.length === 0) {
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
        filtered.forEach(item => {
            const id = getShortcutId(item);
            const isFav = favorites.includes(id);
            
            const card = document.createElement('div');
            card.className = 'shortcut-card';
            
            const keysHtml = item.keys.map((k, idx) => 
                `<kbd>${k}</kbd>${idx < item.keys.length - 1 ? '<span class="key-plus">+</span>' : ''}`
            ).join('');

            card.innerHTML = `
                <div class="card-header">
                    <p class="shortcut-description">${item.desc}</p>
                    <div class="card-actions">
                        <button class="action-btn ${isFav ? 'fav-active' : ''}" onclick="toggleFav('${id}')" title="Favoritar">
                            <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-star"></i>
                        </button>
                        <button class="action-btn" onclick="copyShortcut('${item.keys.join(' + ')}')" title="Copiar Atalho">
                            <i class="fa-regular fa-copy"></i>
                        </button>
                    </div>
                </div>
                <div class="keys-container">
                    ${keysHtml}
                </div>
            `;
            grid.appendChild(card);
        });
    }
}

// Utilitários
function getShortcutId(item) {
    return `${item.keys.join('+')}_${item.desc.substring(0, 10)}`.replace(/\s+/g, '');
}

function toggleFav(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
        showToast('Removido dos favoritos');
    } else {
        favorites.push(id);
        showToast('Adicionado aos favoritos!');
    }
    localStorage.setItem('shortcuts_favs', JSON.stringify(favorites));
    updateFavCount();
    renderShortcuts();
}

function updateFavCount() {
    favCountSpan.textContent = favorites.length;
}

function copyShortcut(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast(`Copiado: ${text}`);
    });
}

function showToast(msg) {
    const toastMsg = document.getElementById('toastMessage');
    toastMsg.textContent = msg;
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 2500);
}

// Event Listeners
function setupEventListeners() {
    searchInput.addEventListener('input', (e) => {
        if (e.target.value.length > 0) {
            clearSearchBtn.classList.remove('hidden');
        } else {
            clearSearchBtn.classList.add('hidden');
        }
        renderShortcuts();
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearSearchBtn.classList.add('hidden');
        renderShortcuts();
    });

    categoryChips.addEventListener('click', (e) => {
        const chip = e.target.closest('.chip');
        if (!chip) return;

        document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeCategory = chip.dataset.category;
        renderShortcuts();
    });

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('shortcuts_theme', newTheme);
        updateThemeIcon(newTheme);
    });

    document.getElementById('nextQuizBtn').addEventListener('click', startQuizQuestion);
}

// Tema Claro / Escuro
function setupTheme() {
    const savedTheme = localStorage.getItem('shortcuts_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fa-solid fa-sun';
    } else {
        icon.className = 'fa-solid fa-moon';
    }
}

// Lógica do Quiz
function startQuizQuestion() {
    const feedback = document.getElementById('quizFeedback');
    const nextBtn = document.getElementById('nextQuizBtn');
    feedback.className = 'quiz-feedback hidden';
    nextBtn.classList.add('hidden');

    const randomIndex = Math.floor(Math.random() * shortcutsData.length);
    currentQuizQuestion = shortcutsData[randomIndex];

    document.getElementById('quizQuestion').textContent = `"${currentQuizQuestion.desc}"`;

    // Gerar Opções
    const options = [currentQuizQuestion.keys.join(' + ')];
    while (options.length < 4) {
        const randOpt = shortcutsData[Math.floor(Math.random() * shortcutsData.length)].keys.join(' + ');
        if (!options.includes(randOpt)) {
            options.push(randOpt);
        }
    }

    // Embaralhar opções
    options.sort(() => Math.random() - 0.5);

    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = '';

    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = opt;
        btn.onclick = () => checkQuizAnswer(opt, currentQuizQuestion.keys.join(' + '), btn);
        optionsContainer.appendChild(btn);
    });
}

function checkQuizAnswer(selected, correct, selectedBtn) {
    const allButtons = document.querySelectorAll('.quiz-option');
    allButtons.forEach(btn => btn.disabled = true);

    const feedback = document.getElementById('quizFeedback');
    const nextBtn = document.getElementById('nextQuizBtn');

    if (selected === correct) {
        selectedBtn.classList.add('correct');
        quizScore += 10;
        feedback.textContent = 'Correto! Você domina esse atalho.';
        feedback.className = 'quiz-feedback success';
    } else {
        selectedBtn.classList.add('wrong');
        allButtons.forEach(btn => {
            if (btn.textContent === correct) btn.classList.add('correct');
        });
        feedback.textContent = `Incorreto. O atalho certo é: ${correct}`;
        feedback.className = 'quiz-feedback error';
    }

    document.getElementById('quizScore').textContent = `Pontos: ${quizScore}`;
    feedback.classList.remove('hidden');
    nextBtn.classList.remove('hidden');
}

// PWA Install Prompt
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installPwaBtn.classList.remove('hidden');
});

installPwaBtn.addEventListener('click', () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(() => {
            deferredPrompt = null;
            installPwaBtn.classList.add('hidden');
        });
    }
});
