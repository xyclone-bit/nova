/**
 * AETHERIA HORIZON MODEL 01 — CLIENT APPLICATION LOGIC
 * Pure Vanilla JavaScript (ES6+) with Zero External Dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* =========================================================================
     1. NAVIGATION & HEADER CONTROLS
     ========================================================================= */
  const siteHeader = document.getElementById('siteHeader');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky header background blur on scroll
  const handleHeaderScroll = () => {
    if (window.scrollY > 30) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // Mobile menu toggle
  const toggleMobileNav = (open) => {
    const shouldOpen = open !== undefined ? open : !navMenu.classList.contains('open');
    navToggle.classList.toggle('open', shouldOpen);
    navMenu.classList.toggle('open', shouldOpen);
    navToggle.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
    document.body.style.overflow = shouldOpen ? 'hidden' : '';
  };

  navToggle.addEventListener('click', () => toggleMobileNav());

  // Close mobile nav on link click
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        toggleMobileNav(false);
      }
    });
  });

  // Close mobile nav on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      toggleMobileNav(false);
    }
  });

  // Active navigation link tracking via IntersectionObserver
  const sections = document.querySelectorAll('section[id], header[id]');
  const navObserverOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, navObserverOptions);

  sections.forEach((sec) => navObserver.observe(sec));


  /* =========================================================================
     2. HERO 3D MONOLITH PARALLAX TILT EFFECT
     ========================================================================= */
  const monolithDevice = document.getElementById('monolithDevice');
  const heroSection = document.getElementById('hero');

  if (monolithDevice && heroSection) {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let isHovering = false;

    heroSection.addEventListener('mousemove', (e) => {
      const rect = monolithDevice.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate normalized offset (-1 to 1)
      const deltaX = (e.clientX - centerX) / (window.innerWidth / 2);
      const deltaY = (e.clientY - centerY) / (window.innerHeight / 2);

      // Max rotation: 18 degrees
      mouseX = deltaX * 18;
      mouseY = -deltaY * 18;
      isHovering = true;
    });

    heroSection.addEventListener('mouseleave', () => {
      mouseX = 0;
      mouseY = 0;
      isHovering = false;
    });

    // Smooth lerp animation loop for the 3D tilt
    const animateTilt = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      if (isHovering || Math.abs(currentX) > 0.05 || Math.abs(currentY) > 0.05) {
        monolithDevice.style.transform = `perspective(1000px) rotateX(${currentY}deg) rotateY(${currentX}deg)`;
      }

      requestAnimationFrame(animateTilt);
    };

    requestAnimationFrame(animateTilt);
  }


  /* =========================================================================
     3. INTERACTIVE RESONANCE MODES & CANVAS WAVEFORM ENGINE
     ========================================================================= */
  const modeData = {
    flow: {
      title: 'Deep Flow State Calibration',
      desc: 'Synchronizes ambient auditory reflection with 10.5 Hz isochronic alpha oscillations. Eliminates peripheral conversational bleed while maintaining acute perceptual lucidity.',
      radius: '3.8 meters',
      freq: '10.5 Hz Alpha',
      decibel: '-48 dB',
      power: '4.2 W',
      color: '#d4af37',
      speed: 0.04,
      waveFreq: 0.02,
      amplitude: 28
    },
    rest: {
      title: 'Circadian Rest & Delta Regeneration',
      desc: 'Pioneered for high-performing minds seeking restorative recovery. Emits gentle delta-band harmonic frequencies (2.5 Hz) while establishing a dense acoustic barrier.',
      radius: '4.5 meters',
      freq: '2.5 Hz Delta',
      decibel: '-54 dB',
      power: '3.1 W',
      color: '#38bdf8',
      speed: 0.02,
      waveFreq: 0.012,
      amplitude: 20
    },
    focus: {
      title: 'Neural Uplink & High-Bandwidth Cognition',
      desc: 'Formulated for complex synthesis, programming, and architecture sessions. Induces 40 Hz gamma resonance with directional vector acoustic nullification targeting direct line-of-sight sound reflections.',
      radius: '3.2 meters',
      freq: '40.0 Hz Gamma',
      decibel: '-44 dB',
      power: '5.8 W',
      color: '#818cf8',
      speed: 0.08,
      waveFreq: 0.035,
      amplitude: 36
    },
    solitude: {
      title: 'Total Acoustic Null (Absolute Zero)',
      desc: 'Activates all eight planar magnetic drivers at maximum antiphase compensation. Creates an absolute acoustic nullification bubble with broad-spectrum absorption from 12 Hz to 48 kHz.',
      radius: '4.2 meters',
      freq: 'Broadband Dynamic',
      decibel: '-58 dB',
      power: '6.4 W',
      color: '#f8fafc',
      speed: 0.05,
      waveFreq: 0.025,
      amplitude: 30
    }
  };

  const modeTabs = document.querySelectorAll('.mode-tab-btn');
  const modeTitle = document.getElementById('modeTitle');
  const modeDesc = document.getElementById('modeDesc');
  const modeRadius = document.getElementById('modeRadius');
  const modeFreq = document.getElementById('modeFreq');
  const modeDecibel = document.getElementById('modeDecibel');
  const modePower = document.getElementById('modePower');

  let activeModeKey = 'flow';

  modeTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const modeKey = tab.dataset.mode;
      if (!modeKey || !modeData[modeKey] || modeKey === activeModeKey) return;

      activeModeKey = modeKey;

      // Update tab active states
      modeTabs.forEach((t) => {
        const isActive = t === tab;
        t.classList.toggle('active', isActive);
        t.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      // Update text descriptions
      const data = modeData[modeKey];
      modeTitle.textContent = data.title;
      modeDesc.textContent = data.desc;
      modeRadius.textContent = data.radius;
      modeFreq.textContent = data.freq;
      modeDecibel.textContent = data.decibel;
      modePower.textContent = data.power;
    });
  });

  // --- Realtime HTML5 Canvas Waveform Visualizer ---
  const canvas = document.getElementById('acousticCanvas');
  const noiseToggle = document.getElementById('noiseToggle');
  const noiseStatusLabel = document.getElementById('noiseStatusLabel');
  let isNoiseActive = false;

  if (canvas) {
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let step = 0;

    // Handle high DPI crisp rendering
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Noise simulation toggle
    if (noiseToggle) {
      const toggleNoise = () => {
        isNoiseActive = !isNoiseActive;
        noiseToggle.classList.toggle('active', isNoiseActive);
        noiseToggle.setAttribute('aria-checked', isNoiseActive ? 'true' : 'false');
        if (noiseStatusLabel) {
          noiseStatusLabel.textContent = isNoiseActive 
            ? 'ANTIPHASE ACTIVE · NOISE CANCELLED' 
            : 'NULLIFICATION APPLIED';
        }
      };

      noiseToggle.addEventListener('click', toggleNoise);
      noiseToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleNoise();
        }
      });
    }

    // Render loop
    const renderWaveform = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const centerY = height / 2;

      ctx.clearRect(0, 0, width, height);

      // Grid background line
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.stroke();

      const current = modeData[activeModeKey] || modeData.flow;
      step += current.speed;

      // Draw Inverse Antiphase Wave (if noise active)
      if (isNoiseActive) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(239, 68, 68, 0.45)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);

        for (let x = 0; x < width; x++) {
          const noise = Math.sin(x * 0.05 + step * 3) * 14 + (Math.random() - 0.5) * 6;
          const y = centerY + noise;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Draw Secondary Harmonic Glow Wave
      ctx.beginPath();
      ctx.strokeStyle = current.color;
      ctx.globalAlpha = 0.25;
      ctx.lineWidth = 4;
      for (let x = 0; x < width; x++) {
        const y = centerY + Math.sin(x * (current.waveFreq * 1.5) + step * 0.7) * (current.amplitude * 0.6);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Draw Primary Harmonic Resonance Wave
      ctx.beginPath();
      ctx.strokeStyle = current.color;
      ctx.globalAlpha = 0.95;
      ctx.lineWidth = 2;
      for (let x = 0; x < width; x++) {
        const y = centerY + Math.sin(x * current.waveFreq + step) * current.amplitude;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.globalAlpha = 1.0;

      animationFrameId = requestAnimationFrame(renderWaveform);
    };

    renderWaveform();
  }


  /* =========================================================================
     4. SCHEMATIC EXPLORER (ARCHITECTURE LAYERS)
     ========================================================================= */
  const layerData = {
    sapphire: {
      tag: 'STRATUM 01 · OPTICAL APERTURE',
      title: 'Sapphire Optical Crown',
      desc: 'Synthesized at 2,050°C in an induction furnace, this sapphire dome provides atomic scratch-resistance (9 on the Mohs scale) while transmitting near-infrared photonic frequencies with 99.4% transparency.',
      spec1Label: 'Material Hardness',
      spec1Val: 'Mohs Scale 9.0',
      spec2Label: 'Optical Transmission',
      spec2Val: '99.4% (350nm – 4500nm)',
      spec3Label: 'Milling Precision',
      spec3Val: '±0.0008 mm Tolerance'
    },
    photonic: {
      tag: 'STRATUM 02 · BIOMETRIC MATRIX',
      title: 'Photonic Neural Lattice',
      desc: 'An array of sixteen non-invasive multi-spectral optical transceivers. By analyzing pulse micro-transits and ambient refractive distortion, it computes neurological focus states without body contact.',
      spec1Label: 'Spectral Bands',
      spec1Val: '16 Discrete Frequencies',
      spec2Label: 'Sampling Frequency',
      spec2Val: '2,400 Hz Continuous',
      spec3Label: 'Bio-Sensing Range',
      spec3Val: 'Up to 5.0 Meters'
    },
    enclave: {
      tag: 'STRATUM 03 · CRYPTOGRAPHIC SILICON',
      title: 'Air-Gapped Tensor Core',
      desc: 'Built on a dedicated 3nm custom instruction architecture. The enclave operates with no persistent mass storage and no outbound RF transmitters, guaranteeing absolute physical data sanctuary.',
      spec1Label: 'Process Node',
      spec1Val: '3nm FinFET Enclave',
      spec2Label: 'Hardware Memory',
      spec2Val: 'Volatile SRAM Only',
      spec3Label: 'Air-Gap Classification',
      spec3Val: 'Level-5 Zero Egress'
    },
    acoustic: {
      tag: 'STRATUM 04 · ACOUSTIC TRANSLATION',
      title: 'Vector Planar Transducers',
      desc: 'Eight high-excursion planar drivers suspended in aerospace-grade Viton dampening rings. They project instantaneous inverse wave harmonics to cancel unwanted room resonance.',
      spec1Label: 'Frequency Response',
      spec1Val: '12 Hz – 48,000 Hz',
      spec2Label: 'Phase Accuracy',
      spec2Val: '< 0.2° Deviation',
      spec3Label: 'Peak Acoustic Output',
      spec3Val: '104 dB Clean Dynamic'
    }
  };

  const layers = document.querySelectorAll('.schematic-layer');
  const layerTag = document.getElementById('layerTag');
  const layerTitle = document.getElementById('layerTitle');
  const layerDesc = document.getElementById('layerDesc');
  const spec1 = document.getElementById('spec1');
  const spec2 = document.getElementById('spec2');
  const spec3 = document.getElementById('spec3');

  layers.forEach((layer) => {
    const selectLayer = () => {
      const layerKey = layer.dataset.layer;
      if (!layerKey || !layerData[layerKey]) return;

      layers.forEach((l) => {
        const isActive = l === layer;
        l.classList.toggle('active', isActive);
        l.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      const info = layerData[layerKey];
      layerTag.textContent = info.tag;
      layerTitle.textContent = info.title;
      layerDesc.textContent = info.desc;
      spec1.textContent = info.spec1Val;
      spec2.textContent = info.spec2Val;
      spec3.textContent = info.spec3Val;
    };

    layer.addEventListener('click', selectLayer);
    layer.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectLayer();
      }
    });
  });


  /* =========================================================================
     5. STATS ANIMATED COUNTERS (ON SCROLL)
     ========================================================================= */
  const statNumbers = document.querySelectorAll('.stat-number');
  let statsCounted = false;

  const animateCounters = () => {
    statNumbers.forEach((el) => {
      const target = parseFloat(el.getAttribute('data-target'));
      const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
      const duration = 2000;
      const startTime = performance.now();

      const updateCount = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing out quadratic
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = (target * easeOut).toFixed(decimals);
        el.textContent = currentVal;

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          el.textContent = target.toFixed(decimals);
        }
      };

      requestAnimationFrame(updateCount);
    });
  };

  const statsSection = document.getElementById('stats');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !statsCounted) {
          statsCounted = true;
          animateCounters();
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    statsObserver.observe(statsSection);
  }


  /* =========================================================================
     6. ACCESSIBLE FAQ ACCORDION
     ========================================================================= */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const btn = item.querySelector('.faq-question-btn');
    const panel = item.querySelector('.faq-answer-panel');

    if (!btn || !panel) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all other FAQ items for a clean single-open accordion UX
      faqItems.forEach((other) => {
        if (other !== item && other.classList.contains('open')) {
          other.classList.remove('open');
          const otherBtn = other.querySelector('.faq-question-btn');
          const otherPanel = other.querySelector('.faq-answer-panel');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          if (otherPanel) otherPanel.style.maxHeight = '0px';
        }
      });

      // Toggle current item
      if (isOpen) {
        item.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        panel.style.maxHeight = '0px';
      } else {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });


  /* =========================================================================
     7. RESERVATION FORM VALIDATION & CONFIRMATION MODAL
     ========================================================================= */
  const form = document.getElementById('reservationForm');
  const fullName = document.getElementById('fullName');
  const emailAddress = document.getElementById('emailAddress');
  const atelierFinish = document.getElementById('atelierFinish');
  const allocationTier = document.getElementById('allocationTier');
  const charterCheckbox = document.getElementById('charterCheckbox');

  // Error message elements
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const finishError = document.getElementById('finishError');
  const tierError = document.getElementById('tierError');
  const charterError = document.getElementById('charterError');

  // Modal elements
  const modal = document.getElementById('confirmationModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalDismissBtn = document.getElementById('modalDismissBtn');
  const certCodeDisplay = document.getElementById('certCodeDisplay');
  const certTierDisplay = document.getElementById('certTierDisplay');
  const modalEmailDisplay = document.getElementById('modalEmailDisplay');

  // Email regex validation
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateField = (input, errorEl, condition) => {
    if (!condition) {
      input.classList.add('invalid');
      input.classList.remove('valid');
      errorEl.classList.add('visible');
      return false;
    } else {
      input.classList.remove('invalid');
      input.classList.add('valid');
      errorEl.classList.remove('visible');
      return true;
    }
  };

  // Real-time input listeners
  fullName.addEventListener('input', () => {
    validateField(fullName, nameError, fullName.value.trim().length >= 2);
  });

  emailAddress.addEventListener('input', () => {
    validateField(emailAddress, emailError, isValidEmail(emailAddress.value.trim()));
  });

  atelierFinish.addEventListener('change', () => {
    validateField(atelierFinish, finishError, atelierFinish.value !== '');
  });

  allocationTier.addEventListener('change', () => {
    validateField(allocationTier, tierError, allocationTier.value !== '');
  });

  charterCheckbox.addEventListener('change', () => {
    if (charterCheckbox.checked) {
      charterError.classList.remove('visible');
    }
  });

  // Modal open/close controls
  const openConfirmationModal = (email, tier) => {
    // Generate bespoke Docket ID (e.g. ATH-7429-T1)
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const code = `ATH-${randomDigits}-T1`;

    certCodeDisplay.textContent = code;
    certTierDisplay.textContent = `${tier} · Priority Calibration`;
    modalEmailDisplay.textContent = email;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    modalDismissBtn.focus();
  };

  const closeConfirmationModal = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  modalCloseBtn.addEventListener('click', closeConfirmationModal);
  modalDismissBtn.addEventListener('click', closeConfirmationModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeConfirmationModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeConfirmationModal();
    }
  });

  // Form submission handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateField(fullName, nameError, fullName.value.trim().length >= 2);
    const isEmailValid = validateField(emailAddress, emailError, isValidEmail(emailAddress.value.trim()));
    const isFinishValid = validateField(atelierFinish, finishError, atelierFinish.value !== '');
    const isTierValid = validateField(allocationTier, tierError, allocationTier.value !== '');
    const isCharterValid = charterCheckbox.checked;

    if (!isCharterValid) {
      charterError.classList.add('visible');
    } else {
      charterError.classList.remove('visible');
    }

    if (isNameValid && isEmailValid && isFinishValid && isTierValid && isCharterValid) {
      const email = emailAddress.value.trim();
      const tier = allocationTier.value;

      // Launch confirmation modal
      openConfirmationModal(email, tier);

      // Reset form
      form.reset();
      [fullName, emailAddress, atelierFinish, allocationTier].forEach((field) => {
        field.classList.remove('valid', 'invalid');
      });
    }
  });


  /* =========================================================================
     8. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
     ========================================================================= */
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Graceful fallback for older browsers
    revealElements.forEach((el) => el.classList.add('revealed'));
  }
});
