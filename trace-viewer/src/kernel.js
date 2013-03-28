// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

/**
 * @fileoverview Provides the Process class.
 */
base.require('process_base');

base.exportTo('tracing', function() {

  /**
   * The Kernel represents kernel-level objects in the
   * model.
   * @constructor
   */
  function Kernel() {
    tracing.ProcessBase.call(this);
  };

  /**
   * Comparison between kernels is pretty meaningless.
   */
  Kernel.compare = function(x, y) {
    return 0;
  };

  Kernel.prototype = {
    __proto__: tracing.ProcessBase.prototype,

    compareTo: function(that) {
      return Kernel.compare(this, that);
    },

    get userFriendlyName() {
      return 'kernel';
    },

    get userFriendlyDetails() {
      return 'kernel';
    }
  };

  return {
    Kernel: Kernel
  };
});
