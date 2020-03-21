import { Plugin, getCodeBlockMeta } from 'bytemd';
import MermaidView from './MermaidView.svelte';

export interface BytemdMermaidOptions {}

export default function mermaid({}: BytemdMermaidOptions = {}): Plugin {
  return {
    render(node) {
      const meta = getCodeBlockMeta(node);
      if (!meta || meta.language !== 'mermaid') return;

      return {
        component: MermaidView,
        props: { value: meta.value },
      };
    },
  };
}
