# Pill Dispenser App

A React Native mobile application for managing smart pill dispenser devices, built with Expo and TypeScript.

## Features

- **Device Management**: Connect and manage pill dispenser devices
- **Medication Scheduling**: Set up automated dispensing schedules
- **Manual Dispensing**: On-demand pill dispensing control
- **Activity Logs**: Track dispensing history and device status
- **Multi-device Support**: Manage up to 22 pill slots per device
- **Cross-platform**: iOS, Android, and Web support

## Technology Stack

- **Framework**: Expo (managed workflow)
- **Language**: TypeScript (strict mode)
- **Navigation**: React Navigation v7
- **State**: Zustand + TanStack Query
- **UI**: React Native Paper (Material Design)
- **Forms**: React Hook Form + Zod
- **i18n**: @formatjs/intl
- **Testing**: Jest + React Testing Library + Detox

## Quick Start

### Prerequisites
- Node.js 20.17.0+
- npm
- Expo CLI (`npm install -g @expo/cli`)

### Installation
```bash
git clone [repository-url]
cd pill-dispenser
npm install
```

### Development
```bash
npm start          # Start Expo dev server
npm run android    # Run on Android device/emulator
npm run ios        # Run on iOS device/simulator (macOS only)
npm run web        # Run in web browser
```

### Quality Assurance
```bash
npm run lint       # Check code style
npm run typecheck  # Validate TypeScript
npm test           # Run test suite
npm run verify     # Run all checks
```

## Project Structure

```
pill-dispenser/
├── app/                    # Application source code
│   ├── components/         # Reusable UI components
│   │   ├── layout/        # Layout components
│   │   ├── ui/            # Basic UI elements
│   │   └── forms/         # Form components
│   ├── hooks/             # Custom React hooks
│   ├── navigation/        # Navigation configuration
│   ├── screens/           # Screen components by feature
│   │   ├── Auth/         # Authentication screens
│   │   ├── Home/         # Home dashboard
│   │   ├── Devices/      # Device management
│   │   ├── Schedule/     # Medication scheduling
│   │   ├── Dispense/     # Manual dispensing
│   │   ├── Logs/         # Activity logging
│   │   └── Settings/     # App settings
│   ├── state/            # Zustand stores
│   ├── theme/            # Design system & tokens
│   ├── utils/            # Utility functions
│   ├── types/            # TypeScript definitions
│   └── config/           # App configuration
├── docs/                 # Documentation
│   └── ai/              # AI-assisted development docs
├── frontend/            # Frontend-specific documentation
│   └── docs/           # UI/UX documentation
├── assets/             # Static assets
└── [config files]     # ESLint, Prettier, TypeScript, etc.
```

## Scripts Reference

| Script | Description |
|--------|-------------|
| `start` | Start Expo development server |
| `android` | Run on Android |
| `ios` | Run on iOS |
| `web` | Run on web |
| `lint` | Run ESLint |
| `typecheck` | Run TypeScript compiler check |
| `test` | Run Jest test suite |
| `test:watch` | Run tests in watch mode |
| `verify` | Run all quality checks |

## Documentation

- **Architecture**: `docs/ai/architecture.md`
- **QA Guidelines**: `docs/ai/qa-checklist.md`  
- **UI Documentation**: `frontend/docs/ui.md`
- **Contributing**: `CONTRIBUTING.md`

> **Note**: Documentation in `docs/ai/` and `frontend/docs/` serves as the source of truth for development standards and architectural decisions.

## Development Standards

- **Code Quality**: TypeScript strict mode, ESLint, Prettier
- **Testing**: Jest + React Testing Library with 80%+ coverage
- **Git**: Conventional Commits, pre-commit hooks
- **Accessibility**: WCAG 2.1 AA compliance
- **i18n**: Support for multiple languages via @formatjs/intl

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for development guidelines and best practices.

## License

[Your License Here]
