{% set html %}
  {% include "../form-input-example/form-input-example.component.html" %}
{% endset %}

{% set typescript %}
  {% include "../form-input-example/form-input-example.component.ts" %}
{% endset %}

{% set tdvHtml %}
  {% include "../template-driven-validation-example/template-driven-validation-example.component.html" %}
{% endset %}

{% set tdvTs %}
  {% include "../template-driven-validation-example/template-driven-validation-example.component.ts" %}
{% endset %}

{% set mdvHtml %}
  {% include "../model-driven-validation-example/model-driven-validation-example.component.html" %}
{% endset %}

{% set mdvTs %}
  {% include "../model-driven-validation-example/model-driven-validation-example.component.ts" %}
{% endset %}

<it-form-input-example></it-form-input-example>

<it-source-display
  html="{$ html | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}"
  typescript="{$ typescript | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}" >
</it-source-display>

<it-template-driven-validation-example></it-template-driven-validation-example>

<it-source-display
  html="{$ tdvHtml | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}"
  typescript="{$ tdvTs | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}">
</it-source-display>

<it-model-driven-validation-example></it-model-driven-validation-example>

<it-source-display
  html="{$ mdvHtml | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}"
  typescript="{$ mdvTs | replace("\{\{", "/\{/\{") | replace("\}\}", "/\}/\}") $}">
</it-source-display>