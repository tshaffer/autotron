import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { style } from 'typestyle';
import * as csstips from 'csstips';
import { percent, color, rgba } from 'csx';
import {
  BsUiModelState,
  BsUiModelTemplatePropertyColorState,
} from '../type';
import {
  initModel,
  resetModel,
  updateTemplateColorAsync,
  updateTemplateColorBatch,
} from '../controller';
import { bsUiModelGetTemplatePropertyColorState } from '../selector';

const TemplateAsset = require('../asset/TemplateAsset.svg');

// -----------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------

/** @internal */
export interface TemplateProps {
  color: BsUiModelTemplatePropertyColorState;
  onInitModel: () => any;
  onResetModel: () => any;
  onUpdateTemplateColorAsync: () => any;
  onUpdateTemplateColorBatch: () => any;
}

// -----------------------------------------------------------------------
// Styles
// -----------------------------------------------------------------------

const containerStyle = style(csstips.fillParent, csstips.vertical);
const headerContainerStyle = () => style(
  {
    backgroundColor: 'black',
    color: 'white',
  },
  csstips.centerCenter,
  csstips.padding(10, 0, 35, 0),
  csstips.content,
  csstips.vertical,
  csstips.verticallySpaced(10)
);

const bodyContainerStyle = () => style(
  csstips.padding(30, percent(20), 30, percent(20)),
  csstips.content,
  csstips.vertical
);

const bodySectionContainerStyle = () => style(
  csstips.content,
  csstips.vertical
);

const subHeaderContainerStyle = () => style(
  {
    margin: '50px 0 0 0',
  },
  csstips.centerCenter,
  csstips.content,
  csstips.vertical
);

const paragraphContainerStyle = () => style(
  {
    margin: '0 20px 0 20px',
    '-webkit-overflow-scrolling': 'touch',
    overflow: 'auto',
  },
  csstips.startJustified
);

const indentedParagraphContainerStyle = () => style(
  {
    margin: '10px 50px 10px 50px',
    '-webkit-overflow-scrolling': 'touch',
    overflow: 'auto',
  },
  csstips.startJustified,
  csstips.content,
  csstips.vertical
);

const codeContainerStyle = () => style({
  margin: '10px 20px 10px 20px',
  padding: '20px 20px 20px 20px',
  '-webkit-overflow-scrolling': 'touch',
  overflow: 'auto',
  backgroundColor: color('#eee').toString(),
  border: `1px solid ${color('#999').toString()}`,
  fontFamily: 'monospace, monospace',
  fontSize: '16px',
});

const imageContainerStyle = () => style(
  {
    margin: '30px auto',
  },
  csstips.centerCenter,
  csstips.height(70),
  csstips.width(70),
);

const linkStyle = () => style({
  display: 'inline',
});

const buttonStyle = (templateColor: BsUiModelTemplatePropertyColorState) => style(
  {
    margin: '0 auto',
    cursor: 'pointer',
    backgroundColor: rgba(templateColor.r, templateColor.g, templateColor.b, templateColor.a).toString(),
    color: rgba(templateColor.r, templateColor.g, templateColor.b, templateColor.a).invert().toString(),
  },
  csstips.height(50),
  csstips.width(200),
);

// -----------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------

export class TemplateComponent extends React.Component<TemplateProps> {
  componentDidMount() {
    this.props.onInitModel();
  }

  componentWillUnmount() {
    this.props.onResetModel();
  }

  renderComponent() {
    return (
      <div className={bodySectionContainerStyle()}>
        <h2 className={subHeaderContainerStyle()}>Component</h2>
        <h3>Asset</h3>
        <p className={paragraphContainerStyle()}>
          Add asset to ~/src/asset and load via component using require syntax:
        </p>
        <div className={codeContainerStyle()}>
          ~/src/component/Template.tsx
          <br /><br />
          const TemplateAsset = require('../asset/TemplateAsset');
          <br /><br />
          ...
          <br /><br />
          &lt;img className={imageContainerStyle()} src={TemplateAsset} /&gt;
        </div>
        <img className={imageContainerStyle()} src={TemplateAsset} />
        <h3>Style</h3>
        <p className={paragraphContainerStyle()}>
          Components should be styled using the included inline, optimized, type safe style APIs:
        </p>
        <b className={indentedParagraphContainerStyle()}>1. typestyle</b>
        <b className={indentedParagraphContainerStyle()}>2. csstips</b>
        <b className={indentedParagraphContainerStyle()}>3. csx</b>
        <div className={codeContainerStyle()}>
          ~/src/component/Template.tsx
          <br /><br />
        </div>
        <p className={paragraphContainerStyle()}>
          See&nbsp;
          <a className={linkStyle()} href='https://typestyle.github.io'>https://typestyle.github.io</a>
          &nbsp;for more info
        </p>
        <h3>Test</h3>
        <div className={codeContainerStyle()}>
          ~/src/component/Template.test.tsx
          <br /><br />
        </div>
      </div>
    );
  }

