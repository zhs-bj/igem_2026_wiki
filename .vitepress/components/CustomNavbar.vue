<template>
  <nav
    class="ModernNavbar"
    :class="{
      'navbar-hidden': !isVisible,
      'navbar-visible': isVisible,
      'navbar-pinned': isPinned
    }"
    :style="{ transform: `translateY(${navTranslateY}px)` }"
    @mouseenter="handleNavbarHover"
    @mouseleave="handleNavbarLeave"
  >
    <div class="container">
      <a href="/fudan" class="title">
        <svg viewBox="0 0 280 48" xmlns="http://www.w3.org/2000/svg" style="height: 42px; width: auto;">
          <!-- Flower Icon -->
          <g transform="translate(24, 24)">
            <!-- Stem -->
            <path d="M0 8 Q0 14 0 18" stroke="#3A7D8C" stroke-width="2" fill="none" stroke-linecap="round"/>
            <!-- Leaves -->
            <path d="M0 14 Q-6 10 -8 6 Q-4 10 0 12" fill="#7CB342" stroke="#558B2F" stroke-width="1"/>
            <path d="M0 12 Q6 8 8 4 Q4 8 0 10" fill="#7CB342" stroke="#558B2F" stroke-width="1"/>
            <!-- Petals -->
            <circle cx="0" cy="-4" r="4.5" fill="#FF8A80" stroke="#E57373" stroke-width="1.2"/>
            <circle cx="-4.5" cy="1" r="4.5" fill="#BA68C8" stroke="#AB47BC" stroke-width="1.2"/>
            <circle cx="4.5" cy="1" r="4.5" fill="#64B5F6" stroke="#42A5F5" stroke-width="1.2"/>
            <circle cx="-2.5" cy="5" r="4.5" fill="#FFF176" stroke="#FDD835" stroke-width="1.2"/>
            <circle cx="2.5" cy="5" r="4.5" fill="#AED581" stroke="#9CCC65" stroke-width="1.2"/>
            <!-- Center -->
            <circle cx="0" cy="1" r="2.8" fill="#FFF8E1" stroke="#FFE082" stroke-width="0.8"/>
            <circle cx="0" cy="1" r="1.2" fill="#FFCA28"/>
          </g>
          <!-- Text -->
          <text x="52" y="30" font-family="'Georgia', 'Times New Roman', serif" font-size="22" font-weight="bold" fill="#3A7D8C" letter-spacing="0.5">Glyco</text>
          <text x="122" y="30" font-family="'Georgia', 'Times New Roman', serif" font-size="22" font-weight="bold" fill="#7CB342" letter-spacing="0.5">garden</text>
          <!-- Small subtitle -->
          <text x="52" y="42" font-family="'Arial', sans-serif" font-size="8" fill="#9E9E9E" letter-spacing="1.5">FUDAN iGEM 2026</text>
        </svg>
      </a>
      <!-- Desktop Navigation -->
      <div class="nav-links-desktop">
        <div
          v-for="(item, index) in navItems"
          :key="index"
          class="nav-item"
        >
          <a
            :href="item.link || '#'"
            :target="item.external ? '_blank' : '_self'"
            class="nav-link"
          >
            {{ item.text }}
            <span v-if="item.items && item.items.length" class="arrow"></span>
          </a>
          <div
            v-if="item.items && item.items.length"
            class="dropdown-menu"
          >
            <div class="dropdown-grid">
              <a
                v-for="(subItem, subIndex) in item.items"
                :key="subIndex"
                :href="subItem.link"
                class="dropdown-item"
              >
                <div class="dropdown-item-icon">
                  <svg
                    v-if="subItem.icon === 'contribution'"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <svg
                    v-else-if="subItem.icon === 'description'"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  <svg
                    v-else-if="subItem.icon === 'design'"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  >
                    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                    <path d="M2 2l7.586 7.586"></path>
                    <circle cx="11" cy="11" r="2"></circle>
                  </svg>
                  <svg
                    v-else-if="subItem.icon === 'engineering'"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M14.31 8l5.74 9.94"></path>
                    <path d="M9.69 8h11.48"></path>
                    <path d="M7.38 12l5.74-9.94"></path>
                    <path d="M9.69 16L3.95 6.06"></path>
                    <path d="M14.31 16H2.83"></path>
                    <path d="M16.62 12l-5.74 9.94"></path>
                  </svg>
                  <svg
                    v-else-if="subItem.icon === 'implementation'"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                  </svg>
                  <svg
                    v-else-if="subItem.icon === 'notebook'"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                  <svg
                    v-else-if="subItem.icon === 'results'"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  >
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                    <line x1="2" y1="20" x2="22" y2="20"></line>
                  </svg>
                  <svg
                    v-else-if="subItem.icon === 'experiments'"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  >
                    <path d="M9 3L9 21"></path>
                    <path d="M9 8L21 8"></path>
                    <path d="M15 14L21 14"></path>
                    <path d="M15 21L21 21"></path>
                    <path d="M21 3L3 3"></path>
                    <path d="M6 11C4.34315 11 3 9.65685 3 8C3 6.34315 4.34315 5 6 5C7.65685 5 9 6.34315 9 8C9 9.65685 7.65685 11 6 11Z"></path>
                    <path d="M12 17C10.3431 17 9 15.6569 9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14C15 15.6569 13.6569 17 12 17Z"></path>
                  </svg>
                  <svg
                    v-else-if="subItem.icon === 'measurement'"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  >
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                  <svg
                    v-else-if="subItem.icon === 'improve'"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <line x1="19" y1="8" x2="19" y2="14"></line>
                    <line x1="16" y1="11" x2="22" y2="11"></line>
                  </svg>
                  <svg
                    v-else-if="subItem.icon === 'part-collection'"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                  <svg
                    v-else-if="subItem.icon === 'parts'"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  >
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                  <svg
                    v-else-if="subItem.icon === 'safety'"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <svg
                    v-else-if="subItem.icon === 'software'"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                  <svg
                    v-else-if="subItem.icon === 'model'"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  >
                    <path d="M4 19V5"></path>
                    <path d="M4 19h16"></path>
                    <polyline points="6 15 9.5 10.5 13 13 18 7"></polyline>
                    <circle cx="6" cy="15" r="1"></circle>
                    <circle cx="9.5" cy="10.5" r="1"></circle>
                    <circle cx="13" cy="13" r="1"></circle>
                    <circle cx="18" cy="7" r="1"></circle>
                  </svg>
                  <svg
                    v-else-if="subItem.icon === 'hardware'"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  >
                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                    <rect x="9" y="9" width="6" height="6"></rect>
                    <line x1="9" y1="1" x2="9" y2="4"></line>
                    <line x1="15" y1="1" x2="15" y2="4"></line>
                    <line x1="9" y1="20" x2="9" y2="23"></line>
                    <line x1="15" y1="20" x2="15" y2="23"></line>
                    <line x1="20" y1="9" x2="23" y2="9"></line>
                    <line x1="20" y1="14" x2="23" y2="14"></line>
                    <line x1="1" y1="9" x2="4" y2="9"></line>
                    <line x1="1" y1="14" x2="4" y2="14"></line>
                  </svg>
                  <svg
                    v-else-if="subItem.icon === 'education'"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                  <svg
                    v-else-if="subItem.icon === 'entrepreneurship'"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                  <svg
                    v-else-if="subItem.icon === 'inclusivity'"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <svg
                    v-else-if="subItem.icon === 'human-practices'"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <svg
                    v-else-if="subItem.icon === 'presentation'"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                  <svg
                    v-else-if="subItem.icon === 'promotion-video'"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  >
                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                  </svg>
                  <svg
                    v-else-if="subItem.icon === 'sustainable'"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M21 12v10h-7v-8.5h-4V22H3v-8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1z"></path>
                  </svg>
                  <svg
                    v-else-if="subItem.icon === 'wiki'"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  >
                    <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>
                  </svg>
                  <svg
                    v-else-if="subItem.icon === 'attributions'"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  >
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                  <svg
                    v-else-if="subItem.icon === 'collaborations'"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  <svg
                    v-else-if="subItem.icon === 'heritage'"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  <svg
                    v-else-if="subItem.icon === 'team'"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                </div>
                <div class="dropdown-item-content">
                  <div class="dropdown-item-title">{{ subItem.title }}</div>
                  <div class="dropdown-item-description">{{ subItem.description }}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Search Component -->
      <div class="search-container" :class="{ 'menu-open': isMobileMenuOpen }">
        <VPNavBarSearch />
      </div>

      <!-- Mobile Menu Toggle -->
      <button
        class="mobile-menu-toggle"
        :class="{ 'is-active': isMobileMenuOpen }"
        @click="toggleMobileMenu"
      >
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>

    <!-- Mobile Navigation Menu -->
    <div class="mobile-nav-links" :class="{ 'is-open': isMobileMenuOpen }">
      <div v-for="(item, index) in navItems" :key="index" class="mobile-nav-item">
        <a
          :href="item.link || '#'"
          :target="item.external ? '_blank' : '_self'"
          @click="
            item.items && item.items.length
              ? toggleMobileSubmenu(index, $event)
              : closeMobileMenu($event)
          "
        >
          {{ item.text }}
          <span
            v-if="item.items && item.items.length"
            class="arrow"
            :class="{ open: activeMobileSubmenu === index }"
          ></span>
        </a>
        <div
          v-if="item.items && item.items.length && activeMobileSubmenu === index"
          class="mobile-submenu"
        >
          <a
            v-for="(subItem, subIndex) in item.items"
            :key="subIndex"
            :href="subItem.link"
            @click="closeMobileMenu($event)"
          >
            {{ subItem.title }}
          </a>
        </div>
      </div>
    </div>
    <!-- Overlay for mobile menu -->
    <div
      v-if="isMobileMenuOpen"
      class="mobile-menu-overlay"
      :class="{ show: isMobileMenuOpen }"
      @click="closeMobileMenu"
    ></div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from "vue";
