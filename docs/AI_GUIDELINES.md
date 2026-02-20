# AI_GUIDELINES.md

## 🎯 Project Purpose

This project is used for:

- Practicing algorithmic problems
- Improving TypeScript skills
- Writing clean, production-style code
- Training structured thinking

The focus is **code quality first, optimization second**.

---

## 🛠️ Linter & TypeScript Rules

- Use ESLint with Airbnb, TypeScript, and Prettier plugins.
- Enforced rules (see .eslintrc.json):
  - No usage of `any`.
  - Prefer `const` over `let`.
  - Use single quotes for strings.
  - No unused variables, parameters, or imports.
  - No implicit returns or fallthrough in switch.
  - TypeScript strict mode enabled (`strict: true` in tsconfig.json).
  - No unchecked indexed access (`noUncheckedIndexedAccess: true`).
  - Exact optional property types (`exactOptionalPropertyTypes: true`).
  - Prefer explicit types for clarity.
  - Use ES2022 or newer as target.

## 💡 Code Recommendations

- Each class should have a clear, single responsibility.
- Methods should be static unless instance state is required.
- Avoid mutation and side effects.
- Use early returns for clarity.
- Keep functions under ~40 lines.
- Add at least 2–3 test/example cases per solution.
- Handle edge cases (empty, invalid, single element, etc.).

## 📚 Documentation (JSDoc)

- Every class and method must have a JSDoc comment describing its purpose, parameters, and return value.
- Example:

  ```typescript
  /**
   * Reverses a string.
   * @param input - The string to reverse.
   * @returns The reversed string.
   */
  static getReverseString(input: string): string { ... }
  ```

---

## 🧠 General Coding Principles

- Use **TypeScript in strict mode**
- Never use `any`
- Prefer explicit types over implicit inference (when clarity matters)
- Avoid unnecessary abstractions
- Keep solutions simple and readable
- Optimize only after correctness

---

## 📁 Project Structure

src/ - classes contains solutions to problem solving
run.ts - runner

Rules:

- One problem = one file
- Export only the main function
- No global state
- No side effects unless explicitly required

---

## 🧩 Problem Implementation Rules

Each solution must:

1. Handle edge cases
2. Validate inputs (when reasonable)
3. Be deterministic
4. Avoid mutation when possible
5. Avoid nested loops unless necessary

---

## 🧪 Testing Rules

- Add at least 2–3 example cases
- Cover edge cases:
  - empty input
  - single element
  - invalid input (if relevant)

Preferred:

- Use Jest (if enabled)
- Otherwise include example usage in the file

---

## 🏗 Code Style

- Prefer `const` over `let`
- Use arrow functions for utilities
- Use early returns
- Keep functions under ~40 lines if possible
- Extract helpers if logic becomes complex
