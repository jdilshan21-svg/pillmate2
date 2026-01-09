# Contributing Guide

## Development Setup

1. **Prerequisites**
   - Node.js 20.17.0+
   - npm
   - Expo CLI

2. **Installation**
   ```bash
   git clone [repository]
   cd pill-dispenser
   npm install
   ```

3. **Running the App**
   ```bash
   npm start          # Start Expo dev server
   npm run android    # Run on Android
   npm run ios        # Run on iOS  
   npm run web        # Run on web
   ```

## Development Workflow

### Code Quality
- All code must pass TypeScript strict checks
- ESLint and Prettier are enforced via pre-commit hooks
- Run `npm run verify` before committing

### Testing
- Write tests for new features and bug fixes
- Maintain test coverage above 80%
- Run `npm test` to execute test suite

### Commit Messages
Use Conventional Commits format:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `chore:` - Maintenance tasks
- `test:` - Test changes

### Pull Requests
- Create feature branches from `main`
- Ensure CI passes before requesting review
- Include screenshots for UI changes
- Update documentation as needed

## Architecture Guidelines

- Follow the established folder structure
- Use TypeScript for all new code
- Prefer composition over inheritance
- Keep components small and focused
- Use custom hooks for complex logic

## Documentation
- Source of truth: `docs/ai/` and `frontend/docs/`
- Update architecture docs for significant changes
- Include JSDoc comments for complex functions
