# VokkoAgency — Resumen Completo del Proyecto

**Fecha de última actualización:** 26 de mayo de 2026  
**Rama de desarrollo:** `claude/eager-hamilton-uS4xy`  
**Repositorio:** `jbedoya10-cmyk/vokkoagency`  
**Dominio en producción:** [vokkoagency.com](https://vokkoagency.com)

---

## 1. Descripción General

VokkoAgency es el sitio web institucional de una agencia de diseño y desarrollo web con sede en Medellín, Colombia. El sitio funciona como carta de presentación de la agencia, mostrando servicios, proyectos realizados, el equipo y un canal de contacto directo vía WhatsApp y formulario.

**Fundador:** Juan Bedoya  
**Contacto:** jbedoya@vokkoagency.com  
**WhatsApp:** +57 301 329 6309

---

## 2. Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Markup | HTML5 semántico |
| Estilos | CSS3 puro (custom properties, grid, flexbox, gradients) |
| Scripts | JavaScript vanilla (sin frameworks ni dependencias) |
| Tipografía | Inter (Google Fonts) |
| Hosting | cPanel / LiteSpeed Web Server (Namecheap) |
| Control de versiones | Git (GitHub) |
| Despliegue | ZIP upload → Extract en `public_html/` |

**Sin frameworks. Sin build steps. Sin dependencias externas.** El sitio es 100% estático, lo que garantiza carga instantánea y máxima compatibilidad.

---

## 3. Estructura de Archivos

```
vokkoagency/
├── index.html            (796 líneas) — Página de inicio
├── servicios.html        (603 líneas) — Servicios detallados
├── proyectos.html        (371 líneas) — Portafolio de proyectos
├── nosotros.html         (360 líneas) — Equipo y misión
├── contacto.html         (323 líneas) — Formulario y datos de contacto
├── css/
│   ├── style.css         (2186 líneas) — Estilos globales y componentes
│   ├── nosotros.css      (403 líneas)  — Estilos sección Nosotros
│   ├── servicios.css     (527 líneas)  — Estilos sección Servicios
│   └── contacto.css      (552 líneas)  — Estilos sección Contacto
├── js/
│   ├── main.js           (116 líneas)  — Animaciones, contadores, scroll
│   ├── servicios.js      (25 líneas)   — Acordeones de servicios
│   └── contacto.js       (84 líneas)   — Validación y envío por WhatsApp
└── assets/
    └── img/
        └── team/
            └── juan-bedoya.jpg  — Foto del fundador (subida manualmente)
```

**Total: 6.346 líneas de código | 16 commits**

---

## 4. Páginas y Contenido

### 4.1 Inicio (`index.html`)
- **Hero:** Titular principal con animación de texto gradiente
- **Estadísticas:** Contadores animados — 33+ proyectos, 31+ clientes, 3+ años, 3+ países
- **Servicios (preview):** Diseño Web, Desarrollo, SEO, E-commerce
- **Proyectos (sección 03):** Mockups CSS de los 3 proyectos destacados
- **Por qué Vokko:** Diferenciadores de la agencia
- **CTA final:** Formulario rápido + botón WhatsApp
- **Footer:** Logo, tagline, navegación completa, redes sociales

### 4.2 Servicios (`servicios.html`)
- Detalle completo de cada servicio con íconos, descripciones y precios/entregables
- Proceso de trabajo en 5 pasos
- FAQ con acordeones interactivos
- CTA con WhatsApp

### 4.3 Proyectos (`proyectos.html`)
- Página dedicada con hero propio
- Mismos 3 mockups de proyectos (con fondos temáticos)
- CTA hacia contacto

### 4.4 Nosotros (`nosotros.html`)
- **Hero:** Presentación de la agencia
- **Fundador:** Juan Bedoya — foto, bio, estadísticas, redes sociales
- **Equipo (5 personas):**
  - Valentina Ríos — Diseñadora Visual Sr.
  - Santiago Morales — Desarrollador Web
  - Camila Ospina — Especialista en Google
  - Andrés Zapata — Estratega Digital
  - Laura Jiménez — Gestora de Proyectos
- **Misión / Valores:** Sección sticky con 4 pilares

### 4.5 Contacto (`contacto.html`)
- Formulario completo (nombre, empresa, WhatsApp, presupuesto, mensaje)
- Envío por WhatsApp vía `wa.me/573013296309`
- Datos de contacto directos
- Redes sociales: LinkedIn, Instagram

---

## 5. Diseño — Sistema Visual

### 5.1 Tokens de Color (CSS Custom Properties)
```css
--c-bg:        #08060F   /* Fondo principal — negro profundo */
--c-surface:   #0F0D1C   /* Superficies elevadas */
--c-surface-2: #17132A   /* Superficies secundarias */
--c-border:    rgba(255,255,255,0.07)
--c-muted:     #8B7BAA   /* Texto secundario */
--gradient:    linear-gradient(90deg, #6C3BFF 0%, #FF3BFF 100%)
```

### 5.2 Logo
```
Vokko  → color: #FFFFFF
Agency → background-clip: text con --gradient (púrpura → magenta)
```
- Problema histórico de clipping en la "y": resuelto con `line-height: 1.5` + `padding-bottom: 10px` en `.logo-agency`

### 5.3 Botón WhatsApp
- Color corporativo: `#25D366` (verde WhatsApp oficial)
- Ícono SVG inline con `fill="currentColor"`
- Presente en: nav principal, mobile nav, CTA final de cada página

### 5.4 Animaciones
- **Scroll reveal:** `IntersectionObserver` con clase `.reveal` y `data-delay`
- **Contadores:** animación numérica desde 0 hasta `data-target`
- **Hover en cards:** `translateY(-2px)` a `-5px`
- **Subrayado activo nav:** gradiente animado via `::after` pseudo-element

---

## 6. Navegación

### Menú principal (todas las páginas)
```
Inicio | Servicios | Proyectos | Nosotros | Contacto | [WhatsApp]
```

### Estado activo por página
Cada página marca su enlace correspondiente con `class="nav-active"`:
- `index.html` → resalta **Inicio**
- `servicios.html` → resalta **Servicios**
- `proyectos.html` → resalta **Proyectos**
- `nosotros.html` → resalta **Nosotros**
- `contacto.html` → resalta **Contacto**

El estilo del activo se define globalmente en `style.css`:
```css
.nav-links a.nav-active { color: #FFFFFF; }
.nav-links a.nav-active::after {
  content: ''; position: absolute; bottom: -4px;
  height: 2px; background: var(--gradient);
}
```

---

## 7. Proyectos Destacados (Mockups CSS)

Los mockups son **simulaciones CSS puras** de sitios reales — sin imágenes externas.

| Proyecto | Clase | Tema | Acento |
|----------|-------|------|--------|
| Soy Segundas | `pm-segundas` | Concesionario oscuro | Naranja `#FF6B1A` |
| Hacienda Sazón | `pm-sazon` | Restaurante cálido | Ámbar `#F59E0B` |
| Casa Palau Atelier | `pm-palau` | Boutique claro | Dorado beige |

Cada mockup tiene un fondo temático en su contenedor (`pv-segundas`, `pv-sazon`, `pv-palau`) con gradientes radiales de color.

---

## 8. SEO

### Meta tags implementados
- `<title>` único por página
- `<meta name="description">` optimizado
- `<link rel="canonical">` apuntando a `.html`
- Open Graph: `og:title`, `og:description`, `og:url`, `og:type`
- `<meta name="robots" content="index, follow">`

### Schema.org (JSON-LD en index.html)
```json
{
  "@type": "LocalBusiness / ProfessionalService",
  "name": "VokkoAgency",
  "address": { "addressLocality": "Medellín", "addressCountry": "CO" },
  "knowsAbout": ["Diseño Web", "Desarrollo Web", "SEO", "E-commerce"]
}
```

### URLs
Formato `.html` estándar. Las URLs limpias (`/inicio`, `/servicios`, etc.) fueron descartadas por incompatibilidad con el servidor LiteSpeed de Namecheap.

---

## 9. Pendientes y Próximos Pasos

### Analytics / Medición (próximo sprint)
- [ ] Crear cuenta **Google Tag Manager** → insertar código en los 5 HTML
- [ ] Crear propiedad **Google Analytics 4** → conectar vía GTM con ID `G-XXXXXXXXXX`
- [ ] Verificar **Google Search Console** → registro TXT en DNS de Namecheap
- [ ] Conectar Search Console con Analytics

### Foto del fundador
- [ ] La imagen `assets/img/team/juan-bedoya.jpg` **debe subirse manualmente** a cPanel en `public_html/assets/img/team/`
- El código HTML y el CSS ya están preparados para mostrarla correctamente

### Otras mejoras posibles
- [ ] Blog / artículos de contenido para SEO
- [ ] Página de proceso detallado
- [ ] Testimonios de clientes reales
- [ ] Galería de proyectos expandida
- [ ] Integración con CRM o sistema de leads

---

## 10. Despliegue en Producción

**Servidor:** Namecheap cPanel con LiteSpeed Web Server  
**Directorio raíz:** `public_html/`

### Proceso de actualización
1. Descargar el ZIP generado por Claude Code
2. En cPanel File Manager → `public_html/`
3. Eliminar: todos los `.html`, carpetas `css/` y `js/`, ZIPs anteriores
4. **NO eliminar:** carpeta `assets/` (contiene la foto del fundador)
5. Subir nuevo ZIP → botón **Extract** → confirmar
6. Verificar en `vokkoagency.com` con Ctrl+Shift+R (hard refresh)

> **Importante:** No usar `.htaccess` con mod_rewrite en este servidor. LiteSpeed no lo procesó correctamente y causó error 404 en todas las páginas.

---

## 11. Historial de Cambios Principales

| Commit | Cambio |
|--------|--------|
| `7966217` | Mockups con fondos temáticos, colores más vibrantes |
| `4481bb3` | Revierte URLs limpias, elimina .htaccess (fix crítico) |
| `cb40fa5` | Crea `proyectos.html`, arquitectura de URLs |
| `232c5bf` | 7 correcciones: logo, contadores, mockups, nav-active, fotos equipo |
| `a023297` | Tono de comunicación: elimina tecnicismos |
| `a90fef9` | Crea `servicios.html` completa |
| `ca01295` | Datos reales de Soy Segundas en proyectos |
| `1b05321` | Fix clipping del logo ("y" recortada) |

---

*Documento generado el 26 de mayo de 2026.*
