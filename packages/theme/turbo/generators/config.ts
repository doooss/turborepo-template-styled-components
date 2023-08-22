import { PlopTypes } from '@turbo/gen';

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI): void {
    // A simple generator to add a new React component to the internal UI library
    plop.setGenerator('client-component', {
        description: 'Adds a new react component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the component?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/client/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
                templateFile: 'templates/storybook.hbs',
            },
            {
                type: 'add',
                path: 'src/client/{{pascalCase name}}/index.ts',
                templateFile: 'templates/export.hbs',
            },
            {
                type: 'add',
                path: 'src/client/{{pascalCase name}}/{{pascalCase name}}.tsx',
                templateFile: 'templates/component.hbs',
            },
            {
                type: 'append',
                path: 'src/index.ts',
                template:
                    "export { default as {{ pascalCase name }} } from './client/{{ pascalCase name }}';",
            },
        ],
    });

    plop.setGenerator('server-component', {
        description: 'Adds a new react server component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the component?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/server/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
                templateFile: 'server-templates/storybook.hbs',
            },
            {
                type: 'add',
                path: 'src/server/{{pascalCase name}}/index.ts',
                templateFile: 'server-templates/export.hbs',
            },
            {
                type: 'add',
                path: 'src/server/{{pascalCase name}}/{{pascalCase name}}.tsx',
                templateFile: 'server-templates/component.hbs',
            },
            {
                type: 'append',
                path: 'src/index.ts',
                template:
                    "export { default as {{ pascalCase name }} } from './server/{{ pascalCase name }}';",
            },
        ],
    });
}
