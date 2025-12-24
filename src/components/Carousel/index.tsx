import Carousel, { CarouselProps } from 'nuka-carousel';
import { injectGlobal } from '@emotion/css';
import * as React from 'react';

export const injectCarouselStyles = () => {
  return injectGlobal`
  .moly-carousel {

    .slider-container {
      padding-bottom: 24px;
    }

    .slider-list {
      padding: 0 16px;
    }

    .slide-list {
      top: 0 !important;
      background-color: #E9EDF2;
      border-radius: 4px;
    }

    .paging-dot {
      display: none;
    }

    .paging-item {
      &.active {
        background-image: url(https://fh-static.bycsi.com/current-0481539629367b41a0a52012f9bd668e.svg) !important;
      }
    }

    .leftIcon {
      width: 24px;
      height: 24px;
      background-image: url(https://fh-static.bycsi.com/left-286d9e5551e9c7ef50e7b67924876ade.svg);
    }

    .rightIcon {
      width: 24px;
      height: 24px;
      background-image: url(https://fh-static.bycsi.com/right-b247d13941608da2d343139cd4846ae6.svg);
    }
  }
`;
};

injectCarouselStyles();

const MolyCarousel: React.FC<CarouselProps> = (props) => {
  const defaultProps: Partial<CarouselProps> = {
    cellAlign: 'left',
    cellSpacing: 32,
    slidesToShow: 3,
    defaultControlsConfig: {
      pagingDotsContainerClassName: 'slide-list',
      pagingDotsStyle: {
        width: 16,
        height: 4,
      },
    },
    renderCenterLeftControls: ({ previousSlide }: { previousSlide: () => void }) => (
      <div className="leftIcon" onClick={previousSlide} />
    ),
    renderCenterRightControls: ({ nextSlide }: { nextSlide: () => void }) => (
      <div className="rightIcon" onClick={nextSlide} />
    ),
  };

  return (
    <div className="moly-carousel">
      <Carousel {...defaultProps} {...props} />
    </div>
  );
};

export default MolyCarousel;
