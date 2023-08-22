import { PlopTypes } from '@turbo/gen';

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI): void {
    // A simple generator to add a new React component to the internal UI library
    plop.setGenerator('util-function', {
        description: 'add your utility function',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the utility function?',
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
                templateFile: 'templates/main.hbs',
            },
            {
                type: 'append',
                path: 'src/index.ts',
                template: "export { default as {{ name }} } from './{{ name }}'",
            },
        ],
    });

    plop.setGenerator('util-class', {
        description: 'add your utility class',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the class?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/{{pascalCase name}}/{{pascalCase name}}.test.ts',
                templateFile: 'class-templates/test.hbs',
            },
            {
                type: 'add',
                path: 'src/{{pascalCase name}}/index.ts',
                templateFile: 'class-templates/export.hbs',
            },
            {
                type: 'add',
                path: 'src/{{pascalCase name}}/{{pascalCase name}}.ts',
                templateFile: 'class-templates/main.hbs',
            },
            {
                type: 'append',
                path: 'src/index.ts',
                template:
                    "export { default as {{ pascalCase name }} } from './{{ pascalCase name }}'",
            },
        ],
    });
}
