define(['dart_sdk', 'packages/angular/angular.template'], function(dart_sdk, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__exponential_strength_pipe$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__exponential_strength_pipe$46template, {
    /*src__exponential_strength_pipe$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__exponential_strength_pipe$46template.initReflector = function() {
    if (dart.test(src__exponential_strength_pipe$46template._visited)) {
      return;
    }
    src__exponential_strength_pipe$46template._visited = true;
    angular$46template.initReflector();
  };
  dart.fn(src__exponential_strength_pipe$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/pipe_examples/src/exponential_strength_pipe.template.ddc", {
    "package:pipe_examples/src/exponential_strength_pipe.template.dart": src__exponential_strength_pipe$46template
  }, '{"version":3,"sourceRoot":"","sources":["exponential_strength_pipe.template.dart"],"names":[],"mappings":";;;;;;;;;;MAWI,kDAAQ;YAAG;;;;;AAEb,kBAAI,kDAAQ,GAAE;AACZ;;AAEF,yDAAW;AAEX,IAAM,gCAAa;EACrB","file":"exponential_strength_pipe.template.ddc.js"}');
  // Exports:
  return {
    src__exponential_strength_pipe$46template: src__exponential_strength_pipe$46template
  };
});

//# sourceMappingURL=exponential_strength_pipe.template.ddc.js.map
