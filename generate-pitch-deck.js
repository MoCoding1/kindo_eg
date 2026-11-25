const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const dir = 'C:/Users/MSI/.gemini/antigravity/scratch/kindergarten-saas';
const logoLightBase64 = fs.readFileSync(path.join(dir, 'public/logo.png')).toString('base64');
const logoDarkBase64 = fs.readFileSync(path.join(dir, 'public/logo-dark.png')).toString('base64');
const logoLightSrc = `data:image/png;base64,${logoLightBase64}`;
const logoDarkSrc = `data:image/png;base64,${logoDarkBase64}`;

const htmlContent = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>كيندو | KINDO - ملف العرض الاستثماري والتعريفي للشركات والحضانات 2026</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Cairo', system-ui, -apple-system, sans-serif;
      -webkit-font-smoothing: antialiased;
    }

    @page {
      size: 1920px 1080px landscape;
      margin: 0;
    }

    body {
      background-color: #0b1523;
      color: #1e293b;
      margin: 0;
      padding: 0;
    }

    .slide {
      width: 1920px;
      height: 1080px;
      page-break-after: always;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 70px 90px;
      background: #f8fafc;
    }

    /* Ambient Background Shapes */
    .slide::before {
      content: "";
      position: absolute;
      top: -150px;
      left: -150px;
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, rgba(74, 127, 158, 0.08) 0%, rgba(248, 250, 252, 0) 70%);
      border-radius: 50%;
      pointer-events: none;
    }

    .slide::after {
      content: "";
      position: absolute;
      bottom: -150px;
      right: -150px;
      width: 550px;
      height: 550px;
      background: radial-gradient(circle, rgba(203, 95, 56, 0.06) 0%, rgba(248, 250, 252, 0) 70%);
      border-radius: 50%;
      pointer-events: none;
    }

    /* Header & Footer Components */
    .slide-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 10;
      padding-bottom: 20px;
      border-bottom: 2px solid #e2e8f0;
    }

    .header-logo-group {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .header-logo {
      height: 60px;
      width: auto;
      object-fit: contain;
    }

    .header-title-box h3 {
      font-size: 20px;
      font-weight: 800;
      color: #1e3252;
    }

    .header-title-box p {
      font-size: 13px;
      color: #64748b;
      font-weight: 600;
    }

    .slide-badge {
      padding: 8px 20px;
      background: rgba(30, 50, 82, 0.08);
      color: #1e3252;
      border: 1px solid rgba(30, 50, 82, 0.15);
      border-radius: 30px;
      font-size: 14px;
      font-weight: 700;
    }

    .slide-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 10;
      padding-top: 20px;
      border-top: 1px solid #e2e8f0;
      font-size: 14px;
      color: #64748b;
      font-weight: 600;
    }

    .slide-footer-brand {
      display: flex;
      align-items: center;
      gap: 12px;
      color: #1e3252;
      font-weight: 800;
    }

    .slide-footer-brand span {
      color: #cb5f38;
    }

    /* Content Area */
    .slide-body {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      z-index: 10;
      padding: 30px 0;
    }

    .slide-title-section {
      margin-bottom: 35px;
    }

    .category-tag {
      display: inline-block;
      font-size: 14px;
      font-weight: 800;
      color: #cb5f38;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 8px;
    }

    .slide-main-title {
      font-size: 40px;
      font-weight: 900;
      color: #1e3252;
      line-height: 1.25;
    }

    .slide-subtitle {
      font-size: 18px;
      color: #64748b;
      font-weight: 600;
      margin-top: 8px;
    }

    /* Grid Layouts */
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 35px;
    }

    .grid-3 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 30px;
    }

    .grid-4 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 25px;
    }

    /* Cards */
    .feature-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 24px;
      padding: 35px 30px;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.04);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
    }

    .feature-card.highlight {
      border: 2px solid #1e3252;
      background: linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%);
    }

    .card-icon {
      width: 65px;
      height: 65px;
      border-radius: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      margin-bottom: 20px;
      box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.6);
    }

    .icon-blue { background: #e0f2fe; color: #0284c7; }
    .icon-green { background: #dcfce7; color: #16a34a; }
    .icon-orange { background: #ffedd5; color: #ea580c; }
    .icon-purple { background: #f3e8ff; color: #9333ea; }
    .icon-amber { background: #fef3c7; color: #d97706; }

    .card-title {
      font-size: 22px;
      font-weight: 800;
      color: #1e3252;
      margin-bottom: 12px;
    }

    .card-desc {
      font-size: 15px;
      color: #475569;
      line-height: 1.6;
      font-weight: 600;
    }

    .card-pill {
      display: inline-block;
      align-self: flex-start;
      margin-top: 18px;
      padding: 6px 14px;
      background: #f1f5f9;
      color: #1e3252;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 800;
    }

    /* Cover Slide Specifics */
    .cover-slide {
      background: linear-gradient(135deg, #0e1e33 0%, #1a3254 50%, #152740 100%);
      color: #ffffff;
      padding: 90px 110px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .cover-slide::before {
      background: radial-gradient(circle, rgba(203, 95, 56, 0.25) 0%, rgba(14, 30, 51, 0) 70%);
      width: 700px;
      height: 700px;
      top: -200px;
      left: -200px;
    }

    .cover-slide::after {
      background: radial-gradient(circle, rgba(56, 127, 93, 0.2) 0%, rgba(14, 30, 51, 0) 70%);
      width: 750px;
      height: 750px;
      bottom: -200px;
      right: -200px;
    }

    .cover-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      z-index: 10;
    }

    .cover-logo-box {
      display: flex;
      align-items: center;
      gap: 24px;
    }

    .cover-logo {
      height: 95px;
      width: auto;
      object-fit: contain;
      filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.4));
    }

    .cover-badge {
      background: rgba(255, 255, 255, 0.12);
      border: 1px solid rgba(255, 255, 255, 0.25);
      color: #ffffff;
      padding: 10px 24px;
      border-radius: 50px;
      font-size: 15px;
      font-weight: 700;
      backdrop-blur: 10px;
    }

    .cover-middle {
      position: relative;
      z-index: 10;
      max-width: 1200px;
    }

    .cover-tagline-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 8px 20px;
      background: rgba(203, 95, 56, 0.25);
      border: 1px solid rgba(203, 95, 56, 0.5);
      color: #fca5a5;
      border-radius: 30px;
      font-size: 15px;
      font-weight: 800;
      margin-bottom: 24px;
    }

    .cover-title {
      font-size: 64px;
      font-weight: 900;
      line-height: 1.2;
      color: #ffffff;
      margin-bottom: 20px;
    }

    .cover-title span {
      background: linear-gradient(90deg, #f59e0b 0%, #fb923c 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .cover-desc {
      font-size: 22px;
      color: #94a3b8;
      line-height: 1.6;
      font-weight: 600;
      max-width: 950px;
    }

    .cover-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 30px;
      border-top: 1px solid rgba(255, 255, 255, 0.15);
      position: relative;
      z-index: 10;
      font-size: 16px;
      color: #cbd5e1;
    }

    .cover-specs {
      display: flex;
      gap: 35px;
    }

    .spec-item {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 700;
    }

    /* Metric Counters */
    .metric-row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 25px;
      margin-top: 15px;
    }

    .metric-box {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 20px;
      padding: 25px;
      text-align: center;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
    }

    .metric-val {
      font-size: 42px;
      font-weight: 900;
      color: #1e3252;
      line-height: 1;
      margin-bottom: 8px;
    }

    .metric-val.green { color: #16a34a; }
    .metric-val.coral { color: #cb5f38; }
    .metric-val.blue { color: #0284c7; }

    .metric-label {
      font-size: 14px;
      font-weight: 700;
      color: #64748b;
    }

    /* Pricing Table */
    .pricing-card {
      background: #ffffff;
      border: 1px solid #cbd5e1;
      border-radius: 24px;
      padding: 40px 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: 0 10px 25px rgba(0,0,0,0.04);
      position: relative;
    }

    .pricing-card.featured {
      border: 3px solid #1e3252;
      box-shadow: 0 20px 40px -10px rgba(30, 50, 82, 0.25);
      transform: scale(1.02);
    }

    .featured-tag {
      position: absolute;
      top: -15px;
      left: 50%;
      transform: translateX(-50%);
      background: #cb5f38;
      color: #ffffff;
      padding: 6px 18px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 800;
    }

    .price-amount {
      font-size: 44px;
      font-weight: 900;
      color: #1e3252;
      margin: 15px 0 5px;
    }

    .price-amount span {
      font-size: 16px;
      font-weight: 600;
      color: #64748b;
    }

    .price-features {
      list-style: none;
      margin: 25px 0;
      space-y: 12px;
    }

    .price-features li {
      font-size: 15px;
      color: #334155;
      font-weight: 600;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .price-features li::before {
      content: "✓";
      color: #16a34a;
      font-weight: 900;
    }

    .price-btn {
      padding: 14px;
      border-radius: 14px;
      text-align: center;
      font-weight: 800;
      font-size: 15px;
      background: #f1f5f9;
      color: #1e3252;
      border: none;
    }

    .price-btn.featured-btn {
      background: #1e3252;
      color: #ffffff;
    }
  </style>
</head>
<body>

  <!-- ==================== SLIDE 1: COVER ==================== -->
  <div class="slide cover-slide">
    <div class="cover-top">
      <div class="cover-logo-box">
        <img src="${logoDarkSrc}" alt="Kindo Logo" class="cover-logo">
      </div>
      <div class="cover-badge">ملف العرض الاستثماري والتعريفي 2026 • Enterprise SaaS</div>
    </div>

    <div class="cover-middle">
      <div class="cover-tagline-badge">
        <span>🚀</span>
        <span>الجيل القادم في إدارة رياض الأطفال والحضانات الذكية</span>
      </div>
      <h1 class="cover-title">
        منظومة <span>كيندو (KINDO)</span><br>
        الحل السحابي المتكامل لرياض الأطفال الرائدة
      </h1>
      <p class="cover-desc">
        نظام سحابي وتطبيق هاتف فائق الذكاء مصمم خصيصاً لسلاسل الحضانات والمدارس الدولية لتحويل العمليات اليومية، وأمن البوابات، وتتبع الحافلات، ورعاية نمو الأطفال إلى تجربة رقمية استثنائية تبهر أولياء الأمور وتضاعف أرباح المؤسسة.
      </p>
    </div>

    <div class="cover-bottom">
      <div class="cover-specs">
        <div class="spec-item">🛡️ نظام أمان واستلام معتمد</div>
        <div class="spec-item">🚌 رادار GPS حي للحافلات</div>
        <div class="spec-item">🧠 رادار نمو وفق معايير UNICEF</div>
        <div class="spec-item">📲 تطبيق هاتف PWA كامل</div>
      </div>
      <div style="font-weight: 800;">
        للتواصل المباشر: <span style="color: #f59e0b; font-family: monospace;">01013511067</span>
      </div>
    </div>
  </div>

  <!-- ==================== SLIDE 2: THE CHALLENGE ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="header-logo-group">
        <img src="${logoLightSrc}" alt="Kindo" class="header-logo">
        <div class="header-title-box">
          <h3>كيندو | KINDO</h3>
          <p>منظومة إدارة الحضانات الذكية</p>
        </div>
      </div>
      <div class="slide-badge">01 • التحديات التشغيلية في القطاع</div>
    </div>

    <div class="slide-body">
      <div class="slide-title-section">
        <span class="category-tag">THE PROBLEM</span>
        <h2 class="slide-main-title">4 كوابيس يومية تعاني منها إدارات الحضانات والمدارس</h2>
        <p class="slide-subtitle">إهدار مئات الساعات وضياع الإيرادات والتعرض لمخاطر أمنية بسبب الطرق التقليدية الورقية</p>
      </div>

      <div class="grid-4">
        <div class="feature-card">
          <div>
            <div class="card-icon icon-orange">⚠️</div>
            <h4 class="card-title">مخاطر تسليم الأطفال</h4>
            <p class="card-desc">
              ازدحام وفوضى وقت الخروج، واحتمالية تسليم الطفل لشخص غير مصرح له، والاعتماد على حفظ الوجوه الورقي المعرض للخطأ البشري الفادح.
            </p>
          </div>
          <span class="card-pill">خطر أمني وقانوني كبير</span>
        </div>

        <div class="feature-card">
          <div>
            <div class="card-icon icon-blue">📞</div>
            <h4 class="card-title">فوضى اتصالات الباصات</h4>
            <p class="card-desc">
              عشرات الاتصالات اليومية المذعورة من أولياء الأمور: "الباص فين؟" "اتأخر ليه؟"، مما يشتت إدارة الروضة والسائقين ويخلق توتراً دائماً.
            </p>
          </div>
          <span class="card-pill">إهدار 40+ ساعة شهرياً</span>
        </div>

        <div class="feature-card">
          <div>
            <div class="card-icon icon-purple">💸</div>
            <h4 class="card-title">تأخر تحصيل المصروفات</h4>
            <p class="card-desc">
              متابعة الديون عبر دفاتر مانيوال وإكسل، وضياع إيصالات الدفع اليدوية، والنزاعات مع أولياء الأمور حول المبالغ المتبقية وغرامات التأخير.
            </p>
          </div>
          <span class="card-pill">تأخر 28% من الإيرادات</span>
        </div>

        <div class="feature-card">
          <div>
            <div class="card-icon icon-green">📋</div>
            <h4 class="card-title">تقارير نمو ورقية بدائية</h4>
            <p class="card-desc">
              أوراق ورقية مطبوعة لا تعكس التطور الذهني والحركي الحقيقي للطفل، مما يفقد الحضانة ميزتها التنافسية أمام الحضانات الحديثة المنافسة.
            </p>
          </div>
          <span class="card-pill">ضعف تجديد الاشتراكات</span>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div class="slide-footer-brand">كيندو <span>|</span> الحل الرقمي المتكامل لرياض الأطفال</div>
      <div>صفحة 2 من 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 3: THE SOLUTION ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="header-logo-group">
        <img src="${logoLightSrc}" alt="Kindo" class="header-logo">
        <div class="header-title-box">
          <h3>كيندو | KINDO</h3>
          <p>منظومة إدارة الحضانات الذكية</p>
        </div>
      </div>
      <div class="slide-badge">02 • الحل الشامل لمنظومة كيندو</div>
    </div>

    <div class="slide-body">
      <div class="slide-title-section">
        <span class="category-tag">THE KINDO SOLUTION</span>
        <h2 class="slide-main-title">منصة رقمية واحدة تربط كافة أطراف العملية التعليمية</h2>
        <p class="slide-subtitle">إدارة سلسة تجمع أولياء الأمور، المعلمات، أمن البوابة، والإدارة العليا على شاشة واحدة</p>
      </div>

      <div class="grid-3">
        <div class="feature-card highlight">
          <div>
            <div class="card-icon icon-blue">📱</div>
            <h4 class="card-title">تطبيق ولي الأمر الشامل (PWA)</h4>
            <p class="card-desc">
              تطبيق مثبت على هاتف ولي الأمر (iOS & Android) يتيح له تتبع الباص المباشر بالـ GPS، استلام صور ولحظات طفله اليومية، الاطلاع على الوجبات، وتصريح الاستلام المشفر، والدفع السريع عبر InstaPay.
            </p>
          </div>
          <span class="card-pill">تطبيق جوال سريع بدون متجر</span>
        </div>

        <div class="feature-card highlight">
          <div>
            <div class="card-icon icon-green">🛡️</div>
            <h4 class="card-title">محطة البوابة الذكية والكشك الرقمي</h4>
            <p class="card-desc">
              شاشة أمنية مخصصة لحارس البوابة أو مشرفة الاستقبال لمسح رمز الـ QR أو كتابة كود الـ OTP مع نغمة تنبيه صوتية تؤكد تطابق صورة المستلم المصرح له مع الطفل لمنع أي خطأ بنسبة 100%.
            </p>
          </div>
          <span class="card-pill">أمان بنكي لا يقبل الخطأ</span>
        </div>

        <div class="feature-card highlight">
          <div>
            <div class="card-icon icon-purple">📊</div>
            <h4 class="card-title">غرفة القيادة التنفيذية للـ CEO</h4>
            <p class="card-desc">
              لوحة ذكاء أعمال (Executive BI Cockpit) تقدم لملاك الروضة ومجلس الإدارة مؤشرات استبقاء الأطفال (Retention Rate: 96.4%)، الإيرادات المتكررة (MRR)، وتنبؤات مالية استباقية لـ 6 أشهر قادمة.
            </p>
          </div>
          <span class="card-pill">ذكاء مالي واستراتيجي كامل</span>
        </div>
      </div>

      <div class="metric-row">
        <div class="metric-box">
          <div class="metric-val green">100%</div>
          <div class="metric-label">أمان تسليم الأطفال ومنع الأخطاء</div>
        </div>
        <div class="metric-box">
          <div class="metric-val coral">-85%</div>
          <div class="metric-label">انخفاض اتصالات واستفسارات الباص</div>
        </div>
        <div class="metric-box">
          <div class="metric-val blue">+35%</div>
          <div class="metric-label">سرعة تحصيل المصروفات عبر إنستاباي</div>
        </div>
        <div class="metric-box">
          <div class="metric-val green">98.5%</div>
          <div class="metric-label">معدل رضا وسعادة أولياء الأمور (NPS +86)</div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div class="slide-footer-brand">كيندو <span>|</span> الحل الرقمي المتكامل لرياض الأطفال</div>
      <div>صفحة 3 من 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 4: BUS RADAR & GATEKEEPER ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="header-logo-group">
        <img src="${logoLightSrc}" alt="Kindo" class="header-logo">
        <div class="header-title-box">
          <h3>كيندو | KINDO</h3>
          <p>منظومة إدارة الحضانات الذكية</p>
        </div>
      </div>
      <div class="slide-badge">03 • التقنيات التنافسية الكبرى (Part 1)</div>
    </div>

    <div class="slide-body">
      <div class="slide-title-section">
        <span class="category-tag">KILLER FEATURE #1</span>
        <h2 class="slide-main-title">رادار الحافلات الذكي ومحطة البوابة المشفرة</h2>
        <p class="slide-subtitle">أحدث تقنيات الـ GPS والأمن الصوتي التي تميز روضتك وتجعلها الخيار الأول والأكثر أماناً</p>
      </div>

      <div class="grid-2">
        <div class="feature-card">
          <div class="card-icon icon-blue">🚌</div>
          <h4 class="card-title">رادار الحافلات المباشر (Live Bus GPS Radar)</h4>
          <p class="card-desc" style="font-size: 16px;">
            • <strong>تتبع خريطة حي بالثانية:</strong> يشاهد ولي الأمر مسار الباص وسرعته الحالية ومحطاته القادمة وموعد وصوله المتوقع.<br>
            • <strong>تنبيهات اقتراب ذكية بالواتساب:</strong> إرسال إشعار فوري لولي الأمر عبر الواتساب بنقرة واحدة: "الباص على بعد دقيقتين، يرجى الاستعداد".<br>
            • <strong>إنهاء الانتظار في الشارع:</strong> الحفاظ على سلامة الطفل من حرارة الصيف وبرد الشتاء والانتظار العشوائي.
          </p>
          <span class="card-pill">مربوط بنظام واتساب فوري</span>
        </div>

        <div class="feature-card">
          <div class="card-icon icon-green">🛡️</div>
          <h4 class="card-title">محطة البوابة الموثقة (Gatekeeper Dismissal Station)</h4>
          <p class="card-desc" style="font-size: 16px;">
            • <strong>رمز QR مشفر وكود تحقق سريع (OTP):</strong> يتغير يومياً في هاتف ولي الأمر أو الشخص المخول بالاستلام.<br>
            • <strong>نغمة تأكيد صوتية (Audio Chime):</strong> تصدر من جهاز الأمن فور كتابة الكود الصحيح لتنبيه الجميع بسلامة الاستلام.<br>
            • <strong>مطابقة الهوية بالصورة:</strong> تظهر شاشة الأمن صورة الطفل وبيانات المستلم وعلاقته به لمنع أي تسليم خاطئ إطلاقاً.
          </p>
          <span class="card-pill">أمان بنكي لا يقبل التخمين</span>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div class="slide-footer-brand">كيندو <span>|</span> الحل الرقمي المتكامل لرياض الأطفال</div>
      <div>صفحة 4 من 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 5: AI DEVELOPMENTAL RADAR ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="header-logo-group">
        <img src="${logoLightSrc}" alt="Kindo" class="header-logo">
        <div class="header-title-box">
          <h3>كيندو | KINDO</h3>
          <p>منظومة إدارة الحضانات الذكية</p>
        </div>
      </div>
      <div class="slide-badge">04 • التقنيات التنافسية الكبرى (Part 2)</div>
    </div>

    <div class="slide-body">
      <div class="slide-title-section">
        <span class="category-tag">KILLER FEATURE #2</span>
        <h2 class="slide-main-title">رادار الذكاء الاصطناعي لنمو مهارات الطفل (CDC & UNICEF)</h2>
        <p class="slide-subtitle">أقوى أداة تسويقية وتربوية تمكن الروضة من رفع رسوم الاشتراك بثقة وتثبت تميزها الأكاديمي</p>
      </div>

      <div class="grid-4">
        <div class="feature-card">
          <div class="card-icon icon-blue">🗣️</div>
          <h4 class="card-title">النطق والتخاطب</h4>
          <p class="card-desc">
            تتبع الحصيلة اللغوية، تركيب الجمل، مهارات الاستماع، ونطق الحروف لاكتشاف أي تأخر في الكلام مبكراً.
          </p>
          <span class="card-pill">معايير دولية دقيقة</span>
        </div>

        <div class="feature-card">
          <div class="card-icon icon-orange">🤸</div>
          <h4 class="card-title">المهارات الحركية</h4>
          <p class="card-desc">
            قياس التوازن، مسك القلم والمقص، الجري والقفز، والتنسيق البصري اليدوي لتقوية عضلات الطفل الدقيقة.
          </p>
          <span class="card-pill">رصد أسبوعي مستمر</span>
        </div>

        <div class="feature-card">
          <div class="card-icon icon-purple">🧩</div>
          <h4 class="card-title">التفكير المنطقي</h4>
          <p class="card-desc">
            متابعة حل الألغاز (Puzzles)، فرز الألوان والأشكال الهندسية، وفهم التسلسل الرقمي والسببي.
          </p>
          <span class="card-pill">تنمية الذكاء المعرفي</span>
        </div>

        <div class="feature-card">
          <div class="card-icon icon-green">🤝</div>
          <h4 class="card-title">التكيف الاجتماعي</h4>
          <p class="card-desc">
            مشاركة الألعاب مع الأقران، التعبير عن المشاعر بهدوء، الاستقلالية الذاتية، وحل الخلافات البسيطة.
          </p>
          <span class="card-pill">الذكاء العاطفي</span>
        </div>
      </div>

      <div class="feature-card" style="margin-top: 25px; flex-direction: row; align-items: center; justify-content: space-between; padding: 25px 35px; background: #e0f2fe; border: 2px solid #0284c7;">
        <div>
          <h4 style="font-size: 20px; font-weight: 800; color: #0369a1;">🤖 توصيف تحليلي ذكي يكتبه الذكاء الاصطناعي لكل طفل بنقرة زر</h4>
          <p style="font-size: 15px; color: #075985; margin-top: 4px; font-weight: 600;">
            يقوم النظام بتجميع ملاحظات المعلمة وتوليد تقرير تربوي متكامل يرسل لولي الأمر عبر الواتساب ويُطبع في بطاقة التخرج الدورية.
          </p>
        </div>
        <div style="font-weight: 900; font-size: 18px; color: #0284c7; white-space: nowrap;">
          شهادة تطور معتمدة 🏆
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div class="slide-footer-brand">كيندو <span>|</span> الحل الرقمي المتكامل لرياض الأطفال</div>
      <div>صفحة 5 من 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 6: E-CONTRACT, HEALTH & STORE ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="header-logo-group">
        <img src="${logoLightSrc}" alt="Kindo" class="header-logo">
        <div class="header-title-box">
          <h3>كيندو | KINDO</h3>
          <p>منظومة إدارة الحضانات الذكية</p>
        </div>
      </div>
      <div class="slide-badge">05 • بيئة عمل رقمية متطورة بدون أوراق</div>
    </div>

    <div class="slide-body">
      <div class="slide-title-section">
        <span class="category-tag">ENTERPRISE WORKFLOWS</span>
        <h2 class="slide-main-title">عقود إلكترونية، جواز صحي سريري، ومتجر ذكي</h2>
        <p class="slide-subtitle">إلغاء المعاملات الورقية وتوفير قنوات دخل جديدة للروضة مع تسهيل حياة ولي الأمر</p>
      </div>

      <div class="grid-3">
        <div class="feature-card">
          <div class="card-icon icon-purple">✍️</div>
          <h4 class="card-title">التعاقد الرقمي بالتوقيع الحي باللمس</h4>
          <p class="card-desc">
            • توقيع ولي الأمر على الشاشة مباشرة باللمس أو الماوس.<br>
            • بنود لائحة الحضانة وشروط الرسوم والتوصيل موثقة.<br>
            • ختم رقمي وكود تشفير رسمي معتمد (KND-ESIGN).<br>
            • إرسال نسخة العقد لواتساب ولي الأمر وطباعتها كـ PDF.
          </p>
          <span class="card-pill">صفر أوراق وأرشفة أبدية</span>
        </div>

        <div class="feature-card">
          <div class="card-icon icon-green">💉</div>
          <h4 class="card-title">الجواز الصحي ومحاصرة الأوبئة</h4>
          <p class="card-desc">
            • جدول التطعيمات الوزاري المصري والإضافي (MMR، جديري، شلل).<br>
            • ملف الحساسية والأدوية المصرح بها مع جرعات دقيقة للمشرفة.<br>
            • بروتوكول عزل فوري عند رصد أي حالة معدية في الفصل.<br>
            • إرسال تنبيه طبي وقائي لجميع أهالي الفصل بضغطة زر.
          </p>
          <span class="card-pill">أمان صحي وسريري كامل</span>
        </div>

        <div class="feature-card">
          <div class="card-icon icon-orange">🛍️</div>
          <h4 class="card-title">متجر الروضة والدفع الفوري (InstaPay)</h4>
          <p class="card-desc">
            • بيع الزي الرسمي، الكتب، الحقائب، والوجبات الصحية داخل التطبيق.<br>
            • ربط مباشر برقم الحضانة الرسمي أو حساب InstaPay.<br>
            • فواتير إلكترونية ومطابقة إيصالات الدفع فورياً مع المحاسب.<br>
            • فتح مصدر أرباح سنوي إضافي يزيد من إيرادات الحضانة.
          </p>
          <span class="card-pill">إيرادات إضافية مستمرة</span>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div class="slide-footer-brand">كيندو <span>|</span> الحل الرقمي المتكامل لرياض الأطفال</div>
      <div>صفحة 6 من 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 7: EXECUTIVE BI COCKPIT ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="header-logo-group">
        <img src="${logoLightSrc}" alt="Kindo" class="header-logo">
        <div class="header-title-box">
          <h3>كيندو | KINDO</h3>
          <p>منظومة إدارة الحضانات الذكية</p>
        </div>
      </div>
      <div class="slide-badge">06 • الذكاء الإداري والتنبؤ المالي للمدير التنفيذي</div>
    </div>

    <div class="slide-body">
      <div class="slide-title-section">
        <span class="category-tag">EXECUTIVE INTELLIGENCE</span>
        <h2 class="slide-main-title">غرفة قيادة تنفيذية وتحليلات تنبؤية للـ CEO ومجلس الإدارة</h2>
        <p class="slide-subtitle">قرارات استثمارية مبنية على أرقام دقيقة وتنبؤات بالذكاء الاصطناعي للـ 6 أشهر القادمة</p>
      </div>

      <div class="grid-2">
        <div class="feature-card highlight">
          <h4 class="card-title" style="font-size: 24px;">📊 مؤشرات الأداء الحيوية في شاشة واحدة</h4>
          <div style="space-y: 15px; margin-top: 15px;">
            <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
              <span style="font-weight: 700; color: #475569;">معدل استبقاء الطلاب (Retention Rate):</span>
              <span style="font-weight: 900; color: #16a34a; font-size: 18px;">96.4% (ممتاز)</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
              <span style="font-weight: 700; color: #475569;">نسبة تسرب الطلاب السنوية (Churn Rate):</span>
              <span style="font-weight: 900; color: #0284c7; font-size: 18px;">3.6% فقط</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
              <span style="font-weight: 700; color: #475569;">نسبة استيعاب وإشغال الفصول:</span>
              <span style="font-weight: 900; color: #cb5f38; font-size: 18px;">88.9% من السعة الكلية</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding: 12px 0;">
              <span style="font-weight: 700; color: #475569;">هامش الأمان النقدي للمؤسسة (Cash Runway):</span>
              <span style="font-weight: 900; color: #1e3252; font-size: 18px;">14.5 شهراً</span>
            </div>
          </div>
        </div>

        <div class="feature-card">
          <div class="card-icon icon-purple">🔮</div>
          <h4 class="card-title" style="font-size: 24px;">التنبؤ المالي وتوصيات التوسع بالـ AI</h4>
          <p class="card-desc" style="font-size: 16px;">
            • <strong>نموذج تدفقات نقدية للـ 6 أشهر القادمة:</strong> يحدد بدقة مواعيد ذروة سداد الأقساط وتحصيل رسوم الترم الثاني مسبقاً لتخطيط السيولة.<br><br>
            • <strong>توصية آلية بدراسة جدوى التوسع:</strong> يحلل النظام قوائم الانتظار ونسبة الإشغال ويقترح مثلاً: "افتتاح فصل KG1 إضافي سيحقق عائداً صافياً قدره 52,500 ج.م شهرياً مع تغطية تكلفة المعلمة".<br><br>
            • <strong>تقييم شهري للمعلمات ومسير الحوافز:</strong> رصد آلي لالتزام المعلمات، تقييمات أولياء الأمور، وإدراج المكافآت بمسير الرواتب.
          </p>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div class="slide-footer-brand">كيندو <span>|</span> الحل الرقمي المتكامل لرياض الأطفال</div>
      <div>صفحة 7 من 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 8: ROI FOR NURSERIES ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="header-logo-group">
        <img src="${logoLightSrc}" alt="Kindo" class="header-logo">
        <div class="header-title-box">
          <h3>كيندو | KINDO</h3>
          <p>منظومة إدارة الحضانات الذكية</p>
        </div>
      </div>
      <div class="slide-badge">07 • دراسة الجدوى والعائد على الاستثمار (ROI)</div>
    </div>

    <div class="slide-body">
      <div class="slide-title-section">
        <span class="category-tag">BUSINESS IMPACT</span>
        <h2 class="slide-main-title">كيف يدفع نظام "كيندو" تكلفته بنفسه ويحقق أرباحاً صافية؟</h2>
        <p class="slide-subtitle">النظام ليس تكلفة إضافية، بل أداة توليد أرباح وتوفير هائل في النفقات التشغيلية المباشرة</p>
      </div>

      <div class="grid-4">
        <div class="feature-card">
          <div class="card-icon icon-green">💵</div>
          <h4 class="card-title">توفير 80% من النفقات الورقية</h4>
          <p class="card-desc">
            إلغاء دفاتر المتابعة الورقية اليومية، الفواتير المطبوعة، أوراق العقود، والشهادات. توفير مباشر يتراوح بين <strong>15,000 إلى 25,000 ج.م سنوياً</strong> لكل فرع.
          </p>
        </div>

        <div class="feature-card">
          <div class="card-icon icon-blue">📈</div>
          <h4 class="card-title">زيادة استبقاء الطلاب بنسبة 25%+</h4>
          <p class="card-desc">
            انبهار أولياء الأمور بتطبيق الهاتف وتتبع الباص اللحظي والقصة اليومية الذكية يمنع انتقال الأطفال لحضانات أخرى ويرفع معدل استمرارهم للسنوات القادمة.
          </p>
        </div>

        <div class="feature-card">
          <div class="card-icon icon-orange">⏱️</div>
          <h4 class="card-title">تقليص وقت الانصراف بنسبة 70%</h4>
          <p class="card-desc">
            تقليل وقت فوضى تسليم الأطفال من 45 دقيقة يومياً إلى 12 دقيقة فقط بفضل كود الـ OTP ومحطة البوابة، مما يخفف التكدس المروري أمام بوابات الروضة.
          </p>
        </div>

        <div class="feature-card">
          <div class="card-icon icon-purple">🎯</div>
          <h4 class="card-title">أرباح مبيعات المتجر الإلكتروني</h4>
          <p class="card-desc">
            بيع مستلزمات الحضانة واليونيفورم والأنشطة الصيفية بضغطة زر داخل التطبيق يحقق هامش ربح إضافي يتراوح بين <strong>30,000 إلى 70,000 ج.م سنوياً</strong>.
          </p>
        </div>
      </div>

      <div class="feature-card" style="margin-top: 30px; background: #f0fdf4; border: 2px solid #16a34a; text-align: center; padding: 25px;">
        <h4 style="font-size: 22px; font-weight: 900; color: #166534;">
          النتيجة: كل 1 جنيه تدفعه الحضانة في اشتراك كيندو يحقق عائداً موفراً ومباشراً يعادل 4.8 جنيهات!
        </h4>
      </div>
    </div>

    <div class="slide-footer">
      <div class="slide-footer-brand">كيندو <span>|</span> الحل الرقمي المتكامل لرياض الأطفال</div>
      <div>صفحة 8 من 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 9: PRICING & MODELS ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="header-logo-group">
        <img src="${logoLightSrc}" alt="Kindo" class="header-logo">
        <div class="header-title-box">
          <h3>كيندو | KINDO</h3>
          <p>منظومة إدارة الحضانات الذكية</p>
        </div>
      </div>
      <div class="slide-badge">08 • خطط الأسعار ونماذج التعاقد المرنة</div>
    </div>

    <div class="slide-body">
      <div class="slide-title-section">
        <span class="category-tag">COMMERCIAL PACKAGES</span>
        <h2 class="slide-main-title">باقات مصممة لتناسب مختلف أحجام الحضانات والمجموعات</h2>
        <p class="slide-subtitle">إمكانية الاشتراك السحابي الشهري أو شراء نسخة كاملة مخصصة باسم وشعار المؤسسة</p>
      </div>

      <div class="grid-3">
        <!-- Tier 1 -->
        <div class="pricing-card">
          <div>
            <h4 style="font-size: 20px; font-weight: 800; color: #1e3252;">باقة الانطلاق الذكي (Smart Start)</h4>
            <p style="font-size: 13px; color: #64748b; margin-top: 4px;">للحضانات المستقلة والناشئة</p>
            <div class="price-amount">3,500 <span>ج.م / شهرياً</span></div>
            <p style="font-size: 12px; color: #16a34a; font-weight: 700; margin-bottom: 15px;">أو 35,000 ج.م سنوياً (وفر شهرين 🎁)</p>
            <ul class="price-features">
              <li>سعة حتى 50 طفلاً مقيداً</li>
              <li>إدارة ملفات الأطفال والحضور الذكي</li>
              <li>تطبيق ولي الأمر (PWA) للوجبات واللحظات</li>
              <li>الفواتير الإلكترونية والتحصيل بـ InstaPay</li>
              <li>العيادة والجرعات الطبية والحرارة</li>
              <li>دعم فني وتدريب للكادر عبر واتساب</li>
            </ul>
          </div>
          <button class="price-btn">اختيار باقة الانطلاق</button>
        </div>

        <!-- Tier 2 -->
        <div class="pricing-card featured">
          <div class="featured-tag">الأكثر طلباً واختياراً 🌟</div>
          <div>
            <h4 style="font-size: 20px; font-weight: 800; color: #1e3252;">باقة التميز والريادة (Pro Growth)</h4>
            <p style="font-size: 13px; color: #64748b; margin-top: 4px;">للحضانات الرائدة واللغات المتصدرة</p>
            <div class="price-amount">6,500 <span>ج.م / شهرياً</span></div>
            <p style="font-size: 12px; color: #16a34a; font-weight: 700; margin-bottom: 15px;">أو 65,000 ج.م سنوياً (وفر شهرين 🎁)</p>
            <ul class="price-features">
              <li><strong>سعة حتى 150 طفلاً مقيداً</strong></li>
              <li><strong>جميع ميزات باقة الانطلاق الذكي</strong></li>
              <li><strong>🚌 رادار الحافلات المباشر (GPS) والواتساب</strong></li>
              <li><strong>🛡️ محطة أمن البوابة (QR & OTP) مع الصوت</strong></li>
              <li><strong>🧠 رادار نمو الطفل بالـ AI (CDC/UNICEF)</strong></li>
              <li><strong>📖 قصة النوم اليومية بالذكاء الاصطناعي</strong></li>
              <li><strong>🛍️ متجر الروضة الإلكتروني وسداد إنستاباي</strong></li>
            </ul>
          </div>
          <button class="price-btn featured-btn">بدء تجربة باقة التميز مجاناً</button>
        </div>

        <!-- Tier 3 -->
        <div class="pricing-card">
          <div>
            <h4 style="font-size: 20px; font-weight: 800; color: #1e3252;">الصروح والمؤسسات (Enterprise VIP)</h4>
            <p style="font-size: 13px; color: #64748b; margin-top: 4px;">للمدارس وسلاسل الفروع الكبرى</p>
            <div class="price-amount">11,500 <span>ج.م / شهرياً</span></div>
            <p style="font-size: 12px; color: #16a34a; font-weight: 700; margin-bottom: 15px;">أو 115,000 ج.م سنوياً (وفر شهرين 🎁)</p>
            <ul class="price-features">
              <li><strong>سعة غير محدودة للأطفال والفروع</strong></li>
              <li><strong>📊 غرفة القيادة والتنبؤ المالي للـ CEO</strong></li>
              <li><strong>✍️ عقود إلكترونية موثقة بالتوقيع باللمس</strong></li>
              <li><strong>💉 الجواز الصحي وسجل محاصرة الأوبئة</strong></li>
              <li><strong>🏆 نظام مؤشرات أداء المعلمات (KPIs)</strong></li>
              <li><strong>🏷️ خيار النطاق والهوية الخاصة (White-Label)</strong></li>
              <li><strong>مدير حساب استراتيجي ودعم VIP أولوية</strong></li>
            </ul>
          </div>
          <button class="price-btn">طلب عرض سعر مخصص</button>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div class="slide-footer-brand">كيندو <span>|</span> الحل الرقمي المتكامل لرياض الأطفال</div>
      <div>صفحة 9 من 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 10: CTA & PILOT ==================== -->
  <div class="slide cover-slide" style="padding: 80px 100px;">
    <div class="cover-top">
      <div class="cover-logo-box">
        <img src="${logoDarkSrc}" alt="Kindo Logo" class="cover-logo">
      </div>
      <div class="cover-badge">عرض حصري خالٍ تماماً من أي مخاطرة</div>
    </div>

    <div class="cover-middle" style="text-align: center; max-width: 1000px; margin: 0 auto;">
      <div class="cover-tagline-badge" style="background: rgba(16, 185, 129, 0.2); border-color: rgba(16, 185, 129, 0.4); color: #6ee7b7;">
        <span>🎁</span>
        <span>عرض التجربة المجانية لمدة 14 يوماً (Zero-Risk Pilot)</span>
      </div>
      <h2 style="font-size: 50px; font-weight: 900; color: #ffffff; line-height: 1.25; margin-bottom: 20px;">
        دعنا نُبهر أولياء أمورك ونُبسّط إدارة روضتك<br>
        <span style="color: #f59e0b;">بدون أن تدفع جنيهاً واحداً اليوم!</span>
      </h2>
      <p style="font-size: 20px; color: #cbd5e1; line-height: 1.6; max-width: 850px; margin: 0 auto;">
        سنقوم بتجهيز وتهيئة النظام لحضانتك بالكامل خلال 48 ساعة فقط، وتدريب معلماتك مجاناً. جرّب النظام مع أولياء الأمور لمدة أسبوعين، وقرر بنفسك بعد رؤية النتائج على أرض الواقع.
      </p>

      <div style="display: flex; justify-content: center; gap: 20px; margin-top: 40px;">
        <div style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 20px; padding: 20px 35px; backdrop-blur: 10px;">
          <p style="font-size: 13px; color: #94a3b8; font-weight: 700;">للتواصل وحجز العرض التجريبي:</p>
          <p style="font-size: 28px; font-weight: 900; color: #f59e0b; font-family: monospace; direction: ltr; margin-top: 5px;">01013511067</p>
        </div>
        <div style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 20px; padding: 20px 35px; backdrop-blur: 10px;">
          <p style="font-size: 13px; color: #94a3b8; font-weight: 700;">البريد الإلكتروني للإدارة:</p>
          <p style="font-size: 20px; font-weight: 800; color: #ffffff; margin-top: 5px;">waelm5278@gmail.com</p>
        </div>
      </div>
    </div>

    <div class="cover-bottom">
      <div style="font-weight: 700;">كيندو (KINDO) • منصة المستقبل لحضانات الوطن العربي 🇪🇬 🇸🇦 🇦🇪</div>
      <div style="font-weight: 800; color: #f59e0b;">جاهزون للبدء معكم فوراً 🚀</div>
    </div>
  </div>

</body>
</html>
`;

const htmlPath = path.join(dir, 'public/kindo-pitch-deck.html');
fs.writeFileSync(htmlPath, htmlContent, 'utf8');
console.log('HTML Pitch Deck written to:', htmlPath);

// Output PDF path
const pdfPath = path.join(dir, 'public/Kindo-Executive-Pitch-Deck.pdf');

// Run msedge headless to generate PDF
const edgeCmd = `"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe" --headless --disable-gpu --print-to-pdf="${pdfPath}" --print-to-pdf-no-header --run-all-compositor-stages-before-draw "${htmlPath}"`;

console.log('Executing Edge PDF generation...');
try {
  execSync(edgeCmd, { stdio: 'inherit' });
  console.log('SUCCESS! PDF generated at:', pdfPath);
  const stats = fs.statSync(pdfPath);
  console.log('PDF file size:', (stats.size / 1024).toFixed(1), 'KB');
} catch (e) {
  console.error('Error generating PDF with Edge:', e);
}