  renderModel() {
    return (
      <div className={bodySectionContainerStyle()}>
        <h2 className={subHeaderContainerStyle()}>Model</h2>
        <h3>Simple Action Creator</h3>
        <div className={codeContainerStyle()}>
          ~/src/model/templateProperty.ts
          <br /><br />
        </div>
        <h3>Simple Action Creator Test</h3>
        <div className={codeContainerStyle()}>
          ~/src/model/templateProperty.test.ts
          <br /><br />
        </div>
        <h3>Reducer</h3>
        <div className={codeContainerStyle()}>
          ~/src/model/templateProperty.ts
          <br /><br />
        </div>
        <h3>Reducer Test</h3>
        <div className={codeContainerStyle()}>
          ~/src/model/templateProperty.test.ts
          <br /><br />
        </div>
        <h3>Validator</h3>
        <div className={codeContainerStyle()}>
          ~/src/model/templateProperty.ts
          <br /><br />
        </div>
        <h3>Validator Test</h3>
        <div className={codeContainerStyle()}>
          ~/src/model/templateProperty.test.ts
          <br /><br />
        </div>
        <h3>Component Integration</h3>
        <div className={codeContainerStyle()}>
          ~/src/component/Template.ts
          <br /><br />
        </div>
        <h3>Selector</h3>
        <div className={codeContainerStyle()}>
          ~/src/selector/templateProperty.ts
          <br /><br />
        </div>
        <h3>Selector Test</h3>
        <div className={codeContainerStyle()}>
          ~/src/selector/templateProperty.test.ts
          <br /><br />
        </div>
      </div>
    );
  }

  renderController() {
    return (
      <div className={bodySectionContainerStyle()}>
        <h2 className={subHeaderContainerStyle()}>Controller</h2>
        <h3>Batch Action</h3>
        <div className={codeContainerStyle()}>
          ~/src/controller/template.ts
          <br /><br />
        </div>
        <input
          className={buttonStyle(this.props.color)}
          type='button'
          value='Update Color Batch'
          onClick={this.props.onUpdateTemplateColorBatch}
        />
        <h3>Batch Action Test</h3>
        <div className={codeContainerStyle()}>
          ~/src/controller/template.test.ts
          <br /><br />
        </div>
        <h3>Async Action</h3>
        <div className={codeContainerStyle()}>
          ~/src/controller/template.ts
          <br /><br />
        </div>
        <input
          className={buttonStyle(this.props.color)}
          type='button'
          value='Update Color Async'
          onClick={this.props.onUpdateTemplateColorAsync}
        />

        <h3>Async Action Test</h3>
        <div className={codeContainerStyle()}>
          ~/src/controller/template.test.ts
          <br /><br />
        </div>
      </div>
    );
  }

  renderType() {
    return (
      <div className={bodySectionContainerStyle()}>
        <h2 className={subHeaderContainerStyle()}>Type</h2>
        <h3>Definition</h3>
        <div className={codeContainerStyle()}>
          ~/src/type/templateProperty.ts
          <br /><br />
        </div>
        <h3>Helper Function</h3>
        <div className={codeContainerStyle()}>
          ~/src/type/templateProperty.ts
          <br /><br />
        </div>
        <h3>Helper Function Test</h3>
        <div className={codeContainerStyle()}>
          ~/src/type/templateProperty.test.ts
          <br /><br />
        </div>
      </div>
    );
  }

  renderError() {
    return (
      <div className={bodySectionContainerStyle()}>
        <h3>Error</h3>
        <div className={codeContainerStyle()}>
          ~/src/utility/BsUiError.ts
          <br /><br />
        </div>
      </div>
    );
  }

  renderHeader() {
    return (
      <div className={headerContainerStyle()}>
        <h1># BrightSign</h1>
        <p>UI Template Project</p>
      </div>
    );
  }

  renderBody() {
    return (
      <div className={bodyContainerStyle()}>
        {this.renderComponent()}
        {this.renderModel()}
        {this.renderController()}
        {this.renderType()}
        {this.renderError()}
      </div>
    );
  }

  render() {
    return (
      <div className={containerStyle}>
        <p>Line 0 - may not be long enough to be seen on a monitor with overscan set.</p>
        <p>Line 1 - may not be long enough to be seen on a monitor with overscan set.</p>
        <p>Line 2 - may not be long enough to be seen on a monitor with overscan set.</p>
        <p>Line 3 - may not be long enough to be seen on a monitor with overscan set.</p>
        <p>Line 4 - may not be long enough to be seen on a monitor with overscan set.</p>
        <p>Line 5 - may not be long enough to be seen on a monitor with overscan set.</p>
        <p>Line 6 - may not be long enough to be seen on a monitor with overscan set.</p>
      </div>
    );
  }
}

// -----------------------------------------------------------------------
// Container
// -----------------------------------------------------------------------

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return bindActionCreators({
    onInitModel: initModel,
    onResetModel: resetModel,
    onUpdateTemplateColorAsync: updateTemplateColorAsync,
    onUpdateTemplateColorBatch: updateTemplateColorBatch,
  }, dispatch);
};

const mapStateToProps = (state: BsUiModelState, ownProps: undefined): Partial<TemplateProps> => {
  return {
    color: bsUiModelGetTemplatePropertyColorState(state)
  };
};

export const Template = connect(mapStateToProps, mapDispatchToProps)(TemplateComponent);