module.exports = function (plop) {
    // controller generator
    plop.setGenerator('tool', {
        description: 'Generates a new tool',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Tool name'
            },
            {
                type: 'input',
                name: 'targetDir',
                message: 'Target directory',
                default: '/tmp',
            },
        ],
        actions: [{
            type: "addMany",
            destination: "{{targetDir}}/{{camelCase name}}/",
            base: "template/",
            templateFiles: "**",
            globOptions: {
                dot: true,
            }
        }
    ]
    });
};