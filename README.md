[![circleci](https://img.shields.io/circleci/project/github/dtf-ein/dtf-ein.github.io.svg)](https://circleci.com/gh/dtf-ein/dtf-ein.github.io/)

# Digital Task Force website
[Website for our team](https://dtf-ein.github.io/), working with the CIO of Shared Services Canada.

# Local development
1. Install [Ruby](https://www.ruby-lang.org/en/downloads/) ([troubleshooting](https://github.com/dtf-ein/dtf-ein.github.io/issues/1#issuecomment-530790560)).
1. Install bundler, dependencies and start the project:
```bash
# Install bundler
gem install bundler

# Install dependencies
cd /path/to/project
bundle install

# Start the project (http://localhost:4000)
jekyll serve --livereload
```

# Add a new page
1. Create an English and French version of the page in the respective [`./_pages/en`](https://github.com/dtf-ein/dtf-ein.github.io/tree/master/_pages/en) and [`./_pages/fr`](https://github.com/dtf-ein/dtf-ein.github.io/tree/master/_pages/fr) directory.
1. Use [Jekyll front matter](https://jekyllrb.com/docs/front-matter/) to link the pages together:
```yaml
# English page
---
layout: page
title: Contact us
lang: en
ref: contact # must be same for linked English/French page
permalink: /contact-us/
---

# French page
---
layout: page
title: Contactez-nous
lang: fr
ref: contact
permalink: /contactez-nous/
---
```

# Add translated strings
1. Edit [`./_data/i18n.yml`](https://github.com/dtf-ein/dtf-ein.github.io/blob/master/_data/i18n.yml) to add new English/French strings.  
1. Use them in the templates like so:
```yaml
{{ site.data.i18n.en.key_name }}          # English, hard-coded
{{ site.data.i18n.fr.key_name }}          # Français, hard-coded
{{ site.data.i18n[page.lang].key_name }}  # Dynamic, based on page's language
```

# Publish changes
Any changes merged into master are automatically published.

# Credit
Theme is based on the [type-theme](https://github.com/rohanchandra/type-theme) template.
