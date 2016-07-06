import axios from 'axios';

export const SHOW_MENU = 'SHOW_MENU';
export const SHOW_MAIN = 'SHOW_MAIN';

export function showMenu() {
  console.log('src/actions: showMenu fired');
  return {
    type: SHOW_MENU,
  }
}

export function showMain() {
  console.log('src/actions: showMain fired');
  return {
    type: SHOW_MAIN
  }
}