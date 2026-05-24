<template>
  <div ref="homepageRef" class="homepage">
    <!-- Parallax Window Scene -->
    <div class="scene" :class="{ 'scene-opened': windowOpened }">
      <!-- Layer 0: Sky -->
      <div class="layer layer-sky">
        <div class="cloud cloud-1"></div>
        <div class="cloud cloud-2"></div>
        <div class="cloud cloud-3"></div>
        <div class="cloud cloud-4"></div>
      </div>

      <!-- Layer 1: Far hills (slowest) -->
      <div class="layer layer-far-hills">
        <svg class="hill-svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#A5D6A7" fill-opacity="0.6" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <!-- Layer 2: Near hills (medium) -->
      <div class="layer layer-near-hills">
        <svg class="hill-svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#81C784" fill-opacity="0.8" d="M0,256L48,261.3C96,267,192,277,288,266.7C384,256,480,224,576,213.3C672,203,768,213,864,234.7C960,256,1056,288,1152,277.3C1248,267,1344,213,1392,186.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <!-- Layer 3: Garden grass + flowers (fastest, behind window) -->
      <div class="layer layer-garden">
        <div class="grass-blade blade-1"></div>
        <div class="grass-blade blade-2"></div>
        <div class="grass-blade blade-3"></div>
        <div class="grass-blade blade-4"></div>
        <div class="grass-blade blade-5"></div>
        <div class="grass-blade blade-6"></div>

        <!-- Flowers - 1:1 reference replicas -->
        <div class="flower-wrap flower-wrap-1">
          <svg class="flower-svg" viewBox="0 0 120 200" width="120" height="200">
            <path d="M60 200 Q62 170 60 140 Q58 110 60 100" stroke="#66BB6A" stroke-width="3" stroke-linecap="round" fill="none"/>
            <path d="M60 168 Q42 158 38 172 Q48 177 60 168" fill="#66BB6A" stroke="#4CAF50" stroke-width="0.5"/>
            <path d="M60 148 Q78 138 82 152 Q72 157 60 148" fill="#66BB6A" stroke="#4CAF50" stroke-width="0.5"/>
            <!-- Diamond frame -->
            <rect x="19" y="14" width="82" height="82" rx="14" fill="#EDE0F5" fill-opacity="0.65" stroke="#9B7CB6" stroke-width="5.5" transform="rotate(45 60 55)" stroke-linejoin="round"/>
            <rect x="24" y="19" width="72" height="72" rx="10" fill="none" stroke="#B8A0D0" stroke-width="1.5" transform="rotate(45 60 55)" stroke-linejoin="round"/>
            <!-- 4 rounded petals (capsule shape) -->
            <g transform="translate(60, 55)">
              <g transform="rotate(0)"><rect x="-10" y="-20" width="20" height="20" rx="10" fill="#D4B5E8" stroke="#9B7CB6" stroke-width="0.6"/></g>
              <g transform="rotate(90)"><rect x="-10" y="-20" width="20" height="20" rx="10" fill="#D4B5E8" stroke="#9B7CB6" stroke-width="0.6"/></g>
              <g transform="rotate(180)"><rect x="-10" y="-20" width="20" height="20" rx="10" fill="#D4B5E8" stroke="#9B7CB6" stroke-width="0.6"/></g>
              <g transform="rotate(270)"><rect x="-10" y="-20" width="20" height="20" rx="10" fill="#D4B5E8" stroke="#9B7CB6" stroke-width="0.6"/></g>
              <!-- Center dots -->
              <circle cx="0" cy="0" r="2.8" fill="#F3E8FA" stroke="#9B7CB6" stroke-width="0.5"/>
              <circle cx="-1.5" cy="-1.2" r="1" fill="#9B7CB6"/>
              <circle cx="1.5" cy="-1.2" r="1" fill="#9B7CB6"/>
              <circle cx="0" cy="1.5" r="1" fill="#9B7CB6"/>
              <circle cx="0" cy="0" r="0.7" fill="#9B7CB6"/>
            </g>
          </svg>
        </div>

        <div class="flower-wrap flower-wrap-2">
          <svg class="flower-svg" viewBox="0 0 120 200" width="120" height="200">
            <path d="M60 200 Q58 170 60 140 Q62 110 60 100" stroke="#66BB6A" stroke-width="3" stroke-linecap="round" fill="none"/>
            <path d="M60 168 Q42 158 38 172 Q48 177 60 168" fill="#66BB6A" stroke="#4CAF50" stroke-width="0.5"/>
            <path d="M60 148 Q78 138 82 152 Q72 157 60 148" fill="#66BB6A" stroke="#4CAF50" stroke-width="0.5"/>
            <!-- Circle frame -->
            <circle cx="60" cy="55" r="42" fill="#D8F0DE" fill-opacity="0.5" stroke="#5A9B6E" stroke-width="5.5" stroke-linecap="round"/>
            <circle cx="60" cy="55" r="37" fill="none" stroke="#7DBA8F" stroke-width="1.5"/>
            <!-- 5 rounded petals -->
            <g transform="translate(60, 55)">
              <g transform="rotate(0)"><rect x="-9" y="-19" width="18" height="19" rx="9" fill="#8FD3A5" stroke="#5A9B6E" stroke-width="0.6"/></g>
              <g transform="rotate(72)"><rect x="-9" y="-19" width="18" height="19" rx="9" fill="#8FD3A5" stroke="#5A9B6E" stroke-width="0.6"/></g>
              <g transform="rotate(144)"><rect x="-9" y="-19" width="18" height="19" rx="9" fill="#8FD3A5" stroke="#5A9B6E" stroke-width="0.6"/></g>
              <g transform="rotate(216)"><rect x="-9" y="-19" width="18" height="19" rx="9" fill="#8FD3A5" stroke="#5A9B6E" stroke-width="0.6"/></g>
              <g transform="rotate(288)"><rect x="-9" y="-19" width="18" height="19" rx="9" fill="#8FD3A5" stroke="#5A9B6E" stroke-width="0.6"/></g>
              <!-- Center dots -->
              <circle cx="0" cy="0" r="2.8" fill="#E8F5E9" stroke="#5A9B6E" stroke-width="0.5"/>
              <circle cx="-1.5" cy="-1.2" r="1" fill="#5A9B6E"/>
              <circle cx="1.5" cy="-1.2" r="1" fill="#5A9B6E"/>
              <circle cx="0" cy="1.5" r="1" fill="#5A9B6E"/>
              <circle cx="-0.8" cy="0.4" r="0.7" fill="#5A9B6E"/>
              <circle cx="0.8" cy="0.4" r="0.7" fill="#5A9B6E"/>
            </g>
          </svg>
        </div>

        <div class="flower-wrap flower-wrap-3">
          <svg class="flower-svg" viewBox="0 0 120 200" width="120" height="200">
            <path d="M60 200 Q62 170 60 140 Q58 110 60 100" stroke="#66BB6A" stroke-width="3" stroke-linecap="round" fill="none"/>
            <path d="M60 168 Q42 158 38 172 Q48 177 60 168" fill="#66BB6A" stroke="#4CAF50" stroke-width="0.5"/>
            <path d="M60 148 Q78 138 82 152 Q72 157 60 148" fill="#66BB6A" stroke="#4CAF50" stroke-width="0.5"/>
            <!-- Rounded triangle frame -->
            <path d="M60 12 C74 12 83 32 92 64 C97 78 101 88 60 88 C19 88 23 78 28 64 C37 32 46 12 60 12Z" fill="#FAD4E0" fill-opacity="0.55" stroke="#D4809A" stroke-width="5.5" stroke-linejoin="round"/>
            <path d="M60 19 C69 19 76 36 84 63 C87 73 89 80 60 80 C31 80 33 73 36 63 C44 36 51 19 60 19Z" fill="none" stroke="#E8A0B5" stroke-width="1.5"/>
            <!-- 3 rounded petals -->
            <g transform="translate(60, 58)">
              <g transform="rotate(0)"><rect x="-10" y="-20" width="20" height="20" rx="10" fill="#F4A6B5" stroke="#D4809A" stroke-width="0.6"/></g>
              <g transform="rotate(120)"><rect x="-10" y="-20" width="20" height="20" rx="10" fill="#F4A6B5" stroke="#D4809A" stroke-width="0.6"/></g>
              <g transform="rotate(240)"><rect x="-10" y="-20" width="20" height="20" rx="10" fill="#F4A6B5" stroke="#D4809A" stroke-width="0.6"/></g>
              <!-- Center dots -->
              <circle cx="0" cy="0" r="2.8" fill="#FCE4EC" stroke="#D4809A" stroke-width="0.5"/>
              <circle cx="-1.5" cy="-1.2" r="1" fill="#D4809A"/>
              <circle cx="1.5" cy="-1.2" r="1" fill="#D4809A"/>
              <circle cx="0" cy="1.5" r="1" fill="#D4809A"/>
              <circle cx="0" cy="0" r="0.7" fill="#D4809A"/>
            </g>
          </svg>
        </div>

        <div class="flower-wrap flower-wrap-4">
          <svg class="flower-svg" viewBox="0 0 120 200" width="120" height="200">
            <path d="M60 200 Q58 170 60 140 Q62 110 60 100" stroke="#66BB6A" stroke-width="3" stroke-linecap="round" fill="none"/>
            <path d="M60 168 Q42 158 38 172 Q48 177 60 168" fill="#66BB6A" stroke="#4CAF50" stroke-width="0.5"/>
            <path d="M60 148 Q78 138 82 152 Q72 157 60 148" fill="#66BB6A" stroke="#4CAF50" stroke-width="0.5"/>
            <!-- Rounded square frame -->
            <rect x="15" y="12" width="90" height="90" rx="20" fill="#D6EAF8" fill-opacity="0.55" stroke="#6BA3C7" stroke-width="5.5" stroke-linejoin="round"/>
            <rect x="20" y="17" width="80" height="80" rx="15" fill="none" stroke="#8BB8D8" stroke-width="1.5"/>
            <!-- 4 rounded petals -->
            <g transform="translate(60, 57)">
              <g transform="rotate(0)"><rect x="-10" y="-20" width="20" height="20" rx="10" fill="#A8D0E6" stroke="#6BA3C7" stroke-width="0.6"/></g>
              <g transform="rotate(90)"><rect x="-10" y="-20" width="20" height="20" rx="10" fill="#A8D0E6" stroke="#6BA3C7" stroke-width="0.6"/></g>
              <g transform="rotate(180)"><rect x="-10" y="-20" width="20" height="20" rx="10" fill="#A8D0E6" stroke="#6BA3C7" stroke-width="0.6"/></g>
              <g transform="rotate(270)"><rect x="-10" y="-20" width="20" height="20" rx="10" fill="#A8D0E6" stroke="#6BA3C7" stroke-width="0.6"/></g>
              <!-- Center dots -->
              <circle cx="0" cy="0" r="2.8" fill="#EBF5FB" stroke="#6BA3C7" stroke-width="0.5"/>
              <circle cx="-1.5" cy="-1.2" r="1" fill="#6BA3C7"/>
              <circle cx="1.5" cy="-1.2" r="1" fill="#6BA3C7"/>
              <circle cx="0" cy="1.5" r="1" fill="#6BA3C7"/>
              <circle cx="0" cy="0" r="0.7" fill="#6BA3C7"/>
            </g>
          </svg>
        </div>

        <div class="flower-wrap flower-wrap-5">
          <svg class="flower-svg" viewBox="0 0 120 200" width="120" height="200">
            <path d="M60 200 Q62 170 60 140 Q58 110 60 100" stroke="#66BB6A" stroke-width="3" stroke-linecap="round" fill="none"/>
            <path d="M60 168 Q42 158 38 172 Q48 177 60 168" fill="#66BB6A" stroke="#4CAF50" stroke-width="0.5"/>
            <path d="M60 148 Q78 138 82 152 Q72 157 60 148" fill="#66BB6A" stroke="#4CAF50" stroke-width="0.5"/>
            <!-- Circle frame -->
            <circle cx="60" cy="55" r="42" fill="#FFF8DC" fill-opacity="0.5" stroke="#C9A84C" stroke-width="5.5" stroke-linecap="round"/>
            <circle cx="60" cy="55" r="37" fill="none" stroke="#D4B86A" stroke-width="1.5"/>
            <!-- 5 rounded petals -->
            <g transform="translate(60, 55)">
              <g transform="rotate(0)"><rect x="-9" y="-19" width="18" height="19" rx="9" fill="#F0D78C" stroke="#C9A84C" stroke-width="0.6"/></g>
              <g transform="rotate(72)"><rect x="-9" y="-19" width="18" height="19" rx="9" fill="#F0D78C" stroke="#C9A84C" stroke-width="0.6"/></g>
              <g transform="rotate(144)"><rect x="-9" y="-19" width="18" height="19" rx="9" fill="#F0D78C" stroke="#C9A84C" stroke-width="0.6"/></g>
              <g transform="rotate(216)"><rect x="-9" y="-19" width="18" height="19" rx="9" fill="#F0D78C" stroke="#C9A84C" stroke-width="0.6"/></g>
              <g transform="rotate(288)"><rect x="-9" y="-19" width="18" height="19" rx="9" fill="#F0D78C" stroke="#C9A84C" stroke-width="0.6"/></g>
              <!-- Center dots -->
              <circle cx="0" cy="0" r="2.8" fill="#FFFDE7" stroke="#C9A84C" stroke-width="0.5"/>
              <circle cx="-1.5" cy="-1.2" r="1" fill="#C9A84C"/>
              <circle cx="1.5" cy="-1.2" r="1" fill="#C9A84C"/>
              <circle cx="0" cy="1.5" r="1" fill="#C9A84C"/>
              <circle cx="-0.8" cy="0.4" r="0.7" fill="#C9A84C"/>
              <circle cx="0.8" cy="0.4" r="0.7" fill="#C9A84C"/>
            </g>
          </svg>
        </div>

        <!-- Vine connecting flowers -->
        <svg class="vine-svg" viewBox="0 0 1200 50" preserveAspectRatio="none">
          <path d="M0 25 Q60 8 120 25 T240 25 T360 25 T480 25 T600 25 T720 25 T840 25 T960 25 T1080 25 T1200 25" fill="none" stroke="#66BB6A" stroke-width="3" stroke-linecap="round"/>
          <!-- Small leaves along vine -->
          <ellipse cx="90" cy="18" rx="5" ry="7" fill="#81C784" transform="rotate(-30 90 18)"/>
          <ellipse cx="270" cy="18" rx="5" ry="7" fill="#81C784" transform="rotate(25 270 18)"/>
          <ellipse cx="450" cy="18" rx="5" ry="7" fill="#81C784" transform="rotate(-30 450 18)"/>
          <ellipse cx="630" cy="18" rx="5" ry="7" fill="#81C784" transform="rotate(25 630 18)"/>
          <ellipse cx="810" cy="18" rx="5" ry="7" fill="#81C784" transform="rotate(-30 810 18)"/>
          <ellipse cx="990" cy="18" rx="5" ry="7" fill="#81C784" transform="rotate(25 990 18)"/>
          <ellipse cx="1170" cy="18" rx="5" ry="7" fill="#81C784" transform="rotate(-30 1170 18)"/>
        </svg>
      </div>

      <!-- Window (single central pane, no grid) -->
      <div class="window-container" :class="{ 'window-open': windowOpened }">
        <div class="window-pane">
          <div class="window-glass"></div>
          <div class="window-frame-top"></div>
          <div class="window-frame-bottom"></div>
          <div class="window-frame-left"></div>
          <div class="window-frame-right"></div>
          <!-- Window knob -->
          <div class="window-knob"></div>
        </div>
        <div class="window-sill-outer"></div>
        <div class="window-sill-inner"></div>
      </div>

      <!-- Title overlay -->
      <div class="scene-title" :class="{ 'title-shown': windowOpened }">
        <h1 class="glycogarden-title">Glycogarden</h1>
        <p class="glycogarden-subtitle">Fudan iGEM 2026</p>
      </div>

      <!-- Pre-open title overlay -->
      <div class="pre-title" :class="{ 'pre-title-hide': windowOpened }">
        <p class="pre-subtitle">Fudan iGEM 2026</p>
        <h1 class="pre-main-title">Glycogarden</h1>
        <button class="open-btn" @click="openWindow">
          <span>推开窗，走进花园</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

      <!-- Scroll hint -->
      <div class="scroll-hint" :class="{ 'hint-visible': windowOpened }">
        <span>向下滚动探索</span>
        <div class="scroll-arrow"></div>
      </div>
    </div>

    <!-- Section 2: Logo + Project Overview -->
    <section class="section logo-section" id="logo">
      <div class="section-container">
        <div class="logo-showcase">
          <div class="logo-circle">
            <svg viewBox="0 0 400 400" class="logo-svg">
              <!-- Outer ring text -->
              <defs>
                <path id="topArc" d="M 60 200 A 140 140 0 0 1 340 200" fill="none"/>
                <path id="bottomArc1" d="M 55 220 A 145 145 0 0 0 345 220" fill="none"/>
                <path id="bottomArc2" d="M 60 242 A 140 140 0 0 0 340 242" fill="none"/>
              </defs>
              <text class="logo-text-top">
                <textPath href="#topArc" startOffset="50%" text-anchor="middle" fill="#5A8FA8" font-size="22" font-weight="600" letter-spacing="2">POWER, PEOPLE - AND PROTEINS:</textPath>
              </text>
              <text class="logo-text-bottom">
                <textPath href="#bottomArc1" startOffset="50%" text-anchor="middle" fill="#D4809A" font-size="18" font-weight="500" letter-spacing="1">MAKING GLYCOENGINEERING FAIR</textPath>
              </text>
              <text class="logo-text-bottom">
                <textPath href="#bottomArc2" startOffset="50%" text-anchor="middle" fill="#5A9B6E" font-size="18" font-weight="500" letter-spacing="1">THROUGH RESPONSIBLE INNOVATION</textPath>
              </text>

              <!-- Center cloud/blob -->
              <path d="M120 180 Q110 140 150 130 Q190 110 230 130 Q270 140 280 180 Q290 220 260 250 Q230 280 190 270 Q150 280 120 250 Q100 220 120 180Z" fill="#FDF5E6" fill-opacity="0.9" stroke="#F0E6D0" stroke-width="2"/>

              <!-- Glycan chains on sides -->
              <g transform="translate(45, 140)">
                <rect x="0" y="0" width="20" height="20" rx="3" fill="#6BA3C7"/>
                <line x1="10" y1="20" x2="10" y2="40" stroke="#888" stroke-width="3"/>
                <circle cx="10" cy="50" r="12" fill="#8FD3A5"/>
                <line x1="10" y1="62" x2="10" y2="80" stroke="#888" stroke-width="3"/>
                <circle cx="10" cy="92" r="12" fill="#8FD3A5"/>
                <line x1="22" y1="92" x2="40" y2="85" stroke="#888" stroke-width="3"/>
                <rect x="40" y="75" width="18" height="18" rx="3" fill="#9B7CB6"/>
                <line x1="10" y1="104" x2="10" y2="120" stroke="#888" stroke-width="3"/>
                <circle cx="10" cy="130" r="10" fill="#F4A6B5"/>
                <line x1="0" y1="130" x2="-20" y2="120" stroke="#888" stroke-width="3"/>
                <rect x="-35" y="105" width="16" height="16" rx="3" fill="#A8A8C8"/>
                <circle cx="10" cy="150" r="8" fill="#F0D78C"/>
              </g>

              <g transform="translate(315, 140) scale(-1, 1)">
                <rect x="0" y="0" width="20" height="20" rx="3" fill="#9B7CB6"/>
                <line x1="10" y1="20" x2="10" y2="40" stroke="#888" stroke-width="3"/>
                <circle cx="10" cy="50" r="12" fill="#8FD3A5"/>
                <line x1="10" y1="62" x2="10" y2="80" stroke="#888" stroke-width="3"/>
                <circle cx="10" cy="92" r="12" fill="#8FD3A5"/>
                <line x1="22" y1="92" x2="40" y2="85" stroke="#888" stroke-width="3"/>
                <rect x="40" y="75" width="18" height="18" rx="3" fill="#6BA3C7"/>
                <line x1="10" y1="104" x2="10" y2="120" stroke="#888" stroke-width="3"/>
                <circle cx="10" cy="130" r="10" fill="#F4A6B5"/>
                <line x1="0" y1="130" x2="-20" y2="120" stroke="#888" stroke-width="3"/>
                <rect x="-35" y="105" width="16" height="16" rx="3" fill="#D4A5E8"/>
                <circle cx="10" cy="150" r="8" fill="#F0D78C"/>
              </g>

              <!-- Center text -->
              <text x="200" y="195" text-anchor="middle" fill="#5A4A3A" font-size="42" font-weight="800" letter-spacing="2">GLYCO</text>
              <text x="200" y="235" text-anchor="middle" fill="#5A4A3A" font-size="26" font-weight="700" letter-spacing="3">ENGINEERING</text>
              <line x1="150" y1="250" x2="250" y2="250" stroke="#8B7355" stroke-width="2"/>
              <text x="200" y="275" text-anchor="middle" fill="#5A9B6E" font-size="24" font-weight="700" letter-spacing="4">FAIR</text>
            </svg>
          </div>
          <div class="logo-caption">
            <h2>Making Glycoengineering Fair</h2>
            <p>Through Responsible Innovation</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Project Overview -->
    <section class="section project-section" id="project">
      <div class="section-container">
        <div class="section-header">
          <span class="section-tag">Project</span>
          <h2 class="section-title">糖基化工程 · Glycoengineering</h2>
          <p class="section-subtitle">
            我们致力于通过合成生物学手段，精准调控蛋白质糖基化修饰，<br>
            为疾病诊断与治疗开辟新途径。
          </p>
        </div>

        <div class="project-cards">
          <div class="project-card" v-for="(card, idx) in projectCards" :key="idx">
            <div class="card-icon" :style="{ background: card.color + '20', color: card.color }">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path v-if="card.icon === 'design'" d="M12 19l7-7 3 3-7 7-3-3z"/>
                <path v-if="card.icon === 'design'" d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                <path v-if="card.icon === 'experiment'" d="M10 2h4M12 2v8l3 3"/>
                <path v-if="card.icon === 'experiment'" d="M8 15h8v3a4 4 0 0 1-8 0v-3z"/>
                <path v-if="card.icon === 'model'" d="M4 19V5"/>
                <path v-if="card.icon === 'model'" d="M4 19h16"/>
                <path v-if="card.icon === 'model'" d="M6 15l3.5-4.5L13 13l5-6"/>
                <circle v-if="card.icon === 'model'" cx="6" cy="15" r="1"/>
                <circle v-if="card.icon === 'model'" cx="9.5" cy="10.5" r="1"/>
                <circle v-if="card.icon === 'model'" cx="13" cy="13" r="1"/>
                <circle v-if="card.icon === 'model'" cx="18" cy="7" r="1"/>
                <path v-if="card.icon === 'community'" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle v-if="card.icon === 'community'" cx="9" cy="7" r="4"/>
                <path v-if="card.icon === 'community'" d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              </svg>
            </div>
            <h3 class="card-title">{{ card.title }}</h3>
            <p class="card-desc">{{ card.description }}</p>
            <a :href="card.link" class="card-link">
              了解更多
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: Flower Gallery (Glycan shapes) -->
    <section class="section gallery-section" id="gallery">
      <div class="section-container">
        <div class="section-header">
          <span class="section-tag">Concept</span>
          <h2 class="section-title">糖型花园 · Glycan Garden</h2>
          <p class="section-subtitle">
            五种糖型，五种可能。就像花园中的每一朵花都有独特的形状与色彩，<br>
            不同的糖基化修饰赋予蛋白质独特的功能与命运。
          </p>
        </div>

        <div class="glycan-showcase">
          <div class="glycan-item" v-for="(glycan, idx) in glycanTypes" :key="idx">
            <div class="glycan-visual" :style="{ borderColor: glycan.color }">
              <div class="glycan-shape" :class="glycan.shape" :style="{ background: glycan.color + '30', borderColor: glycan.color }">
                <div class="shape-inner" :style="{ background: glycan.color }"></div>
              </div>
            </div>
            <h4 class="glycan-name">{{ glycan.name }}</h4>
            <p class="glycan-desc">{{ glycan.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 5: Page Links -->
    <section class="section links-section" id="explore">
      <div class="section-container">
        <div class="section-header">
          <span class="section-tag">Explore</span>
          <h2 class="section-title">探索我们的 Wiki</h2>
        </div>

        <div class="links-grid">
          <a v-for="(link, idx) in pageLinks" :key="idx" :href="link.url" class="page-link-card" :style="{ '--card-color': link.color }">
            <div class="link-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path v-if="link.icon === 'book'" d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path v-if="link.icon === 'book'" d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                <path v-if="link.icon === 'flask'" d="M10 2h4M12 2v8l3 3"/>
                <path v-if="link.icon === 'flask'" d="M8 15h8v3a4 4 0 0 1-8 0v-3z"/>
                <path v-if="link.icon === 'users'" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle v-if="link.icon === 'users'" cx="9" cy="7" r="4"/>
                <path v-if="link.icon === 'users'" d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path v-if="link.icon === 'award'" d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path v-if="link.icon === 'award'" d="M2 17l10 5 10-5"/>
                <path v-if="link.icon === 'award'" d="M2 12l10 5 10-5"/>
                <path v-if="link.icon === 'heart'" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <span class="link-title">{{ link.title }}</span>
            <span class="link-desc">{{ link.desc }}</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <CustomFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CustomFooter from './CustomFooter.vue'

gsap.registerPlugin(ScrollTrigger)

const homepageRef = ref(null)
const windowOpened = ref(false)

const openWindow = () => {
  windowOpened.value = true
  // Parallax open animation using GSAP
  const tl = gsap.timeline()

  // Window slides up and fades
  tl.to('.window-container', {
    y: '-120vh',
    opacity: 0,
    duration: 1.4,
    ease: 'power3.inOut'
  }, 0)

  // Sky layer zooms slowly
  tl.fromTo('.layer-sky',
    { scale: 1 },
    { scale: 1.15, duration: 2, ease: 'power2.out' },
    0
  )

  // Far hills move up slower
  tl.fromTo('.layer-far-hills',
    { y: 0, scale: 1 },
    { y: -30, scale: 1.08, duration: 1.8, ease: 'power2.out' },
    0
  )

  // Near hills move up faster
  tl.fromTo('.layer-near-hills',
    { y: 0, scale: 1 },
    { y: -60, scale: 1.12, duration: 1.8, ease: 'power2.out' },
    0.1
  )

  // Garden layer moves up fastest + flowers bloom
  tl.fromTo('.layer-garden',
    { y: 0, scale: 1 },
    { y: -90, scale: 1.15, duration: 1.8, ease: 'power2.out' },
    0.15
  )

  // Flowers pop in with stagger
  tl.fromTo('.flower-wrap',
    { scale: 0, opacity: 0, y: 40 },
    { scale: 1, opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'back.out(1.7)' },
    0.5
  )

  // Vine draws in
  tl.fromTo('.vine-svg',
    { opacity: 0, scaleX: 0 },
    { opacity: 1, scaleX: 1, duration: 1, ease: 'power2.out' },
    0.8
  )

  // Title appears
  tl.fromTo('.scene-title',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
    0.8
  )

  // Scroll hint appears
  tl.fromTo('.scroll-hint',
    { opacity: 0 },
    { opacity: 1, duration: 0.6 },
    1.2
  )
}

onMounted(() => {
  // Project cards animation
  gsap.from('.project-card', {
    scrollTrigger: {
      trigger: '.project-section',
      start: 'top 70%',
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power2.out'
  })

  // Logo section animation
  gsap.from('.logo-showcase', {
    scrollTrigger: {
      trigger: '.logo-section',
      start: 'top 70%',
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
  })

  // Glycan items animation
  gsap.from('.glycan-item', {
    scrollTrigger: {
      trigger: '.gallery-section',
      start: 'top 70%',
    },
    y: 50,
    opacity: 0,
    duration: 0.7,
    stagger: 0.12,
    ease: 'power2.out'
  })

  // Page links animation
  gsap.from('.page-link-card', {
    scrollTrigger: {
      trigger: '.links-section',
      start: 'top 70%',
    },
    y: 40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.08,
    ease: 'power2.out'
  })
})

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach(t => t.kill())
})

const projectCards = [
  {
    icon: 'design',
    title: '项目设计',
    description: '从需求分析到系统架构，探索糖基化调控网络的精妙设计。',
    link: '/fudan/design',
    color: '#C8A8E9'
  },
  {
    icon: 'experiment',
    title: '实验验证',
    description: '通过分子生物学与细胞实验，验证糖基化修饰的功能效应。',
    link: '/fudan/experiments',
    color: '#8FD3A5'
  },
  {
    icon: 'model',
    title: '计算建模',
    description: '利用生物信息学与机器学习预测糖基化位点与结构。',
    link: '/fudan/model',
    color: '#F4A6B5'
  },
  {
    icon: 'community',
    title: '社区互动',
    description: '科普教育、公众参与，让合成生物学走进大众视野。',
    link: '/fudan/education',
    color: '#A8D0E6'
  }
]

const glycanTypes = [
  { name: '高甘露糖型', shape: 'diamond', color: '#C8A8E9', description: 'Man5-9GlcNAc2，常见于内质网质量控制系统' },
  { name: '复合型', shape: 'circle', color: '#8FD3A5', description: '含半乳糖、唾液酸等，是成熟糖蛋白的主要形式' },
  { name: '杂合型', shape: 'triangle', color: '#F4A6B5', description: '兼具高甘露糖与复合型特征，功能多样' },
  { name: '平分型', shape: 'square', color: '#A8D0E6', description: '含平分型GlcNAc，与肿瘤转移密切相关' },
  { name: '岩藻糖型', shape: 'round', color: '#F0D78C', description: '核心岩藻糖修饰，调控抗体依赖性细胞毒性' }
]

const pageLinks = [
  { title: '项目描述', desc: 'Description', url: '/fudan/description', icon: 'book', color: '#C8A8E9' },
  { title: '实验方法', desc: 'Experiments', url: '/fudan/experiments', icon: 'flask', color: '#8FD3A5' },
  { title: '团队成员', desc: 'Team', url: '/fudan/team', icon: 'users', color: '#F4A6B5' },
  { title: '成果展示', desc: 'Results', url: '/fudan/results', icon: 'award', color: '#A8D0E6' },
  { title: '人文关怀', desc: 'Human Practices', url: '/fudan/human-practices', icon: 'heart', color: '#F0D78C' },
  { title: '安全教育', desc: 'Education', url: '/fudan/education', icon: 'book', color: '#C8A8E9' },
]
</script>

<style scoped>
.homepage {
  background: #F8FDF9;
  overflow-x: hidden;
}

/* Scene */
.scene {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(180deg, #87CEEB 0%, #B8E6F0 35%, #D4EDDA 65%, #C8E6C9 100%);
}

.layer {
  position: absolute;
  inset: 0;
}

/* Sky */
.cloud {
  position: absolute;
  background: rgba(255,255,255,0.85);
  border-radius: 100px;
}

.cloud::before,
.cloud::after {
  content: '';
  position: absolute;
  background: rgba(255,255,255,0.85);
  border-radius: 100px;
}

.cloud-1 { width: 140px; height: 45px; top: 12%; left: 8%; animation: float 22s infinite ease-in-out; }
.cloud-1::before { width: 55px; height: 55px; top: -28px; left: 18px; }
.cloud-1::after { width: 45px; height: 45px; top: -18px; left: 60px; }

.cloud-2 { width: 110px; height: 38px; top: 22%; right: 12%; animation: float 26s infinite ease-in-out reverse; }
.cloud-2::before { width: 48px; height: 48px; top: -24px; left: 14px; }
.cloud-2::after { width: 38px; height: 38px; top: -14px; left: 52px; }

.cloud-3 { width: 160px; height: 50px; top: 6%; left: 45%; animation: float 32s infinite ease-in-out; }
.cloud-3::before { width: 60px; height: 60px; top: -30px; left: 22px; }
.cloud-3::after { width: 50px; height: 50px; top: -20px; left: 70px; }

.cloud-4 { width: 90px; height: 32px; top: 30%; left: 25%; animation: float 18s infinite ease-in-out reverse; }
.cloud-4::before { width: 40px; height: 40px; top: -20px; left: 10px; }
.cloud-4::after { width: 32px; height: 32px; top: -12px; left: 42px; }

@keyframes float {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(35px); }
}

/* Hills */
.layer-far-hills,
.layer-near-hills {
  bottom: -5%;
  top: auto;
  height: 45%;
}

.hill-svg {
  width: 100%;
  height: 100%;
}

/* Garden */
.layer-garden {
  bottom: 0;
  top: auto;
  height: 35%;
}

.grass-blade {
  position: absolute;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, #66BB6A 0%, #4CAF50 100%);
  border-radius: 2px 2px 0 0;
}

.blade-1 { left: 5%; height: 25px; transform: rotate(-5deg); }
.blade-2 { left: 15%; height: 35px; transform: rotate(3deg); }
.blade-3 { left: 35%; height: 20px; transform: rotate(-2deg); }
.blade-4 { left: 55%; height: 30px; transform: rotate(4deg); }
.blade-5 { left: 75%; height: 22px; transform: rotate(-3deg); }
.blade-6 { left: 90%; height: 28px; transform: rotate(2deg); }

/* Flowers */
.flower-wrap {
  position: absolute;
  bottom: 15%;
  opacity: 0;
  transform-origin: bottom center;
}

.flower-wrap-1 { left: 8%; }
.flower-wrap-2 { left: 26%; }
.flower-wrap-3 { left: 44%; }
.flower-wrap-4 { left: 62%; }
.flower-wrap-5 { left: 80%; }

.flower-svg {
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.08));
}

