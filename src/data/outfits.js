const createOutfitImage = ({ topColor, bottomColor, shoeColor, accentColor, mood }) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 760">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#fffaf5" />
          <stop offset="100%" stop-color="${accentColor}" />
        </linearGradient>
      </defs>
      <rect width="600" height="760" rx="56" fill="url(#bg)" />
      <circle cx="510" cy="120" r="94" fill="rgba(255,255,255,0.34)" />
      <circle cx="100" cy="620" r="112" fill="rgba(255,255,255,0.18)" />
      <rect x="160" y="126" width="280" height="214" rx="54" fill="${topColor}" />
      <rect x="196" y="338" width="86" height="208" rx="34" fill="${bottomColor}" />
      <rect x="318" y="338" width="86" height="208" rx="34" fill="${bottomColor}" />
      <rect x="176" y="566" width="122" height="42" rx="21" fill="${shoeColor}" />
      <rect x="304" y="566" width="122" height="42" rx="21" fill="${shoeColor}" />
      <text x="50%" y="678" text-anchor="middle" fill="#1e1c1a" font-size="30" font-family="Arial, sans-serif" font-weight="700">
        StyleMate Look
      </text>
      <text x="50%" y="718" text-anchor="middle" fill="#5f564d" font-size="22" font-family="Arial, sans-serif">
        ${mood}
      </text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

