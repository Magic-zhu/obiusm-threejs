import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
export default [
  {
    input: 'src/index.ts',
    plugins: [
      resolve(),
      typescript(),
      terser(),
    ],
    output: [
      {
        file: 'dist/obiusm-threejs-ems.min.js',
        format: 'es',
      },
      {
        file: 'dist/obiusm-threejs-iife.min.js',
        format: 'iife',
        name: 'ObiusmThree',
      },
      {
        file: 'dist/obiusm-threejs.min.js',
        format: 'umd',
        name: 'ObiusmThree',
      },
    ],
  },
];
