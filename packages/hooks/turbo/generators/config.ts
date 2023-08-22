import { PlopTypes } from '@turbo/gen';

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI): void {
    // A simple generator to add a new React component to the internal UI library
    plop.setGenerator('react-hooks', {
        description: 'keeping the naming convention (ex use + PascalCase)',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the hook?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/{{name}}/{{name}}.test.ts',
                templateFile: 'templates/test.hbs',
            },
            {
                type: 'add',
                path: 'src/{{name}}/index.ts',
                templateFile: 'templates/export.hbs',
            },
            {
                type: 'add',
                path: 'src/{{name}}/{{name}}.ts',
                templateFile: 'templates/hook.hbs',
            },
            {
                type: 'append',
                path: 'src/index.ts',
                template: "export { default as {{ name }} } from './{{ name }}'",
            },
        ],
    });
}
