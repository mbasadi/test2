import { cdk } from 'projen';
const project = new cdk.JsiiProject({
  author: 'mbasadi',
  authorAddress: 'asadi.mohammadbagher@gmail.com',
  defaultReleaseBranch: 'main',
  name: 'test2',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/mbasadi/test2.git',
  docgen: false,
  publishToPypi: { distName: 'test2', module: 'test2' },
  publishToGo: { moduleName: 'github.com/mbasadi', packageName: 'test2' },
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();