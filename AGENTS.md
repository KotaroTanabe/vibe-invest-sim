# Development Guidelines

## Separation of Core and UI
- Keep business logic and core algorithms independent from UI code.
- Place reusable core modules under `src/core/` or similar, and keep DOM manipulation and UI-specific scripts under `src/ui/`.
- Do not mix DOM operations with algorithm implementations. Pass data through well defined interfaces instead.

## Tests
- Whenever you modify or add features, provide corresponding tests in the `test/` directory.
- Skipping tests is acceptable only for documentation-only changes.
- Run `npm run lint`, `npm run build`, and `npm test` to ensure everything passes before creating a PR.

