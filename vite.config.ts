import {ConfigEnv, loadEnv, UserConfig} from 'vite';


import vue from '@vitejs/plugin-vue';
import path from 'path';

//vite svg doc： https://www.npmjs.com/package/vite-plugin-svg-icons

import viteSvgIcons from 'vite-plugin-svg-icons';

//按需引入ant design
import Components from 'unplugin-vue-components/vite';
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers';

export default {
  plugins: [viteSvgIcons({
    // Specify the icon folder to be cached
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
    // Specify symbolId format
    symbolId: 'icon-[dir]-[name]',
  }), vue(), Components({
    resolvers: [
      AntDesignVueResolver(),
    ],
    dts: true,
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
    }
  }
};

// export default ({mode}: ConfigEnv): UserConfig => {
//   return {
//     plugins: [
//       vue(),
//       //@ts-ignore
//       md(),
//       viteSvgIcons({
//         // Specify the icon folder to be cached
//         iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
//         // Specify symbolId format
//         symbolId: 'icon-[dir]-[name]',
//       })
//     ],
//     resolve: {
//       alias: {
//         '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
//       }
//     }
//   };
// }
