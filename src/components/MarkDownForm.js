import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { publishFile, editFile } from '../utils/fetch';
import ButtonIcon from './ButtonIcon';
import { PORTFOLIO_TYPE, BLOG_TYPE } from '../enums/markdown-form';

class MarkdownForm extends React.Component {
  static propTypes = {
    setAppData: PropTypes.func,
    markdownFormData: PropTypes.shape({
      isOpen: PropTypes.bool,
      type: PropTypes.oneOf([PORTFOLIO_TYPE, BLOG_TYPE]),
      action: PropTypes.string,
      markdownTexts: PropTypes.string,
      order: PropTypes.number,
      date: PropTypes.string,
      coverImgUrl: PropTypes.string,
      title: PropTypes.string,
      _id: PropTypes.string
    }),
    loadMarkdownFormData: PropTypes.func,
    className: PropTypes.string,
    Token: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };

  static defaultProps = {
    setAppData: PropTypes.func,
    className: null,
    markdownFormData: {
      isOpen: false,
      type: PORTFOLIO_TYPE,
      markdownTexts: '',
      title: '',
      order: 0,
      date: '',
      coverImgUrl: '',
      action: '',
      _id: ''
    },
    loadMarkdownFormData: () => {},
    Token: null
  };

  constructor(props) {
    super(props);
    this.state = {
      markDownInput: '',
      markDownTitle: '',
      coverImgUrl: '',
      markDownDisplay: '',
      order: 0,
      isLargeSize: false,
      // eslint-disable-next-line react/no-unused-state
      internaId: ''
    };

    this._onChangeInput = this._onChangeInput.bind(this);
    this._onPublish = this._onPublish.bind(this);
    this._onToggleFormSize = this._onToggleFormSize.bind(this);
    this._onResetMarkdownForm = this._onResetMarkdownForm.bind(this);
    this._closeMarkdownForm = this._closeMarkdownForm.bind(this);
    this._onEditConfirm = this._onEditConfirm.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const {
      isOpen,
      title,
      order,
      date,
      coverImgUrl,
      markdownTexts,
      _id
    } = props.markdownFormData;
    if (_id !== state.internaId && isOpen) {
      return {
        internaId: _id,
        markDownTitle: title,
        markDownInput: markdownTexts,
        order,
        date,
        coverImgUrl,
        _id
      };
    }
    return null;
  }

  _onChangeInput(e, field) {
    const valueToSet = e.target.value;
    if (field === 'order') {
      const numValue = Number(valueToSet);
      this.setState({
        order: numValue
      });
    } else {
      this.setState({
        [field]: valueToSet
      });
    }
  }

  _onPublish() {
    const { markDownInput, markDownTitle, coverImgUrl, order } = this.state;
    if (
      markDownInput.length === 0 ||
      markDownTitle.length === 0 ||
      coverImgUrl.length === 0
    ) {
      this.setState({
        markDownDisplay:
          markDownInput.length === 0
            ? 'There is nothing to stage'
            : `Missing ${markDownTitle.length === 0 ? 'title' : 'image cover'}`
      });
      return;
    }
    publishFile(
      {
        date: new Date(),
        markdownTexts: markDownInput,
        title: markDownTitle,
        coverImgUrl,
        order
      },
      this.props.markdownFormData.type,
      this.props.Token
    )
      .then(res => {
        if (res.portfolio) {
          this.props.setAppData(
            this.props.markdownFormData.type,
            res.portfolio
          );
        }
        this._closeMarkdownForm();
        this._onResetMarkdownForm();
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  }

  _onEditConfirm() {
    const { markDownInput, markDownTitle, coverImgUrl, order } = this.state;
    editFile(
      {
        _id: this.props.markdownFormData._id,
        markdownTexts: markDownInput,
        title: markDownTitle,
        coverImgUrl,
        order
      },
      this.props.markdownFormData.type,
      this.props.Token
    )
      .then(res => {
        if (res.portfolio) {
          this.props.setAppData(
            this.props.markdownFormData.type,
            res.portfolio,
            true
          );
        }
        this._closeMarkdownForm();
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  }

  _closeMarkdownForm() {
    this.props.loadMarkdownFormData({ isOpen: false });
  }

  _onResetMarkdownForm() {
    this.setState({
      markDownInput: '',
      markDownTitle: '',
      coverImgUrl: '',
      order: 0
    });
  }

  _onToggleFormSize() {
    this.setState(prevState => ({ isLargeSize: !prevState.isLargeSize }));
  }

  render() {
    return (
      <div
        className={classnames('App-MarkdownForm', this.props.className, {
          'small-size': this.state.isLargeSize,
          hidden: !this.props.markdownFormData.isOpen
        })}
      >
        <div className="header">
          <ButtonIcon
            className="markdownform-btn"
            callback={this._closeMarkdownForm}
            iconName="fas fa-times"
            iconSize="2x"
          />
          <ButtonIcon
            className="markdownform-btn"
            callback={this._onToggleFormSize}
            iconName={
              this.state.isLargeSize
                ? 'fas fa-expand'
                : 'fas fa-window-minimize'
            }
            iconSize="2x"
          />
          <input
            onChange={e => this._onChangeInput(e, 'markDownTitle')}
            value={this.state.markDownTitle}
            className="header-input"
            placeholder="Title goes here"
          />
          <input
            onChange={e => this._onChangeInput(e, 'coverImgUrl')}
            value={this.state.coverImgUrl}
            className="header-input"
            placeholder="Cover Img url"
          />
          <input
            onChange={e => this._onChangeInput(e, 'order')}
            value={this.state.order}
            type="number"
            className="order-input"
            placeholder="Order (larger number items are first in line)"
          />
          <span className="text-display">{this.state.markDownDisplay}</span>
        </div>
        <textarea
          placeholder="Markdown body"
          onChange={e => this._onChangeInput(e, 'markDownInput')}
          value={this.state.markDownInput}
          className="text-area"
        />
        <div className="button-group">
          <div className="left">
            <ButtonIcon
              callback={
                this.props.markdownFormData.action === 'edit'
                  ? this._onEditConfirm
                  : this._onPublish
              }
              iconName={
                this.props.markdownFormData.action === 'edit'
                  ? 'fas fa-save'
                  : 'fas fa-file-import'
              }
            >
              {this.props.markdownFormData.action === 'edit'
                ? 'Save Edit'
                : 'Publish Post'}
            </ButtonIcon>
          </div>
        </div>
      </div>
    );
  }
}

export default MarkdownForm;
