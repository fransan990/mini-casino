import fs from "node:fs";
import path from "node:path";

const componentNameInput = process.argv[2];

if (!componentNameInput) {
  console.error("❌ You must provide a component name.");
  console.error("Example: pnpm new:landing-component HeroSection");
  process.exit(1);
}

const toPascalCase = (value) =>
  value
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

const componentName = toPascalCase(componentNameInput);

if (!componentName) {
  console.error("❌ Invalid component name.");
  process.exit(1);
}

const basePath = path.join(
  process.cwd(),
  "apps",
  "frontend",
  "src",
  "modules",
  "landing",
  "presentation",
  "components",
  componentName
);

if (fs.existsSync(basePath)) {
  console.error(`❌ Component "${componentName}" already exists.`);
  process.exit(1);
}

fs.mkdirSync(basePath, { recursive: true });

const componentFile = path.join(basePath, `${componentName}.tsx`);
const stylesFile = path.join(basePath, `${componentName}.module.scss`);

const componentContent = `import styles from "./${componentName}.module.scss";

export function ${componentName}() {
  return (
    <section className={styles.container}>
      <h2>${componentName}</h2>
    </section>
  );
}
`;

const stylesContent = `.container {
  padding: 4rem 2rem;
}
`;

fs.writeFileSync(componentFile, componentContent, "utf8");
fs.writeFileSync(stylesFile, stylesContent, "utf8");

const indexPath = path.join(
  process.cwd(),
  "apps",
  "frontend",
  "src",
  "modules",
  "landing",
  "presentation",
  "components",
  "index.ts"
);

const exportLine = `export * from "./${componentName}/${componentName}";\n`;

if (fs.existsSync(indexPath)) {
  const currentContent = fs.readFileSync(indexPath, "utf8");

  if (!currentContent.includes(exportLine)) {
    fs.appendFileSync(indexPath, exportLine, "utf8");
  }
} else {
  fs.writeFileSync(indexPath, exportLine, "utf8");
}

console.log(`✅ Landing component "${componentName}" created successfully.`);
