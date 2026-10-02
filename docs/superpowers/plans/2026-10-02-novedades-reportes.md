# Novedades y reportes Implementation Plan
> Ejecución inline por Codex. Usar executing-plans.
**Goal:** Mostrar novedades reales y recibir reportes contextualizados administrables.
**Architecture:** Metadata del catálogo alimenta un carrusel; layout compartido monta un panel de reportes; rutas autenticadas guardan en D1 y admin permite gestionar.
**Tech Stack:** React, TypeScript, SQLite/D1, GitHub Actions, Cloudflare.
**Spec:** docs/superpowers/specs/2026-10-02-novedades-reportes.md
## Global Constraints
Preservar hero, auth, billing, contenido; no AI automática; seguir CI + Auto Merge y workflow oficial.
## Review Focus
Origen externo; identidad falsa en body; niveles inválidos; doble envío concurrente; rutas sin IDs de actividad.
### Task 1: Servicio y persistencia
- [ ] Crear tests HTTP SQLite de validación, autorización, contexto canónico, rate limit y gestión.
- [ ] Ejecutar RED, implementar migración aditiva y rutas, ejecutar GREEN.
### Task 2: Interfaces
- [ ] Metadata en lesson-catalog.ts, selector de novedades, NewLessonsBanner.tsx debajo del hero.
- [ ] LessonReportPanel.tsx en layout; ReportsManager.tsx y página admin/reportes.
- [ ] Verificar desktop/mobile, contexto, envío, feedback y teclado.
### Task 3: Entrega
- [ ] Guardar autorización persistente en AGENTS.md y CLAUDE.md.
- [ ] Workflow oficial aplica únicamente SQL aditivo autorizado antes del Worker, reversible por volver al Worker anterior conservando tabla.
- [ ] Suite completa, lint, typecheck, build, artifact y diff; revisión; commit/push/PR; esperar CI merge; deploy SHA main y smoke.
