// Theme Management
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// PWA Install
let deferredPrompt;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (!window.matchMedia('(display-mode: standalone)').matches) {
        installBtn.style.display = 'block';
    }
});

installBtn.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') installBtn.style.display = 'none';
    deferredPrompt = null;
});

// Mobile Menu
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const sidebar = document.getElementById('sidebar');

mobileMenuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        if (!sidebar.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    }
});

// Navigation
const navLinks = document.querySelectorAll('.nav-link');
const contentSections = document.querySelectorAll('.content-section');

window.addEventListener('DOMContentLoaded', () => {
    if (typeof contentData !== 'undefined') {
        Object.keys(contentData).forEach(key => {
            const section = document.getElementById(key);
            if (section) section.innerHTML = contentData[key];
        });
        initializeQuizButtons();
    }
    updateProgress();
    const lastSection = localStorage.getItem('currentSection') || 'duzgun-cembersel';
    showSection(lastSection);
});

function showSection(sectionId) {
    contentSections.forEach(section => section.classList.remove('active'));
    navLinks.forEach(link => link.classList.remove('active'));
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) targetSection.classList.add('active');
    
    const activeLink = document.querySelector(`[data-section="${sectionId}"]`);
    if (activeLink) activeLink.classList.add('active');
    
    localStorage.setItem('currentSection', sectionId);
    markSectionVisited(sectionId);
    
    if (window.innerWidth <= 768) {
        sidebar.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(link.getAttribute('data-section'));
    });
});

// Progress Tracking
function markSectionVisited(sectionId) {
    let visitedSections = JSON.parse(localStorage.getItem('visitedSections')) || [];
    if (!visitedSections.includes(sectionId)) {
        visitedSections.push(sectionId);
        localStorage.setItem('visitedSections', JSON.stringify(visitedSections));
        updateProgress();
    }
}

function updateProgress() {
    const visitedSections = JSON.parse(localStorage.getItem('visitedSections')) || [];
    const progress = (visitedSections.length / 6) * 100;
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    if (progressFill) progressFill.style.width = `${progress}%`;
    if (progressText) progressText.textContent = `${visitedSections.length}/6`;
}

