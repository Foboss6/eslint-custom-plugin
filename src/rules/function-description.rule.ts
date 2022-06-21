import { Rule } from 'eslint';

export function functionDescriptionRule(context: Rule.RuleContext): Rule.RuleListener {
  return {
    FunctionDeclaration(node) {
      if (!node.leadingComments) {
        context.report({
          node,
          message: 'You must add a description to your function: ' + node.id?.name,
        });
      }
      if (
        node.leadingComments &&
        Array.from(node.leadingComments).length === 1 &&
        node.leadingComments[0].type === 'Line'
      ) {
        context.report({
          node,
          message:
            'You must use the block comment for the description of the function: ' + node.id?.name,
        });
      }
    },
  };
}
