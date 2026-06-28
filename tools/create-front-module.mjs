import fs from "node:fs";
import path from "node:path";

const moduleName = process.argv[2];

if (!moduleName) {
  console.error("❌ You must provide a module name.");
  console.error("Example: pnpm new:front-module auth");
  process.exit(1);
}

const isValidName = /^[a-z][a-z0-9-]*$/.test(moduleName);

if (!isValidName) {
  console.error("❌ Invalid module name.");
  console.error("Use kebab-case. Example: game-sessions");
  process.exit(1);
}

const toPascalCase = (value) =>
  value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

const toCamelCase = (value) => {
  const pascal = toPascalCase(value);
  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
};

const pascalName = toPascalCase(moduleName);
const camelName = toCamelCase(moduleName);

const basePath = path.join(
  process.cwd(),
  "apps",
  "frontend",
  "src",
  "modules",
  moduleName
);

if (fs.existsSync(basePath)) {
  console.error(`❌ Module "${moduleName}" already exists.`);
  process.exit(1);
}

const directories = [
  "domain/models",
  "domain/value-objects",
  "domain/errors",

  "application/use-cases",
  "application/hooks",
  "application/dto",

  "infrastructure/api",
  "infrastructure/mappers",

  "presentation/components",
  "presentation/pages"
];

const files = {
  [`domain/models/${pascalName}.ts`]: `export type ${pascalName} = {
  id: string;
};
`,

  "domain/value-objects/.gitkeep": "",
  "domain/errors/.gitkeep": "",

  "application/use-cases/index.ts": `export {};
`,

  [`application/hooks/use${pascalName}.ts`]: `export function use${pascalName}() {
  return {};
}
`,

  "application/dto/.gitkeep": "",

  [`infrastructure/api/${camelName}Api.ts`]: `const API_URL = import.meta.env.VITE_API_URL;

export const ${camelName}Api = {
  async getAll() {
    const response = await fetch(\`\${API_URL}/${moduleName}\`);

    if (!response.ok) {
      throw new Error("Error fetching ${moduleName}");
    }

    return response.json();
  }
};
`,

  [`infrastructure/mappers/${pascalName}Mapper.ts`]: `export class ${pascalName}Mapper {
  static fromApi(data: unknown) {
    return data;
  }
}
`,

  "presentation/components/index.ts": `export {};
`,

  [`presentation/pages/${pascalName}Page.tsx`]: `export function ${pascalName}Page() {
  return (
    <section>
      <h1>${pascalName}</h1>
    </section>
  );
}
`,

  "index.ts": `export * from "./domain/models/${pascalName}";
export * from "./presentation/pages/${pascalName}Page";
`
};

for (const directory of directories) {
  fs.mkdirSync(path.join(basePath, directory), { recursive: true });
}

for (const [filePath, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(basePath, filePath), content, "utf8");
}

console.log(`✅ Frontend DDD module "${moduleName}" created successfully.`);
