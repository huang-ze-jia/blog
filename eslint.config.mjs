import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // 自定义规则配置
    rules: {
      '@typescript-eslint/no-explicit-any': ['off'], //允许使用any
      '@typescript-eslint/ban-ts-comment': 'off', //允许使用@ts-ignore
      '@typescript-eslint/no-non-null-assertion': 'off', //允许使用非空断言
      '@typescript-eslint/no-var-requires': 'off', //允许使用CommonJS的写法
      'no-console': [
        //提交时不允许有console.log
        'warn',
        {
          allow: ['warn', 'error'], // 允许使用console.warn和console.error
        },
      ],
      'no-debugger': 'warn', // 使用debugger时给出警告
    },
  },
];

export default eslintConfig;