import { useWindowScroll, useThrottleFn } from "@vueuse/core";
import { gsap } from "gsap";
import VPNavBarSearch from "vitepress/dist/client/theme-default/components/VPNavBarSearch.vue";

const navItems = ref([
  {
    text: "Project",
    items: [
      { icon: "contribution", title: "Contribution", description: "For future iGEM teams", link: "/fudan/contribution" },
      { icon: "description", title: "Description", description: "Overview of the project", link: "/fudan/description" },
      { icon: "design", title: "Design", description: "Project design process and methodology", link: "/fudan/design" },
      { icon: "engineering", title: "Engineering", description: "Engineering aspects of the project", link: "/fudan/engineering" },
      { icon: "implementation", title: "Implementation", description: "Implementation details and strategies", link: "/fudan/implementation" },
      { icon: "notebook", title: "Notebook", description: "Lab notebook and documentation", link: "/fudan/notebook" },
      { icon: "results", title: "Results", description: "Project findings", link: "/fudan/results" },
    ],
  },
  {
    text: "Technology",
    items: [
      { icon: "experiments", title: "Experiments", description: "Experimental protocols and methods", link: "/fudan/experiments" },
      { icon: "measurement", title: "Measurement", description: "Measurement techniques and data analysis", link: "/fudan/measurement" },
      { icon: "improve", title: "Improved Parts", description: "We enhanced parts", link: "/fudan/improve" },
      { icon: "part-collection", title: "Part Collection", description: "Catalog of our parts", link: "/fudan/part-collection" },
      { icon: "parts", title: "Parts", description: "Our parts inventory", link: "/fudan/parts" },
      { icon: "safety", title: "Safety", description: "Safety procedures and considerations", link: "/fudan/safety" },
      { icon: "model", title: "Model", description: "Mathematical modeling and simulations", link: "/fudan/model" },
      { icon: "software", title: "Software", description: "Software tools and applications", link: "/fudan/software" },
    ],
  },
  {
    text: "Community",
    items: [
      { icon: "education", title: "Education", description: "Educational outreach and materials", link: "/fudan/education" },
      { icon: "entrepreneurship", title: "Entrepreneurship", description: "Business and entrepreneurial aspects", link: "/fudan/entrepreneurship" },
      { icon: "inclusivity", title: "Inclusivity", description: "Inclusive practices and approaches", link: "/fudan/inclusivity" },
      { icon: "human-practices", title: "Integrated HP", description: "Human practices integration", link: "/fudan/human-practices" },
      { icon: "presentation", title: "Presentation", description: "Project presentation", link: "/fudan/presentation-video" },
      { icon: "promotion-video", title: "Promotion video", description: "Project promotional video", link: "/fudan/promotion-video" },
      { icon: "sustainable", title: "Sustainable", description: "Sustainability aspects of the project", link: "/fudan/sustainable" },
      { icon: "wiki", title: "Wiki", description: "Source code hosted on GitLab", link: "https://gitlab.igem.org/2026/fudan/" },
    ],
  },
  {
    text: "Team",
    items: [
      { icon: "attributions", title: "Attributions", description: "Recognition of contributions", link: "/fudan/attributions" },
      { icon: "collaborations", title: "Collaborations", description: "Collaborative partnerships", link: "/fudan/collaborations" },
      { icon: "heritage", title: "Heritage", description: "Team heritage and history", link: "/fudan/heritage" },
      { icon: "team", title: "Members", description: "Meet our team", link: "/fudan/team" },
    ],
  },
]);