// Quiz Data
const quizData = {
    'duzgun-cembersel': [
        { question: 'Düzgün çembersel hareket yapan bir cismin çizgisel hızının büyüklüğü 10 m/s ve yarıçapı 2 m ise, açısal hızı kaç rad/s?', options: ['2', '5', '10', '20'], correct: 1, explanation: 'v = ω·r formülünden, ω = v/r = 10/2 = 5 rad/s' },
        { question: 'Periyodu 4 saniye olan bir cismin frekansı kaç Hz?', options: ['0.25', '0.5', '2', '4'], correct: 0, explanation: 'f = 1/T = 1/4 = 0.25 Hz' },
        { question: 'Merkezcil ivmenin yönü hangi yöndedir?', options: ['Teğetsel', 'Merkeze doğru', 'Merkeze uzak', 'Yukarı'], correct: 1, explanation: 'Merkezcil ivme her zaman merkeze doğrudur.' },
        { question: 'Temas eden kasnaklarda çizgisel hızlar nasıldır?', options: ['Farklı', 'Eşit', 'Ters yönlü', 'Sıfır'], correct: 1, explanation: 'Temas noktalarında v₁ = v₂' }
    ],
    'viraj': [
        { question: 'Yatay virajda merkezcil kuvveti hangi kuvvet sağlar?', options: ['Normal', 'Sürtünme', 'Ağırlık', 'Gerilme'], correct: 1, explanation: 'Fs = Fm olur' },
        { question: 'Eğimli virajda tanθ = ?', options: ['v²/(r·g)', 'g/(v·r)', 'r/(v·g)', 'v·r/g'], correct: 0, explanation: 'tanθ = v²/(r·g)' },
        { question: 'Düşey düzlemde K noktasında ip gerilmesi?', options: ['T = 0', 'T = mg', 'T + mg = Fm', 'T = Fm + mg'], correct: 2, explanation: 'T = Fm - mg' },
        { question: 'Konik sarkaçta hız arttırılırsa açı nasıl değişir?', options: ['Artar', 'Azalır', 'Değişmez', 'Bilinmez'], correct: 0, explanation: 'Hız arttıkça açı artar' }
    ],
    'donme-kinetik': [
        { question: 'Dönme kinetik enerjisi formülü?', options: ['m·v²', '½·I·ω²', 'I·ω', '½·m·ω²'], correct: 1, explanation: 'Ed = ½·I·ω²' },
        { question: 'Toplam kinetik enerji?', options: ['½·m·v²', '½·I·ω²', '½·m·v² + ½·I·ω²', 'm·v² + I·ω²'], correct: 2, explanation: 'E = Eöteleme + Edönme' },
        { question: 'Eylemsizlik momenti neye bağlı?', options: ['Kütle', 'Yarıçap', 'Kütle ve yarıçap', 'Hız'], correct: 2, explanation: 'I = Σm·r²' },
        { question: 'I ikiye katlanırsa Ed nasıl değişir?', options: ['Yarıya', 'Değişmez', 'İki kat', 'Dört kat'], correct: 2, explanation: 'Ed = ½·I·ω² → I artar, Ed artar' }
    ],
    'acisal-momentum': [
        { question: 'Açısal momentum formülü?', options: ['m·v', 'I·ω', 'm·r', 'ω·r'], correct: 1, explanation: 'L = I·ω' },
        { question: 'Kollar açılınca dönüş hızı?', options: ['Artar', 'Azalır', 'Değişmez', 'Bilinmez'], correct: 1, explanation: 'I artar, ω azalır (L korunur)' },
        { question: 'Açısal momentum korunumu şartı?', options: ['Dış tork yok', 'Sürtünme yok', 'Hız sabit', 'Kütle sabit'], correct: 0, explanation: 'Dış tork yoksa L korunur' },
        { question: 'Açısal momentumun birimi?', options: ['kg·m/s', 'kg·m²/s', 'N·m', 'J'], correct: 1, explanation: 'L birimi: kg·m²/s' }
    ],
    'kutle-cekim': [
        { question: 'Evrensel çekim formülü?', options: ['m·g', 'G·m₁·m₂/d²', 'm·v²/r', 'k·x'], correct: 1, explanation: 'F = G·m₁·m₂/d²' },
        { question: 'G sabiti değeri?', options: ['6.67×10⁻¹¹', '9.8', '3×10⁸', '6.02×10²³'], correct: 0, explanation: 'G = 6.67×10⁻¹¹ N·m²/kg²' },
        { question: 'Yükseklik arttıkça çekim ivmesi?', options: ['Artar', 'Azalır', 'Değişmez', 'Bilinmez'], correct: 1, explanation: 'g = G·M/R² → R artar, g azalır' },
        { question: 'Çekim alanının yönü?', options: ['Yukarı', 'Aşağı', 'Merkeze', 'Teğetsel'], correct: 2, explanation: 'Kütle merkezine doğru' }
    ],
    'kepler': [
        { question: '1. Kanun - yörünge şekli?', options: ['Çember', 'Elips', 'Parabol', 'Hiperbol'], correct: 1, explanation: 'Elips yörünge' },
        { question: '2. Kanun - Güneşe yakınken?', options: ['Yavaşlar', 'Hızlanır', 'Durur', 'Sabit'], correct: 1, explanation: 'Alanlar kanunu: yakın=hızlı' },
        { question: '3. Kanun - R³/T² = ?', options: ['Değişken', 'Sabit (K)', 'Sıfır', 'Bilinmez'], correct: 1, explanation: 'R³/T² = K sabit' },
        { question: 'T₁=8, T₂=1 ise R₁/R₂ = ?', options: ['2', '4', '8', '64'], correct: 1, explanation: 'R₁/R₂ = ∛(8²) = 4' }
    ]
};

function initializeQuizButtons() {
    document.querySelectorAll('.quiz-btn').forEach(btn => {
        btn.addEventListener('click', () => startQuiz(btn.getAttribute('data-quiz')));
    });
}

