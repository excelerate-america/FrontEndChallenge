const requireField = (fieldName) => {
  return (value) => {
    if (String(value).length === 0) {
      return fieldName + ' is required'
    }
    return true
  }
}

module.exports = (plop) => {
  plop.setGenerator('element', {
    description: 'Create a reusable element',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your elment name?',
        validate: requireField('name')
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/elements/{{pascalCase name}}/{{pascalCase name}}.js',
        templateFile: 'plop-templates/Element/Element.js.hbs'
      },
      {
        type: 'add',
        path: 'src/elements/{{pascalCase name}}/index.js',
        templateFile: 'plop-templates/Element/index.js.hbs'
      },
      {
        type: 'add',
        path: 'src/elements/index.js',
        templateFile: 'plop-templates/injectable-index.js.hbs',
        skipIfExists: true
      },
      {
        type: 'append',
        path: 'src/elements/index.js',
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{pascalCase name}} from './{{pascalCase name}}';`
      },
      {
        type: 'append',
        path: 'src/elements/index.js',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`
      }
    ]
  })
  plop.setGenerator('component', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
        validate: requireField('name')
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.js',
        templateFile: 'plop-templates/Component/Component.js.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.js',
        templateFile: 'plop-templates/Component/index.js.hbs'
      },
      {
        type: 'add',
        path: 'src/components/index.js',
        templateFile: 'plop-templates/injectable-index.js.hbs',
        skipIfExists: true
      },
      {
        type: 'append',
        path: 'src/components/index.js',
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{pascalCase name}} from './{{pascalCase name}}';`
      },
      {
        type: 'append',
        path: 'src/components/index.js',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`
      }
    ]
  })
  plop.setGenerator('module', {
    description: 'Create a reusable module',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your modules name?',
        validate: requireField('name')
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/modules/{{pascalCase name}}/{{pascalCase name}}.js',
        templateFile: 'plop-templates/Module/Module.js.hbs'
      },
      {
        type: 'add',
        path: 'src/modules/{{pascalCase name}}/index.js',
        templateFile: 'plop-templates/Module/index.js.hbs'
      },
      {
        type: 'add',
        path: 'src/modules/index.js',
        templateFile: 'plop-templates/injectable-index.js.hbs',
        skipIfExists: true
      },
      {
        type: 'append',
        path: 'src/modules/index.js',
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{pascalCase name}} from './{{pascalCase name}}';`
      },
      {
        type: 'append',
        path: 'src/modules/index.js',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`
      }
    ]
  })
  plop.setGenerator('container', {
    description: 'Create a reusable container',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your container name?',
        validate: requireField('name')
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/containers/{{pascalCase name}}/{{pascalCase name}}.js',
        templateFile: 'plop-templates/Container/Container.js.hbs'
      },
      {
        type: 'add',
        path: 'src/containers/{{pascalCase name}}/index.js',
        templateFile: 'plop-templates/Container/index.js.hbs'
      },
      {
        type: 'add',
        path: 'src/containers/index.js',
        templateFile: 'plop-templates/injectable-index.js.hbs',
        skipIfExists: true
      },
      {
        type: 'append',
        path: 'src/containers/index.js',
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{pascalCase name}} from './{{pascalCase name}}';`
      },
      {
        type: 'append',
        path: 'src/containers/index.js',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`
      }
    ]
  })
  plop.setGenerator('hook', {
    description: 'Create a custom react hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your hook name?',
        validate: requireField('name')
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/hooks/{{camelCase name}}.js',
        templateFile: 'plop-templates/hook.js.hbs'
      },
      {
        type: 'add',
        path: 'src/hooks/index.js',
        templateFile: 'plop-templates/injectable-index.js.hbs',
        skipIfExists: true
      },
      {
        type: 'append',
        path: 'src/hooks/index.js',
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{camelCase name}} from './{{camelCase name}}';`
      },
      {
        type: 'append',
        path: 'src/hooks/index.js',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{camelCase name}},`
      }
    ]
  })
}