const isVisible = ref(true);
const isPinned = ref(false);
const navTranslateY = ref(0);
const lastScrollY = ref(0);
let hoverTimeout = null;

const { y: scrollY } = useWindowScroll();

const checkScroll = useThrottleFn(() => {
  const currentY = scrollY.value;
  const isScrollingUp = currentY < lastScrollY.value;
  const isAtTop = currentY < 80;

  if (isAtTop) {
    isVisible.value = true;
    isPinned.value = false;
    navTranslateY.value = 0;
  } else if (isScrollingUp) {
    isVisible.value = true;
    isPinned.value = true;
    navTranslateY.value = 0;
  } else {
    isVisible.value = false;
    navTranslateY.value = -100;
  }

  lastScrollY.value = currentY;
}, 100);

onMounted(() => {
  window.addEventListener("scroll", checkScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
});

const handleNavbarHover = () => {
  if (hoverTimeout) clearTimeout(hoverTimeout);
  if (scrollY.value > 80) {
    isVisible.value = true;
    navTranslateY.value = 0;
  }
};

const handleNavbarLeave = () => {
  if (scrollY.value > 80 && !isPinned.value) {
    hoverTimeout = setTimeout(() => {
      isVisible.value = false;
      navTranslateY.value = -100;
    }, 300);
  }
};

const isMobileMenuOpen = ref(false);
const activeMobileSubmenu = ref(null);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  if (!isMobileMenuOpen.value) {
    activeMobileSubmenu.value = null;
  }
};

