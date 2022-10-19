import { ROOT_ID } from '@cypress/mount-utils';

export function clearCyRoot(): void {
  document.getElementById(ROOT_ID).innerHTML = '';
}
