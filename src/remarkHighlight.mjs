import { visit } from 'unist-util-visit';

export default function remarkHighlight() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.value) {
      const highlightPattern = /<!--highlight-(\d+)-->/g;
      node.value = node.value.replace(highlightPattern, (_, id) => {
        const newValue = `[[highlight-${id}]]`;
        return newValue;
      });
    }
    });
  };
}