const toggleMobileSubmenu = (index, event) => {
  event.preventDefault();
  activeMobileSubmenu.value = activeMobileSubmenu.value === index ? null : index;
};

const closeMobileMenu = (event) => {
  if (event) event.stopPropagation();
  isMobileMenuOpen.value = false;
  activeMobileSubmenu.value = null;
};
</script>

<style scoped>
.ModernNavbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 64px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  background: rgba(248, 253, 249, 0.85);
  border-bottom: 1px solid rgba(138, 192, 168, 0.2);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s ease;
}

.ModernNavbar.navbar-hidden {
  transform: translateY(-100%) !important;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  color: var(--vp-c-text-1);
  transition: opacity 0.2s ease;
}

.title:hover {
  opacity: 0.8;
}

.nav-links-desktop {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.nav-link:hover {
  background: rgba(90, 168, 176, 0.1);
  color: #3A7D8C;
}

.nav-link .arrow {
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid currentColor;
  transition: transform 0.2s ease;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-8px);
  min-width: 280px;
  max-width: 360px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(138, 192, 168, 0.2);
  border-radius: 16px;
  padding: 8px;
  padding-top: 16px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  z-index: 100;
}

.nav-item:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.dropdown-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4px;
}

.dropdown-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 10px;
  text-decoration: none;
  color: inherit;
  transition: all 0.15s ease;
}

.dropdown-item:hover {
  background: rgba(90, 168, 176, 0.08);
}

.dropdown-item-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(90, 168, 176, 0.1);
  color: #3A7D8C;
  flex-shrink: 0;
}

.dropdown-item-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.dropdown-item-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.dropdown-item-description {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  line-height: 1.4;
}

.search-container {
  display: flex;
  align-items: center;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.icon-bar {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--vp-c-text-1);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.mobile-menu-toggle.is-active .icon-bar:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-toggle.is-active .icon-bar:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.is-active .icon-bar:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.mobile-nav-links {
  display: none;
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(248, 253, 249, 0.98);
  backdrop-filter: blur(16px);
  padding: 24px;
  overflow-y: auto;
  transform: translateX(100%);
  transition: transform 0.3s ease;
}

.mobile-nav-links.is-open {
  transform: translateX(0);
}

.mobile-nav-item > a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  border-bottom: 1px solid rgba(138, 192, 168, 0.15);
}

.mobile-nav-item .arrow {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid currentColor;
  transition: transform 0.2s ease;
}

.mobile-nav-item .arrow.open {
  transform: rotate(180deg);
}

.mobile-submenu {
  padding-left: 16px;
}

.mobile-submenu a {
  display: block;
  padding: 10px 0;
  color: var(--vp-c-text-2);
  text-decoration: none;
  font-size: 0.95rem;
  border-bottom: 1px solid rgba(138, 192, 168, 0.1);
}

.mobile-menu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 999;
}

.mobile-menu-overlay.show {
  opacity: 1;
  visibility: visible;
}

@media (max-width: 1024px) {
  .nav-links-desktop {
    display: none;
  }

  .mobile-menu-toggle {
    display: flex;
  }

  .mobile-nav-links {
    display: block;
  }

  .search-container.menu-open {
    display: none;
  }
}
</style>