export const OUTFITS = [
  {
    id: 1,
    top: "Cream linen shirt",
    bottom: "Olive tapered chinos",
    footwear: "White leather sneakers",
    image: createOutfitImage({
      topColor: "#efe4d4",
      bottomColor: "#79805a",
      shoeColor: "#f9f9f7",
      accentColor: "#f2d8c1",
      mood: "Casual city light",
    }),
    tags: ["casual", "college", "summer"],
  },
  {
    id: 2,
    top: "Navy polo tee",
    bottom: "Stone slim joggers",
    footwear: "Grey trainers",
    image: createOutfitImage({
      topColor: "#203553",
      bottomColor: "#c9c1b6",
      shoeColor: "#8b8d92",
      accentColor: "#d9e1ee",
      mood: "Sporty commute",
    }),
    tags: ["sporty", "casual", "daily"],
  },
  {
    id: 3,
    top: "Powder blue oxford shirt",
    bottom: "Charcoal trousers",
    footwear: "Brown loafers",
    image: createOutfitImage({
      topColor: "#b6d2eb",
      bottomColor: "#45474f",
      shoeColor: "#795740",
      accentColor: "#d8e5f1",
      mood: "Desk to dinner",
    }),
    tags: ["formal", "office", "smart"],
  },
  {
    id: 4,
    top: "Rust kurta",
    bottom: "Off-white churidar",
    footwear: "Tan mojaris",
    image: createOutfitImage({
      topColor: "#b96441",
      bottomColor: "#f2ebdf",
      shoeColor: "#ad835e",
      accentColor: "#f0d3c2",
      mood: "Warm festive day",
    }),
    tags: ["ethnic", "festive", "traditional"],
  },
  {
    id: 5,
    top: "Black crewneck tee",
    bottom: "Light denim jeans",
    footwear: "Canvas high-tops",
    image: createOutfitImage({
      topColor: "#1f1f1f",
      bottomColor: "#8ab0da",
      shoeColor: "#ece9e2",
      accentColor: "#d8dde7",
      mood: "Classic weekend",
    }),
    tags: ["casual", "denim", "street"],
  },
  {
    id: 6,
    top: "Forest green overshirt",
    bottom: "Black straight-fit jeans",
    footwear: "Suede desert boots",
    image: createOutfitImage({
      topColor: "#546449",
      bottomColor: "#292a2e",
      shoeColor: "#8a6b50",
      accentColor: "#d7decf",
      mood: "Layered everyday",
    }),
    tags: ["casual", "smart", "monsoon"],
  },
  {
    id: 7,
    top: "Ivory blouse",
    bottom: "Camel pleated pants",
    footwear: "Block heel sandals",
    image: createOutfitImage({
      topColor: "#f6f0e5",
      bottomColor: "#bd9468",
      shoeColor: "#b2876a",
      accentColor: "#efe0cb",
      mood: "Polished brunch",
    }),
    tags: ["formal", "elevated", "soft"],
  },
  {
    id: 8,
    top: "Sage co-ord top",
    bottom: "Matching relaxed trousers",
    footwear: "Minimal slides",
    image: createOutfitImage({
      topColor: "#8fa28c",
      bottomColor: "#8fa28c",
      shoeColor: "#d6cab9",
      accentColor: "#dde5d6",
      mood: "Easy co-ord",
    }),
    tags: ["casual", "travel", "easy"],
  },
  {
    id: 9,
    top: "Maroon band-collar kurta",
    bottom: "Beige straight pants",
    footwear: "Kolhapuri sandals",
    image: createOutfitImage({
      topColor: "#7d3241",
      bottomColor: "#d7c7a8",
      shoeColor: "#936949",
      accentColor: "#ebd2cf",
      mood: "Relaxed ethnic",
    }),
    tags: ["ethnic", "daily", "calm"],
  },
  {
    id: 10,
    top: "White fitted shirt",
    bottom: "Navy ankle pants",
    footwear: "Pointed flats",
    image: createOutfitImage({
      topColor: "#faf7f2",
      bottomColor: "#1f365f",
      shoeColor: "#7b5d55",
      accentColor: "#dfe7f0",
      mood: "Clean office look",
    }),
    tags: ["formal", "office", "clean"],
  },
  {
    id: 11,
    top: "Striped knit top",
    bottom: "Wide-leg blue denim",
    footwear: "Retro sneakers",
    image: createOutfitImage({
      topColor: "#f0e0d0",
      bottomColor: "#6f8fb9",
      shoeColor: "#f4f2ef",
      accentColor: "#d9e4ef",
      mood: "Playful denim",
    }),
    tags: ["casual", "denim", "weekend"],
  },
  {
    id: 12,
    top: "Slate blazer tee combo",
    bottom: "Black tailored trousers",
    footwear: "Leather derbies",
    image: createOutfitImage({
      topColor: "#6b7380",
      bottomColor: "#1d1d1f",
      shoeColor: "#4a3429",
      accentColor: "#d8dde3",
      mood: "Sharp meeting day",
    }),
    tags: ["formal", "smart", "evening"],
  },
  {
    id: 13,
    top: "Heather performance tee",
    bottom: "Black track pants",
    footwear: "Running shoes",
    image: createOutfitImage({
      topColor: "#8a9098",
      bottomColor: "#1e2229",
      shoeColor: "#f7f7f6",
      accentColor: "#d8dde5",
      mood: "Training hour",
    }),
    tags: ["sporty", "fitness", "active"],
  },
  {
    id: 14,
    top: "Sky blue chambray shirt",
    bottom: "Khaki shorts",
    footwear: "Slip-on sneakers",
    image: createOutfitImage({
      topColor: "#99bdd1",
      bottomColor: "#c8b48b",
      shoeColor: "#ece7df",
      accentColor: "#dce9ed",
      mood: "Sunny casual",
    }),
    tags: ["casual", "summer", "travel"],
  },
  {
    id: 15,
    top: "Ink blue kurta set",
    bottom: "Matching tapered pants",
    footwear: "Embroidered juttis",
    image: createOutfitImage({
      topColor: "#2f446c",
      bottomColor: "#2f446c",
      shoeColor: "#b69262",
      accentColor: "#d7dfef",
      mood: "Festive evening",
    }),
    tags: ["ethnic", "festive", "evening"],
  },
  {
    id: 16,
    top: "Taupe knit polo",
    bottom: "Espresso trousers",
    footwear: "Suede loafers",
    image: createOutfitImage({
      topColor: "#b79f89",
      bottomColor: "#5e4438",
      shoeColor: "#8b674b",
      accentColor: "#eadacd",
      mood: "Refined formal",
    }),
    tags: ["formal", "smart", "minimal"],
  },
  {
    id: 17,
    top: "Coral active jacket",
    bottom: "Graphite leggings",
    footwear: "Cushioned trainers",
    image: createOutfitImage({
      topColor: "#de7f6c",
      bottomColor: "#4c525a",
      shoeColor: "#f1f2f2",
      accentColor: "#f0d9d2",
      mood: "Morning run",
    }),
    tags: ["sporty", "active", "outdoor"],
  },
  {
    id: 18,
    top: "Soft beige sweater",
    bottom: "White linen pants",
    footwear: "Tan sandals",
    image: createOutfitImage({
      topColor: "#d9c4aa",
      bottomColor: "#f2ede5",
      shoeColor: "#bb8c66",
      accentColor: "#efe2d1",
      mood: "Light relaxed day",
    }),
    tags: ["casual", "resort", "light"],
  },
];
