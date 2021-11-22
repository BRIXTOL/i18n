import { config, env, rollup, plugin } from '@brixtol/rollup-config';

export default rollup(
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'cjs',
        file: config.output.cjs,
        exports: 'named',
        sourcemap: env.is('dev', 'inline')
      },
      {
        format: 'es',
        file: config.output.esm,
        exports: 'named',
        sourcemap: env.is('dev', 'inline'),
        preferConst: false
      }
    ],
    external: config.external,
    plugins: env.if('dev')(
      [
        plugin.ts()
      ]
    )(
      [
        plugin.esminify(),
        plugin.filesize()
      ]
    )
  }
);
