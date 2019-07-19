function LifeCyclePlugin() {};
LifeCyclePlugin.prototype.apply = function(compiler) {
  const compilerHooks = ['entryOption', 'afterPlugins', 'afterResolvers', 'environment', 'afterEnvironment', 'beforeRun', 'run', 'watchRun', 'normalModuleFactory', 'contextModuleFactory', 'beforeCompile', 'compile', 'thisCompilation', 'compilation', 'make', 'afterCompile', 'shouldEmit', 'emit', 'afterEmit', 'done', 'failed', 'invalid', 'watchClose'];

  const compilationHooks = ['buildModule', 'rebuildModule', 'failedModule', 'succeedModule', 'finishModules', 'finishRebuildingModule', 'seal', 'unseal', 'optimizeDependenciesBasic', 'optimizeDependencies', 'optimizeDependenciesAdvanced', 'afterOptimizeDependencies', 'optimize', 'optimizeModulesBasic', 'optimizeModules', 'optimizeModulesAdvanced', 'afterOptimizeModules', 'optimizeChunksBasic', 'optimizeChunks', 'optimizeChunksAdvanced', 'afterOptimizeChunks', 'optimizeTree', 'afterOptimizeTree', 'optimizeChunkModulesBasic', 'optimizeChunkModules', 'optimizeChunkModulesAdvanced', 'afterOptimizeChunkModules', 'shouldRecord', 'reviveModules', 'optimizeModuleOrder', 'advancedOptimizeModuleOrder', 'beforeModuleIds', 'moduleIds', 'optimizeModuleIds', 'afterOptimizeModuleIds', 'reviveChunks', 'optimizeChunkOrder', 'optimizeChunkIds', 'afterOptimizeChunkIds', 'recordModules', 'recordChunks', 'beforeHash', 'afterHash', 'recordHash', 'record', 'beforeModuleAssets', 'shouldGenerateChunkAssets', 'beforeChunkAssets', 'additionalChunkAssets', 'additionalAssets', 'optimizeChunkAssets', 'afterOptimizeChunkAssets', 'optimizeAssets', 'afterOptimizeAssets', 'needAdditionalSeal', 'afterSeal', 'chunkHash', 'moduleAsset', 'chunkAsset', 'assetPath', 'needAdditionalPass', 'childCompiler', 'normalModuleLoader'];
  compilerHooks.forEach(function (hook) {
      (function (hook) {
        try {
          compiler.hooks[hook].tap('LifeCyclePlugin', function (payloadOne, payloadTwo) {
            console.log('LifeCyclePlugin running in compiler ', hook);
            if (hook === 'compilation') compilationHooks.forEach((hook) => {
              try {
                (function (hook) {
                  payloadOne.hooks[hook].tap('LifeCyclePlugin', function (payloadOne) {
                    console.log('LifeCyclePlugin running in compilation ', hook);
                    if (['buildModule', 'succeedModule', ].indexOf(hook) !== -1) console.log(payloadOne.resource);
                    if (['normalModuleLoader'].indexOf(hook) !== -1) 
                    console.log(payloadOne._module.resource);
                  });
                })(hook)
              } catch (e) {
                throw new Error(['钩子', hook, '执行异常'].join(''), e);
              }
            });
          });
        } catch (e) {
          throw new Error(['钩子', hook, '执行异常'].join(''), e);
        }
      })(hook);
  });
};
module.exports = LifeCyclePlugin;