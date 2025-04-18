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
