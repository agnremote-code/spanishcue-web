"use client";

import type { CSSProperties } from "react";
import type { Country } from "./data";
import "./globe.css";

type GlobePosition = {
  x: number;
  y: number;
  labelX: number;
  labelY: number;
};

const globePositions: Record<string, GlobePosition> = {
  mexico: { x: 28.5, y: 29, labelX: -102, labelY: -24 },
  cuba: { x: 44.5, y: 31.5, labelX: -80, labelY: -42 },
  "republica-dominicana": { x: 52.5, y: 34.5, labelX: 18, labelY: -31 },
  "costa-rica": { x: 41, y: 42.5, labelX: -111, labelY: 2 },
  colombia: { x: 48.5, y: 47.5, labelX: 19, labelY: -9 },
  peru: { x: 49.5, y: 58.5, labelX: -75, labelY: -9 },
  bolivia: { x: 56.5, y: 65, labelX: 19, labelY: -9 },
  chile: { x: 54.5, y: 76.5, labelX: -78, labelY: -9 },
  uruguay: { x: 66.5, y: 76.5, labelX: 20, labelY: -7 },
  argentina: { x: 60.5, y: 82.5, labelX: 18, labelY: 15 },
};

const mapImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Latin_America_%28orthographic_projection%29.svg/1280px-Latin_America_%28orthographic_projection%29.svg.png";

export default function LatamGlobe({ countries, onChoose }: { countries: Country[]; onChoose: (country: Country) => void }) {
  return <div className="la-real-map-card">
    <div className="la-real-map-heading">
      <div><span>MAPA REAL · REAL MAP</span><b>Latinoamérica en proyección ortográfica</b></div>
      <small>TOCÁ UNA SEÑAL</small>
    </div>
    <div className="la-real-globe-stage">
      <div className="la-globe-orbit" aria-hidden="true"><i/><i/><i/></div>
      <div className="la-real-globe">
        <img src={mapImage} alt="Mapa geográfico real de Latinoamérica sobre un globo tridimensional"/>
        <div className="la-globe-shine" aria-hidden="true"/>
        {countries.map((country, index) => {
          const position = globePositions[country.id];
          if (!position) return null;
          return <button
            className="la-globe-pin"
            key={country.id}
            onClick={() => onChoose(country)}
            aria-label={`Escuchar la historia de ${country.city}, ${country.name}`}
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              "--pin": country.color,
              "--label-x": `${position.labelX}px`,
              "--label-y": `${position.labelY}px`,
              "--delay": `${index * -.17}s`,
            } as CSSProperties}
          >
            <i/>
            <span>{country.flag}</span>
            <b>{country.name}<small>{country.city}</small></b>
          </button>;
        })}
      </div>
    </div>
    <p className="la-map-credit">Mapa cartográfico: Marçal 28 / Wikimedia Commons · CC BY-SA 3.0</p>
  </div>;
}