function startQuiz(quizType) {
    const questions = quizData[quizType];
    if (!questions) return;
    
    let currentQ = 0, score = 0, answered = false;
    const modal = document.createElement('div');
    modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;z-index:3000;padding:20px';
    
    const box = document.createElement('div');
    box.style.cssText = 'background:var(--bg-secondary);border:2px solid var(--border);border-radius:20px;padding:40px;max-width:700px;width:100%;max-height:90vh;overflow-y:auto';
    
    // Shuffle function
    function shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    
    function render() {
        answered = false;
        const q = questions[currentQ];
        
        // Shuffle options and track correct answer
        const shuffledOptions = shuffleArray(q.options.map((opt, idx) => ({text: opt, isCorrect: idx === q.correct})));
        const newCorrectIndex = shuffledOptions.findIndex(opt => opt.isCorrect);
        
        box.innerHTML = `
            <div style="margin-bottom:24px">
                <div style="display:flex;justify-content:space-between;margin-bottom:16px">
                    <span style="color:var(--primary);font-weight:700">Soru ${currentQ+1}/${questions.length}</span>
                    <span style="color:var(--text-secondary)">Puan: ${score}</span>
                </div>
                <div style="background:var(--bg-tertiary);height:6px;border-radius:3px;overflow:hidden">
                    <div style="background:linear-gradient(90deg,var(--primary),var(--accent));height:100%;width:${(currentQ/questions.length)*100}%;transition:width 0.3s"></div>
                </div>
            </div>
            <h3 style="font-size:22px;color:var(--text-primary);margin-bottom:24px;line-height:1.5">${q.question}</h3>
            <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:24px">
                ${shuffledOptions.map((o,i)=>`<button class="qopt" data-i="${i}" data-correct="${o.isCorrect}" style="padding:16px 20px;background:var(--bg-tertiary);border:2px solid var(--border);border-radius:12px;cursor:pointer;font-size:16px;color:var(--text-primary);transition:all 0.2s;text-align:left">${o.text}</button>`).join('')}
            </div>
            <div id="exp" style="display:none;padding:16px;background:var(--bg-tertiary);border-left:4px solid var(--secondary);border-radius:8px;margin-bottom:20px"><strong style="color:var(--primary)">💡 Açıklama:</strong><p style="color:var(--text-secondary);margin:8px 0 0">${q.explanation}</p></div>
            <button id="next" style="display:none;width:100%;padding:16px;background:linear-gradient(135deg,var(--primary),var(--accent));color:white;border:none;border-radius:12px;font-size:16px;font-weight:700;cursor:pointer">${currentQ<questions.length-1?'Sonraki Soru →':'Sonuçları Gör 🎉'}</button>
            <button id="close" style="width:100%;padding:12px;background:transparent;color:var(--text-secondary);border:2px solid var(--border);border-radius:12px;font-size:14px;font-weight:600;cursor:pointer;margin-top:12px">Çıkış</button>
        `;
        
        box.querySelectorAll('.qopt').forEach(btn=>{
            btn.onclick=function(){
                if(answered)return;
                answered=true;
                const isCorrect=this.getAttribute('data-correct')==='true';
                if(isCorrect){this.style.background='linear-gradient(135deg,#10b981,#059669)';this.style.color='white';score++;}
                else{
                    this.style.background='linear-gradient(135deg,#ef4444,#dc2626)';this.style.color='white';
                    // Show correct answer
                    box.querySelectorAll('.qopt').forEach(opt=>{
                        if(opt.getAttribute('data-correct')==='true'){
                            opt.style.background='linear-gradient(135deg,#10b981,#059669)';
                            opt.style.color='white';
                        }
                    });
                }
                box.querySelectorAll('.qopt').forEach(o=>o.style.cursor='not-allowed');
                document.getElementById('exp').style.display='block';
                document.getElementById('next').style.display='block';
            };
        });
        
        setTimeout(()=>{
            document.getElementById('next').onclick=()=>{currentQ++;currentQ<questions.length?render():results();};
            document.getElementById('close').onclick=()=>document.body.removeChild(modal);
        },10);
    }
    
    function results(){
        const pct=Math.round((score/questions.length)*100);
        const msg=pct>=80?'Mükemmel! 🎉':pct>=60?'İyi çalışma! 👍':pct>=40?'Fena değil! 💪':'Daha çok çalış! 📖';
        const emoji=pct>=80?'🌟':pct>=60?'✨':pct>=40?'📚':'💡';
        box.innerHTML=`
            <div style="text-align:center">
                <div style="font-size:80px;margin-bottom:20px">${emoji}</div>
                <h2 style="font-size:32px;color:var(--primary);margin-bottom:12px">${msg}</h2>
                <div style="font-size:48px;font-weight:800;color:var(--text-primary);margin:24px 0">${score} / ${questions.length}</div>
                <div style="font-size:24px;color:var(--text-secondary);margin-bottom:32px">Başarı: %${pct}</div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:24px">
                    <div style="padding:20px;background:var(--bg-tertiary);border-radius:12px"><div style="font-size:14px;color:var(--text-secondary);margin-bottom:4px">Doğru</div><div style="font-size:32px;font-weight:800;color:var(--success)">${score}</div></div>
                    <div style="padding:20px;background:var(--bg-tertiary);border-radius:12px"><div style="font-size:14px;color:var(--text-secondary);margin-bottom:4px">Yanlış</div><div style="font-size:32px;font-weight:800;color:var(--error)">${questions.length-score}</div></div>
                </div>
                <button id="retry" style="width:100%;padding:16px;background:linear-gradient(135deg,var(--primary),var(--accent));color:white;border:none;border-radius:12px;font-size:16px;font-weight:700;cursor:pointer;margin-bottom:12px">🔄 Tekrar Dene</button>
                <button id="done" style="width:100%;padding:12px;background:transparent;color:var(--text-secondary);border:2px solid var(--border);border-radius:12px;font-size:14px;font-weight:600;cursor:pointer">Kapat</button>
            </div>
        `;
        setTimeout(()=>{
            document.getElementById('retry').onclick=()=>{document.body.removeChild(modal);startQuiz(quizType);};
            document.getElementById('done').onclick=()=>document.body.removeChild(modal);
        },10);
    }
    
    render();
    modal.appendChild(box);
    document.body.appendChild(modal);
}

console.log('✅ Fizik Premium - Yüklendi!');
