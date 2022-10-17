/* eslint-disable no-underscore-dangle */
import { setBackend, getBackend } from '@tensorflow/tfjs';
import {
  memory,
  scope,
  startScope,
  endScope,
  keep,
  dispose,
} from './memory';
import { Tensor, createTensor } from './tensor';

export {
  memory,
  scope,
  startScope,
  endScope,
  keep,
  dispose,
};
export {
  setBackend,
  getBackend,
  Tensor,
  createTensor,
};
export { fromImage, toImage } from './image';
export {
  ptp,
  percentile,
  quantile,
  mean,
  average,
  sd,
  variance,
} from './stats';
export {
  add,
  sub,
  mult,
  div,
  dot,
  abs,
  ceil,
  constrain,
  exp,
  floor,
  log,
  max,
  min,
  mod,
  pow,
  round,
  sq,
  sqrt,
  sum,
  acos,
  asin,
  atan,
  atan2,
  cos,
  sin,
  tan,
  complex,
  copy,
  eye,
  fill,
  linspace,
  ones,
  random,
  randomGaussian,
  range,
  zeros,
  flatten,
  pad,
  reshape,
  concat,
  reverse,
  slice,
  split,
  stack,
  unstack,
  sort,
  fft,
} from './ufunc';

declare const p5: any;

// ====================
//      p5 methods
// ====================

p5.prototype.MANUAL = 'manual';
p5.prototype._tensorMode = p5.prototype.AUTO;

// eslint-disable-next-line consistent-return
p5.prototype.tensorMode = function _tensorMode(mode: string): void | string {
  if (!mode) return this._tensorMode;
  if (mode === this.MANUAL) {
    this._tensorMode = this.MANUAL;
  } else if (mode === this.AUTO) {
    this._tensorMode = this.AUTO;
  }
};

p5.prototype._startDrawScope = function _startDrawScope() {
  if (this.tensorMode() === this.AUTO) startScope();
};

p5.prototype._endDrawScope = function _endDrawScope() {
  if (this.tensorMode() === this.AUTO) endScope();
};

p5.prototype.createTensor = createTensor;
p5.prototype.registerMethod('init', startScope);
p5.prototype.registerMethod('pre', p5.prototype._startDrawScope);
p5.prototype.registerMethod('post', p5.prototype._endDrawScope);
p5.prototype.registerMethod('remove', endScope);