/* Vine */
.vine-svg {
  position: absolute;
  bottom: 8%;
  left: 5%;
  width: 90%;
  height: 40px;
  opacity: 0;
  transform-origin: left center;
}

/* Window - Single Central Pane */
.window-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
  width: 340px;
  height: 440px;
  z-index: 50;
  transition: transform 0.3s ease;
}

.window-pane {
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.12);
  border-radius: 8px;
  overflow: hidden;
}

.window-glass {
  position: absolute;
  inset: 8px;
  background: linear-gradient(135deg, rgba(200,230,240,0.25) 0%, rgba(220,240,250,0.15) 100%);
  backdrop-filter: blur(4px);
  border-radius: 4px;
  box-shadow: inset 0 0 20px rgba(255,255,255,0.1);
}

.window-frame-top,
.window-frame-bottom {
  position: absolute;
  left: 0;
  right: 0;
  height: 10px;
  background: linear-gradient(180deg, #7D5E50 0%, #6D4C41 100%);
}

.window-frame-top { top: 0; }
.window-frame-bottom { bottom: 0; }

.window-frame-left,
.window-frame-right {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 10px;
  background: linear-gradient(90deg, #7D5E50 0%, #6D4C41 100%);
}

.window-frame-left { left: 0; }
.window-frame-right { right: 0; }

.window-knob {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 14px;
  height: 14px;
  background: linear-gradient(135deg, #C0A060 0%, #A08040 100%);
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
}

.window-sill-outer {
  position: absolute;
  bottom: -16px;
  left: -20px;
  right: -20px;
  height: 20px;
  background: linear-gradient(180deg, #8D6E63 0%, #6D4C41 100%);
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.window-sill-inner {
  position: absolute;
  bottom: -8px;
  left: -12px;
  right: -12px;
  height: 12px;
  background: linear-gradient(180deg, #A1887F 0%, #8D6E63 100%);
  border-radius: 3px;
}

/* Pre-open title */
.pre-title {
  position: absolute;
  bottom: 12%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 60;
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.pre-title-hide {
  opacity: 0;
  transform: translateX(-50%) translateY(20px);
  pointer-events: none;
}

.pre-subtitle {
  font-size: 1.1rem;
  color: #3A7D8C;
  font-weight: 500;
  margin-bottom: 4px;
  text-shadow: 0 1px 4px rgba(255,255,255,0.6);
}

.pre-main-title {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: #1a3c34;
  margin-bottom: 20px;
  text-shadow: 0 2px 8px rgba(255,255,255,0.5);
  letter-spacing: -0.02em;
}

.open-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  background: rgba(255,255,255,0.92);
  border: 2px solid #3A7D8C;
  border-radius: 50px;
  color: #3A7D8C;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 20px rgba(58, 125, 140, 0.12);
}

.open-btn:hover {
  background: #3A7D8C;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(58, 125, 140, 0.25);
}

/* Scene title (after open) */
.scene-title {
  position: absolute;
  bottom: 8%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 40;
  opacity: 0;
}

.glycogarden-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  color: #1a3c34;
  text-shadow: 0 2px 12px rgba(255,255,255,0.7);
  letter-spacing: -0.02em;
  margin-bottom: 4px;
}

.glycogarden-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  color: #3A7D8C;
  font-weight: 500;
  text-shadow: 0 1px 6px rgba(255,255,255,0.6);
}

/* Scroll hint */
.scroll-hint {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: #1a3c34;
  font-size: 0.85rem;
  opacity: 0;
  z-index: 40;
}

.hint-visible {
  opacity: 1;
  transition: opacity 0.8s ease 0.3s;
}

.scroll-arrow {
  width: 16px;
  height: 16px;
  border-right: 2px solid #1a3c34;
  border-bottom: 2px solid #1a3c34;
  transform: rotate(45deg);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0) rotate(45deg); }
  40% { transform: translateY(8px) rotate(45deg); }
  60% { transform: translateY(4px) rotate(45deg); }
}

/* Sections */
.section {
  padding: 100px 24px;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-tag {
  display: inline-block;
  padding: 6px 16px;
  background: rgba(58, 125, 140, 0.1);
  color: #3A7D8C;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 20px;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.section-title {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  color: #1a3c34;
  margin-bottom: 16px;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #4a6b62;
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto;
}

/* Logo Section */
.logo-section {
  background: linear-gradient(180deg, #EDF7F2 0%, #F8FDF9 100%);
  padding: 80px 24px;
}

.logo-showcase {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.logo-circle {
  width: 320px;
  height: 320px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 8px 40px rgba(0,0,0,0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.logo-svg {
  width: 100%;
  height: 100%;
}

.logo-caption {
  text-align: center;
}

.logo-caption h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a3c34;
  margin-bottom: 6px;
}

.logo-caption p {
  font-size: 1.05rem;
  color: #4a6b62;
}

/* Project Cards */
.project-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

.project-card {
  background: white;
  border-radius: 20px;
  padding: 32px;
  border: 1px solid rgba(138, 192, 168, 0.2);
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.06);
}

.card-icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.card-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1a3c34;
  margin-bottom: 10px;
}

.card-desc {
  font-size: 0.95rem;
  color: #4a6b62;
  line-height: 1.6;
  margin-bottom: 20px;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #3A7D8C;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: gap 0.2s ease;
}

.card-link:hover {
  gap: 10px;
}

/* Gallery Section */
.gallery-section {
  background: linear-gradient(180deg, #F8FDF9 0%, #EDF7F2 100%);
}

.glycan-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 32px;
  max-width: 900px;
  margin: 0 auto;
}

.glycan-item {
  text-align: center;
}

.glycan-visual {
  width: 120px;
  height: 120px;
  margin: 0 auto 16px;
  border-radius: 20px;
  border: 2px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
}

.glycan-shape {
  width: 60px;
  height: 60px;
  border: 2px solid;
  display: flex;
  align-items: center;
  justify-content: center;
}

.glycan-shape.diamond {
  transform: rotate(45deg);
  border-radius: 8px;
}

.glycan-shape.circle {
  border-radius: 50%;
}

.glycan-shape.triangle {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  border: none;
}

.glycan-shape.triangle .shape-inner {
  clip-path: polygon(50% 10%, 15% 85%, 85% 85%);
  width: 100%;
  height: 100%;
}

.glycan-shape.square {
  border-radius: 10px;
}

.glycan-shape.round {
  border-radius: 50%;
}

.shape-inner {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.glycan-name {
  font-size: 1.05rem;
  font-weight: 600;
  color: #1a3c34;
  margin-bottom: 6px;
}

.glycan-desc {
  font-size: 0.85rem;
  color: #4a6b62;
  line-height: 1.5;
}

/* Links Section */
.links-section {
  padding-bottom: 60px;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
  max-width: 800px;
  margin: 0 auto;
}

.page-link-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 24px 16px;
  background: white;
  border-radius: 16px;
  border: 1px solid rgba(138, 192, 168, 0.15);
  text-decoration: none;
  transition: all 0.3s ease;
}

.page-link-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.06);
  border-color: var(--card-color);
}

.link-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--card-color) + '15';
  color: var(--card-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

.link-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: #1a3c34;
}

.link-desc {
  font-size: 0.8rem;
  color: #4a6b62;
}

@media (max-width: 768px) {
  .scene {
    min-height: 100vh;
    height: auto;
  }

  .window-container {
    width: 260px;
    height: 340px;
  }

  .flower-wrap {
    transform: scale(0.65);
  }

  .vine-svg {
    display: none;
  }

  .project-cards {
    grid-template-columns: 1fr;
  }

  .glycan-showcase {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .links-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .logo-circle {
    width: 260px;
    height: 260px;
  }
}
</style>
