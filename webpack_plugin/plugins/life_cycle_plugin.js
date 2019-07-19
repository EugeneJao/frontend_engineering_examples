function LifeCyclePlugin() {};
LifeCyclePlugin.prototype.apply = function(compiler) {
  compiler.hooks.entryOption.tap('LifeCyclePlugin', function (compilation) {
    console.log('LifeCyclePlugin running in entryOption');
  });
  compiler.hooks.afterPlugins.tap('LifeCyclePlugin', function (compilation) {
    console.log('LifeCyclePlugin running in afterPlugins');
  });
  compiler.hooks.afterResolvers.tap('LifeCyclePlugin', function (compilation) {
    console.log('LifeCyclePlugin running in afterResolvers');
  });
  compiler.hooks.environment.tap('LifeCyclePlugin', function (compilation) {
    console.log('LifeCyclePlugin running in environment');
  });
  compiler.hooks.afterEnvironment.tap('LifeCyclePlugin', function (compilation) {
    console.log('LifeCyclePlugin running in afterEnvironment');
  });
  compiler.hooks.beforeRun.tap('LifeCyclePlugin', function (compilation) {
    console.log('LifeCyclePlugin running in beforeRun');
  });
  compiler.hooks.run.tap('LifeCyclePlugin', function (compilation) {
    console.log('LifeCyclePlugin running in run');
  });
  compiler.hooks.watchRun.tap('LifeCyclePlugin', function (compilation) {
    console.log('LifeCyclePlugin running in watchRun');
  });
  compiler.hooks.normalModuleFactory.tap('LifeCyclePlugin', function (compilation) {
    console.log('LifeCyclePlugin running in normalModuleFactory');
  });
  compiler.hooks.contextModuleFactory.tap('LifeCyclePlugin', function (compilation) {
    console.log('LifeCyclePlugin running in contextModuleFactory');
  });
  compiler.hooks.beforeCompile.tap('LifeCyclePlugin', function (compilation) {
    console.log('LifeCyclePlugin running in beforeCompile');
  });
  compiler.hooks.compile.tap('LifeCyclePlugin', function (compilation) {
    console.log('LifeCyclePlugin running in compile');
  });
  compiler.hooks.thisCompilation.tap('LifeCyclePlugin', function (compilation) {
    console.log('LifeCyclePlugin running in thisCompilation');
  });
  compiler.hooks.compilation.tap('LifeCyclePlugin', function (compilation) {
    console.log('LifeCyclePlugin running in compilation');
  });
  compiler.hooks.make.tap('LifeCyclePlugin', function (compilation) {
    console.log('LifeCyclePlugin running in make');
  });
  compiler.hooks.afterCompile.tap('LifeCyclePlugin', function (compilation) {
    console.log('LifeCyclePlugin running in afterCompile');
  });
  compiler.hooks.shouldEmit.tap('LifeCyclePlugin', function (compilation) {
    console.log('LifeCyclePlugin running in shouldEmit');
  });
  // compiler.hooks.needAdditionalPass.tap('LifeCyclePlugin', function (compilation) {
  //   console.log('LifeCyclePlugin running in needAdditionalPass');
  // });
  compiler.hooks.emit.tap('LifeCyclePlugin', function (compilation) {
    console.log('LifeCyclePlugin running in emit');
  });
  compiler.hooks.afterEmit.tap('LifeCyclePlugin', function (compilation) {
    console.log('LifeCyclePlugin running in afterEmit');
  });
  compiler.hooks.done.tap('LifeCyclePlugin', function (compilation) {
    console.log('LifeCyclePlugin running in done');
  });
  compiler.hooks.failed.tap('LifeCyclePlugin', function (compilation) {
    console.log('LifeCyclePlugin running in failed');
  });
  compiler.hooks.invalid.tap('LifeCyclePlugin', function (compilation) {
    console.log('LifeCyclePlugin running in invalid');
  });
  compiler.hooks.watchClose.tap('LifeCyclePlugin', function (compilation) {
    console.log('LifeCyclePlugin running in watchClose');
  });
};
module.exports = LifeCyclePlugin;