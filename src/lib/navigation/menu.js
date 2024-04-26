import { writable } from 'svelte/store';

export const menuVisible = writable(true);
  
export function toggleMenu() {
    // menuVisible = !menuVisible;
    menuVisible.update(n => !n);
    console.log(menuVisible);
}