import React from 'react';
import PropTypes from 'prop-types';

import '../styles/PortfolioCard.scss';
import ButtonIcon from './ButtonIcon';
import HtmlParser from './HtmlParser';
import { fileDataShape } from '../utils/propTypesShapes';
import { deleteFile } from '../utils/fetch';

const _onDelete = project => deleteFile(project, 'portfolio');

const PortfolioCard = ({
  cardData,
  loadModalData,
  loadMarkdownFormData,
  loadHtmlParser,
  cardData: { coverImgUrl, title, markdownTexts }
}) => (
  <div className="App-PortfolioCard">
    <div
      className="App-PortfolioCard-image-container"
      role="button"
      onClick={() => {
        loadHtmlParser(markdownTexts);
      }}
      onKeyDown={() => {
        loadHtmlParser(markdownTexts);
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
      <ButtonIcon
        className="action-button"
        callback={() => {
          loadMarkdownFormData({
            isOpen: true,
            action: 'edit',
            type: 'portfolio',
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
            callback: () => _onDelete(cardData),
            message: `Delete ${cardData.title} ?`,
            type: 'danger'
          });
        }}
        iconName="fas fa-trash-alt"
        buttonType="borderless-danger"
      />
      <h3>{title}</h3>
      <HtmlParser htmlParserData={markdownTexts.split('<!--more-->')[0]} />
    </div>
  </div>
);

PortfolioCard.propTypes = {
  cardData: PropTypes.shape(fileDataShape),
  loadModalData: PropTypes.func,
  loadMarkdownFormData: PropTypes.func,
  loadHtmlParser: PropTypes.func
};

PortfolioCard.defaultProps = {
  cardData: {},
  loadModalData: () => {},
  loadMarkdownFormData: () => {},
  loadHtmlParser: () => {}
};

export default PortfolioCard;
