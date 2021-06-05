const {build} = require("estrella");

const dev = process.argv.includes("--watch") || process.argv.includes("--dev");

build({
    entryPoints: ["src/index.ts", "src/cli.ts"],
    outdir: "dist",
    target: "node12.0",
    bundle: true,

    // common
    minify: !dev,
    minifyIdentifiers: !dev,
    minifySyntax: !dev,
    minifyWhitespace: !dev,
    format: "cjs",
    color: true,
    logLevel: "info",
    tslint: false
})
