'use strict';

module.exports = function patchReactSetState (React) {

  const regularSetState = React.Component.prototype.setState;
  const pureSetState    = React.PureComponent.prototype.setState;

  const patchSetState   = (setState) => function (state, callback) {
    return new Promise(resolve =>
      setState.call(this, state, async () => {
        if (typeof callback === 'function')
          await callback()
        resolve(this.state)
      })
    )
  };

  React.Component.prototype.setState     = patchSetState(regularSetState);
  React.PureComponent.prototype.setState = patchSetState(pureSetState);
}
