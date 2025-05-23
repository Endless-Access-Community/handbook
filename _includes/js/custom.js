// SPDX-FileCopyrightText: NONE
// SPDX-License-Identifier: CC0-1.0

// Thanks to https://github.com/just-the-docs/just-the-docs/issues/234#issuecomment-770099584

window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
  if (event.matches) {
      jtd.setTheme('ea-dark');
  } else {
      jtd.setTheme('light');
  }
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    jtd.setTheme('ea-dark');
}
