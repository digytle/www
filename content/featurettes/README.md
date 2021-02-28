# Schema of a /featurettes/ *.yaml

```yaml
# The 'header:' can be only one.
# All elements in the 'header:' should be present.
header:
  image:
  title:
    title:
    colour:
    description:
# There can be one or more 'section:' in 'sections:'.
# All 'section:' elements are optional.
sections:
  - section:
    title:
      title:
      colour:
    image:
      url:
      title:
      description:
    text:
      - (paragraph)
    quote:
      text:
        - (paragraph)
      author:
        name:
        organisation: 
```
