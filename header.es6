/* eslint react/no-multi-comp: 0, one-var: 0 */
/* global window */
import React, { Component, PropTypes } from 'react';
import codify from 'slugger';
import { defaultGenerateClassNameList } from '@economist/component-variantify';
import { isImage } from '@economist/component-articletemplate/proptypes';
import Picture from '@economist/component-picture';

import { ArticleHeaderContainer, ImageContainer } from '@economist/component-articletemplate/header';

const extendedHeaderItemClasses = [
  'gutter-l',
];
export class WinHeader extends Component {

  static get propTypes() {
    return {
      generateClassNameList: PropTypes.func,
      mainImage: PropTypes.shape(Picture.propTypes || {}),
      flytitle: PropTypes.string,
      title: PropTypes.string,
      rubric: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      generateClassNameList: defaultGenerateClassNameList,
    };
  }

  render() {
    const { generateClassNameList, mainImage, flytitle, title, rubric } = this.props;

    let flytitleEl = null, titleEl = null, rubricEl = null, mainImageEl = null;
    if (flytitle) {
      flytitleEl = (
        <h1
          itemProp="headline"
          className={[
            ...generateClassNameList('ArticleTemplate--flytitle'),
            ...extendedHeaderItemClasses,
          ].join(' ')}
        >
          {flytitle}
        </h1>
      );
    }
    if (title) {
      titleEl = (
        <h1
          itemProp="alternativeHeadline"
          className={[
            ...generateClassNameList('ArticleTemplate--title'),
            ...extendedHeaderItemClasses,
          ].join(' ')}
        >
          {title}
        </h1>
      );
    }
    if (rubric) {
      rubricEl = (
        <h3
          itemProp="rubric"
          className={[
            ...generateClassNameList('ArticleTemplate--rubric'),
            ...extendedHeaderItemClasses,
          ].join(' ')}
        >
          {rubric}
        </h3>
      );
    }
    if (mainImage) {
      mainImageEl = (
        <Picture
          className={generateClassNameList('ArticleTemplate--image').join(' ')}
          itemProp="image"
          {...mainImage}
        />
      );
    }

    return (
      <ImageContainer generateClassNameList={generateClassNameList}>
        {mainImageEl}

        <ArticleHeaderContainer generateClassNameList={generateClassNameList}>
          {flytitleEl}
          {titleEl}
          {rubricEl}
        </ArticleHeaderContainer>
      </ImageContainer>
    );
  }
}

export class WifHeader extends Component {

  static get propTypes() {
    return {
      generateClassNameList: PropTypes.func,
      mainImage: PropTypes.shape(Picture.propTypes || {}),
      sectionName: PropTypes.string,
      flytitle: PropTypes.string,
      title: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      generateClassNameList: defaultGenerateClassNameList,
    };
  }

  render() {
    const { generateClassNameList, mainImage, flytitle, title, sectionName } = this.props;
    let flytitleEl = null;
    let titleEl = null;
    let mainImageEl = null;
    let sectionNameEl = null;
    if (sectionName) {
      sectionNameEl = (
        <div
          itemProp="section"
          className={[
            ...generateClassNameList('ArticleTemplate--section-section'),
            ...extendedHeaderItemClasses,
          ].join(' ')}
        >
          {sectionName}
        </div>
      );
    }

    if (flytitle) {
      flytitleEl = (
        <div
          itemProp="headline"
          aria-hidden="true"
          className={[
            ...generateClassNameList('ArticleTemplate--flytitle'),
            ...extendedHeaderItemClasses,
          ].join(' ')}
        >
          {flytitle}
        </div>
      );
    }

    if (title) {
      titleEl = (
        <h1
          itemProp="alternativeHeadline"
          aria-label={`${flytitle} ${title}`}
          className={[
            ...generateClassNameList('ArticleTemplate--title'),
            ...extendedHeaderItemClasses,
          ].join(' ')}
        >
          {title}
        </h1>
      );
    }

    if (mainImage) {
      mainImageEl = (
        <Picture
          className={generateClassNameList('ArticleTemplate--image').join(' ')}
          itemProp="image"
          {...mainImage}
        />
      );
    }

    return (
      <ImageContainer generateClassNameList={generateClassNameList}>
        {mainImageEl}
        <ArticleHeaderContainer generateClassNameList={generateClassNameList}>
          {sectionNameEl}
          {flytitleEl}
          {titleEl}
        </ArticleHeaderContainer>
      </ImageContainer>
    );
  }
}

