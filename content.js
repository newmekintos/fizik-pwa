const contentData = {
    'duzgun-cembersel': `
        <h2>🔄 Düzgün Çembersel Hareket</h2>
        
        <div class="info-card">
            <h3>📌 Temel Kavramlar</h3>
            <p>Düzgün çembersel hareket yapan cismin çembersel yolu almasını sağlayan, büyüklüğü sabit ve çembere sürekli teğet olan anlık hız, cismin <strong>çizgisel hızıdır</strong>.</p>
            
            <h4>🔹 Periyot (T) ve Frekans (f)</h4>
            <p><strong>T (Periyot):</strong> Bir tam devir için geçen süre (saniye)</p>
            <p><strong>f (Frekans):</strong> Birim zamanda yapılan devir sayısı (Hz veya s⁻¹)</p>
            <div class="formula-box">f = 1/T&nbsp;&nbsp;veya&nbsp;&nbsp;T = 1/f</div>
        </div>

        <div class="info-card">
            <h3>⚡ Çizgisel Hız (v)</h3>
            <div class="formula-box">v = 2πr/T&nbsp;&nbsp;veya&nbsp;&nbsp;v = 2πrf</div>
            <p><strong>Semboller:</strong></p>
            <ul>
                <li><strong>v:</strong> Çizgisel hız (m/s)</li>
                <li><strong>r:</strong> Yarıçap (m)</li>
                <li><strong>T:</strong> Periyot (s)</li>
                <li><strong>f:</strong> Frekans (Hz)</li>
            </ul>
            
            <h4>🔹 Açısal Hız (ω)</h4>
            <div class="formula-box">ω = 2π/T&nbsp;&nbsp;veya&nbsp;&nbsp;ω = 2πf</div>
            <p><strong>Semboller:</strong></p>
            <ul>
                <li><strong>ω:</strong> Açısal hız (rad/s)</li>
                <li><strong>π:</strong> Pi sayısı (≈ 3.14)</li>
            </ul>
            
            <h4>🔗 İlişki</h4>
            <div class="formula-box">v = ω × r</div>
        </div>

        <div class="info-card">
            <h3>📊 Merkezcil İvme ve Kuvvet</h3>
            <p><strong>Merkezcil İvme (a):</strong> Yönü merkeze doğru</p>
            <div class="formula-box">a = v²/r&nbsp;&nbsp;veya&nbsp;&nbsp;a = ω²·r</div>
            <p><strong>Semboller:</strong></p>
            <ul>
                <li><strong>a:</strong> Merkezcil ivme (m/s²)</li>
            </ul>
            
            <p><strong>Merkezcil Kuvvet (Fm):</strong> Yönü merkeze doğru</p>
            <div class="formula-box">Fm = m·v²/r&nbsp;&nbsp;veya&nbsp;&nbsp;Fm = m·ω²·r</div>
            <p><strong>Semboller:</strong></p>
            <ul>
                <li><strong>Fm:</strong> Merkezcil kuvvet (N - Newton)</li>
                <li><strong>m:</strong> Kütle (kg)</li>
            </ul>
            
            <p><strong>Kasnak/Dişli Sistemler:</strong> Temas noktalarında çizgisel hızlar eşit</p>
            <div class="formula-box">ω₁·r₁ = ω₂·r₂</div>
        </div>

        <button class="quiz-btn" data-quiz="duzgun-cembersel">
            📝 Bu Konuyu Test Et
        </button>
    `,

    'viraj': `
        <h2>🏎️ Viraj Dönüş Şartları</h2>
        
        <div class="info-card">
            <h3>🛣️ Yatay Virajda Dönme</h3>
            <p>Sürtünme kuvveti merkezcil kuvveti sağlar:</p>
            <div class="formula-box">Fs = Fm</div>
            <p><strong>Semboller:</strong></p>
            <ul>
                <li><strong>Fs:</strong> Sürtünme kuvveti (N)</li>
                <li><strong>Fm:</strong> Merkezcil kuvvet (N)</li>
            </ul>
        </div>

        <div class="info-card">
            <h3>⛰️ Eğimli Virajda Dönme</h3>
            <p>Ağırlık ve normal kuvvetin bileşkesi merkezcil kuvveti oluşturur:</p>
            <div class="formula-box">tanθ = Fm/mg = v²/(r·g)</div>
            <p>Buradan hız formülü:</p>
            <div class="formula-box">v² = g·r·tanθ</div>
            <p><strong>Semboller:</strong></p>
            <ul>
                <li><strong>θ (teta):</strong> Eğim açısı (derece veya radyan)</li>
                <li><strong>g:</strong> Yerçekimi ivmesi (≈ 9.8 m/s² veya 10 m/s²)</li>
                <li><strong>tan:</strong> Tanjant (trigonometrik fonksiyon)</li>
            </ul>
        </div>

        <div class="info-card">
            <h3>🎡 Düşey Düzlemde Çembersel Hareket</h3>
            <p>Düşey düzlemde düzgün çembersel hareket yapan cismin çizgisel hızının büyüklüğü yörünge boyunca sabittir. Merkezcil kuvvetin büyüklüğü de sabittir.</p>
            
            <p><strong>K noktası (en üst):</strong></p>
            <p>Merkezcil kuvvet; merkeze doğru olan ağırlık (mg) ile ipteki gerilme kuvvetinin toplamına eşittir.</p>
            <div class="formula-box">F = TK + mg → TK = F - mg</div>
            
            <p><strong>L noktası (yandaki):</strong></p>
            <p>Ağırlık, ipteki gerilme kuvvetine diktir. Ağırlığın merkezcil kuvvete etkisi olmaz.</p>
            <div class="formula-box">F = TL</div>
            
            <p><strong>N noktası (en alt):</strong></p>
            <p>Ağırlık, ipteki gerilme kuvvetine zıt yönlü olduğu için, merkezcil kuvvet ipteki gerilme kuvvetinden ağırlık kadar (mg) daha az olur.</p>
            <div class="formula-box">F = TN - mg → TN = F + mg</div>
            
            <p><strong>P (veya M) noktası (α açısında):</strong></p>
            <p>Ağırlığın ip doğrultusundaki bileşeni, ipteki gerilme kuvvetine zıt yönlü olur.</p>
            <div class="formula-box">F = TP - mg·cosα → TP = F + mg·cosα</div>
            
            <p><strong>Semboller:</strong></p>
            <ul>
                <li><strong>T:</strong> İp gerilme kuvveti (N)</li>
                <li><strong>F:</strong> Merkezcil kuvvet = m·v²/r (N)</li>
                <li><strong>mg:</strong> Ağırlık kuvveti (N)</li>
                <li><strong>α (alfa):</strong> İpin düşey eksene göre açısı</li>
                <li><strong>cos:</strong> Kosinüs (trigonometrik fonksiyon)</li>
            </ul>
            
            <p><strong>Önemli:</strong> TN > TL > TK (ip gerilimleri sıralaması)</p>
        </div>

        <div class="info-card">
            <h3>🎪 Silindir İçinde Dönen Cisimler</h3>
            <p>Cismin düşmemesi için:</p>
            <div class="formula-box">Fs ≥ mg</div>
            <p>En küçük hız:</p>
            <div class="formula-box">v = √(g·r/k)</div>
            <p><strong>Semboller:</strong></p>
            <ul>
                <li><strong>k:</strong> Sürtünme katsayısı (boyutsuz)</li>
                <li><strong>√:</strong> Karekök</li>
            </ul>
        </div>

        <div class="info-card">
            <h3>🎢 Konik Sarkaç (Lunapark)</h3>
            <p>İp gerilmesi ve ağırlığın bileşkesi merkezcil kuvveti oluşturur:</p>
            <div class="formula-box">tanθ = Fm/mg = v²/(r·g)</div>
            <p><strong>Semboller:</strong></p>
            <ul>
                <li><strong>θ (teta):</strong> İpin düşey eksene göre açısı</li>
            </ul>
        </div>

        <button class="quiz-btn" data-quiz="viraj">
            📝 Bu Konuyu Test Et
        </button>
    `,

    'donme-kinetik': `
        <h2>⚡ Dönme Kinetik Enerjisi</h2>
        
        <div class="info-card">
            <h3>🔄 Dönerek Öteleme Hareketi</h3>
            <p>İlerleme ve dönme hareketlerini aynı anda gerçekleştiren cisimlerin hareketine <strong>dönerek öteleme hareketi</strong> denir.</p>
            <p>Yuvarlanma hareketinde öteleme hızı = çizgisel hız</p>
        </div>

        <div class="info-card">
            <h3>⚙️ Eylemsizlik Momenti (I)</h3>
            <p>Noktasal olmayan cisim oluşturan n tane parçacık için:</p>
            <div class="formula-box">I = Σmr² = m₁r₁² + m₂r₂² + ... + mnrn²</div>
            <p><strong>Semboller:</strong></p>
            <ul>
                <li><strong>I:</strong> Eylemsizlik momenti (kg·m²)</li>
                <li><strong>Σ (sigma):</strong> Toplam işareti</li>
                <li><strong>n:</strong> Parçacık sayısı</li>
            </ul>
            <p>Cismin kütlesinin dönme eksenine olan uzaklığının karesi ile ilgilidir.</p>
            <p><strong>Eylemsizlik momenti:</strong> Cisimlerin dönme harekete karşı gösterdiği direnç.</p>
        </div>

        <div class="info-card">
            <h3>💫 Dönme Kinetik Enerjisi</h3>
            <p>Dönen cisimlerin kinetik enerjisi:</p>
            <div class="formula-box">Ed = ½·I·ω²</div>
            
            <h4>🎯 Toplam Kinetik Enerji</h4>
            <p>Hem dönen hem ötelenen cisimler için:</p>
            <div class="formula-box">E = Eöteleme + Edönme</div>
            <div class="formula-box">E = ½·m·v² + ½·I·ω²</div>
            <p><strong>Semboller:</strong></p>
            <ul>
                <li><strong>E:</strong> Toplam kinetik enerji (J - Joule)</li>
                <li><strong>Ed:</strong> Dönme kinetik enerjisi (J)</li>
                <li><strong>Eöteleme:</strong> Öteleme kinetik enerjisi (J)</li>
                <li><strong>½:</strong> Yarım (0.5)</li>
            </ul>
        </div>

        <button class="quiz-btn" data-quiz="donme-kinetik">
            📝 Bu Konuyu Test Et
        </button>
    `,

    'acisal-momentum': `
        <h2>🔁 Açısal Momentum</h2>
        
        <div class="info-card">
            <h3>📐 Açısal Momentum Tanımı</h3>
            <p><strong>Doğrusal bir yörüngede v hızıyla hareket eden cismin çizgisel momentumu</strong>, cismin hızı ve kütlesinin çarpımına (m·v) eşittir.</p>
            
            <p>Bir eksen etrafında r yarıçaplı çembersel yörüngede hareket eden m kütleli noktasal cismin <strong>açısal momentumunun büyüklüğü</strong> cismin çizgisel momentumu (mv) ile cismin yörünge yarıçapının (r) çarpımına eşittir.</p>
            
            <div class="formula-box">L = P · r = m · v · r</div>
            
            <p><strong>Semboller:</strong></p>
            <ul>
                <li><strong>L:</strong> Açısal momentum (kg·m²/s)</li>
                <li><strong>P:</strong> Çizgisel momentum = m·v (kg·m/s)</li>
                <li><strong>m:</strong> Kütle (kg)</li>
                <li><strong>v:</strong> Çizgisel hız (m/s)</li>
                <li><strong>r:</strong> Yarıçap/Uzaklık (m)</li>
            </ul>
            
            <p><strong>Vektörel ifade:</strong></p>
            <div class="formula-box">L⃗ = r⃗ × P⃗</div>
            <p><strong>×:</strong> Vektörel çarpım işareti</p>
            
            <p><strong>Noktasal olmayan bir cisim için:</strong></p>
            <p>Bu bağıntı, m kütleli noktasal bir parçacık için yazılabilir. Noktasal olmayan bir cisim oluşturan n tane noktasal parçacık için, yukarıdaki açısal momentum bağıntısı ayrı ayrı yazılarak toplanırsa cismin açısal momentumu bulunur.</p>
            
            <div class="formula-box">L = m₁ω r₁² + m₂ω r₂² + ... + mnω rn²</div>
            <div class="formula-box">L = ω(m₁r₁² + m₂r₂² + ... + mnrn²)</div>
            <div class="formula-box">L = ω(Σmr²)</div>
            
            <p><strong>Σmr²</strong> cismin <strong>eylemsizlik momentidir.</strong> Cisimlerin eylemsizlik momentleri I ile gösterilir.</p>
            
            <div class="formula-box">L = I · ω</div>
            
            <p><strong>Bu durumda açısal momentum:</strong></p>
            <div class="formula-box">L = Σmr² · ω</div>
        </div>

        <div class="info-card">
            <h3>♻️ Açısal Momentum Korunumu Uygulaması</h3>
            <p><strong>Döner sandalyede oturan bir kişi ellerine birer ağırlık alarak</strong> kollarını açıktan sonra bir arkadaşı tarafından sandalyesi üzerinde döndürülmüş olsun.</p>
            
            <p>Sandalye üzerinde dönen kişi kollarını kapatarak ağırlıkları göğsünde toplasın.</p>
            
            <p><strong>Şekil I:</strong> Kollar açık → I₁ büyük, ω₁ küçük</p>
            <p><strong>Şekil II:</strong> Kollar kapalı → I₂ küçük, ω₂ büyük</p>
            
            <p><strong>Sonuç:</strong></p>
            <ul>
                <li>Bu durumda dönen sistemin eylemsizlik momenti azalır</li>
                <li>Eylemsizlik momentinin azalması ile orantılı olarak sistemin dönüş hızı artar</li>
                <li>Dönen kişi kollarını tekrar açarsa bu kez dönme hızı azalır</li>
            </ul>
            
            <p><strong>Korunum Yasası:</strong></p>
            <p>Sandalye üzerinde dönen kişi kollarını kapatarak ağırlıkları göğsünde toplasin. Bu durumda dönen sistemin eylemsizlik momenti azalır. Eylemsizlik momentinin azalması ile orantılı olarak sistemin dönüş hızı artar.</p>
            
            <div class="formula-box">L₁ = L₂</div>
            <div class="formula-box">I₁·ω₁ = I₂·ω₂</div>
            <div class="formula-box">ω₁ < ω₂ ve I₁ > I₂</div>
            
            <p><strong>Semboller:</strong></p>
            <ul>
                <li><strong>L₁, L₂:</strong> Başlangıç ve son açısal momentum</li>
                <li><strong>I₁, I₂:</strong> Başlangıç ve son eylemsizlik momenti</li>
                <li><strong>ω₁, ω₂:</strong> Başlangıç ve son açısal hız</li>
                <li><strong>&lt;:</strong> Küçüktür işareti</li>
                <li><strong>&gt;:</strong> Büyüktür işareti</li>
            </ul>
            
            <p><strong>Bu uygulamada:</strong></p>
            <ul>
                <li>Sisteme dışarıdan bir kuvvet uygulanmadığı için, toplam tork sıfırdır</li>
                <li>Bu uygulamada sisteme dışarıdan bir kuvvet uygulanmadığı için, toplam tork sıfırdır. Yani, açısal momentum korunur</li>
                <li>Bu korunum, eylemsizlik momentinin küçülmesi ile açısal hızın artması ya da eylemsizlik momentinin artması ile açısal hızın azalışı şeklinde olur</li>
            </ul>
            
            <p><strong>Dönen kişi kollarını tekrar açarsa bu kez dönme hızı azalır.</strong></p>
        </div>

        <div class="info-card">
            <h3>🎯 Önemli Notlar</h3>
            <ul>
                <li>Açısal momentum bir vektördür</li>
                <li>Dış tork sıfır ise açısal momentum korunur</li>
                <li>Eylemsizlik momentinin azalması açısal hızı artırır</li>
                <li>Bu prensip patenciler, buz dansçıları için de geçerlidir</li>
                <li>L = I·ω formülü L = m·v·r'den türetilir</li>
            </ul>
        </div>

        <button class="quiz-btn" data-quiz="acisal-momentum">
            📝 Bu Konuyu Test Et
        </button>
    `,

    'kutle-cekim': `
        <h2>🌍 Kütle Çekim Potansiyel Enerjisi</h2>
        
        <div class="info-card">
            <h3>🔮 Kütle Çekim Kuvveti</h3>
            <p><strong>Evrendeki bütün maddeler birbirlerini çeker.</strong> Maddelerin kütlelerinden dolayı birbirlerine uyguladıkları bu kuvvete <strong>kütle çekim kuvveti</strong> denir.</p>
            
            <p>Kütlelerin birbirine uyguladıkları F₁ ve F₂ kuvvetleri değerce birbirine eşit, aynı doğrultulu ve zıt yönlü kuvvetlerdir.</p>
            
            <div class="formula-box">F₁ = -F₂</div>
            
            <p><strong>Evrensel Çekim Kuvveti Formülü:</strong></p>
            <p>Kütle çekim alanında bulunan cisimlere kütle çekim kuvveti etki eder. Bu alanda kütle çekim potansiyel enerjisi vardır.</p>
            
            <div class="formula-box">F = G · m₁·m₂/d²</div>
            
            <p><strong>Semboller ve Açıklamaları:</strong></p>
            <ul>
                <li><strong>F:</strong> Çekim kuvveti (N - Newton)</li>
                <li><strong>G:</strong> Evrensel çekim sabiti = 6.67×10⁻¹¹ N·m²/kg²</li>
                <li><strong>m₁ ve m₂:</strong> Cisimlerin kütleleri (kg - kilogram)</li>
                <li><strong>d:</strong> Cisimlerin kütle merkezleri arasındaki uzaklık (m - metre)</li>
                <li><strong>10⁻¹¹:</strong> 10 üzeri -11 (0.0000000000667)</li>
            </ul>
            
            <p><strong>Alternatif yazılış:</strong></p>
            <div class="formula-box">F = G · (m·M)/d²</div>
            <ul>
                <li><strong>M:</strong> Büyük kütle (genellikle gezegen/yıldız kütlesi) (kg)</li>
                <li><strong>m:</strong> Küçük kütle (genellikle cisim kütlesi) (kg)</li>
            </ul>
        </div>

        <div class="info-card">
            <h3>🌎 Kütle Çekim Alanı</h3>
            <p><strong>Evrendeki her cisim</strong> kütle çekim potansiyel enerjisine sahiptir. <strong>Bu alana kütle çekim alanı denir.</strong> Bu alanın kütle merkeze doğru olan yönlü alarak kütle çekim potansiyel enerjiye karşılık olan uzaklığın karesi ile ters orantılı olarak azalır.</p>
            
            <p>Bağıntıda g, <strong>çekim alanı şiddeti veya çekim ivmesidir.</strong> Buna göre Dünya'nın yüzeyinden uzaklaştıkça çekim ivmesi yer kütle merkezine olan uzaklıkla ters orantılı olarak azalır.</p>
            
            <p><strong>Bu eşitlik kullanılarak,</strong></p>
            <div class="formula-box">m·g = G · (M·m)/R²</div>
            <div class="formula-box">g = G · M/R²</div>
            
            <p><strong>Semboller:</strong></p>
            <ul>
                <li><strong>g:</strong> Çekim alan şiddeti / Yerçekimi ivmesi (m/s²)</li>
                <li><strong>M:</strong> Dünya'nın (veya gezegenin) kütlesi (kg)</li>
                <li><strong>R:</strong> Dünya'nın (veya gezegenin) yarıçapı (m)</li>
            </ul>
            
            <p>elde edilir.</p>
            
            <p><strong>Dünya yüzeyinde:</strong></p>
            <ul>
                <li>g ≈ 9.8 m/s² (hesaplamalarda genellikle 10 m/s² alınır)</li>
                <li>Yüzeyden uzaklaştıkça çekim ivmesi azalır</li>
                <li>Dünya'nın yüzeyinden merkeze doğru gidildikçe yer çekim ivmesi kütle merkezine olan uzaklıkla doğru orantılı olarak değişir</li>
            </ul>
        </div>

        <div class="info-card">
            <h3>📐 İç Bölge Çekim İvmesi</h3>
            <p><strong>g = G · M/R² bağıntısında,</strong> M = d·V ve V = 4/3·πR³ değerleri yerine yazılınca,</p>
            
            <div class="formula-box">g = (4/3)·π·G·R·d</div>
            
            <p><strong>Semboller:</strong></p>
            <ul>
                <li><strong>d:</strong> Yoğunluk (kg/m³)</li>
                <li><strong>V:</strong> Hacim (m³)</li>
                <li><strong>R:</strong> Dünya merkezinden uzaklık (m)</li>
                <li><strong>π (pi):</strong> Pi sayısı ≈ 3.14</li>
                <li><strong>4/3:</strong> Küre hacim formülündeki katsayı</li>
            </ul>
            
            <p>bağıntısı bulunur.</p>
            
            <p><strong>Bu bağıntı,</strong> Dünya'nın yüzeyi Dünya'nın merkezi arasında geçerlidir. Buna göre, Dünya'nın yüzeyinden merkeze doğru gidildikçe yer çekim ivmesi merkeze olan uzaklıkla doğru orantılı olarak değişir.</p>
        </div>

        <div class="info-card">
            <h3>🎯 Önemli Noktalar</h3>
            <ul>
                <li><strong>Kütle çekim kuvveti:</strong> Evrendeki her cisim kütle çekim potansiyel enerjisine sahiptir</li>
                <li><strong>Çekim alanı şiddeti:</strong> Uzaklığın karesi ile ters orantılıdır</li>
                <li><strong>Yüzeyden uzaklaşma:</strong> Çekim ivmesi azalır (g = G·M/R²)</li>
                <li><strong>Merkeze yaklaşma:</strong> Çekim ivmesi uzaklıkla doğru orantılı değişir (g = 4/3·π·G·R·d)</li>
            </ul>
        </div>

        <button class="quiz-btn" data-quiz="kutle-cekim">
            📝 Bu Konuyu Test Et
        </button>
    `,

    'kepler': `
        <h2>🪐 Kepler Kanunları</h2>
        
        <div class="info-card">
            <h3>📜 Giriş</h3>
            <p><strong>Kepler, gezegenlerin Güneş etrafındaki hareketlerini üç kanunla açıklamıştır.</strong></p>
        </div>

        <div class="info-card">
            <h3>1️⃣ Yörüngeler Kanunu</h3>
            <p><strong>Her gezegen, odaklarından birinde Güneş bulunan elips şeklindeki bir yörüngede dolar.</strong></p>
            
            <p>Güneş, elips yörüngenin odaklarından birindedir. Elips şekildeki bir yörüngede Güneş, odaktan tam dolayı bir yörüngede doların.</p>
        </div>

        <div class="info-card">
            <h3>2️⃣ Alanlar Kanunu</h3>
            <p><strong>Güneş'i gezegene birleştiren yarıçap vektörü eşit zaman aralıklarında eşit alanlar tarar.</strong></p>
            
            <div class="formula-box">Δt₁ = Δt₂ ise, A₁ = A₂ dir</div>
            
            <p><strong>Semboller:</strong></p>
            <ul>
                <li><strong>Δ (delta):</strong> Değişim / Fark</li>
                <li><strong>t:</strong> Zaman (saniye)</li>
                <li><strong>A:</strong> Alan (m²)</li>
                <li><strong>₁, ₂:</strong> Alt indisler (birinci, ikinci durumlar)</li>
            </ul>
            
            <p><strong>Buna göre,</strong> gezegen Güneş'e yaklaştıkça hızlanır, uzaklaştıkça yavaşlar.</p>
            
            <p><strong>Öyleyse çembersel hareket yapan noktasal olmayan bir cismin açısal momentumu aşağıdaki bağıntı ile de bulunur.</strong></p>
            
            <p>Gezegen, Güneş'e yaklaştığında aynı zamanda eylemsizlik momenti azaldığı için hızlanır. Güneş'ten uzaklaştığında ise eylemsizlik momenti artar ve yavaşlar.</p>
            
            <p><strong>Sonuç:</strong></p>
            <ul>
                <li>Gezegen Güneş'e yaklaştıkça hızlanır</li>
                <li>Gezegen Güneş'ten uzaklaştıkça yavaşlar</li>
            </ul>
        </div>

        <div class="info-card">
            <h3>3️⃣ Periyotlar Kanunu</h3>
            <p><strong>Bütün gezegenler için ortalama yörünge yarı çapının küpünün, periyodunun karesine oranı sabittir.</strong></p>
            
            <div class="formula-box">R³/T² = K (Sabit)</div>
            
            <p><strong>Semboller:</strong></p>
            <ul>
                <li><strong>R:</strong> Ortalama yörünge yarı çapı (m - metre)</li>
                <li><strong>T:</strong> Gezegen dönüş periyodu (s - saniye veya yıl)</li>
                <li><strong>K:</strong> Sabit = 3.4 × 10¹⁸ m³/s²</li>
                <li><strong>³:</strong> Küp (üçüncü kuvvet)</li>
                <li><strong>²:</strong> Kare (ikinci kuvvet)</li>
                <li><strong>10¹⁸:</strong> 10 üzeri 18 (1,000,000,000,000,000,000)</li>
            </ul>
            
            <p><strong>Burada K</strong> = 3.4 × 10¹⁸ m³/s² dir. Güneş etrafında dolanan bütün gezegenler için aynı sabit değer geçerlidir.</p>
            
            <p><strong>R, ortalama yörünge yarı çapı:</strong></p>
            <p>R ortalama yörünge yarı çapıdır. R, maksimum ve minimum uzaklıkların toplamının yarısına eşittir.</p>
            <div class="formula-box">R = (Rmax + Rmin)/2</div>
            <p><strong>Semboller:</strong></p>
            <ul>
                <li><strong>Rmax:</strong> Maksimum uzaklık (aphelion - günöte)</li>
                <li><strong>Rmin:</strong> Minimum uzaklık (perihelion - günberi)</li>
            </ul>
            
            <p><strong>Farklı yıldız etrafında dolanan gezegenler için de benzer formül geçerlidir.</strong> Fakat K sabiti değişmektedir.</p>
        </div>

        <button class="quiz-btn" data-quiz="kepler">
            📝 Bu Konuyu Test Et
        </button>
    `
};
