import { vueBemCnPlugin } from '~/shared/utils/unit-test/bem-cn-plugin';

export default function cypressExtensions(extensions: Record<string, string> = {}): Record<string, unknown> {
  return {
    extensions: {
      plugins: [
        [vueBemCnPlugin],
        ...Object.values(extensions)
      ]
    }
  };
}
