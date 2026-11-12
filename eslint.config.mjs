import config from "eslint-config-next/core-web-vitals";
const lintConfig = [...config, {ignores: [".next/**", "out/**", "next-env.d.ts"]}];
export default lintConfig;