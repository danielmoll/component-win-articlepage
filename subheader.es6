/* eslint react/no-multi-comp: 0 */
import React, { Component, PropTypes } from 'react';

import { ArticleSubheaderContainer } from '@economist/component-articletemplate/subheader';
import { defaultGenerateClassNameList } from '@economist/component-variantify';

const extendedSubheaderItemClasses = [
  'margin-l-1',
  'gutter-l',
];
export class WifSubheader extends Component {

  static get propTypes() {
    return {
      generateClassNameList: PropTypes.func,
      rubric: PropTypes.string,
      publishDate: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      generateClassNameList: defaultGenerateClassNameList,
    };
  }

  render() {
    const { generateClassNameList, rubric, publishDate } = this.props;
    const formattedPublishDate = new Date(publishDate).toDateString();
    return (
      <ArticleSubheaderContainer generateClassNameList={generateClassNameList}>
        <div
          itemProp="publishDate"
          className={[
            ...generateClassNameList('ArticleTemplate--pubdate'),
            ...extendedSubheaderItemClasses,
          ].join(' ')}
        >
          {formattedPublishDate}
        </div>
        <div
          itemProp="rubric"
          className={[
            ...generateClassNameList('ArticleTemplate--rubric'),
            ...extendedSubheaderItemClasses,
          ].join(' ')}
        >
          {rubric}
        </div>
      </ArticleSubheaderContainer>
    );
  }
}

export class WinSubheader extends Component {

  static get propTypes() {
    return {
      generateClassNameList: PropTypes.func,
      sectionName: PropTypes.string,
      byline: PropTypes.string,
      publishDate: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      generateClassNameList: defaultGenerateClassNameList,
    };
  }

  render() {
    const { generateClassNameList, sectionName, byline, publishDate } = this.props;
    const formattedPublishDate = new Date(publishDate).toDateString();
    return (
      <ArticleSubheaderContainer generateClassNameList={generateClassNameList}>
        <h2
          itemProp="byline"
          className={[
            ...generateClassNameList('ArticleTemplate--byline'),
            ...extendedSubheaderItemClasses,
          ].join(' ')}
        >
          {byline}
        </h2>
        <h2
          itemProp="publishDate"
          className={[
            ...generateClassNameList('ArticleTemplate--pubdate'),
            ...extendedSubheaderItemClasses,
          ].join(' ')}
        >
          {formattedPublishDate}
        </h2>
        <h2
          itemProp="section"
          className={[
            ...generateClassNameList('ArticleTemplate--section-section'),
            ...extendedSubheaderItemClasses,
          ].join(' ')}
        >
          {sectionName}
        </h2>
      </ArticleSubheaderContainer>
    );
  }
}

export class WinLeaderSubheader extends Component {

  static get propTypes() {
    return {
      generateClassNameList: PropTypes.func,
      sectionName: PropTypes.string,
      publishDate: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      generateClassNameList: defaultGenerateClassNameList,
    };
  }

  render() {
    const { generateClassNameList, sectionName, publishDate } = this.props;
    const formattedPublishDate = new Date(publishDate).toDateString();
    return (
      <ArticleSubheaderContainer generateClassNameList={generateClassNameList}>
        <h2
          itemProp="publishDate"
          className={[
            ...generateClassNameList('ArticleTemplate--pubdate'),
            ...extendedSubheaderItemClasses,
          ].join(' ')}
        >
          {formattedPublishDate}
        </h2>
        <h2
          itemProp="section"
          className={[
            ...generateClassNameList('ArticleTemplate--section-section'),
            ...extendedSubheaderItemClasses,
          ].join(' ')}
        >
          {sectionName}
        </h2>
      </ArticleSubheaderContainer>
    );
  }
}

export class WinNumbersSubheader extends Component {
  static get propTypes() {
    return {
      generateClassNameList: PropTypes.func,
      title: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      generateClassNameList: defaultGenerateClassNameList,
    };
  }

  render() {
    const { generateClassNameList, title } = this.props;
    return (
      <ArticleSubheaderContainer generateClassNameList={generateClassNameList}>
        <div
          itemProp="section"
          className={[
            ...generateClassNameList('ArticleTemplate--section-section-wrapper'),
            ...extendedSubheaderItemClasses,
          ].join(' ')}
        >
          <h2
            itemProp="section"
            className={[
              ...generateClassNameList('ArticleTemplate--section-section'),
              ...extendedSubheaderItemClasses,
            ].join(' ')}
          >
            {title}
          </h2>
        </div>
      </ArticleSubheaderContainer>
    );
  }
}

export class WinFiguresSubheader extends Component {
  static get propTypes() {
    return {
      generateClassNameList: PropTypes.func,
      title: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      generateClassNameList: defaultGenerateClassNameList,
    };
  }

  render() {
    const { generateClassNameList, title } = this.props;
    return (
      <ArticleSubheaderContainer generateClassNameList={generateClassNameList}>
        <div
          itemProp="section"
          className={[
            ...generateClassNameList('ArticleTemplate--section-section-wrapper'),
            ...extendedSubheaderItemClasses,
          ].join(' ')}
        >
          <h2
            itemProp="section"
            className={[
              ...generateClassNameList('ArticleTemplate--section-section'),
              ...extendedSubheaderItemClasses,
            ].join(' ')}
          >
            {title}
          </h2>
        </div>
      </ArticleSubheaderContainer>
    );
  }
}
