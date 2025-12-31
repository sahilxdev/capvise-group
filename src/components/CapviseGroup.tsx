'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink, MapPin, Calendar, CheckCircle, Users, Flame, TrendingUp, Layers, Box, Globe, Sparkles, Award, Crown, X as CloseIcon, Quote, Star, Camera, Building, Linkedin, Mail, Mic, Send } from 'lucide-react';

export default function CapviseGroup() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeEvent, setActiveEvent] = useState(0);
  const [activeDiv, setActiveDiv] = useState('events');
  const [showPartnerModal, setShowPartnerModal] = useState(false);
  const [activeTweetTab, setActiveTweetTab] = useState('partners');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    // @ts-ignore
    if (window.twttr?.widgets) setTimeout(() => window.twttr.widgets.load(), 100);
  }, [activeTab, activeEvent, activeTweetTab]);

  // --- COMPONENTS ---

  const WorldMap = () => (
    <div className="relative w-full">
      <svg viewBox="0 0 1000 500" className="w-full h-auto drop-shadow-2xl">
        <rect width="1000" height="500" fill="transparent"/>
        {/* North America */}
        <path d="M120,50 L180,45 L220,60 L250,50 L280,70 L290,100 L280,130 L250,150 L230,180 L200,200 L180,190 L160,200 L140,180 L120,150 L100,140 L90,120 L100,90 L110,70 Z" fill="#171717" stroke="#333" strokeWidth="0.5"/>
        {/* Central America */}
        <path d="M180,200 L200,200 L210,230 L200,260 L180,270 L170,250 L175,220 Z" fill="#171717" stroke="#333" strokeWidth="0.5"/>
        {/* South America */}
        <path d="M200,270 L230,260 L260,280 L280,320 L290,370 L280,420 L250,450 L220,440 L200,400 L190,350 L195,300 Z" fill="#171717" stroke="#333" strokeWidth="0.5"/>
        {/* Europe */}
        <path d="M440,60 L480,50 L520,55 L540,70 L550,90 L540,110 L520,120 L500,130 L480,125 L460,130 L440,120 L430,100 L435,80 Z" fill="#171717" stroke="#333" strokeWidth="0.5"/>
        {/* UK */}
        <path d="M420,70 L435,65 L440,80 L430,95 L420,90 L418,75 Z" fill="#171717" stroke="#333" strokeWidth="0.5"/>
        {/* Africa */}
        <path d="M440,140 L480,130 L520,140 L560,160 L580,200 L590,250 L580,300 L560,350 L530,380 L490,390 L450,370 L430,320 L420,270 L425,220 L430,180 Z" fill="#171717" stroke="#333" strokeWidth="0.5"/>
        {/* Middle East */}
        <path d="M560,130 L600,120 L640,130 L660,160 L650,190 L620,200 L590,190 L570,170 L565,145 Z" fill="#171717" stroke="#333" strokeWidth="0.5"/>
        {/* Russia */}
        <path d="M540,50 L600,40 L700,35 L800,45 L880,60 L900,80 L890,100 L850,110 L800,100 L750,110 L700,100 L650,110 L600,100 L560,90 L545,70 Z" fill="#171717" stroke="#333" strokeWidth="0.5"/>
        {/* India */}
        <path d="M660,160 L700,150 L720,180 L710,220 L680,260 L660,250 L650,210 L655,180 Z" fill="#171717" stroke="#333" strokeWidth="0.5"/>
        {/* China */}
        <path d="M700,100 L750,90 L800,100 L840,120 L850,150 L830,180 L790,190 L750,180 L720,160 L710,130 Z" fill="#171717" stroke="#333" strokeWidth="0.5"/>
        {/* Southeast Asia */}
        <path d="M750,190 L780,180 L810,200 L800,240 L770,260 L740,250 L730,220 L740,200 Z" fill="#171717" stroke="#333" strokeWidth="0.5"/>
        {/* Indonesia */}
        <path d="M760,280 L800,270 L850,280 L870,290 L860,310 L820,315 L780,310 L760,295 Z" fill="#171717" stroke="#333" strokeWidth="0.5"/>
        {/* Australia */}
        <path d="M800,340 L860,330 L900,350 L920,390 L910,430 L870,450 L820,440 L790,410 L785,370 Z" fill="#171717" stroke="#333" strokeWidth="0.5"/>
        {/* Japan */}
        <path d="M870,110 L885,100 L895,115 L890,140 L875,150 L865,135 Z" fill="#171717" stroke="#333" strokeWidth="0.5"/>
        
        {/* Singapore - Green (Past) */}
        <g>
          <circle cx="770" cy="245" r="15" fill="#22c55e" opacity="0.2">
            <animate attributeName="r" values="15;25;15" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="770" cy="245" r="4" fill="#22c55e"/>
          <text x="770" y="270" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold" className="uppercase tracking-wider">Singapore</text>
        </g>
        
        {/* Dubai - Green (Past) */}
        <g>
          <circle cx="620" cy="175" r="15" fill="#22c55e" opacity="0.2">
            <animate attributeName="r" values="15;25;15" dur="2s" repeatCount="indefinite" begin="0.5s"/>
          </circle>
          <circle cx="620" cy="175" r="4" fill="#22c55e"/>
          <text x="620" y="160" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold" className="uppercase tracking-wider">Dubai</text>
        </g>
        
        {/* Bali - Green (Past) */}
        <g>
          <circle cx="810" cy="295" r="15" fill="#22c55e" opacity="0.2">
            <animate attributeName="r" values="15;25;15" dur="2s" repeatCount="indefinite" begin="1s"/>
          </circle>
          <circle cx="810" cy="295" r="4" fill="#22c55e"/>
          <text x="810" y="320" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold" className="uppercase tracking-wider">Bali</text>
        </g>
        
        {/* Buenos Aires - Green (Past) */}
        <g>
          <circle cx="260" cy="400" r="15" fill="#22c55e" opacity="0.2">
            <animate attributeName="r" values="15;25;15" dur="2s" repeatCount="indefinite" begin="1.5s"/>
          </circle>
          <circle cx="260" cy="400" r="4" fill="#22c55e"/>
          <text x="260" y="425" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold" className="uppercase tracking-wider">Buenos Aires</text>
        </g>
        
        {/* Hong Kong - Red (Upcoming) */}
        <g>
          <circle cx="820" cy="170" r="15" fill="#ef4444" opacity="0.2">
            <animate attributeName="r" values="15;25;15" dur="2s" repeatCount="indefinite" begin="2s"/>
          </circle>
          <circle cx="820" cy="170" r="4" fill="#ef4444"/>
          <text x="850" y="165" textAnchor="start" fill="#ef4444" fontSize="10" fontWeight="bold" className="uppercase tracking-wider">Hong Kong</text>
          <text x="850" y="178" fill="#ef4444" fontSize="8" fontWeight="bold" className="uppercase tracking-widest">(Feb 2026)</text>
        </g>
        
        {/* Connection Lines */}
        <path d="M770,245 Q700,200 620,175" stroke="#22c55e" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="4,4"/>
        <path d="M620,175 Q400,300 260,400" stroke="#22c55e" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="4,4"/>
        <path d="M770,245 L810,295" stroke="#22c55e" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="4,4"/>
      </svg>
      
      {/* Legend */}
      <div className="flex justify-center gap-6 mt-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span className="text-neutral-500 uppercase tracking-widest text-[9px] font-bold">Past Events</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          <span className="text-neutral-500 uppercase tracking-widest text-[9px] font-bold">Upcoming</span>
        </div>
      </div>
    </div>
  );

  // --- DATA ---

  // VCs
  const vcs = ["Pantera Capital", "Animoca Brands", "Hashed", "Coinbase Ventures", "Dragonfly", "Polychain", "Framework", "Multicoin", "Spartan", "Folius"];

  // PARTNER COMPANIES - Updated with logo paths
  const partnerCompanies = [
    { name: "Bitcoin.com", x: "Aboringcompany", logo: "/partners/bitcoin.png" },
    { name: "Somnia Network", x: "Somnia_Network", logo: "/partners/somnia.jpg" },
    { name: "Venom Foundation", x: "VenomFoundation", logo: "/partners/venom.jpg" },
    { name: "Blocksquare", x: "blocksquare_io", logo: "/partners/blocksquare.webp" },
    { name: "Fambam", x: "Fambam_com", logo: "/partners/fambam.jpg" },
    { name: "Yellow Media", x: "YellowMedia_HQ", logo: "/partners/yellow.jpg" },
    { name: "CoinEasy", x: "Coiniseasy", logo: "/partners/coineasy.jpg" },
    { name: "OzakAI", x: "OzakAGI", logo: "/partners/ozak.jpg" },
    { name: "BackersStage", x: "BackersStage", logo: "/partners/backersstage.png" },
    { name: "WizzHQ", x: "WizzHQ", logo: "/partners/wizzhq.png" },
    { name: "Wisdora", x: "Wisdora_xyz", logo: "/partners/wisdora.jpg" },
    { name: "0xTeam Space", x: "0xTeamSpace", logo: "/partners/0xteam.jpg" },
    { name: "Obitus Games", x: "ObitusGames", logo: "/partners/obitus.jpg" },
    { name: "Sobro", x: "sobrodotxyz", logo: "/partners/sobro.jpg" },
  ];

  // ATTENDING COMPANIES
  const rawAttending = [
    "0xLabs", "1inch", "Aave", "Aavegotchi", "Abcde", "Acquire.Fi", "Act Labs", "Addressable", "Aethir", "Akash Network", "Alchemy", "Aleph", "Algorand", "Allnodes", "AlphaGrowth", "Ambire Wallet", "Animoca Brands", "Ankr", "Aptos", "Arbitrum", "Arcane", "Argent", "Arrakis.Finance", "Astrolabs", "Automata", "Avalanche", "Axal", "Axelar", "Aztec", "B4B", "Baanx", "Balancer", "Bancor", "Base", "Beam", "Beefy", "BeInCrypto", "Berachain", "Biconomy", "Binance", "Bitget", "BitGo", "BitMEX", "Bitpanda", "Bitso", "Blockaid", "Blockchain.com", "Blockdaemon", "Blockscout", "BlockTempo", "Bloq", "Boba", "Botanika", "Bware", "Bybit", "Caladan", "Cartesi", "Celestia", "Centrifuge", "CertiK", "Chainflip", "ChainGPT", "Chainlink", "Chainstack", "Chaos Labs", "Chiliz", "Chorus One", "Circle", "Citrea", "Civic", "Coinfest", "Coin98", "Coinbase", "CoinDesk", "CoinGecko", "CoinMarketCap", "CoinTelegraph", "Compound", "Conflux", "Consensys", "Convex", "Core DAO", "Cosmos", "Covalent", "Credora", "Crypto.com", "Curve", "CyberConnect", "DappRadar", "Dash", "Decentraland", "Decubate", "DeDust", "DefiLlama", "Delsol", "DeSpread", "DFG", "Dfinity", "dForce", "Dialectic", "Digital Currency Group", "DODO", "Dogechain", "DoraHacks", "Drift", "DWF Labs", "dYdX", "EigenLayer", "Elixir", "Enjin", "Etherscan", "Ethena", "Ethereum Foundation", "Everstake", "Fabric Ventures", "FalconX", "Fantom", "Fetch.ai", "Figment", "Filecoin", "Fireblocks", "Flashbots", "Flow", "Flowdesk", "Fold", "Foresight Ventures", "Frax", "Fuel", "Galxe", "Gate.io", "Gear", "Gelato", "Gemini", "GMX", "Gnosis", "GoPlus", "Google", "GSR", "Hashed", "HashKey", "Hedera", "Helium", "Hex Trust", "Hinkal", "Hive", "Holo", "Hop", "Horizen", "HTX", "Huobi", "Hyperlane", "Hypernative", "Ichi", "ICP", "iExec", "Illuvium", "Immutable", "Immunefi", "Inco", "Injective", "IO.net", "IoTeX", "Irys", "Jito", "Jump Crypto", "Jupiter", "K1", "K2", "Kadena", "Kaiko", "Kamino", "Kava", "Kelp", "Kiln", "Klaytn", "Kraken", "KuCoin", "Kujira", "Kyber", "LayerZero", "Ledger", "Lido", "Linea", "Link3", "Liquity", "Lisk", "Lit Protocol", "Livepeer", "Loopring", "Lukso", "Magic Eden", "Maker", "Manta", "Mantle", "Mask", "Matter Labs", "Maverick", "Mechanism", "Merit Circle", "Merlin", "Messari", "Metamask", "Metis", "MEXC", "Mina", "Mirror", "Mocaverse", "Mode", "Monad", "Moonbeam", "MoonPay", "Morph", "Multicoin", "Nansen", "Near", "Neon", "Nethermind", "Neutron", "Nexo", "NFTScan", "Nillion", "Nomad", "Nomic", "Notional", "Nuant", "Oasis", "Obscuro", "Odsy", "OIO", "OKX", "Oku", "Omni", "Ondo", "OneKey", "OpenSea", "Optimism", "Orbs", "Orderly", "Origin", "Osmosis", "Ozean", "P2P.org", "Pantera", "Paradigm", "Parallel", "Paraswap", "Particle", "Pendle", "Penumbra", "Phantom", "Phemex", "Plume", "Polkadot", "Polygon", "Polyhedra", "PoolTogether", "Portal", "Powerloom", "Primitive", "Project Galaxy", "Provenance", "Pudgy Penguins", "Puffer", "Pundi X", "Push", "Pyth", "Qredo", "Quant", "Quantstamp", "QuickNode", "Quai", "Radix", "Railgun", "Rarible", "Rari", "RedStone", "Ren", "Renzo", "Republic", "Request", "Reserve", "Risc0", "Ritual", "Rocket Pool", "Ronin", "Rootstock", "Router", "Rune", "Safe", "Saga", "Sandbox", "Scroll", "Secret", "Sei", "Sentry", "Sepior", "Shardeum", "Sherlock", "Shield", "Shift", "Shima", "Shuttle", "Side", "Signum", "Skale", "Sky", "Smart", "Socket", "Solana", "Sonic", "Sorare", "Space ID", "Spool", "Stacks", "StakeWise", "Star Atlas", "Starknet", "StarkWare", "Status", "Stellar", "StepN", "Stork", "Storj", "Stratos", "Strike", "Sui", "Superfluid", "Superstate", "Sushi", "Swell", "SwissBorg", "Synapse", "Synthetix", "Taiko", "Talos", "Tanssi", "Taproot", "Taraxa", "TBD", "Tea", "Teller", "Tellor", "Tempo", "Tenderly", "Tent", "Tether", "Tezos", "The Graph", "Theta", "Thorchain", "Threshold", "Thunder", "Tiago", "Tido", "Tiger", "Time", "Titan", "Token Pocket", "Token Terminal", "Tokenlon", "Toku", "Tomo", "Ton", "Tornado", "Transak", "Treasure", "Trezor", "Tron", "TrueFi", "Trust Wallet", "Turnkey", "UMA", "Uniswap", "Unstoppable Domains", "Uphold", "Upbit", "Uquid", "Valhalla", "Valkyrie", "VanEck", "Vara", "VeChain", "Vega", "Vercel", "Veridise", "Vertex", "Vesper", "Vest", "Vesto", "Vexchange", "Vicuna", "Virtu", "Visa", "Vitalik", "Vlx", "Vm", "Vottun", "Voyage", "Vrap", "Vulcan", "WalletConnect", "Wanchain", "Waves", "Wax", "Web3 Foundation", "Wemade", "WOO", "Wintermute", "Wirex", "Worldcoin", "Wormhole", "X", "XDC", "XPLA", "XRP", "Xverse", "YGG", "Yield Guild", "Yuga Labs", "Zama", "Zcash", "Zebec", "Zen", "Zerion", "ZeroLend", "ZetaChain", "Zilliqa", "zkLink", "zkPass", "zkSync", "Zora"
  ];

  // MEDIA PARTNERS - Updated with logos
  const mediaPartners = [
    { name: "Bitcoin.com News", logo: "/partners/bitcoin.png" },
    { name: "CoinRank", logo: "/partners/coinrank.webp" },
    { name: "CoinGabbar", logo: "/partners/coingabbar.png" },
    { name: "BlockHunters", logo: "/partners/blockhunters.jpg" },
    { name: "Yellow Media", logo: "/partners/yellow.jpg" },
    { name: "Ozak AI", logo: "/partners/ozak.jpg" },
    { name: "Fambam", logo: "/partners/fambam.jpg" },
    { name: "BlockTempo", logo: "/partners/blocktempo.png" },
    { name: "The Reliable Jobs", logo: "/partners/trj.jpg" },
  ];

  // COMMUNITY PARTNERS - Updated with logos
  const communityPartners = [
    { name: "HerDAO", logo: "/partners/herdao.jpg" },
    { name: "Bhopal DAO", logo: "/partners/bhopaldao.png" },
    { name: "OrbitX", logo: "/partners/orbitx.png" },
    { name: "Yellow Media", logo: "/partners/yellow.jpg" },
    { name: "Unstoppable24x7", logo: "/partners/unstoppable.jpg" },
    { name: "WizzHQ", logo: "/partners/wizzhq.png" },
    { name: "Wisdora", logo: "/partners/wisdora.jpg" },
    { name: "CoinEasy", logo: "/partners/coineasy.jpg" },
  ];

  // Filter attending companies to remove duplicates from partnerCompanies
  const partnerNames = new Set(partnerCompanies.map(p => p.name));
  const attendingCompanies = rawAttending.filter(c => !partnerNames.has(c));
   
  // Split for ticker
  const quarter = Math.ceil(attendingCompanies.length / 4);
  const attendingRow1 = attendingCompanies.slice(0, quarter);
  const attendingRow2 = attendingCompanies.slice(quarter, quarter * 2);
  const attendingRow3 = attendingCompanies.slice(quarter * 2, quarter * 3);
  const attendingRow4 = attendingCompanies.slice(quarter * 3);

  // SPEAKERS
  const speakers = [
    { name: "Mackenzie Chng", role: "Moderator", company: "Animoca Brands", image: "/speakers/mackenzie.jpg" },
    { name: "Louis Tsu", role: "CEO", company: "Venom Foundation", image: "/speakers/louis.jpg" },
    { name: "Adrian Lai", role: "CCO", company: "Spartan Labs", image: "/speakers/adrian.avif" },
    { name: "Shubham Bhandari", role: "Head of Ecosystem", company: "Manta Network", image: "/speakers/shubham.jpg" },
    { name: "Alun Stern", role: "Retention", company: "Bitcoin.com", image: "/speakers/alun.jpg" },
    { name: "Nirav Murty", role: "Co-Founder", company: "Camp Network", image: "/speakers/nirav.jpg" },
    { name: "Amr", role: "Head of Events", company: "Somnia Network", image: "/speakers/amr.jpg" },
    { name: "Artak Seyranyan", role: "Deal Flow", company: "ChainGPT Pad", image: "/speakers/artak.jpg" },
    { name: "Luis Correa", role: "CEO", company: "Obitus Games", image: "/speakers/luis.jpg" },
    { name: "Julia", role: "CMO", company: "Blocksquare", image: "/speakers/julia.jpg" },
    { name: "Serge Belan", role: "Founder", company: "TimeSoul", image: "/speakers/serge.jpg" },
    { name: "Vincent", role: "Founder", company: "DataStream", image: "/speakers/vincent.jpg" },
  ];

  const events = [
    { 
      name: "Somnia Dev City", 
      conference: "Devconnect Argentina", 
      image: "/events/argentina.jpg",
      date: "Nov 2025", 
      location: "Buenos Aires", 
      locationUrl: "https://maps.app.goo.gl/11jUjbSHGasd3yRK6", 
      spots: "200", 
      applications: "1,200+", 
      status: "COMPLETED", 
      lumaId: "5t9w5k20", 
      lumaUrl: "https://lu.ma/5t9w5k20",
      partners: [
        { name: "BackersStage", x: "BackersStage", cohost: true, logo: "/partners/backersstage.png" }, 
        { name: "Somnia Network", x: "Somnia_Network", logo: "/partners/somnia.jpg" },
        { name: "Akindo", x: "akindo_io", logo: "/partners/akindo.jpg" },
        { name: "Cracked Labs", x: "CrackedLabs", logo: "/partners/cracked.webp" },
        { name: "No Limit Games", x: "NoLimitGames", logo: "/partners/nlg.jpg" },
        { name: "Sablier", x: "Sablier", logo: "/partners/sablier.jpg" },
        { name: "Improbable", x: "Improbableio", logo: "/partners/improb.jpg" },
        { name: "MSquared", x: "MSquared_io", logo: "/partners/msquared.jpg" },
        { name: "MIRANA Ventures", x: "MiranaVentures", logo: "/partners/mirana.jpg" }
      ],
      note: "Naming rights sponsor", 
      tweets: { 
        partners: ["1990886806569582674", "1991134291695190454", "1991214746503155955", "1990314400759329142", "1992961784790110433"], 
        media: ["1993681391842669028"], 
        official: ["1991792294459293980"] 
      }
    },
    { 
      name: "Founder × VC Happy Hour", 
      conference: "Blockchain Life Dubai", 
      image: "/events/dubai.jpg",
      date: "Oct 2025", 
      location: "Dubai Festival City", 
      locationUrl: "https://maps.app.goo.gl/R98ys9c5nHZxU1en6", 
      spots: "150+", 
      applications: "600+", 
      status: "SOLD OUT", 
      lumaId: "zpr06jcn", 
      lumaUrl: "https://lu.ma/zpr06jcn",
      partners: [
        { name: "BackersStage", x: "BackersStage", cohost: true, logo: "/partners/backersstage.png" }, 
        { name: "Venom Foundation", x: "VenomFoundation", logo: "/partners/venom.jpg" }, 
        { name: "TimeSoul", x: "timesoulcom", logo: "/partners/timesoul.jpg" }, 
        { name: "WizzHQ", x: "WizzHQ", logo: "/partners/wizzhq.png" }, 
        { name: "Wisdora", x: "Wisdora_xyz", logo: "/partners/wisdora.jpg" }
      ],
      tweets: { 
        partners: ["1983578937327329446"], 
        media: [], 
        official: [] 
      }
    },
    { 
      name: "Founder × VC Summit", 
      conference: "TOKEN2049 Singapore", 
      image: "/events/singapore.jpg",
      date: "Sep 2025", 
      location: "One Raffles Quay", 
      locationUrl: "https://maps.app.goo.gl/mEEaGGBV2sErT4Wc8", 
      spots: "500", 
      applications: "4,000+", 
      status: "SOLD OUT", 
      lumaId: "kgkuizrv", 
      lumaUrl: "https://lu.ma/kgkuizrv",
      subEvents: [{ name: "Demo Day", lumaId: "kgkuizrv" }, { name: "Happy Hour", lumaId: "s26lk0zj" }, { name: "Closing", lumaId: "bi1r8d5l" }],
      partners: [
        { name: "BackersStage", x: "BackersStage", cohost: true, logo: "/partners/backersstage.png" }, 
        { name: "Yellow Media", x: "YellowMedia_HQ", logo: "/partners/yellow.jpg" }, 
        { name: "OzakAI", x: "OzakAGI", logo: "/partners/ozak.jpg" }, 
        { name: "Fambam", x: "Fambam_com", logo: "/partners/fambam.jpg" }, 
        { name: "0xTeam Space", x: "0xTeamSpace", logo: "/partners/0xteam.jpg" }, 
        { name: "Sobro", x: "sobrodotxyz", logo: "/partners/sobro.jpg" }, 
        { name: "Obitus Games", x: "ObitusGames", logo: "/partners/obitus.jpg" }, 
        { name: "WizzHQ", x: "WizzHQ", logo: "/partners/wizzhq.png" }
      ],
      tweets: { 
        partners: ["1973072528848388351", "1972622325884371323", "1972588211395346764", "1972586574232842398", "1972385043655049685", "1972581245226807325", "1971925419671933275", "1971896458216415309", "1972640101705363635"], 
        media: ["1978107547291615335", "1972244805867774225"], 
        official: ["1971892078868095104"] 
      }
    },
    { 
      name: "Founder × VC Happy Hour", 
      conference: "Coinfest Asia Bali", 
      image: "/events/bali.jpg",
      date: "Aug 2025", 
      location: "Canggu", 
      locationUrl: "https://maps.app.goo.gl/ZaKh9NpCQZxQJCyVA", 
      spots: "100+", 
      applications: "600+", 
      status: "SOLD OUT", 
      lumaId: "kww0f7r4", 
      lumaUrl: "https://lu.ma/kww0f7r4",
      partners: [
        { name: "BackersStage", x: "BackersStage", cohost: true, logo: "/partners/backersstage.png" }, 
        { name: "Bitcoin.com", x: "Aboringcompany", logo: "/partners/bitcoin.png" }, 
        { name: "Blocksquare", x: "blocksquare_io", logo: "/partners/blocksquare.webp" },
        { name: "Fambam", x: "fambam_com", logo: "/partners/fambam.jpg" }, 
        { name: "CoinEasy", x: "Coiniseasy", logo: "/partners/coineasy.jpg" }, 
        { name: "WizzHQ", x: "WizzHQ", logo: "/partners/wizzhq.png" }
      ],
      note: "$5,000 BTC Airdrop", 
      tweets: { 
        partners: ["1960628357361700932", "1958550210545913962", "1958218790367609190", "1957870839824805986", "1958022289049391583", "1957965342569034135"], 
        media: [], 
        official: ["1962213357207040042"] 
      }
    },
  ];

  const divisions = [
    { id: 'events', name: "Capvise Events", icon: <Globe className="w-5 h-5" />, tagline: "The Rooms That Matter", desc: "Invite-driven events at TOKEN2049, Devconnect, Coinfest Asia.", stats: [{ label: "Waitlist", value: "6,400+" }, { label: "Accept", value: "~15%" }, { label: "Cities", value: "4" }, { label: "Return", value: "87%" }], status: "ACTIVE", color: "bg-blue-600" },
    { id: 'rejected', name: "The Rejected Club", icon: <Flame className="w-5 h-5" />, tagline: "Celebrate The Pivot", desc: "A movement for founders who turned rejection into rocket fuel.", stats: [{ label: "Launch", value: "Feb 2026" }, { label: "Format", value: "Invite" }, { label: "City", value: "HK" }, { label: "Vibe", value: "Cultural" }], status: "LAUNCHING", color: "bg-red-600" },
    { id: 'media', name: "Capvise Media", icon: <Layers className="w-5 h-5" />, tagline: "Narratives That Compound", desc: "Storytelling that turns attention into infrastructure.", stats: [{ label: "Launch", value: "2026" }, { label: "Focus", value: "Web3" }, { label: "Type", value: "Full" }, { label: "Reach", value: "500K+" }], status: "2026", color: "bg-purple-600" },
    { id: 'labs', name: "Capvise Labs", icon: <Box className="w-5 h-5" />, tagline: "Distribution → Ownership", desc: "Venture arm converting distribution into ownership.", stats: [{ label: "Model", value: "Equity" }, { label: "Stage", value: "Pre-Seed" }, { label: "Focus", value: "Infra" }, { label: "Status", value: "Active" }], status: "ACTIVE", color: "bg-emerald-600" },
    { id: 'growth', name: "Capvise Growth", icon: <TrendingUp className="w-5 h-5" />, tagline: "AI-Native GTM", desc: "Growth infrastructure for Web3 protocols.", stats: [{ label: "Pay", value: "USDC" }, { label: "Type", value: "AI" }, { label: "KOLs", value: "500+" }, { label: "Status", value: "Beta" }], status: "BETA", color: "bg-amber-600" },
  ];

  const currentDivision = divisions.find(d => d.id === activeDiv);
  const currentEvent = events[activeEvent];

  // --- COMPONENTS ---

  // @ts-ignore
  const Tweet = ({ id }) => (
    <div className="mb-4 transform transition hover:scale-[1.01]">
      <blockquote className="twitter-tweet" data-theme="dark" data-conversation="none" data-dnt="true">
        <a href={`https://twitter.com/x/status/${id}`}>Loading...</a>
      </blockquote>
    </div>
  );

  // UPDATED PartnerBadge component with actual logo support
  // @ts-ignore
  const PartnerBadge = ({ partner }) => {
    const [imgError, setImgError] = useState(false);
    
    return (
      <a 
        href={`https://x.com/${partner.x}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex flex-col items-center p-3 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-neutral-600 hover:bg-neutral-800 transition-all group min-w-[100px] sm:min-w-[120px]"
      >
        <div className="w-10 h-10 bg-neutral-800 group-hover:bg-neutral-700 rounded-lg flex items-center justify-center mb-2 shadow-inner overflow-hidden">
          {partner.logo && !imgError ? (
            <img 
              src={partner.logo} 
              alt={partner.name} 
              className="w-full h-full object-contain p-1"
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="text-xs font-bold text-neutral-300">
              {partner.name.split(' ').map((w: string) => w[0]).join('').slice(0, 2)}
            </span>
          )}
        </div>
        <span className="text-[10px] text-neutral-400 group-hover:text-white font-medium text-center truncate w-full">
          {partner.name}
        </span>
        {partner.cohost && (
          <span className="text-[9px] bg-amber-900/50 text-amber-200 border border-amber-700/50 px-1.5 py-0.5 rounded mt-1">
            CO-HOST
          </span>
        )}
      </a>
    );
  };

  // NEW: SmallPartnerBadge component for Media and Community partners
  // @ts-ignore
  const SmallPartnerBadge = ({ partner }) => {
    const [imgError, setImgError] = useState(false);
    
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-900 border border-white/10 rounded-lg hover:border-white/20 hover:bg-neutral-800 transition-all group">
        <div className="w-5 h-5 bg-neutral-800 group-hover:bg-neutral-700 rounded flex items-center justify-center overflow-hidden flex-shrink-0">
          {partner.logo && !imgError ? (
            <img 
              src={partner.logo} 
              alt={partner.name} 
              className="w-full h-full object-contain"
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="text-[8px] font-bold text-neutral-400">
              {partner.name.split(' ').map((w: string) => w[0]).join('').slice(0, 2)}
            </span>
          )}
        </div>
        <span className="text-xs text-neutral-300 font-medium group-hover:text-white">
          {partner.name}
        </span>
      </div>
    );
  };

  // @ts-ignore
  const XLogo = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );

  const Logo = () => (<svg viewBox="0 0 280 160" className="w-full h-full"><path d="M 20 120 L 140 20 L 260 120" stroke="currentColor" strokeWidth="36" strokeLinejoin="miter" strokeLinecap="square" fill="none"/><rect x="0" y="125" width="280" height="14" fill="currentColor"/></svg>);

  const tabs = [{ id: 'home', label: 'Home' }, { id: 'group', label: 'The Group' }, { id: 'events', label: 'Events' }, { id: 'rejected', label: 'Rejected Club' }];

  return (
    <div className="h-screen bg-black text-white flex flex-col overflow-hidden font-sans selection:bg-neutral-700 selection:text-white">
      {/* Remove <style> tag here if you are using globals.css, otherwise keep it */}
      <style>{`
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scroll-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-scroll-left { animation: scroll-left 180s linear infinite; }
        .animate-scroll-right { animation: scroll-right 180s linear infinite; }
        .animate-scroll-slow { animation-duration: 60s; }
        
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .twitter-tweet { margin: 0 !important; }
        blockquote.twitter-tweet { background: #000; border: 1px solid #262626; border-radius: 12px; padding: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.5); }
        blockquote.twitter-tweet a { color: #525252; }
      `}</style>

      {/* NAVIGATION */}
      <nav className="flex-shrink-0 border-b border-white/5 bg-black/80 backdrop-blur-md sticky top-0 z-40 supports-[backdrop-filter]:bg-black/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setActiveTab('home')}>
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center p-2 text-black shadow-lg shadow-white/10 transition-transform group-hover:scale-95"><Logo /></div>
              <div className="hidden sm:block">
                <div className="font-black text-white text-lg leading-none tracking-tight">CAPVISE</div>
                <div className="text-neutral-500 text-[10px] tracking-[0.2em] font-medium group-hover:text-white transition-colors">GROUP</div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-1 bg-neutral-900/50 border border-white/5 rounded-xl p-1">
              {tabs.map(tab => (
                <button 
                  key={tab.id} 
                  onClick={() => setActiveTab(tab.id)} 
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === tab.id ? 'bg-neutral-800 text-white shadow-sm' : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <button onClick={() => setShowPartnerModal(true)} className="group flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-neutral-200 transition-colors">
              Partner 
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
        {/* Mobile Nav Tabs - Ensured visible */}
        <div className="md:hidden flex overflow-x-auto no-scrollbar border-t border-white/5 px-4 py-2 gap-2">
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap ${activeTab === tab.id ? 'bg-white text-black' : 'text-neutral-400 border border-white/10'}`}>{tab.label}</button>
          ))}
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-y-auto no-scrollbar scroll-smooth">
        
        {/* === HOME TAB === */}
        {activeTab === 'home' && (
          <div className="min-h-full flex flex-col">
            <div className="flex-1 py-12 px-4 sm:px-6">
              <div className="max-w-7xl mx-auto">
                
                {/* HERO SECTION - REVISED FOR HORIZONTAL IMAGE */}
                <div className="mb-16 relative">
                  <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                  <div className="absolute top-20 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full mb-6 backdrop-blur-sm">
                        <Flame className="w-3.5 h-3.5 text-red-500" />
                        <span className="text-xs text-red-200 font-medium tracking-wide">Feb 2026: The Rejected Club Hong Kong</span>
                      </div>
                      
                      <h1 className="text-5xl sm:text-7xl lg:text-7xl font-black leading-[0.9] tracking-tight mb-8">
                        <span className="block text-white">We build</span>
                        <span className="block bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-600 bg-clip-text text-transparent">the rooms</span>
                        <span className="block text-neutral-700 text-3xl sm:text-5xl mt-2 font-bold tracking-normal">everyone wants into.</span>
                      </h1>
                      
                      <p className="text-lg text-neutral-400 mb-8 max-w-xl leading-relaxed">
                        <span className="text-white font-semibold">Capvise Group</span> runs the highest-signal events across <span className="text-white border-b border-white/20 pb-0.5">3 continents</span>, turning attention into infrastructure.
                      </p>
                      
                      <div className="grid grid-cols-4 gap-3 max-w-2xl mb-10">
                        {[{ value: "6.4K+", label: "Waitlist" }, { value: "~15%", label: "Acceptance" }, { value: "87%", label: "Sponsor Return" }, { value: "4", label: "Global Hubs" }].map((s, i) => (
                          <div key={i} className="bg-neutral-900/50 border border-white/5 rounded-xl p-4 text-center backdrop-blur-sm">
                            <div className="text-xl sm:text-2xl font-black text-white mb-1">{s.value}</div>
                            <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold">{s.label}</div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <button onClick={() => setActiveTab('events')} className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl text-sm hover:bg-neutral-200 transition-colors">
                          View Events <ArrowRight className="w-4 h-4" />
                        </button>
                        <button onClick={() => setActiveTab('rejected')} className="px-6 py-3 bg-red-600/10 border border-red-600/20 text-red-500 font-bold rounded-xl text-sm hover:bg-red-600/20 transition-colors">
                          The Rejected Club
                        </button>
                      </div>
                    </div>
                    
                    {/* Hero Image Placeholder - WIDER ASPECT RATIO */}
                    <div className="w-full">
                      <div className="aspect-[16/10] bg-neutral-900 border border-white/5 rounded-3xl overflow-hidden relative group">
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-600">
                          <Users className="w-16 h-16 mb-4 opacity-20" />
                        </div>
                        {/* Img tag for user to replace src */}
                        <img src="/panel.webp" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* WORLD MAP SECTION - NEW PLACEMENT */}
                <div className="mb-16">
                  <div className="bg-neutral-900/50 border border-white/5 rounded-3xl overflow-hidden relative group p-2 sm:p-4 backdrop-blur-sm">
                     <WorldMap />
                  </div>
                </div>

                {/* MEDIA & COMMUNITY - UPDATED WITH LOGOS */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-neutral-900/40 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-1.5 bg-purple-500/10 rounded-lg"><Award className="w-4 h-4 text-purple-400" /></div>
                      <span className="font-bold text-white text-sm tracking-wide">MEDIA PARTNERS</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {mediaPartners.map((p, i) => <SmallPartnerBadge key={i} partner={p} />)}
                    </div>
                  </div>
                  <div className="bg-neutral-900/40 border border-white/5 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden">
                    <div className="flex items-center gap-2 mb-4 relative z-10">
                        <div className="p-1.5 bg-cyan-500/10 rounded-lg"><Users className="w-4 h-4 text-cyan-400" /></div>
                        <span className="font-bold text-white text-sm tracking-wide">COMMUNITY PARTNERS</span>
                    </div>
                    <div className="flex flex-wrap gap-2 relative z-10">
                      {communityPartners.map((p, i) => <SmallPartnerBadge key={i} partner={p} />)}
                    </div>
                  </div>
                </div>

                {/* SCROLLING PARTNERS SECTION */}
                <div className="bg-neutral-900/40 border border-white/5 rounded-2xl p-6 overflow-hidden backdrop-blur-sm relative mb-8">
                  <div className="flex items-center gap-2 mb-6 z-10 relative">
                    <div className="p-1.5 bg-amber-500/10 rounded-lg"><Building className="w-4 h-4 text-amber-400" /></div>
                    <span className="font-bold text-white text-sm tracking-wide">PARTNERED WITH US</span>
                  </div>
                  
                  <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                  <div className="space-y-4 opacity-80 hover:opacity-100 transition-opacity duration-500">
                    <div className="flex gap-3 w-max animate-scroll-right">
                      {[...partnerCompanies].reverse().concat([...partnerCompanies, ...partnerCompanies]).map((p, i) => (
                        <PartnerBadge key={`row2-${i}`} partner={p} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* VCs SECTION - RENAMED */}
                <div className="bg-neutral-900/40 border border-white/5 rounded-2xl p-6 overflow-hidden backdrop-blur-sm relative mb-8">
                  <div className="flex items-center gap-2 mb-6 z-10 relative">
                    <div className="p-1.5 bg-green-500/10 rounded-lg"><TrendingUp className="w-4 h-4 text-green-400" /></div>
                    <span className="font-bold text-white text-sm tracking-wide uppercase">VCs Who Have Attended Our Events</span>
                  </div>
                  <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
                  
                  <div className="flex gap-3 w-max animate-scroll-left animate-scroll-slow">
                    {[...vcs, ...vcs, ...vcs].map((vc, i) => (
                        <div key={i} className="px-6 py-3 bg-neutral-900 border border-white/10 rounded-xl text-sm font-bold text-neutral-300 whitespace-nowrap">{vc}</div>
                    ))}
                  </div>
                </div>

                {/* SPEAKERS SECTION */}
                <div className="mb-12">
                   <div className="flex items-center gap-2 mb-6 justify-center">
                    <div className="p-1.5 bg-blue-500/10 rounded-lg"><Mic className="w-4 h-4 text-blue-400" /></div>
                    <span className="font-bold text-white text-sm tracking-wide uppercase">World Class Speakers</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                    {speakers.map((s, i) => (
                      <div key={i} className="bg-neutral-900/50 border border-white/5 rounded-xl p-3 text-center hover:bg-neutral-800 transition-colors group">
                        <div className="w-12 h-12 bg-neutral-800 rounded-full mx-auto mb-2 overflow-hidden flex items-center justify-center border border-white/10 group-hover:border-white/30 relative">
                          {s.image ? (
                            <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
                          ) : (
                            <Users className="w-6 h-6 text-neutral-600" />
                          )}
                        </div>
                        <div className="text-xs font-bold text-white truncate">{s.name}</div>
                        <div className="text-[9px] text-neutral-500 truncate">{s.role}</div>
                        <div className="text-[9px] text-blue-400 truncate">{s.company}</div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* FOOTER TICKER */}
            <div className="flex-shrink-0 pt-4 pb-8 border-t border-white/5 bg-neutral-950/50 backdrop-blur relative">
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-black border border-white/10 rounded-full text-[10px] font-bold text-neutral-500 uppercase tracking-widest z-10">
                  Attending Companies
               </div>
              <div className="space-y-3 overflow-hidden mt-2">
                <div className="animate-scroll-left flex gap-3 w-max">
                  {[...attendingRow1, ...attendingRow1, ...attendingRow1].map((c, i) => <div key={i} className="px-6 py-2 bg-neutral-900/50 border border-white/5 rounded-full text-xs font-bold text-neutral-500 whitespace-nowrap">{c}</div>)}
                </div>
                <div className="animate-scroll-right flex gap-3 w-max">
                  {[...attendingRow2, ...attendingRow2, ...attendingRow2].map((c, i) => <div key={i} className="px-6 py-2 bg-neutral-900/50 border border-white/5 rounded-full text-xs font-bold text-neutral-500 whitespace-nowrap">{c}</div>)}
                </div>
                <div className="animate-scroll-left flex gap-3 w-max">
                  {[...attendingRow3, ...attendingRow3, ...attendingRow3].map((c, i) => <div key={i} className="px-6 py-2 bg-neutral-900/50 border border-white/5 rounded-full text-xs font-bold text-neutral-500 whitespace-nowrap">{c}</div>)}
                </div>
                <div className="animate-scroll-right flex gap-3 w-max">
                  {[...attendingRow4, ...attendingRow4, ...attendingRow4].map((c, i) => <div key={i} className="px-6 py-2 bg-neutral-900/50 border border-white/5 rounded-full text-xs font-bold text-neutral-500 whitespace-nowrap">{c}</div>)}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* === GROUP TAB === */}
        {activeTab === 'group' && (
          <div className="min-h-full p-4 sm:p-12 flex items-center justify-center">
             <div className="max-w-6xl w-full">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-white/10 rounded-full mb-4">
                  <Crown className="w-4 h-4 text-yellow-500" />
                  <span className="text-xs text-neutral-300 font-medium">The Conglomerate</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-3">Capvise Group</h2>
                <p className="text-neutral-400 text-sm tracking-widest uppercase">Five divisions. One machine.</p>
              </div>

              <div className="grid md:grid-cols-12 gap-6">
                <div className="md:col-span-4 lg:col-span-3 space-y-2">
                  {divisions.map(div => (
                    <button 
                      key={div.id} 
                      onClick={() => setActiveDiv(div.id)} 
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-medium transition-all duration-200 ${activeDiv === div.id ? 'bg-white text-black shadow-lg shadow-white/5 translate-x-2' : 'bg-neutral-900/50 border border-white/5 text-neutral-400 hover:bg-neutral-800'}`}
                    >
                      <div className={`${activeDiv === div.id ? 'text-black' : 'text-neutral-500'}`}>{div.icon}</div>
                      <span className="flex-1 text-left">{div.name}</span>
                      <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${activeDiv === div.id ? 'bg-neutral-200 text-neutral-800' : 'bg-neutral-800 text-neutral-500'}`}>{div.status}</span>
                    </button>
                  ))}
                </div>

                <div className="md:col-span-8 lg:col-span-9">
                  {currentDivision && (
                    <div className="bg-neutral-900/50 border border-white/5 rounded-3xl p-8 h-full flex flex-col backdrop-blur-sm relative overflow-hidden">
                      <div className={`absolute top-0 right-0 w-64 h-64 ${currentDivision.color} opacity-10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2`}></div>
                      <div className="relative z-10">
                        <div className="flex items-start gap-4 mb-6">
                          <div className={`w-16 h-16 ${currentDivision.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                            {React.cloneElement(currentDivision.icon, { className: "w-8 h-8" })}
                          </div>
                          <div>
                            <h3 className="text-3xl font-black text-white mb-1">{currentDivision.name}</h3>
                            <p className="text-neutral-400 font-medium">{currentDivision.tagline}</p>
                          </div>
                        </div>
                        <p className="text-lg text-neutral-300 mb-8 max-w-2xl font-light">{currentDivision.desc}</p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                          {currentDivision.stats.map((s, i) => (
                            <div key={i} className="bg-black/40 border border-white/5 rounded-xl p-4 text-center">
                              <div className="text-2xl font-bold text-white mb-1">{s.value}</div>
                              <div className="text-[10px] text-neutral-500 uppercase font-bold tracking-wider">{s.label}</div>
                            </div>
                          ))}
                        </div>
                        <div className="flex gap-3 mt-auto">
                          {activeDiv === 'events' && <button onClick={() => setActiveTab('events')} className="px-6 py-3 bg-white text-black font-bold rounded-xl text-sm hover:bg-neutral-200">View Events</button>}
                          {activeDiv === 'rejected' && <button onClick={() => setActiveTab('rejected')} className="px-6 py-3 bg-red-600 text-white font-bold rounded-xl text-sm hover:bg-red-500">Learn More</button>}
                          <button onClick={() => setShowPartnerModal(true)} className="px-6 py-3 bg-neutral-800 border border-neutral-700 text-white rounded-xl text-sm font-bold hover:bg-neutral-700">Partner With Us</button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* === EVENTS TAB === */}
        {activeTab === 'events' && (
          <div className="min-h-full flex flex-col">
            <div className="flex-shrink-0 border-b border-white/5 bg-black/50 backdrop-blur px-4 py-3 overflow-x-auto no-scrollbar">
              <div className="max-w-7xl mx-auto flex gap-2">
                {events.map((e, i) => (
                  <button 
                    key={i} 
                    onClick={() => { setActiveEvent(i); setActiveTweetTab('partners'); }} 
                    className={`flex-shrink-0 px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${activeEvent === i ? 'bg-white text-black' : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white'}`}
                  >
                    {e.conference}
                    <span className={`ml-2 text-[9px] px-1.5 py-0.5 rounded ${activeEvent === i ? 'bg-black/20 text-black' : 'bg-neutral-800 text-neutral-500'}`}>{e.status}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
              <div className="max-w-7xl mx-auto">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-green-500/20 text-green-400 border border-green-500/20">{currentEvent.status}</span>
                    <span className="text-neutral-500 text-sm font-medium">{currentEvent.date}</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-white mb-1">{currentEvent.name}</h2>
                  <p className="text-neutral-400 text-lg">{currentEvent.conference}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 mt-3">
                    <a href={currentEvent.locationUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-neutral-400 text-xs font-medium hover:text-white bg-neutral-900 px-3 py-1.5 rounded-lg border border-white/5">
                      <MapPin className="w-3.5 h-3.5" /> {currentEvent.location} <ExternalLink className="w-3 h-3 opacity-50" />
                    </a>
                    {currentEvent.note && <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs font-medium">
                      <Star className="w-3.5 h-3.5" />{currentEvent.note}
                    </div>}
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Left Column: Info */}
                  <div className="space-y-4">
                    
                    {/* Event Image - Dynamic & Clickable */}
                    <div 
                      className="aspect-video bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden relative group cursor-pointer hover:border-white/20 transition-all"
                      onClick={() => currentEvent.image && setLightboxImage(currentEvent.image)}
                    >
                      {currentEvent.image ? (
                        <>
                          <img 
                            src={currentEvent.image} 
                            alt={currentEvent.name} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                          />
                          {/* Overlay to hint it is clickable */}
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="flex items-center gap-2 text-white font-bold uppercase tracking-wider text-xs">
                              <Camera className="w-4 h-4" /> View Photo
                            </div>
                          </div>
                        </>
                      ) : (
                        /* Fallback if no image is provided in data */
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-600">
                          <Camera className="w-12 h-12 mb-2 opacity-20 group-hover:opacity-40 transition-opacity" />
                          <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-60">No Photo Available</span>
                        </div>
                      )}
                    </div>

                    <div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-5 backdrop-blur-sm">
                      <h4 className="text-[10px] font-bold text-neutral-500 uppercase mb-4 flex items-center gap-2 tracking-wider">
                        <Calendar className="w-3.5 h-3.5" /> Registration
                      </h4>
                      <div className="rounded-xl overflow-hidden border border-neutral-700 bg-neutral-950 shadow-2xl">
                        <iframe src={`https://lu.ma/embed/event/${currentEvent.lumaId}/simple`} width="100%" height="320" frameBorder="0" style={{ border: 'none' }} allowFullScreen />
                      </div>
                      <a href={currentEvent.lumaUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 mt-4 w-full px-4 py-3 bg-white text-black font-bold rounded-xl text-xs hover:bg-neutral-200 transition-colors">
                        Register on Luma <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      
                      {currentEvent.subEvents && (
                        <div className="mt-4 pt-4 border-t border-white/5">
                          <p className="text-[10px] uppercase font-bold text-neutral-500 mb-3 tracking-wider">Related Events</p>
                          <div className="flex flex-wrap gap-2">
                            {currentEvent.subEvents.map((s, i) => (
                              <a key={i} href={`https://lu.ma/${s.lumaId}`} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-neutral-800 border border-white/5 rounded-lg text-[10px] font-bold text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors">
                                {s.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-4 text-center">
                        <div className="text-3xl font-black text-white">{currentEvent.spots}</div>
                        <div className="text-[10px] text-neutral-500 uppercase font-bold tracking-wider">Spots</div>
                      </div>
                      <div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-4 text-center">
                        <div className="text-3xl font-black text-white">{currentEvent.applications}</div>
                        <div className="text-[10px] text-neutral-500 uppercase font-bold tracking-wider">Waitlist</div>
                      </div>
                    </div>

                    <div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-5">
                      <h4 className="text-[10px] font-bold text-neutral-500 uppercase mb-4 tracking-wider">Event Partners</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {currentEvent.partners.map((p, j) => <PartnerBadge key={j} partner={p} />)}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Socials */}
                  <div className="lg:col-span-2 bg-neutral-900/30 border border-white/5 rounded-2xl overflow-hidden flex flex-col backdrop-blur-sm">
                    <div className="flex gap-2 p-4 border-b border-white/5 bg-neutral-900/50">
                      {[{ id: 'partners', label: 'Partners', count: currentEvent.tweets.partners.length }, { id: 'media', label: 'Coverage', count: currentEvent.tweets.media.length }, { id: 'official', label: 'Official', count: currentEvent.tweets.official.length }].map(tab => (
                        <button key={tab.id} onClick={() => setActiveTweetTab(tab.id)} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeTweetTab === tab.id ? 'bg-white text-black' : 'bg-neutral-800/50 text-neutral-400 hover:text-white'}`}>
                          {tab.label}
                          <span className={`text-[10px] px-1.5 py-0.5 rounded ${activeTweetTab === tab.id ? 'bg-black/10 text-black' : 'bg-white/10 text-neutral-300'}`}>{tab.count}</span>
                        </button>
                      ))}
                    </div>
                    
                    <div className="flex-1 overflow-y-auto p-6 bg-black/20" style={{ maxHeight: '800px' }}>
                      <div className="columns-1 sm:columns-2 gap-6">
                        {activeTweetTab === 'partners' && currentEvent.tweets.partners.map((id) => <Tweet key={`p-${id}`} id={id} />)}
                        {activeTweetTab === 'media' && currentEvent.tweets.media.map((id) => <Tweet key={`m-${id}`} id={id} />)}
                        {activeTweetTab === 'official' && currentEvent.tweets.official.map((id) => <Tweet key={`o-${id}`} id={id} />)}
                      </div>
                      
                      {((activeTweetTab === 'partners' && !currentEvent.tweets.partners.length) || (activeTweetTab === 'media' && !currentEvent.tweets.media.length) || (activeTweetTab === 'official' && !currentEvent.tweets.official.length)) && (
                        <div className="h-64 flex flex-col items-center justify-center text-neutral-600">
                          <Sparkles className="w-10 h-10 mb-3 opacity-20" />
                          <p className="text-sm font-medium">No posts yet</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* === REJECTED TAB === */}
        {activeTab === 'rejected' && (
           <div className="min-h-full p-4 sm:p-8 flex items-center justify-center">
             <div className="max-w-7xl w-full">
              <div className="bg-gradient-to-br from-red-950/20 via-black to-black border border-red-900/30 rounded-3xl p-8 sm:p-12 relative overflow-hidden mb-8">
                {/* Background effects */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="grid lg:grid-cols-2 gap-12 relative z-10">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-950/50 border border-red-900/50 rounded-full mb-6">
                      <Flame className="w-3.5 h-3.5 text-red-500" />
                      <span className="text-xs text-red-300 font-bold uppercase tracking-wide">A Cultural Movement</span>
                    </div>
                    
                    <h2 className="text-5xl sm:text-7xl font-black text-white mb-6 leading-[0.9]">
                      The Rejected<br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Club</span>
                    </h2>
                    
                    <p className="text-xl text-neutral-300 mb-8 max-w-md font-light">
                      Behind every unicorn is a founder told <span className="text-white font-bold bg-red-900/30 px-1">"no"</span> a hundred times. We celebrate the pivot.
                    </p>
                    
                    <div className="bg-neutral-900/80 border border-white/5 rounded-2xl p-6 mb-8 backdrop-blur-sm">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-900/50 transform rotate-3">
                          <Calendar className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-lg">Inaugural Event</h4>
                          <p className="text-neutral-400 text-sm">Consensus Hong Kong • Feb 2026</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-3">
                        {[{ l: "Format", v: "Invite Only", c: "text-red-400" }, { l: "Capacity", v: "500", c: "text-white" }, { l: "Apply", v: "Soon™", c: "text-yellow-500" }].map((item, i) => (
                          <div key={i} className="bg-black/40 rounded-xl p-3 text-center border border-white/5">
                            <div className={`text-sm font-bold ${item.c}`}>{item.v}</div>
                            <div className="text-[9px] text-neutral-500 uppercase font-bold mt-1">{item.l}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <button onClick={() => setShowPartnerModal(true)} className="px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-red-900/20 flex items-center gap-2">
                      Become a Founding Sponsor <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <div className="bg-neutral-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm relative">
                      <Quote className="absolute top-8 left-8 w-12 h-12 text-red-900/40" />
                      <p className="text-2xl text-white font-medium mb-8 relative z-10 indent-8 leading-relaxed">
                        "47 VCs said no. Today we're $2B. The Rejected Club celebrates founders who didn't take 'no' for an answer."
                      </p>
                      <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-inner">A</div>
                        <div>
                          <p className="font-bold text-white">Anonymous Founder</p>
                          <p className="text-neutral-500 text-xs font-medium uppercase tracking-wider">DeFi • $2B+ TVL</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-4 gap-4">
                {[{ tier: "Title Sponsor", status: "Available", color: "bg-gradient-to-br from-amber-400 to-amber-600", icon: <Crown className="w-5 h-5 text-white" /> }, 
                  { tier: "Gold Tier", status: "2 Slots Left", color: "bg-gradient-to-br from-yellow-500 to-yellow-700", icon: <Star className="w-5 h-5 text-white" /> }, 
                  { tier: "Silver Tier", status: "4 Slots Left", color: "bg-gradient-to-br from-neutral-400 to-neutral-600", icon: <Award className="w-5 h-5 text-white" /> }, 
                  { tier: "Community", status: "Open", color: "bg-neutral-800", icon: <Users className="w-5 h-5 text-neutral-400" /> }
                ].map((s, i) => (
                  <div key={i} onClick={() => setShowPartnerModal(true)} className="bg-neutral-900/50 border border-white/5 rounded-2xl p-6 text-center cursor-pointer hover:border-neutral-700 hover:bg-neutral-900 transition-all group">
                    <div className={`w-12 h-12 ${s.color} rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      {s.icon}
                    </div>
                    <div className="font-black text-white text-sm uppercase tracking-wide mb-1">{s.tier}</div>
                    <div className="text-[10px] text-neutral-500 font-bold bg-neutral-950 py-1 px-2 rounded-lg inline-block">{s.status}</div>
                  </div>
                ))}
              </div>
            </div>
           </div>
        )}
      </main>

      {/* PARTNER MODAL - WITH TELEGRAM */}
      {showPartnerModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={() => setShowPartnerModal(false)}>
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 max-w-md w-full relative shadow-2xl" onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowPartnerModal(false)} className="absolute top-4 right-4 text-neutral-500 hover:text-white p-2 bg-neutral-800 rounded-full transition-colors">
              <CloseIcon className="w-5 h-5" />
            </button>
            
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-black p-4 mx-auto mb-4 shadow-lg shadow-white/10">
                <Logo />
              </div>
              <h3 className="text-2xl font-black text-white mb-1">Partner With Capvise</h3>
              <p className="text-neutral-400 text-sm">Join the highest signal network in web3</p>
            </div>
            
            <div className="space-y-3 mb-8">
              {["Direct founder & VC access", "Brand visibility at conferences", "Media amplification", "87% sponsor return rate"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-black/40 rounded-xl border border-white/5">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-neutral-200 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-3">
              <a href="mailto:partners@capvise.group" className="flex items-center justify-center gap-2 w-full py-3.5 bg-white text-black font-bold rounded-xl text-sm hover:bg-neutral-200 transition-colors">
                Inquire via Email <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://t.me/sahilxdev" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3.5 bg-blue-500 text-white font-bold rounded-xl text-sm hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20">
                <Send className="w-4 h-4" /> DM on Telegram
              </a>
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX MODAL */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={() => setLightboxImage(null)}>
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
                <CloseIcon className="w-8 h-8" />
            </button>
            <img src={lightboxImage} className="max-w-full max-h-[90vh] rounded-xl shadow-2xl" onClick={e => e.stopPropagation()} />
        </div>
      )}

      {/* FOOTER */}
      <footer className="flex-shrink-0 border-t border-white/10 py-6 px-6 bg-black z-30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1.5 text-black">
              <Logo />
            </div>
            <div>
              <span className="text-white font-bold block">Capvise Group</span>
              <span className="text-neutral-600">© 2026 All rights reserved</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
             <a href="https://t.me/capvise" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 bg-neutral-900 border border-white/10 rounded-lg text-neutral-400 hover:text-white hover:border-white/30 transition-all group">
               <Send className="w-3.5 h-3.5 group-hover:text-blue-400 transition-colors" />
               <span className="font-bold">Join Capvise Circle</span>
            </a>
            <a href="https://linkedin.com/company/capviseofficial" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors group">
              <Linkedin className="w-4 h-4 group-hover:text-blue-400 transition-colors" /> LinkedIn
            </a>
            <a href="https://twitter.com/capviseofficial" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors group">
              <XLogo className="w-4 h-4 group-hover:text-white transition-colors" /> X
            </a>
            <a href="mailto:hello@capvise.group" className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors group">
              <Mail className="w-4 h-4 group-hover:text-amber-400 transition-colors" /> Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}