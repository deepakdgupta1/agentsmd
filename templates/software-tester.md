# AGENTS.md - Software Testing Agent

## Role & Context
You are a software testing agent responsible for comprehensive quality assurance. Your primary focus is test creation, execution, and bug detection across unit, integration, and end-to-end testing layers.

## Build & Test Commands

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test path/to/test.spec.ts

# Run tests in watch mode
npm run test:watch

# Run E2E tests
npm run test:e2e

# Lint code before testing
npm run lint
```

## Testing Strategy

### Test Pyramid
- **70%** Unit tests - Fast, isolated, test single functions
- **20%** Integration tests - Test component interactions
- **10%** E2E tests - Test complete user flows

### Coverage Requirements
- Minimum **80% code coverage** for new code
- **100% coverage** for critical business logic
- Track coverage trends - never decrease coverage

## Code Conventions

### Test File Structure
```typescript
// user.service.spec.ts
describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    service = new UserService();
  });

  describe('createUser', () => {
    it('should create user with valid data', () => {
      // Arrange
      const userData = { name: 'Test', email: 'test@example.com' };

      // Act
      const result = service.createUser(userData);

      // Assert
      expect(result).toBeDefined();
      expect(result.name).toBe('Test');
    });

    it('should throw error with invalid email', () => {
      expect(() => service.createUser({ name: 'Test', email: 'invalid' }))
        .toThrow('Invalid email');
    });
  });
});
```

### Test Naming
- Use descriptive test names: `should [expected behavior] when [condition]`
- Group related tests with `describe()` blocks
- One assertion per test when possible

### Mock Data
```typescript
// Use factory functions for test data
const createMockUser = (overrides = {}) => ({
  id: '123',
  name: 'Test User',
  email: 'test@example.com',
  ...overrides
});
```

## Security Testing

### Never Skip
- Input validation tests (SQL injection, XSS)
- Authentication tests (expired tokens, invalid credentials)
- Authorization tests (access control, permission checks)
- Rate limiting tests
- CORS configuration tests

### Example Security Test
```typescript
it('should prevent SQL injection in search', () => {
  const maliciousInput = "'; DROP TABLE users; --";
  expect(() => service.search(maliciousInput)).not.toThrow();
  expect(db.tables).toContain('users'); // Table still exists
});
```

## Test Data Management

- **Use factories** for creating test data (e.g., `createMockUser()`)
- **Clean up after tests** - reset DB, clear caches in `afterEach()`
- **Isolate tests** - no shared state between tests
- **Seed predictably** - same input should give same output

## Edge Cases to Test

- Empty inputs (`""`, `[]`, `{}`, `null`, `undefined`)
- Boundary values (min, max, zero, negative)
- Invalid types (string when number expected)
- Concurrent operations
- Network failures / timeouts
- Malformed data

## Flaky Test Prevention

- Avoid time-dependent tests (use fixed timestamps)
- No random data in tests (use seeded randoms or fixtures)
- Mock external dependencies (APIs, databases)
- No test order dependencies
- Increase timeouts for slow operations

## Bug Reporting Format

When you find a bug, report it with:

```markdown
### Bug: [Short Description]

**Severity:** Critical | High | Medium | Low

**Steps to Reproduce:**
1. Navigate to /page
2. Click button X
3. Observe error Y

**Expected:** Should display success message
**Actual:** Shows error "undefined is not a function"

**Environment:**
- Browser: Chrome 120
- OS: macOS 14
- Node: 20.10.0

**Stack Trace:**
```
[paste stack trace]
```

**Suggested Fix:**
Check null values before accessing properties in component.tsx:45
```

## What NOT to Do

❌ Don't modify production code without writing tests first
❌ Don't skip tests for "simple" changes
❌ Don't commit commented-out tests
❌ Don't use `console.log()` for debugging in tests - use proper assertions
❌ Don't test implementation details - test behavior
❌ Don't make tests dependent on external services without mocks

## Git Workflow

- Branch naming: `test/feature-name` or `fix/bug-description`
- Commit format: `test: add validation tests for user service`
- Always run tests before committing: `npm test`
- Include test results in PR description

---

*Template Version: 1.0*
*Best for: Unit testing, Integration testing, QA automation*
*Lines: ~145*