export class WinPredictorsHeader extends Component {

  static get propTypes() {
    return {
      generateClassNameList: PropTypes.func,
      mainImage: isImage,
      flytitle: PropTypes.string,
      title: PropTypes.string,
      rubric: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      generateClassNameList: defaultGenerateClassNameList,
    };
  }

  render() {
    const { generateClassNameList, mainImage, flytitle, title, rubric } = this.props;

    let flytitleEl = null, titleEl = null, rubricEl = null, mainImageEl = null;
    if (flytitle) {
      flytitleEl = (
        <h1
          itemProp="headline"
          className={[
            ...generateClassNameList('ArticleTemplate--flytitle'),
            ...extendedHeaderItemClasses,
          ].join(' ')}
        >
          {flytitle}
        </h1>
      );
    }
    if (title) {
      titleEl = (
        <h1
          itemProp="alternativeHeadline"
          className={[
            ...generateClassNameList('ArticleTemplate--title'),
            ...extendedHeaderItemClasses,
          ].join(' ')}
        >
          {title}
        </h1>
      );
    }
    if (rubric) {
      rubricEl = (
        <h3
          itemProp="rubric"
          className={[
            ...generateClassNameList('ArticleTemplate--rubric'),
            ...extendedHeaderItemClasses,
          ].join(' ')}
        >
          {rubric}
        </h3>
      );
    }
    if (mainImage) {
      mainImageEl = (
        <ImageContainer generateClassNameList={generateClassNameList}>
          <Picture
            className={generateClassNameList('ArticleTemplate--image').join(' ')}
            itemProp="image"
            {...mainImage}
          />
        </ImageContainer>
      );
    }

    return (
      <ArticleHeaderContainer generateClassNameList={generateClassNameList}>
        {flytitleEl}
        {titleEl}
        {rubricEl}
        {mainImageEl}
      </ArticleHeaderContainer>
    );
  }
}

export class WinNumbersHeader extends Component {
  static propTypes = {
    generateClassNameList: PropTypes.func,
    content: PropTypes.array,
    title: PropTypes.string,
  }

  static defaultProps = {
    generateClassNameList: defaultGenerateClassNameList,
  }

  constructor() {
    super(...arguments);
    this.generateCountries = this.generateCountries.bind(this);
    this.generateCountryElement = this.generateCountryElement.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
    this.state = {
      value: 'select',
    };
  }

  scrollTo(target) {
    /* eslint-env browser */
    const element = document.querySelector(`a[name=${target}]`);
    const top = Math.floor(element.getBoundingClientRect().top - 100);
    window.scrollTo(0, top);
  }

  handleChange(event) {
    if (!event && !event.target) {
      return;
    }

    const target = event.target.value.replace('#', '');
    this.scrollTo(target);
    this.setState({ selectValue: target });
  }

  generateCountries() {
    let { content } = this.props;
    const countries = [];
    content = content || [];
    content.map((item) => {
      if (item.component && item.component === 'Country') {
        countries.push({
          name: item.props.title,
          slug: codify(item.props.title, { decode: false }),
        });
      }
    });
    return countries;
  }

  generateCountryItem(country, index) {
    return (
      <option value={`#${country.slug}`} key={`country-item-${index}`} className="countries__option">
        {country.name}
      </option>
    );
  }

