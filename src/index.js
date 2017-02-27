export default function () {
  return {
    visitor: {
      Identifier(path) {
        const name = path.node.name;

        if(path.parent.type === 'ObjectProperty' && name === 'default') {
          path.node.name = "'default'";
        }
      }
    }
  };
}
