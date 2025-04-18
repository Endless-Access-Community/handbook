# handbook

Documentation for the Endless Access community itself. Uses [Just the Docs].

## Structure

Documentation is stored as Markdown files in this repository, either in the root or in subfolders. The file's path determines the URL of the page; for example:

```
index.md
architecture/
├─ index.md
├─ platforms.md
```

becomes:

```
/
/architecture/
/architecture/platforms/
```

To make a page show as a child page (e.g. in the sidebar), include `parent` by title (case-sensitive) in the Front Matter, e.g.:

```
parent: Architecture
```

For more information, see the [Page Levels documentation](https://just-the-docs.com/docs/navigation/main/levels/).

### Images

Images are stored in the `assets/images/` folder, which should be kept organized with sensible names and paths to make it easy to find and reuse images. To include an image in a page, use standard Markdown syntax with a relative path from the Markdown file. e.g. in a file `architecture/platforms.md`, you could use:

```markdown
![Discord](../../assets/images/discord.png)
```  

### Styling

The site uses a lightly-customized theme to better align with the Endless Access brand and support a dark style while still benefitting from future updates from Just the Docs. Changes mostly just include typography and color variables.

Sass variable overrides and new definitions are in `_sass/custom/setup.scss`. Style class overrides are in `_sass/custom/custom.scss`.

The custom dark style is defined in `_sass/color_schemes/ea-dark.scss` and is applied via Javascript based on the OS/browser's style in `_includes/js/custom.js`. Proper support for OS/browser dark style is being tracked upstream at https://github.com/just-the-docs/just-the-docs/issues/234.

## Building and previewing locally

Assuming [Jekyll] and [Bundler] are installed on your computer:

1.  Change your working directory to the root directory of your site.

2.  Run `bundle install`.

3.  Run `bundle exec jekyll serve` to build your site and preview it at `localhost:4000`.

    The built site is stored in the directory `_site`.

## Licensing and Attribution

This repository is licensed under the [MIT License].

[Jekyll]: https://jekyllrb.com
[Just the Docs]: https://just-the-docs.com/
[Bundler]: https://bundler.io
[MIT License]: https://en.wikipedia.org/wiki/MIT_License
