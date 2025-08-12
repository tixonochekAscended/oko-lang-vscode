const vscode = require('vscode');

function activate(context) {
    const keywords = [
        'import', 'funct', 'return', 'while', 'feach', 'if', 'elif', 'else'
    ];

    const provider = vscode.languages.registerCompletionItemProvider('okolang', {
        provideCompletionItems(document, position) {
            return keywords.map(keyword => {
                const item = new vscode.CompletionItem(keyword, vscode.CompletionItemKind.Keyword);
                item.insertText = keyword;
                return item;
            });
        }
    });

    context.subscriptions.push(provider);
}

function deactivate() {}

module.exports = { activate, deactivate };