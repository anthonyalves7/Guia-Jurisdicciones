import React from "react";

const Card = ({ title, children }) => (
  <div className="bg-white border rounded-2xl p-4 shadow-sm">
    <h3 className="font-semibold mb-2">{title}</h3>
    {children}
  </div>
);

function StarIfTop({ name }) {
  const isTop = Object.values(TOP_PICKS).some(arr => arr.includes(name));
  return isTop ? <span className="ml-2">⭐</span> : null;
}

const TOP_PICKS = {
  "Sucesión / Herencia (⭐ Mejor elección / Estate & Inheritance Planning)": [
    "Liechtenstein", "Panamá", "Jersey", "Guernsey", "Suiza"
  ],
  "Empresas / Holding (⭐ Mejor elección / Corporate Holding)": [
    "Islas Caimán", "Luxemburgo", "Delaware (EE. UU.)", "Islas Vírgenes Británicas (BVI)", "Singapur"
  ],
  "Fondos de Inversión / Trust Funds (⭐ Mejor elección)": [
    "Islas Caimán", "Luxemburgo", "Guernsey", "Jersey", "Malta"
  ],
  "Residencia Fiscal / Tax Residency (⭐ Mejor elección)": [
    "EAU (Dubai / Abu Dabi)", "Andorra", "Mónaco", "Singapur"
  ],
  "Banca Privada / Private Banking (⭐ Mejor elección)": [
    "Suiza", "Mónaco", "Singapur", "Luxemburgo"
  ]
};

const PAISES = [
  "Suiza", "Liechtenstein", "Luxemburgo", "Islas Caimán", "BVI", "Panamá",
  "EAU (Dubai / Abu Dabi)", "Singapur", "Jersey", "Delaware (EE. UU.)",
  "Malta", "Andorra", "Mónaco", "Isla de Man", "Belice", "Seychelles",
  "Hong Kong", "Mauricio", "Chipre", "Gibraltar"
];

const Nivel = ({ nivel, titulo, desc }) => {
  const colorMap = {
    1: "bg-slate-900 text-white",
    2: "bg-yellow-50 text-yellow-700 border-yellow-200",
    3: "bg-orange-50 text-orange-700 border-orange-200",
    4: "bg-blue-50 text-blue-700 border-blue-200",
    5: "bg-purple-50 text-purple-700 border-purple-200",
    6: "bg-red-50 text-red-700 border-red-200",
  };
  return (
    <div className={`rounded-2xl px-5 py-3 shadow border text-center w-[90%] md:w-[70%] mx-auto ${colorMap[nivel]}`}>
      <div className="text-sm opacity-80">Capa {nivel}</div>
      <div className="text-lg font-semibold">{titulo}</div>
      <div className="text-xs text-slate-600">{nivel === 1 ? <span className="text-white opacity-80">{desc}</span> : desc}</div>
    </div>
  );
};

const Conector = () => (
  <div className="flex justify-center">
    <svg width="6" height="30">
      <line x1="3" y1="0" x2="3" y2="30" stroke="#94a3b8" strokeWidth="3" />
    </svg>
  </div>
);

