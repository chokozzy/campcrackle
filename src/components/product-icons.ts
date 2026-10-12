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
  // Stormproof matches standing in an open waterproof case
  matches: `
    <rect x="22" y="44" width="52" height="40" rx="7" fill="${F}"/>
    <rect x="18" y="38" width="60" height="10" rx="4" fill="${P}"/>
    <rect x="31" y="22" width="5" height="18" rx="2" fill="${K}"/><rect x="45.5" y="18" width="5" height="22" rx="2" fill="${K}"/><rect x="60" y="22" width="5" height="18" rx="2" fill="${K}"/>
    <rect x="30" y="16" width="7" height="9" rx="3.5" fill="${P}"/><rect x="60" y="16" width="7" height="9" rx="3.5" fill="${P}"/>
    ${flame(48, 18, 0.9)}
    <rect x="30" y="58" width="36" height="14" rx="3" fill="${C}"/>`,
  // Ferro rod and striker throwing sparks
  ferro: `
    <rect x="12" y="58" width="26" height="14" rx="6" fill="${C}" transform="rotate(-30 25 65)"/>
    <rect x="30" y="40" width="44" height="9" rx="4.5" fill="${F}" transform="rotate(-30 52 44)"/>
    <rect x="44" y="64" width="34" height="11" rx="3" fill="${P}" transform="rotate(20 61 69)"/>
    <path d="M68 24l8-8M76 36l12-3M62 18l1-10M84 22l6-7" fill="none" stroke="${C}" stroke-width="3.5" stroke-linecap="round"/>`,
  // String of glowing bulbs
  'string-lights': `
    <path d="M6 22c14 22 28 22 42 4c14 18 28 18 42-4" fill="none" stroke="${F}" stroke-width="3"/>
    <g fill="${F}"><rect x="15" y="33" width="8" height="7" rx="1.5"/><rect x="33" y="35" width="8" height="7" rx="1.5"/><rect x="55" y="35" width="8" height="7" rx="1.5"/><rect x="73" y="33" width="8" height="7" rx="1.5"/></g>
    <g fill="${C}"><ellipse cx="19" cy="49" rx="7" ry="10"/><ellipse cx="37" cy="51" rx="7" ry="10"/><ellipse cx="59" cy="51" rx="7" ry="10"/><ellipse cx="77" cy="49" rx="7" ry="10"/></g>
    <g fill="${K}"><circle cx="17" cy="46" r="2.2"/><circle cx="35" cy="48" r="2.2"/><circle cx="57" cy="48" r="2.2"/><circle cx="75" cy="46" r="2.2"/></g>
    <rect x="6" y="80" width="84" height="4" rx="2" fill="${P}"/>`,
  // Speckled enamel mug with steam
  mug: `
    <path d="M36 12c-4 5 4 8 0 14M50 10c-4 5 4 8 0 14" fill="none" stroke="${P}" stroke-width="3" stroke-linecap="round"/>
    <path d="M70 44h6a10 10 0 0 1 0 20h-6" fill="none" stroke="${F}" stroke-width="6"/>
    <path fill="${K}" stroke="${F}" stroke-width="4" d="M20 34h52v38a10 10 0 0 1-10 10H30a10 10 0 0 1-10-10z"/>
    <rect x="18" y="31" width="56" height="7" rx="3.5" fill="${F}"/>
    <g fill="${P}"><circle cx="32" cy="50" r="1.8"/><circle cx="46" cy="60" r="1.8"/><circle cx="58" cy="48" r="1.8"/><circle cx="36" cy="70" r="1.8"/><circle cx="60" cy="68" r="1.8"/></g>
    <rect x="22" y="84" width="48" height="4" rx="2" fill="${C}"/>`,
  // Spork: spoon bowl with fork tines
  spork: `
    <path fill="${C}" d="M30 10h36v14a18 20 0 0 1-36 0z"/>
    <g fill="${K}"><rect x="38" y="8" width="3.5" height="12" rx="1.5"/><rect x="46.25" y="8" width="3.5" height="12" rx="1.5"/><rect x="54.5" y="8" width="3.5" height="12" rx="1.5"/></g>
    <path fill="${F}" d="M43 42h10v40a5 5 0 0 1-10 0z"/>
    <rect x="45.5" y="52" width="5" height="24" rx="2.5" fill="${P}"/>`,
  // Two hand warmer packs with heat waves
  'hand-warmers': `
    <path d="M30 12c-4 5 4 8 0 14M48 8c-4 5 4 8 0 14M66 12c-4 5 4 8 0 14" fill="none" stroke="${C}" stroke-width="3" stroke-linecap="round"/>
    <rect x="12" y="34" width="44" height="50" rx="6" fill="${F}" transform="rotate(-8 34 59)"/>
    <rect x="40" y="34" width="44" height="50" rx="6" fill="${C}" transform="rotate(8 62 59)"/>
    <rect x="49" y="48" width="26" height="12" rx="3" fill="${K}" transform="rotate(8 62 54)"/>
    <path d="M50 70h24" fill="none" stroke="${K}" stroke-width="3" stroke-linecap="round" transform="rotate(8 62 70)"/>`,
  // Wool hiking sock
  socks: `
    <path fill="${P}" d="M30 10h30v44l14 12a12 12 0 0 1-15 19L28 62a8 8 0 0 1-2-6V10z"/>
    <rect x="28" y="8" width="34" height="12" rx="4" fill="${F}"/>
    <path d="M30 28h30M30 36h30" fill="none" stroke="${K}" stroke-width="2.5"/>
    <path fill="${C}" d="M64 72l10-6a12 12 0 0 1-15 19l-6-6z"/>
    <path fill="${C}" d="M26 50h34v4l-4 0H26z"/>`,
  // Roll-top dry bag with buckle
  'dry-bag': `
    <path fill="${C}" d="M26 30h44l4 48a8 8 0 0 1-8 8H30a8 8 0 0 1-8-8z"/>
    <rect x="24" y="14" width="48" height="16" rx="5" fill="${F}"/>
    <path d="M28 20h40M28 25h40" fill="none" stroke="${P}" stroke-width="2"/>
    <path d="M24 22h-6v14M72 22h6v14" fill="none" stroke="${F}" stroke-width="4" stroke-linecap="round"/>
    <rect x="14" y="34" width="8" height="8" rx="2" fill="${P}"/><rect x="74" y="34" width="8" height="8" rx="2" fill="${P}"/>
    <rect x="36" y="50" width="24" height="18" rx="4" fill="${K}"/>
    <path fill="${P}" d="M48 52c4 5 6 7 6 10a6 6 0 0 1-12 0c0-3 2-5 6-10z"/>`,
  // Rolled microfiber towel
  towel: `
    <rect x="14" y="28" width="56" height="44" rx="4" fill="${P}"/>
    <path d="M14 40h56M14 60h56" fill="none" stroke="${K}" stroke-width="2.5"/>
    <circle cx="70" cy="50" r="22" fill="${C}"/>
    <circle cx="70" cy="50" r="14" fill="none" stroke="${K}" stroke-width="3"/>
    <circle cx="70" cy="50" r="6" fill="${F}"/>
    <rect x="10" y="78" width="76" height="4" rx="2" fill="${F}"/>`,
  // Keychain multi-tool with fanned-out tools
  multitool: `
    <circle cx="20" cy="74" r="10" fill="none" stroke="${P}" stroke-width="4"/>
    <rect x="26" y="40" width="20" height="10" rx="3" fill="${K}" stroke="${F}" stroke-width="2" transform="rotate(-60 36 45)"/>
    <path fill="${K}" stroke="${F}" stroke-width="2" d="M40 46l34-22c4 6 2 12-6 16L46 54z"/>
    <rect x="44" y="50" width="38" height="7" rx="3" fill="${C}" transform="rotate(-10 44 54)"/>
    <rect x="22" y="54" width="44" height="16" rx="8" fill="${F}" transform="rotate(-20 44 62)"/>
    <circle cx="28" cy="66" r="3" fill="${K}"/>`,
  // LED light hanging from a carabiner
  'carabiner-light': `
    <path d="M44 8h8a10 10 0 0 1 10 10v12a10 10 0 0 1-10 10h-8a10 10 0 0 1-10-10V18a10 10 0 0 1 10-10z" fill="none" stroke="${C}" stroke-width="5"/>
    <path d="M58 16v16" fill="none" stroke="${F}" stroke-width="3" stroke-linecap="round"/>
    <rect x="30" y="40" width="36" height="42" rx="9" fill="${F}"/>
    <circle cx="48" cy="61" r="12" fill="${C}"/><circle cx="48" cy="61" r="5" fill="${K}"/>
    <path d="M18 61h-6M84 61h-6M24 44l-5-4M72 44l5-4" fill="none" stroke="${C}" stroke-width="3.5" stroke-linecap="round"/>`,
  // Fanned playing cards
  cards: `
    <rect x="16" y="20" width="36" height="52" rx="5" fill="${P}" transform="rotate(-16 34 46)"/>
    <rect x="30" y="18" width="36" height="52" rx="5" fill="${K}" stroke="${F}" stroke-width="3"/>
    <rect x="44" y="22" width="36" height="52" rx="5" fill="${K}" stroke="${F}" stroke-width="3" transform="rotate(16 62 48)"/>
    <path fill="${C}" d="M62 38c-6 6-9 9-9 13a4.5 4.5 0 0 0 9 1a4.5 4.5 0 0 0 9-1c0-4-3-7-9-13z" transform="rotate(16 62 48)"/>
    <path d="M6 84c14-8 70-8 84 0" fill="none" stroke="${F}" stroke-width="4" stroke-linecap="round"/>`,
} as const;

export type ProductIconName = keyof typeof PRODUCT_ICONS;
