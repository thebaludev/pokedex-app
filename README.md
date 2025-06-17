# Pokédex APP

Esta es una aplicación desarrollada como parte de la prueba técnica para el rol de Frontend developer en Global66.
Permite visualizar una lista de Pokémon, buscar por nombre, ver sus detalles, marcar favoritos y compartirlos.

## 🔗 Enlace a la APP desplegada en Netlify

[Pokédex APP](https://app-pokedex-vue.netlify.app/)

## :brain: Pensamiento detrás de la solución

Aunque la aplicación es sencilla a nivel funcional asumí que debía escalar bien en los siguientes puntos:

- Carga de gran cantidad de datos desde una API pública
- Separación clara entre datos, presentación y lógica
- Posible crecimiento (más vistas, filtros, favoritos persistentes con base de datos)

Por esto opté por una arquitectura con componentes reutilizables, stores centralizados y separación de responsabilidades.

---

## :computer: Tecnología y herramientas usadas

- **Vue 3** + **Composition API**
- **Pinia** como store centralizado
- **Vue Router** para control de vistas ('/welcome', '/pokedex', '/favorites')
- **Fetch API** para llamadas HTTP a PokéAPI (evité el uso de Axios para mantenerlo nativo)
- **Tailwind CSS** para estilos rápidos y consistentes
- **Typescript types** organizados en `/types` para tener autocompletado y mejor estructura

## :mag_right: Consideraciones técnicas

- **Carga eficiente**: La vista principal solo descarga los nombres de los Pokémon. El detalle se busca solo al abrir el modal.
- **Búsqueda**: Local, reactiva y en ambas vistas (`/pokedex` y `/favorites`).
- **Favoritos**: Gestionados en `pinia` con lógica desacoplada y lista de favoritos reactiva.
- **Modal**: Reutilizable y desacoplado, solo recibe el `pokemon` ya cargado y emite un `@close`

## :white_check_mark: Cómo correr el proyecto

```bash
npm install
npm run dev
