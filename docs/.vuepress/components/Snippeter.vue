<template>
  <div class="snippeter">
    <div ref="source" v-show="false"><slot></slot></div>
    <div class="snippeter__element">
      <div ref="element" v-html="element"></div>
    </div>
    <div class="snippeter__markup">
      <pre ref="markup" class="language-html"><code>{{ markup }}</code></pre>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs';
Prism.manual = true;

export default {
  name: 'Snippeter',
  data() {
    return {
      markup: '',
      element: '',
      replace: {
        'd=".*?"': 'd="M..."',
      },
    };
  },
  mounted() {
    const source = this.$refs.source.querySelector('pre').innerHTML;
    this.element = source;
    this.markup = Object.entries(this.replace).reduce(
      (output, [regex, value]) => {
        return output.replace(new RegExp(regex, 'g'), value);
      },
      source
    );
    this.$nextTick(() => Prism.highlightElement(this.$refs.markup));
  },
};
</script>

<style lang="stylus">
.snippeter
  box-shadow: 4px 4px 8px rgba(56,53,85,0.3), -4px -4px 8px rgba(255,255,255,0.5), inset 1px 1px 1px rgba(224,234,249,0.5)
  border-radius: 10px
  overflow: hidden
  margin: 20px 0

.snippeter__element
  display: flex
  padding: 20px
  justify-content: center

.snippeter__markup
  margin 20px
  >*
    margin: 0
  pre
    box-shadow: inset -2px -2px 4px rgba(255,255,255,0.2)
    max-height: 300px
    overflow: auto
</style>
