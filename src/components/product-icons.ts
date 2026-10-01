// Flat product illustrations in the brand palette, drawn on a 96x96 grid.
// They stand in for product photos: Amazon Associates does not allow
// downloading or hotlinking Amazon or manufacturer images.
const F = '#0F3D2E'; // forest
const P = '#3E6B4F'; // pine
const C = '#F57C2B'; // campfire
const K = '#FBF4EA'; // cream
const flame = (x: number, y: number, s = 1) =>
  `<path fill="${C}" transform="translate(${x} ${y}) scale(${s})" d="M0-14c5 5 7 8 7 11a7 7 0 0 1-14 0c0-3 2-6 7-11z"/>`;

export const PRODUCT_ICONS = {
  // Two-burner stove with the lid open
  stove: `
    <rect x="13" y="20" width="70" height="32" rx="4" fill="${P}"/>
    <rect x="9" y="52" width="78" height="24" rx="5" fill="${F}"/>
    <rect x="15" y="76" width="9" height="5" rx="1.5" fill="${F}"/><rect x="72" y="76" width="9" height="5" rx="1.5" fill="${F}"/>
    <rect x="20" y="48" width="24" height="5" rx="2" fill="${F}"/><rect x="52" y="48" width="24" height="5" rx="2" fill="${F}"/>
    ${flame(32, 46)}${flame(64, 46)}
    <circle cx="32" cy="64" r="5" fill="${K}"/><circle cx="64" cy="64" r="5" fill="${K}"/>
    <circle cx="32" cy="64" r="2" fill="${C}"/><circle cx="64" cy="64" r="2" fill="${C}"/>`,
  // Single-burner stove with a pot support
  burner: `
    <rect x="10" y="52" width="76" height="24" rx="5" fill="${F}"/>
    <rect x="16" y="76" width="9" height="5" rx="1.5" fill="${F}"/><rect x="71" y="76" width="9" height="5" rx="1.5" fill="${F}"/>
    <rect x="56" y="57" width="24" height="14" rx="3" fill="${P}"/>
    <rect x="20" y="46" width="30" height="7" rx="2" fill="${P}"/>
    <rect x="16" y="41" width="38" height="5" rx="2.5" fill="${F}"/>
    ${flame(35, 38, 1.25)}
    <circle cx="24" cy="64" r="5.5" fill="${K}"/><circle cx="24" cy="64" r="2.2" fill="${C}"/>
    <rect x="34" y="62" width="14" height="4" rx="2" fill="${K}"/>`,
  // Folding camp kitchen stand with a lantern pole
  kitchen: `
    <path d="M76 46V15H61v8" fill="none" stroke="${F}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="54" y="22" width="14" height="15" rx="4" fill="${C}"/>
    <rect x="8" y="44" width="80" height="7" rx="2.5" fill="${F}"/>
    <path d="M17 51l-5 33M79 51l5 33M17 51l14 33M79 51L65 84" fill="none" stroke="${F}" stroke-width="4" stroke-linecap="round"/>
    <rect x="17" y="66" width="62" height="5" rx="2" fill="${P}"/>
    <rect x="14" y="33" width="30" height="11" rx="2.5" fill="${P}"/>
    ${flame(29, 31, 0.8)}`,
  // Spatula, fork and knife
  utensils: `
    <rect x="23" y="40" width="6" height="44" rx="3" fill="${C}"/>
    <rect x="15" y="12" width="22" height="30" rx="5" fill="${F}"/>
    <rect x="20" y="18" width="3" height="16" rx="1.5" fill="${K}"/><rect x="24.5" y="18" width="3" height="16" rx="1.5" fill="${K}"/><rect x="29" y="18" width="3" height="16" rx="1.5" fill="${K}"/>
    <rect x="45" y="38" width="6" height="46" rx="3" fill="${P}"/>
    <path fill="${F}" d="M40 12h3.5v16H46V12h4v16h2.5V12H56v20a8 8 0 0 1-16 0z"/>
    <path fill="${F}" d="M66 12c9 7 12 20 12 36H66z"/>
    <rect x="66" y="46" width="9" height="38" rx="3.5" fill="${C}"/>`,
  // 12V compressor fridge: a chest with a handle and a control panel
  fridge: `
    <path d="M30 28v-7a5 5 0 0 1 5-5h26a5 5 0 0 1 5 5v7" fill="none" stroke="${F}" stroke-width="5"/>
    <rect x="11" y="38" width="74" height="42" rx="6" fill="${F}"/>
    <rect x="8" y="26" width="80" height="15" rx="5" fill="${P}"/>
    <rect x="17" y="80" width="10" height="5" rx="1.5" fill="${F}"/><rect x="69" y="80" width="10" height="5" rx="1.5" fill="${F}"/>
    <rect x="19" y="49" width="28" height="15" rx="3" fill="${K}"/>
    <rect x="23" y="53" width="11" height="7" rx="1.5" fill="${C}"/><circle cx="41" cy="56.5" r="2.2" fill="${P}"/>
    <path d="M66 49v20M57.3 54l17.4 10M74.7 54L57.3 64" fill="none" stroke="${K}" stroke-width="3" stroke-linecap="round"/>`,
  // Camp lantern with a glowing globe
  lantern: `
    <path d="M33 30c0-24 30-24 30 0" fill="none" stroke="${F}" stroke-width="4" stroke-linecap="round"/>
    <path fill="${F}" d="M37 24h22l6 11H31z"/>
    <rect x="33" y="35" width="30" height="32" rx="3" fill="${C}"/>
    <ellipse cx="48" cy="51" rx="6" ry="11" fill="${K}"/>
    <rect x="38" y="35" width="3" height="32" fill="${F}"/><rect x="55" y="35" width="3" height="32" fill="${F}"/>
    <rect x="28" y="66" width="40" height="15" rx="5" fill="${F}"/>
    <rect x="28" y="71" width="40" height="3.5" fill="${P}"/>`,
  // Headlamp on its strap
  headlamp: `
    <ellipse cx="48" cy="44" rx="37" ry="19" fill="none" stroke="${P}" stroke-width="9"/>
    <rect x="27" y="46" width="42" height="30" rx="8" fill="${F}"/>
    <circle cx="48" cy="61" r="10" fill="${C}"/><circle cx="48" cy="61" r="4.5" fill="${K}"/>
    <path d="M20 76l-8 6M76 76l8 6M48 82v8" fill="none" stroke="${C}" stroke-width="3.5" stroke-linecap="round"/>`,
  // Folding camp chair
  chair: `
    <path d="M27 58l42 27M69 58L27 85M29 20v40M67 20v40" fill="none" stroke="${F}" stroke-width="5" stroke-linecap="round"/>
    <rect x="25" y="14" width="46" height="30" rx="6" fill="${C}"/>
    <path fill="${F}" d="M20 50h56l-5 13H25z"/>
    <rect x="11" y="40" width="20" height="6" rx="3" fill="${F}"/><rect x="65" y="40" width="20" height="6" rx="3" fill="${F}"/>`,
  // Hammock between two trees
  hammock: `
    <circle cx="15" cy="20" r="12" fill="${P}"/><circle cx="81" cy="20" r="12" fill="${P}"/>
    <rect x="11.5" y="18" width="7" height="68" rx="3" fill="${F}"/><rect x="77.5" y="18" width="7" height="68" rx="3" fill="${F}"/>
    <path fill="${C}" d="M17 40c8 36 54 36 62 0c-10 16-52 16-62 0z"/>
    <path d="M17 40c10 16 52 16 62 0" fill="none" stroke="${F}" stroke-width="3"/>
    <rect x="5" y="84" width="86" height="4" rx="2" fill="${F}"/>`,
  // Tarp pitched as a shelter
  tarp: `
    <path d="M9 66L2 78M87 66l7 12" fill="none" stroke="${F}" stroke-width="3" stroke-linecap="round"/>
    <rect x="46" y="16" width="4" height="12" rx="2" fill="${C}"/>
    <path fill="${F}" d="M48 24l40 42H8z"/>
    <path fill="${P}" d="M48 42l17 24H31z"/>
    <circle cx="17" cy="62" r="2.2" fill="${K}"/><circle cx="79" cy="62" r="2.2" fill="${K}"/><circle cx="48" cy="31" r="2.2" fill="${K}"/>
    <rect x="4" y="78" width="88" height="4" rx="2" fill="${C}"/>`,
  // First aid kit
  'first-aid': `
    <path d="M36 32v-7a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v7" fill="none" stroke="${F}" stroke-width="5"/>
    <rect x="12" y="30" width="72" height="50" rx="8" fill="${C}"/>
    <circle cx="48" cy="55" r="17" fill="${K}"/>
    <path fill="${F}" d="M44 44h8v7h7v8h-7v7h-8v-7h-7v-8h7z"/>`,
  // Soap sheets in a pocket case
  soap: `
    <rect x="30" y="24" width="38" height="26" rx="3" fill="${P}" transform="rotate(8 49 37)"/>
    <rect x="24" y="28" width="38" height="26" rx="3" fill="${K}" stroke="${F}" stroke-width="2.5"/>
    <rect x="16" y="44" width="56" height="38" rx="7" fill="${F}"/>
    <path fill="${K}" d="M44 51c6 7 8 10 8 14a8 8 0 0 1-16 0c0-4 2-7 8-14z"/>
    <circle cx="78" cy="26" r="8" fill="none" stroke="${C}" stroke-width="3"/><circle cx="84" cy="46" r="4.5" fill="none" stroke="${C}" stroke-width="3"/><circle cx="64" cy="14" r="4" fill="none" stroke="${C}" stroke-width="3"/>`,
  // Hooded rain poncho
  poncho: `
    <path d="M13 16l-3 9M25 9l-3 9M74 9l-3 9M86 16l-3 9" fill="none" stroke="${P}" stroke-width="3" stroke-linecap="round"/>
    <path fill="${C}" d="M37 34h22l29 36-12 8-8-11v19H28V67l-8 11-12-8z"/>
    <path fill="${F}" d="M35 38V26a13 14 0 0 1 26 0v12z"/>
    <ellipse cx="48" cy="27" rx="6.5" ry="7.5" fill="${K}"/>
    <path d="M48 44v42" fill="none" stroke="${F}" stroke-width="2.5"/>`,
} as const;

export type ProductIconName = keyof typeof PRODUCT_ICONS;
