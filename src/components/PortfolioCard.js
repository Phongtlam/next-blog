import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import ButtonIcon from './buttons/ButtonIcon';
import HtmlParser from './HtmlParser';
import { fileDataShape } from '../utils/propTypesShapes';
import { deleteFile } from '../utils/fetch';
import { PORTFOLIO_TYPE } from '../enums/api-routes';

const _onDelete = (project, token) =>
  deleteFile(project, PORTFOLIO_TYPE, token);

const PortfolioCard = ({
  cardData,
  loadModalData,
  loadMarkdownFormData,
  cardData: { coverImgUrl, title, markdownTexts },
  Token,
  index
}) => (
  <div className="App-PortfolioCard">
    <div
      className="App-PortfolioCard-image-container"
      role="button"
      onClick={() => {
        Router.push(`/Portfolio/Page?index=${index}`);
      }}
      onKeyDown={() => {
        Router.push(`/Portfolio/Page?index=${index}`);
      }}
      tabIndex={0}
    >
      <img className="image" src={coverImgUrl} alt="cover" />
      <ButtonIcon
        callback={() => {}}
        className="button-overlay"
        iconName="fas fa-expand"
        iconSize="5x"
        buttonType="borderless"
      />
    </div>
    <div className="content">
      {Token && (
        <React.Fragment>
          <ButtonIcon
            className="action-button"
            callback={() => {
              loadMarkdownFormData({
                isOpen: true,
                action: 'edit',
                type: PORTFOLIO_TYPE,
                ...cardData
              });
            }}
            iconName="fas fa-edit"
            buttonType="borderless"
          />
          <ButtonIcon
            className="action-button"
            callback={() => {
              loadModalData({
                callback: () => _onDelete(cardData, Token),
                message: `Delete ${cardData.title} ?`,
                type: 'danger'
              });
            }}
            iconName="fas fa-trash-alt"
            buttonType="borderless-danger"
          />
        </React.Fragment>
      )}
      <h3>{title}</h3>
      <HtmlParser htmlParserData={markdownTexts.split('<!--more-->')[0]} />
    </div>
  </div>
);

PortfolioCard.propTypes = {
  cardData: PropTypes.shape(fileDataShape),
  loadModalData: PropTypes.func,
  loadMarkdownFormData: PropTypes.func,
  Token: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  index: PropTypes.number
};

PortfolioCard.defaultProps = {
  cardData: {},
  loadModalData: () => {},
  loadMarkdownFormData: () => {},
  Token: null,
  index: null
};

export default PortfolioCard;
