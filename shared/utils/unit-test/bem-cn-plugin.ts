import Vue, { PluginObject } from 'vue';
import vueBemCn from 'vue-bem-cn';

export const vueBemCnPlugin: PluginObject<unknown> = {
  install(vue: typeof Vue): void {
    vue.use(vueBemCn);
  }
};
