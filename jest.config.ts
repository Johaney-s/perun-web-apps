const { getJestProjects } = require('@nrwl/jest');

export default { projects: [...getJestProjects(), '<rootDir>/libs/dialogs'] };
