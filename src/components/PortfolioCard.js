import React from 'react';
import PropTypes from 'prop-types';
import showdown from 'showdown';

import '../styles/PortfolioCard.scss';
import ButtonIcon from './ButtonIcon';
import { fileDataShape } from '../utils/propTypesShapes';
import { deleteFile } from '../utils/fetch';

const converter = new showdown.Converter();

const _onImageClick = (projectTitle, projectData) => {
  history.push(`/Home/${projectTitle}`, { ...projectData });
};

const _onDelete = project => deleteFile(project, 'portfolio');

const PortfolioCard = ({
  cardData,
  loadModalData,
  loadMarkdownFormData,
  cardData: { coverImgUrl, title, markdownTexts }
}) => (
  <div className="App-PortfolioCard">
    <div
      className="App-PortfolioCard-image-container"
      role="button"
      onClick={() => {
        _onImageClick(title, cardData);
      }}
      onKeyDown={() => {
        _onImageClick(title, cardData);
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
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: converter.makeHtml(markdownTexts.split('<!--more-->')[0])
        }}
      />
    </div>
  </div>
);

PortfolioCard.propTypes = {
  cardData: PropTypes.shape(fileDataShape),
  loadModalData: PropTypes.func,
  loadMarkdownFormData: PropTypes.func
};

PortfolioCard.defaultProps = {
  cardData: {},
  loadModalData: () => {},
  loadMarkdownFormData: () => {}
};

export default PortfolioCard;