export default function GuiaJurisdiccionesFinal() {
  return (
    <div className="p-6 bg-slate-50 text-slate-900 min-h-screen">
      <h1 className="text-4xl font-bold mb-2 text-center">Guía Interactiva de Jurisdicciones 🌍</h1>
      <p className="mb-8 text-slate-700 text-lg text-center">Explicación visual sobre países usados para proteger patrimonio, crear estructuras offshore o residencias fiscales.</p>

      <h2 className="text-2xl font-semibold mb-3">🏆 Mejores opciones por categoría</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-10 text-sm">
        {Object.entries(TOP_PICKS).map(([cat, arr]) => (
          <Card key={cat} title={cat}>
            <ul className="list-disc ml-5 space-y-1">
              {arr.map(n => <li key={n}>{n}</li>)}
            </ul>
          </Card>
        ))}
      </div>

      {/* Preguntas frecuentes restauradas */}
      <h2 className="text-2xl font-semibold mb-3">❓ Preguntas Frecuentes</h2>
      <div className="mb-10 bg-white p-5 rounded-2xl shadow border border-slate-200 space-y-3">
        <div>
          <p className="font-semibold">⏱️ ¿Cuánto tarda en abrir una cuenta?</p>
          <p className="ml-2 text-slate-700">Entre 2 y 8 semanas según país y tipo de banca. Suiza o Singapur suelen ser más lentos (por debida diligencia).</p>
        </div>
        <div>
          <p className="font-semibold">📄 ¿Hay que justificar el origen del dinero?</p>
          <p className="ml-2 text-slate-700">Sí. Todos los países serios lo piden: pasaporte, prueba de domicilio, estados bancarios y origen lícito de fondos.</p>
        </div>
        <div>
          <p className="font-semibold">💰 ¿Pagan impuestos locales?</p>
          <p className="ml-2 text-slate-700">No si la actividad es fuera del país (offshore). Pero hay reportes CRS/OCDE entre jurisdicciones.</p>
        </div>
        <div>
          <p className="font-semibold">🏅 ¿Cuáles tienen mejor reputación?</p>
          <p className="ml-2 text-slate-700">Suiza, Liechtenstein, Luxemburgo, Jersey y Singapur son las más respetadas globalmente.</p>
        </div>
        <div>
          <p className="font-semibold">🧳 ¿Cuáles ofrecen residencia fiscal?</p>
          <p className="ml-2 text-slate-700">EAU, Andorra, Mónaco, Malta y Portugal tienen regímenes atractivos para residentes de alto patrimonio.</p>
        </div>
      </div>

      {/* Jurisdicciones */}
      <h2 className="text-2xl font-semibold mb-2">📋 Jurisdicciones (detalles ampliados)</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
        {PAISES.map(name => (
          <details key={name} className="bg-white p-4 rounded-2xl shadow border border-slate-200">
            <summary className="text-lg font-semibold cursor-pointer flex items-center">
              {name} <StarIfTop name={name} />
            </summary>
            <div className="mt-2 text-slate-800 text-sm space-y-1">
              <p>💰 <strong>Impuestos:</strong> 0% sobre rentas extranjeras. Algunos ofrecen regímenes competitivos para empresas o residentes.</p>
              <p>🏦 <strong>Banca:</strong> {name === "Suiza" ? "Banca privada líder mundial, depósitos mínimos altos (~250k CHF)" : name === "Singapur" ? "Centro financiero asiático con excelente reputación" : "Acceso a bancos internacionales confiables"}.</p>
              <p>🛡️ <strong>Protección:</strong> Marco legal sólido, estabilidad política y respeto a la privacidad financiera.</p>
              <p>⏱️ <strong>Tiempo de apertura:</strong> 2–8 semanas según país y tipo de estructura.</p>
              <p>💼 <strong>Estructuras comunes:</strong> Trusts, fundaciones, holdings o sociedades internacionales.</p>
              <p>📄 <strong>Requisitos:</strong> Pasaporte, comprobante de domicilio y prueba del origen lícito de fondos.</p>
              <p>⚠️ <strong>Alertas:</strong> Evitar jurisdicciones sin regulación bancaria fuerte o en listas grises OCDE/FATF.</p>
              <p>💬 <strong>Usos típicos:</strong> {name === "Panamá" ? "Planificación familiar y fundaciones" : name === "Islas Caimán" ? "Fondos de inversión internacionales" : name === "Luxemburgo" ? "Holdings corporativos y fondos regulados" : name === "EAU (Dubai / Abu Dabi)" ? "Residencia fiscal y holding libre de impuestos" : "Protección patrimonial y banca privada"}.</p>
            </div>
          </details>
        ))}
      </div>

      {/* Organigrama */}
      <section className="mt-6 bg-white rounded-2xl p-5 shadow border border-slate-200">
        <h2 className="text-3xl font-extrabold text-center mb-2">🗂️ Organigrama por capas patrimoniales</h2>
        <p className="text-center text-slate-700 mb-6">Cada capa representa un nivel diferente de separación y control patrimonial; cada una actúa como un blindaje adicional que aumenta la protección a medida que se desciende en el esquema.</p>

        <div className="space-y-6">
          <Nivel nivel={1} titulo="👤 Capa 1 — Persona / Familia (Beneficiario Final)" desc="Exposición pública y fiscal personal" />
          <Conector />
          <Nivel nivel={2} titulo="🏛️ Capa 2 — Trust / Fundación (Luxemburgo · Liechtenstein · Panamá)" desc="Define beneficiarios, reglas y separación jurídica de activos" />
          <Conector />
          <Nivel nivel={3} titulo="💼 Capa 3 — Holding Internacional (Caimán · Delaware · Malta)" desc="Propiedad del trust; controla filiales, activos y empresas" />
          <Conector />
          <Nivel nivel={4} titulo="🏦 Capa 4 — Cuentas Bancarias (Suiza · Singapur · EAU)" desc="Alta privacidad y cumplimiento; segregación de fondos" />
          <Conector />
          <Nivel nivel={5} titulo="🏢 Capa 5 — Empresa Operativa (Panamá · Malta · Hong Kong)" desc="Realiza operaciones comerciales y contratos internacionales" />
          <Conector />

          {/* Capa 6 dividida en dos columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] md:w-[70%] mx-auto">
            <Nivel nivel={6} titulo="🏠 Capa 6A — SPV Inmobiliario" desc="Vehículo que posee bienes raíces o desarrollos inmobiliarios de forma separada" />
            <Nivel nivel={6} titulo="💎 Capa 6B — SPV de Activos (IP · Yate · Cartera)" desc="Vehículo especializado que aísla riesgos y protege activos financieros o intangibles" />
          </div>
        </div>
      </section>

      {/* Glosario */}
      <section className="mt-8 bg-white rounded-2xl p-5 shadow border border-slate-200 text-sm text-slate-700">
        <h3 className="text-xl font-semibold mb-3">🧾 Explicaciones de términos clave</h3>
        <ul className="list-disc ml-5 space-y-1">
          <li><strong>SPV (Special Purpose Vehicle)</strong>: Sociedad creada para poseer un activo específico, como un inmueble, una patente o una inversión. Su función es aislar riesgos: si algo ocurre con ese activo, no afecta el resto del patrimonio.</li>
          <li><strong>IP (Intellectual Property)</strong>: Activos de propiedad intelectual, como marcas, software o derechos de autor. Se suelen registrar dentro de un SPV o una empresa separada para evitar litigios y proteger la titularidad.</li>
          <li><strong>Holding</strong>: Compañía que posee otras empresas y/o cuentas bancarias. Suele pertenecer a un trust o fundación; no realiza actividad comercial directa.</li>
          <li><strong>LLC</strong>: Forma societaria muy usada en países anglosajones; puede usarse como holding o como empresa operativa, según el caso.</li>
        </ul>
      </section>

      <footer className="mt-10 text-sm text-slate-600">
        ⚖️ Información educativa y general. No constituye asesoría legal ni fiscal. Verifique con expertos en cada jurisdicción (KYC, CRS, OCDE, BEPS).
      </footer>
    </div>
  );
}
