{% set html %}
  {% include "../form-input-example/form-input-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../form-input-example/form-input-example.component.ts" %}
{% endset %}

{% set reactiveHtml %}
  {% include "../form-input-reactive-example/form-input-reactive-example.component.html" %}
{% endset %}

{% set reactiveTs %}
  {% include "../form-input-reactive-example/form-input-reactive-example.component.ts" %}
{% endset %}

<it-form-input-example></it-form-input-example>

<it-source-display
  html="{$ html | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}"
  typescript="{$ typescript | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" >
</it-source-display>

<it-form-input-reactive-example></it-form-input-reactive-example>

<it-source-display
  html="{$ reactiveHtml | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}"
  typescript="{$ reactiveTs | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}">
</it-source-display>