  generateCountryElement() {
    const countries = this.generateCountries();
    return (
      <select className="countries__select" value={this.state.selectValue} onChange={this.handleChange}>
        <option value="select">Select a country...</option>
        {countries.map((country, index) => {
          return this.generateCountryItem(country, index);
        })}
      </select>
    );
  }

  render() {
    const { generateClassNameList, title } = this.props;
    const countryElementList = this.generateCountryElement();
    const titleEl = (
      <div>
        <h1
          itemProp="alternativeHeadline"
          className={[
            ...generateClassNameList('ArticleTemplate--title'),
            ...extendedHeaderItemClasses,
          ].join(' ')}
        >
          <span
            className={[
              ...generateClassNameList('ArticleTemplate--title-uppercase'),
              ...extendedHeaderItemClasses,
            ].join(' ')}
          >World In Numbers</span> Countries
        </h1>
        <div
          className={[
            ...generateClassNameList('ArticleTemplate--title-strap'),
            ...extendedHeaderItemClasses,
          ].join(' ')}
        >
          Our 2016 forecasts for {title}.
        </div>

        {countryElementList}
      </div>
    );
    return (
      <ArticleHeaderContainer generateClassNameList={generateClassNameList}>
        {titleEl}
      </ArticleHeaderContainer>
    );
  }
}

export class WinIndustriesHeader extends Component {
  static get propTypes() {
    return {
      generateClassNameList: PropTypes.func,
      content: PropTypes.array,
      title: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      generateClassNameList: defaultGenerateClassNameList,
    };
  }

  constructor() {
    super(...arguments);
    this.generateIndustries = this.generateIndustries.bind(this);
    this.generateIndustryElement = this.generateIndustryElement.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
    this.state = {
      value: 'select',
    };
  }

  scrollTo(target) {
    /* eslint-env browser */
    const element = document.querySelector(`a[name=${target}]`);
    const top = Math.floor(element.getBoundingClientRect().top - 100);
    window.scrollTo(0, top);
  }

  handleChange(event) {
    if (!event && !event.target) {
      return;
    }

    const target = event.target.value.replace('#', '');
    this.scrollTo(target);
    this.setState({ selectValue: target });
  }

  generateIndustries() {
    let { content } = this.props;
    const industries = [];
    content = content || [];
    content.map((item) => {
      if (item.component && item.component === 'Industry') {
        industries.push({
          name: item.props.title,
          slug: codify(item.props.title, { decode: false }),
        });
      }
    });
    return industries;
  }

  generateIndustryItem(industry, index) {
    return (
      <option value={`#${industry.slug}`} key={`industry-item-${index}`} className="industry__option">
        {industry.name}
      </option>
    );
  }

  generateIndustryElement() {
    const industries = this.generateIndustries();
    return (
      <select className="industry__select" value={this.state.selectValue} onChange={this.handleChange}>
        <option value="select">Select an industry...</option>
        {industries.map((industry, index) => {
          return this.generateIndustryItem(industry, index);
        })}
      </select>
    );
  }

  render() {
    const { generateClassNameList } = this.props;
    const industryElementList = this.generateIndustryElement();
    const titleEl = (
      <div>
        <h1
          itemProp="alternativeHeadline"
          className={[
            ...generateClassNameList('ArticleTemplate--title'),
            ...extendedHeaderItemClasses,
          ].join(' ')}
        >
          <span
            className={[
              ...generateClassNameList('ArticleTemplate--title-uppercase'),
              ...extendedHeaderItemClasses,
            ].join(' ')}
          >World In Numbers</span> Industries
        </h1>
        <div
          className={[
            ...generateClassNameList('ArticleTemplate--title-strap'),
            ...extendedHeaderItemClasses,
          ].join(' ')}
        >
          Our 2016 forecasts for Industries.
        </div>

        {industryElementList}
      </div>
    );
    return (
      <ArticleHeaderContainer generateClassNameList={generateClassNameList}>
        {titleEl}
      </ArticleHeaderContainer>
    );
  }
}
