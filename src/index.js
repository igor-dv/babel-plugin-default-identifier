export default function () {
  return {
    visitor: {
      Identifier(path) {
        const name = path.node.name;

        if(name === 'default') {
          path.node.name = "'default'";
        }
      }
    }
  };
}
